import { UsuarioProvider } from './../../providers/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PostarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postar',
  templateUrl: 'postar.html',
})
export class PostarPage {
  texto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostarPage');
  }

  postar(){
    this.usuario.criarPost(this.texto)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.setRoot(HomePage);
          },
          error => console.log(error)
        );                            
  }

}
