import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ProfissionalConteudoVideo } from './profissionalConteudoVideo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalConteudoVideoService {
  private todosCollection: AngularFirestoreCollection<ProfissionalConteudoVideo>;

  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<ProfissionalConteudoVideo>('ProfissionalConteudoVideo'); // Criando a coleção
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

  getTodosPorID(idUsuario: string) {
    return this.db
      .collection<ProfissionalConteudoVideo>('ProfissionalConteudoVideo', ref =>
        ref.where('idUsuario', '==', idUsuario).orderBy('createAt', 'desc')
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



  getTodosPoAvaliacao(avaliacao: number, idade: string) {
    return this.db
      .collection<ProfissionalConteudoVideo>('ProfissionalConteudoVideo', ref =>
        ref.where('avaliacao', '==', avaliacao).where('idade', '==', idade).orderBy('createAt', 'desc')
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

  getTodosPorIdade(idade: string) {
    return this.db
      .collection<ProfissionalConteudoVideo>('ProfissionalConteudoVideo', ref =>
        ref.where('idade', '==', idade).orderBy('createAt', 'desc')
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
    return this.todosCollection.doc<ProfissionalConteudoVideo>(id).valueChanges();
  }

  updateTodo(toda: ProfissionalConteudoVideo, id: string) {
    toda.createAt = new Date().getTime();
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: ProfissionalConteudoVideo) {
    toda.createAt = new Date().getTime();
    return this.todosCollection.add(toda);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
