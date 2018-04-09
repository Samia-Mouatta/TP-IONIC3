import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'list-bitcoin',
  templateUrl: 'bitcoin.html'
})
export class BitcoinPage {

  actus: any[] = [];
  
  constructor(public navCtrl: NavController, public rest:RestProvider) {

  }

  ionViewDidLoad(){

    this.rest.getBitcoinActualities()
    .subscribe(

      (data) => {
        this.actus = data['articles'];
        },
        (error) => {
          console.error(error);
        }

    )

  }

    itemClick(item){

    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  
  }


}
