/* TODO: Refactor Firebase Functions @critical */

import * as functions from 'firebase-functions';
import { initializeApp } from './modules/init';
import { sendEmail, MailOptions } from './modules/mail';
import { handleScheduledNewsletter } from './modules/newsletter';

// HTML Templates
import { WELCOME_TEMPLATE } from './templates/subscriber.template';

// Init Firebase then return admin auth credentials
const { admin } = initializeApp();



// Company name to include in the emails
const APP_NAME = 'Steph Loughman | Author';

/**
 * method for scheduling subscribers newsletter email
 */
const newsletterConfig = {
  newsletterId: '004',
  schedule: '1 of month 02:00',
  collection: 'subscribers',
  mailOptions: {
    from: `"Steph Loughman | Author" hello@stephloughman.com`,
    subject: 'Steph Loughman | Author October Newsletter',
  }
}
exports.scheduleNewsletter = handleScheduledNewsletter(admin, newsletterConfig);

/**
 * method for sending welcome email to subscriber
 */
exports.sendSubscriberWelcome = functions.firestore
  .document(`subscribers/{subscriberId}`)
  .onCreate((snap, context) => {
    let user: any;
    if (snap.exists) {
      user = snap.data();
      return sendSubscriberWelcomeEmail(user.email)
        .catch(err => console.log('error subscribing user', err));
    } else {
      return null;
    }
  });

async function sendSubscriberWelcomeEmail(email: string) {
  const mailOptions: MailOptions = {
    from: `"Steph Loughman | Author" hello@stephloughman.com`,
    to: email,
    subject: `Thanks for subscribing to the ${APP_NAME} newsletter!`,
    html: WELCOME_TEMPLATE
  };

  // The user subscribed to updates and the newsletter, send welcome email to user.
  await sendEmail(mailOptions);
  return null;
}

/* async function sendNewsletter(email: string, newsletterId: string) {
  const mailOptions = {
    from: `"Steph Loughman | Author" hello@stephloughman.com`,
    to: email,
    subject: `Steph Loughman | Author Newsletter!`,
    html: NEWSLETTER_001
  };
  await sendEmail(mailOptions);
  return null;
} */

exports.sendNewContactEmail = functions.firestore
  .document(`contacts/{contactId}`)
  .onCreate((snap, context) => {
    const resource = context.resource;
    const contact: any = snap.data();
    if (snap.exists) {
      return sendWelcomeToContact(
        contact.email,
        contact.name,
        /* contact.subject,
        contact.message,
        contact.timestamp */
      ).then(res => console.log(res))
        .catch(err => console.log('error adding contact', err));
    } else {
      console.log(`failed to send contact email on ${resource}`, snap, context);
      return null;
    }
  });

// Sends a welcome email to the new contact.
async function sendWelcomeToContact(
  email?: string,
  displayName?: string,
  /* subject?: string,
  message?: string,
  timestamp?: any */
) {
  const mailOptions: MailOptions = {
    from: `"Steph Loughman | Author" hello@stephloughman.com`,
    to: email
  };

  // The user sent a contact form.
  mailOptions.subject = `Thanks for contacting ${APP_NAME}!`;
  mailOptions.text = `Hey! Thanks for contacting me, ${displayName}! New and existing readers are why I love writing. Knowing that my stories have an impact on those who read them has such a profound effect on me. As an author, I simply write from my heart, and because of my faith, the words pour out of me, and I know this is God's love, filling me up and overflowing. I feel convicted to share this experience, and all the others with you, so that you too can feel His love.\n\n\n`;
  await sendEmail(mailOptions);
  console.log('New contact email sent to:', email);
  return null;
}

exports.sendNewEventRequestEmail = functions.firestore
  .document(`event-requests/{requestId}`)
  .onCreate((snap, context) => {
    const resource = context.resource;
    const request: any = snap.data();
    if (snap.exists) {
      return sendRequestResponse(
        request.email,
        request.name,
        request.title,
      ).then(res => console.log(res))
        .catch(err => console.log('error adding contact', err));
    } else {
      console.log(`failed to send contact email on ${resource}`, snap, context);
      return null;
    }
  });

// Sends a welcome email to the new contact.
async function sendRequestResponse(
  email?: string,
  displayName?: string,
  title?: string
) {
  const mailOptions: MailOptions = {
    from: `"Steph Loughman | Author" hello@stephloughman.com`,
    to: email
  };

  // The user sent a contact form.
  mailOptions.subject = `Thanks for contacting ${APP_NAME}!`;
  mailOptions.text = `Hey! Thanks for the heads-up about ${title}, ${displayName}! The Steph Loughman support team will review your event, then if we decide to proceed, we will notify you to set up a call to discuss the details.\n\n\nThanks again for supporting Steph Loughman, and we hope to talk soon!`;
  await sendEmail(mailOptions);
  console.log('New event-request response email sent to:', email);
  return null;
}
