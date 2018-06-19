import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostarPage } from './postar';

@NgModule({
  declarations: [
    PostarPage,
  ],
  imports: [
    IonicPageModule.forChild(PostarPage),
  ],
})
export class PostarPageModule {}
