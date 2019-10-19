import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AssistenteCadastro } from './assistenteCadastro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssistenteCadastroService {
  private todosCollection: AngularFirestoreCollection<AssistenteCadastro>;

  constructor(db: AngularFirestore) {


    this.todosCollection = db.collection<AssistenteCadastro>('AssistenteCadastro');
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
    return this.todosCollection.doc<AssistenteCadastro>(id).valueChanges();
  }

  updateTodo(toda: AssistenteCadastro, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: AssistenteCadastro) {
    return this.todosCollection.add(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
