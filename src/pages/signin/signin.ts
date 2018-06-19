import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  nome: string;
  email: string;
  senha: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  cadastrar(){
    this.usuario.adicionarUsuario(this.nome, this.email, this.senha)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.setRoot(HomePage);
          },
          error => console.log(error)
        );                            
  }

}
