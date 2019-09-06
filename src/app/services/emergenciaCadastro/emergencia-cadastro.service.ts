import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EmergenciaCadastro } from './emergenciaCadastro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmergenciaCadastroService {
  private todosCollection: AngularFirestoreCollection<EmergenciaCadastro>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<EmergenciaCadastro>('EmergenciaCadastro');
  }

  getTodos() {
    return this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTodo(id) {
    return this.todosCollection.doc<EmergenciaCadastro>(id).valueChanges();
  }

  updateTodo(toda: EmergenciaCadastro, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: EmergenciaCadastro) {
    return this.todosCollection.add(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
