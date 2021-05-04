import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Book } from '../../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksCollection: AngularFirestoreCollection<Book>;
  constructor(private afs: AngularFirestore) {
    this.booksCollection = afs.collection<Book>('books');
  }

  getAllBooks() {
    return this.booksCollection.valueChanges({idField: true});
  }

  getBookByTitle(bookTitle: string) {
    return this.afs.collection('books', ref => ref.where('title', '==', bookTitle)).valueChanges({idFeild: true}).pipe(map(books => books[0]))
  }
  addBook(id: string, data: Book) {
    this.afs.collection('books').doc(id).set(data)
      .then(success => {
        console.log('successfully added a new book', success);
      })
      .catch(error => {
        console.log('ERROR! Failed to add new book to collection', error);
      });
  }
}
