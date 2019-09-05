import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage/public_api';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Network } from '@ionic-native/network/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    //Essa parte é referente a salvar os dados offline
    AngularFirestoreModule.enablePersistence({
      experimentalTabSynchronization: true
    }),
    AngularFireStorageModule
  ],
  exports: [BrowserModule, IonicModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    Network,
    LocalNotifications
  ]
})
export class CoreModule {}
