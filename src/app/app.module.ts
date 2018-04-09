import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WallStreetPage } from '../pages/wallstreet/wallstreet';
import { BitcoinPage } from '../pages/bitcoin/bitcoin';
import { TechCrunchPage } from '../pages/techcrunch/techcrunch';
import { ApplePage } from '../pages/apple/apple';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    WallStreetPage,
    BitcoinPage,
    TechCrunchPage,
    ApplePage,
    ItemDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WallStreetPage,
    BitcoinPage,
    TechCrunchPage,
    ApplePage,
    ItemDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
