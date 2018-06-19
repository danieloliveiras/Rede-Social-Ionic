import { UsuarioProvider } from './../../providers/usuario';
import { PostarPage } from './../postar/postar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  user: any;
  posts: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public usuario: UsuarioProvider) {
    this.logado();
    this.getPosts()
  }

  logout(){
    this.usuario.logout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  presentPopover() {
    const popover = this.popoverCtrl.create(PostarPage);
    popover.present();
  }

  logado(){
    this.usuario.getLogado()
    .subscribe(
      data=>{
        this.user = data;
        console.log(this.user);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getPosts(){
    this.usuario.getPosts()
    .subscribe(
      data=>{
        this.posts = data;
        console.log(this.posts);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
