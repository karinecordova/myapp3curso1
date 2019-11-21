import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SlidesPage } from '../slides/slides';
import { GridsPage } from '../grids/grids';
import { ToastPage } from '../toast/toast';
import { SegmentsPage } from '../segments/segments';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPageHome(){ 
    this.navCtrl.push(HomePage);
  }
  openPageGrids(){ 
    this.navCtrl.push(GridsPage);
 }
 openPageToast(){ 
   this.navCtrl.push(ToastPage);
 }
openPageSegments(){ 
  this.navCtrl.push(SegmentsPage);
}
openPageSlides(){ 
  this.navCtrl.push(SlidesPage);
}

}
