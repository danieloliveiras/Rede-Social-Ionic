import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/usuario';
import { TimelinePage } from '../timeline/timeline';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  senha: string;

  constructor(public usuario: UsuarioProvider, public navCtrl: NavController) {

  }

  signin(){
    this.navCtrl.setRoot(SigninPage);
  }

  // timeline(){
  //   this.navCtrl.setRoot(TimelinePage);
  // }

  login(){
    this.usuario.logar(this.email, this.senha)
      .subscribe(
        data =>{
          console.log(data);
          this.navCtrl.setRoot(TimelinePage);
        },
        error =>{
          console.log(error);
        }
      )
  }


}
