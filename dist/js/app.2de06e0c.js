(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Wat te eten vandaag?")]),n("NearbyVenuesList")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"nearby-venues-list"}},[n("h2",[e._v("Venues related to "+e._s(e.section)+" nearby: "+e._s(e.location))]),n("p",[e._v("("+e._s(e.radius)+" meters far)")]),e.refineSearch?e._e():n("button",{on:{click:function(t){e.refineSearch=!0}}},[e._v("Refine Search")]),e.refineSearch?n("form",{attrs:{id:"app"},on:{submit:function(t){t.preventDefault(),e.loadVenues(e.location)}}},[n("div",{staticClass:"flex"},[n("p",{staticClass:"flex-child"},[n("label",{attrs:{for:"location"}},[e._v("Location")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{id:"location",type:"text",name:"location",autocomplete:"off"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})]),n("p",{staticClass:"flex-child"},[n("label",{attrs:{for:"section"}},[e._v("Venue Type (Pizzeria, Burger)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.section,expression:"section"}],attrs:{id:"section",type:"text",name:"section",autocomplete:"off"},domProps:{value:e.section},on:{input:function(t){t.target.composing||(e.section=t.target.value)}}})]),n("p",{staticClass:"flex-child"},[n("label",{attrs:{for:"radius"}},[e._v("Radius of distance from you")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.radius,expression:"radius"}],attrs:{id:"radius",type:"number",name:"radius",autocomplete:"off"},domProps:{value:e.radius},on:{input:function(t){t.target.composing||(e.radius=t.target.value)}}})])]),n("div",{attrs:{id:"form-actions"}},[n("button",{on:{click:function(t){e.refineSearch=!1}}},[e._v("Cancel")]),n("input",{attrs:{type:"submit",value:"Search"}})])]):e._e(),e.loading?e._e():n("ul",[e._l(e.venues,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:e.venueMap(t.location.address),target:"_new"}},[e._v(e._s(t.name))]),n("br"),e._v("\n      "+e._s(t.location.address)+" "+e._s(t.location.postalCode)),n("br"),e._v("\n      "+e._s(t.categories.map(function(e){return e.name}).join(", "))+"\n    ")])}),0===e.venues.length?n("li",[e._v("No venues found with this criteria.")]):e._e()],2),e.loading?n("p",[e._v("Loading...")]):e._e()])},s=[],u=n("d4ec"),c=n("bee2"),l=n("e9b9"),p=n("bc3a"),d=function(){function e(){Object(u["a"])(this,e),this.host="https://api.foursquare.com",this.path="/v2/venues/search",this.params={client_id:"VUP13PU5CNGYSPLVWMJK1Z40ZGFPKUJOEOZB2IELJQRGNX20",client_secret:"BVPJJJ50LPDQMDGCS1VVRARE0YKZSHUOZPW3HL45WWFBNJ0Y",v:"20181104",openNow:1},this.requestParams={method:"get",url:this.path,baseURL:this.host,params:this.params}}return Object(c["a"])(e,[{key:"getVenues",value:function(e,t,n){var o=this;return this.params["near"]=e,this.params["radius"]=t,this.params["query"]=n,new l["a"](function(e){p(o.requestParams).then(function(t){e.next(t["data"]["response"]["venues"])},function(t){e.error(t)})})}}]),e}(),f=new d,v={name:"nearby-venues-list",data:function(){return{loading:!1,refineSearch:!1,location:"Amsterdam, NH, Netherlands",radius:250,section:"pizza",venues:[]}},created:function(){this.loadVenues()},methods:{venueMap:function(e){return"https://www.google.com/maps/search/?api=1&query="+e},loadVenues:function(e){this.loading=!0;var t=this,n={next:function(e){t.venues=e,t.loading=!1},error:function(e){console.log(e)}};e?f.getVenues(t.location,t.radius,t.section).subscribe(n):navigator.geolocation.getCurrentPosition(function(e){t.location=e.coords.latitude+","+e.coords.longitude,f.getVenues(t.location,t.radius,t.section).subscribe(n)},function(){f.getVenues(t.location,t.radius,t.section).subscribe(n)})}}},m=v,h=(n("da5b"),n("2877")),b=Object(h["a"])(m,i,s,!1,null,"eec9a6ae",null);b.options.__file="NearbyVenuesList.vue";var g=b.exports,_={name:"app",components:{NearbyVenuesList:g}},y=_,w=(n("5c0b"),Object(h["a"])(y,a,r,!1,null,null,null));w.options.__file="App.vue";var P=w.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(P)}}).$mount("#app")},5706:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(e,t,n){},da5b:function(e,t,n){"use strict";var o=n("5706"),a=n.n(o);a.a}});
//# sourceMappingURL=app.2de06e0c.js.map