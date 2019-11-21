import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GridsPage } from '../pages/grids/grids';
import {SegmentsPage } from '../pages/segments/segments';
import {SlidesPage } from '../pages/slides/slides';
import {ToastPage } from '../pages/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    GridsPage,
    SegmentsPage,
    SlidesPage,
    ToastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    GridsPage,
    SegmentsPage,
    SlidesPage,
    ToastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
