import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { QueroConversar } from './queroConversar';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueroConversarService {
  private todosCollection: AngularFirestoreCollection<QueroConversar>;

  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<QueroConversar>('QueroConversar'); // Criando a coleção
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
    return this.todosCollection.doc<QueroConversar>(id).valueChanges();
  }

  updateTodo(toda: QueroConversar, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: QueroConversar, idUsuario: string) {
    return this.todosCollection.doc(idUsuario).set(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
