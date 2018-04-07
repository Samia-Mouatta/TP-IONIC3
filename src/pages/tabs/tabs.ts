import { Component } from '@angular/core';

import { WallStreetPage } from '../wallstreet/wallstreet';
import { TechCrunchPage } from '../techcrunch/techcrunch';
import { ApplePage } from '../apple/apple';
import { BitcoinPage } from '../bitcoin/bitcoin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ApplePage;
  tab2Root = WallStreetPage;
  tab3Root = TechCrunchPage;
  tab4Root = BitcoinPage;
  constructor() {

  }
}
