import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EmergenciaCadastro } from './emergenciaCadastro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmergenciaCadastroService {
  private todosCollection: AngularFirestoreCollection<EmergenciaCadastro>;

  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<EmergenciaCadastro>('EmergenciaCadastro');
  }

  getTodos(idUsuario: string) {
    return this.db.collection<EmergenciaCadastro>('EmergenciaCadastro', ref => ref.where('idUsuario', '==', idUsuario)).snapshotChanges().pipe(
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
    return this.todosCollection.doc<EmergenciaCadastro>(id).valueChanges();
  }

  updateTodo(toda: EmergenciaCadastro, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }


  addTodo(toda: EmergenciaCadastro, idUsuario: string) {
    return this.todosCollection.doc(idUsuario).set(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
