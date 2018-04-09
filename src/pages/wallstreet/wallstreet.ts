import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-wallStreet',
  templateUrl: 'wallstreet.html'
})
export class WallStreetPage {

  actus: any[] = [];
  
  constructor(public navCtrl: NavController, public rest:RestProvider) {

  }

  ionViewDidLoad(){

    this.rest.getWallStreetActualities()
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
