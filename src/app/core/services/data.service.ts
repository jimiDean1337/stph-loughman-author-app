import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contact } from '../../interface/contact';
import { Subscriber } from '../../interface/subscriber';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contactsCollection: AngularFirestoreCollection<Contact>
  subscribersCollection: AngularFirestoreCollection<Subscriber>
  constructor(private afs: AngularFirestore) {
    this.contactsCollection = this.afs.collection<Contact>('contacts');
    this.subscribersCollection = this.afs.collection<Subscriber>('subscribers');
  }

  addContact(data: Contact) {
    return this.contactsCollection.add(data);
  }

  addSubscriber(data: Subscriber) {
    return this.subscribersCollection.add(data);
  }
}
