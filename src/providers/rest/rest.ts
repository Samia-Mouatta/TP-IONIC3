import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiUrl = 'https://newsapi.org/v2/everything?q=apple&from=2018-03-19&to=2018-03-19&sortBy=popularity&apiKey=c5ccf22ea7b1439b9da08405950cc4e5';

  private wallStreetapiUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c5ccf22ea7b1439b9da08405950cc4e5';

  private bitcoinapiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=c5ccf22ea7b1439b9da08405950cc4e5';

  private techCrunchapiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c5ccf22ea7b1439b9da08405950cc4e5';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getActualities(){
  	return this.http.get(this.apiUrl);
  }

  getWallStreetActualities(){
    return this.http.get(this.wallStreetapiUrl);
  }

  getBitcoinActualities(){
    return this.http.get(this.bitcoinapiUrl);
  }

  getTechCrunchActualities(){
    return this.http.get(this.techCrunchapiUrl);
  }
}