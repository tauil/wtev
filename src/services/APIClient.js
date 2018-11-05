import { Observable } from 'rxjs';

export default class APICLient {

  constructor() {
    this.endpoint = 'https://api.foursquare.com/v2/venues/search?ll=52.369258,4.905653&client_id=VUP13PU5CNGYSPLVWMJK1Z40ZGFPKUJOEOZB2IELJQRGNX20&client_secret=BVPJJJ50LPDQMDGCS1VVRARE0YKZSHUOZPW3HL45WWFBNJ0Y&v=20181104&radius=250&section=coffee';
    this.mock = [{"id":"4bf2c2c71cd9d13a5305ee76","name":"De Lastage Apartments","location":{"address":"Valkenburgerstraat 188a","lat":52.36909718730184,"lng":4.905521128992492,"labeledLatLngs":[{"label":"display","lat":52.36909718730184,"lng":4.905521128992492}],"distance":20,"postalCode":"1011 NC","cc":"NL","city":"Amsterdam","state":"Noord-Holland","country":"Nederland","formattedAddress":["Valkenburgerstraat 188a","1011 NC Amsterdam","Nederland"]},"categories":[{"id":"4bf58dd8d48988d1fa931735","name":"Hotel","pluralName":"Hotels","shortName":"Hotel","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/travel/hotel_","suffix":".png"},"primary":true}],"referralId":"v-1541368074","hasPerk":false},{"id":"524f134711d255e48608c707","name":"Oxococo","location":{"address":"Valkenburgerstraat 196B","lat":52.36926852417476,"lng":4.905539550037202,"labeledLatLngs":[{"label":"display","lat":52.36926852417476,"lng":4.905539550037202}],"distance":7,"postalCode":"1011 NC","cc":"NL","city":"Amsterdam","state":"Noord-Holland","country":"Nederland","formattedAddress":["Valkenburgerstraat 196B","1011 NC Amsterdam","Nederland"]},"categories":[{"id":"4bf58dd8d48988d110951735","name":"Salon / Barbershop","pluralName":"Salons / Barbershops","shortName":"Salon / Barbershop","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_","suffix":".png"},"primary":true}],"referralId":"v-1541368074","hasPerk":false}];
  }

  getVenues() {
    return new Observable((observer) => {
      observer.next(this.mock);
    });
  }

}
