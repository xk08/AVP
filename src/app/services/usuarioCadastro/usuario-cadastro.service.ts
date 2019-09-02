import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { UsuarioCadastro } from './usuarioCadastro';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCadastroService {
  private todosCollection: AngularFirestoreCollection<UsuarioCadastro>;
  private todosUsuarios: Observable<UsuarioCadastro[]>;

  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.todosCollection = db.collection<UsuarioCadastro>('UsuarioCadastro');

    this.todosUsuarios = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const uid = a.payload.doc.id;
          return { uid, ...data };
        });
      })
    );
  }

  getUsuarios() {
    return this.todosUsuarios;
  }

  getUsuario(id) {
    return this.todosCollection.doc<UsuarioCadastro>(id).valueChanges();
  }

  updateUsuarioTodo(toda: UsuarioCadastro, id: string) {
    return this.todosCollection.doc<UsuarioCadastro>(id).update(toda);
  }

  updateUsuarioAdmin(id: string, valor: boolean) {
    return this.todosCollection.doc<UsuarioCadastro>(id).update({ isAdmin: valor });
  }

  updateUsuarioAtivo(id: string, valor: boolean) {
    return this.todosCollection.doc<UsuarioCadastro>(id).update({ isAtivo: valor });
  }

  updateUsuarioProfissional(id: string, valor: boolean) {
    return this.todosCollection.doc<UsuarioCadastro>(id).update({ isProfissional: valor });
  }

  //FUNÇÃO PARA CADASTRAR NOVO USUARIO
  async addUsuarioTodo(dataUser: UsuarioCadastro) {
    //CADASTRA USUARIO NO AUTHENTICATION
    const newUser = await this.authService.createUser(dataUser.email, dataUser.senha);

    //EXLUI A SENHA E O EMAIL, PARA NÃO IR A DATABASE
    delete dataUser.senha;
    // delete dataUser.email;

    dataUser.foto =
      'https://firebasestorage.googleapis.com/v0/b/primeirobanco-8d1a9.appspot.com/o/User.png?alt=media&token=78d69205-4005-4f3b-8925-10439a145ffa';

    //ADICIONA O RETANTES DOS DADOS DO USUARIO NO DATABASE
    this.db
      .collection('UsuarioCadastro')
      .doc(newUser.user.uid)
      .set(dataUser);
    return;
  }

  removeUsuarioTodo(id) {
    return this.todosCollection.doc(id).delete();
  }

  // Não sei oq essa pohha ta fazendo
  getUsuarioPorid(categoria: String) {
    return this.db
      .collection('UsuarioCadastro', ref => ref.where('idCategoria', '==', categoria))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            console.log(data);
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  getUsuarioUmPorUm(id) {
    return this.todosCollection
      .doc<UsuarioCadastro>(id)
      .snapshotChanges()
      .pipe(
        map(a => {
          const data = a.payload.data();
          console.log(data);
          const id = a.payload.id;
          return { id, ...data };
        })
      );
  }
}
