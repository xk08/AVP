import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AssistenteCadastro } from './assistenteCadastro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssistenteCadastroService {
  private todosCollection: AngularFirestoreCollection<AssistenteCadastro>;

  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<AssistenteCadastro>('AssistenteCadastro');
  }

  getTodos(idUsuario: string) {
    return this.db
      .collection<AssistenteCadastro>('AssistenteCadastro', ref =>
        ref.where('idUsuario', '==', idUsuario)
      )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log(id);
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

  addTodo(toda: AssistenteCadastro, idUsuario: string) {
    return this.todosCollection.doc(idUsuario).set(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
