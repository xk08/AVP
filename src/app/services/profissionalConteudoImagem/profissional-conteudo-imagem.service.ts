import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ProfissionalConteudoImagem } from './profissionalConteudoImagem';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalConteudoImagemService {
  private todosCollection: AngularFirestoreCollection<ProfissionalConteudoImagem>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<ProfissionalConteudoImagem>('ProfissionalConteudoImagem'); // Criando a coleção
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
    return this.todosCollection.doc<ProfissionalConteudoImagem>(id).valueChanges();
  }

  updateTodo(toda: ProfissionalConteudoImagem, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: ProfissionalConteudoImagem) {
    return this.todosCollection.add(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
