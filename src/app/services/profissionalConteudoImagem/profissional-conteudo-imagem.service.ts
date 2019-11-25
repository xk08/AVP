import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ProfissionalConteudoImagem } from './profissionalConteudoImagem';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalConteudoImagemService {
  private todosCollection: AngularFirestoreCollection<ProfissionalConteudoImagem>;

  constructor(private db: AngularFirestore) {
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

  getTodosPorID(idUsuario: string) {
    return this.db
      .collection<ProfissionalConteudoImagem>('ProfissionalConteudoImagem', ref =>
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

  //Pegando de acordo com a avaliação do "quero-conversar"
  getTodosPoAvaliacao(avaliacao: number, idade: string) {
    return this.db
      .collection<ProfissionalConteudoImagem>('ProfissionalConteudoImagem', ref =>
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
      .collection<ProfissionalConteudoImagem>('ProfissionalConteudoImagem', ref =>
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
    return this.todosCollection.doc<ProfissionalConteudoImagem>(id).valueChanges();
  }

  updateTodo(toda: ProfissionalConteudoImagem, id: string) {
    toda.createAt = new Date().getTime();
    return this.todosCollection.doc(id).update(toda);
  }

  addTodo(toda: ProfissionalConteudoImagem) {
    toda.createAt = new Date().getTime();
    return this.todosCollection.add(toda);
  }

  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}
