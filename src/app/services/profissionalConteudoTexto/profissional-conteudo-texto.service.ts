import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ProfissionalConteudoTexto } from './profissionalConteudoTexto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalConteudoTextoService {
  private todosCollection: AngularFirestoreCollection<ProfissionalConteudoTexto>;

  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<ProfissionalConteudoTexto>('ProfissionalConteudoTexto'); // Criando a coleção
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

  getTodosPoAvaliacao(avaliacao: number) {
    return this.db
      .collection<ProfissionalConteudoTexto>('ProfissionalConteudoTexto', ref =>
        ref.where('avaliacao', '==', avaliacao)
      )
      .snapshotChanges()
      .pipe(
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
    return this.todosCollection.doc<ProfissionalConteudoTexto>(id).valueChanges();
  }

  updateTodo(toda: ProfissionalConteudoTexto, id: string) {
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: ProfissionalConteudoTexto) {
    return this.todosCollection.add(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
