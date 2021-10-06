import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthorEvent } from 'src/app/interface/event';
import { EventRequest } from 'src/app/interface/event-request';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsCollection: AngularFirestoreCollection<AuthorEvent>;
  constructor(private afs: AngularFirestore) {
    this.eventsCollection = this.afs.collection<AuthorEvent>('events');
  }

  addEvent(id: string, data: AuthorEvent) {
    return this.afs.collection<AuthorEvent>('events').doc(id).set(data);
  }

  addEventRequest(data: EventRequest) {
    return this.afs.collection<EventRequest>('event-requests').add(data);
  }

  getAllEvents() {
    return this.eventsCollection.valueChanges({ idField: true });
      /* .pipe(map(events => events.filter((event: AuthorEvent) => event.hasEnded !== true))); */
  }

  getEventByTitle(eventTitle: string) {
    return this.afs.collection<AuthorEvent>('events', ref => ref.where('title', '==', eventTitle)).valueChanges({idField: true});
  }
}
