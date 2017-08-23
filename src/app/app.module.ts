import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MovieCardComponent } from '../components/movie-card/movie-card';
import { Api } from '../providers/api';
import { Http2Factory } from '../providers/http2-factory';
import { HttpModule } from '@angular/http';
import { MovieInfoClick } from '../directives/movie-info-click';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieMetadataPage } from '../pages/movie-metadata/movie-metadata';
import { MovieMetadataClick } from '../directives/movie-metadata-click';

@NgModule({
  declarations: [
    MyApp,

    //pages
    HomePage,
    ListPage,
    MovieInfoPage,
    MovieMetadataPage,

    //components
    MovieCardComponent,

    //directives
    MovieInfoClick,
    MovieMetadataClick
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MovieInfoPage,
    MovieMetadataPage
  ],
  providers: [
    Api,
    Http2Factory,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
