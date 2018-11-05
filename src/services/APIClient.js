import { Observable } from 'rxjs';
const axios = require('axios');

export default class APICLient {

  constructor() {
    this.host = 'https://api.foursquare.com';
    this.path = '/v2/venues/search';
    this.params = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      v: '20181104',
      openNow: 1
    },
    this.requestParams = {
      method: 'get',
      url: this.path,
      baseURL: this.host,
      params: this.params
    }
  }

  getVenues(location, radius, section) {
    this.params['near'] = location;
    this.params['radius'] = radius;
    this.params['query'] = section;

    return new Observable((observer) => {
      axios(this.requestParams).then(response => {
        observer.next(response["data"]["response"]["venues"]);
      }, response => {
        observer.error(response);
      });
    });
  }

}
