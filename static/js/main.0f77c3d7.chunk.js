(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(54)},20:function(e,t,n){},22:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(3),r=n.n(a),s=(n(20),n(4)),c=n(5),l=n(7),u=n(6),p=n(8),d=(n(22),n(14)),h=n(11),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong with Google Maps API."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.Component);window.gm_authFailure=function(){alert("Invalid Google API key. Please check your Google API key")};var g=Object({NODE_ENV:"production",PUBLIC_URL:"/Neighborhood-Map"}).REACT_APP_fbAppID,m=Object({NODE_ENV:"production",PUBLIC_URL:"/Neighborhood-Map"}).REACT_APP_fbAppSecret,k=Object({NODE_ENV:"production",PUBLIC_URL:"/Neighborhood-Map"}).REACT_APP_googleMapsAPI;console.log(g),console.log(m),console.log(k);var w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).mapReady=function(e,t){setTimeout(function(){n.addMarkers(t)},1300)},n.getVenueInfo=function(){var e=[],t="https://graph.facebook.com/search?type=place&center=1.290604,103.846473&categories=%5B%22FOOD_BEVERAGE%22%5D&distance=1000&fields=name,location,overall_star_rating,phone,website,picture,link,checkins,price_range&access_token=".concat(g,"|").concat(m),o=new Headers,i=new Request(t,{method:"GET",headers:o});fetch(i).then(function(e){if(e.ok)return e.json();throw Error("Request rejected with status code ".concat(e.status))}).then(function(t){t.data.forEach(function(t,n){var o={};o.name=t.name,o.lat=t.location.latitude,o.lng=t.location.longitude,o.id=t.id,t.overall_star_rating?o.rating=t.overall_star_rating:o.rating="No rating provided",t.price_range?o.price_range=t.price_range:o.price_range="No price range provided",t.checkins?o.checkins=t.checkins:o.checkins="None",t.website?o.website=t.website:o.website=t.link,o.index=n,e.push(o)})}).catch(function(e){alert("Something went wrong with Facebook Places API."+e)}),n.props.getFbResults(e)},n.onMapClicked=function(){n.props.infoWindow&&n.props.infoWindow.close(),n.props.allMarkers.forEach(function(e){e.setAnimation(null)},n.props.onInfoWindowClose),n.props.updateQuery(n.props.query)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getVenueInfo()}},{key:"addMarkers",value:function(e){var t=this,n=[],o=new this.props.google.maps.InfoWindow;if(this.props.fbResults){var i=!0,a=!1,r=void 0;try{for(var s,c=function(){var i=s.value,a=new t.props.google.maps.Marker({position:{lat:i.lat,lng:i.lng},map:e,title:i.name,id:i.index,animation:2});n.push(a);var r="<h4>".concat(i.name,"</h4><p>Rating: ").concat(i.rating,"</p><p>Price Range: ").concat(i.price_range,"</p><p>Facebook Check-ins: ").concat(i.checkins,"</p><a href=").concat(i.website,">Website</a>");["click","mouseover"].forEach(function(n){a.addListener(n,function(){null!==a.getAnimation()?a.setAnimation(null):a.setAnimation(1),o.setContent(r),o.open(e,a),t.props.onMarkerClick(i,a,o),t.props.showWindow()},!1)}),a.addListener("mouseout",function(){a.setAnimation(null),t.props.onInfoWindowClose()}),o.addListener("closeclick",function(){a.setAnimation(null),t.props.onInfoWindowClose()})},l=this.props.fbResults[Symbol.iterator]();!(i=(s=l.next()).done);i=!0)c()}catch(u){a=!0,r=u}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}}this.props.getMap(n,o,e,this.props.google)}},{key:"render",value:function(){return window.google?i.a.createElement(f,null,i.a.createElement(h.Map,{"aria-label":"map",className:"map",role:"application",google:this.props.google,initialCenter:{lat:1.290604,lng:103.846473},onClick:this.onMapClicked,onReady:this.mapReady,zoom:15})):i.a.createElement("div",null,"Error loading Google Maps")}}]),t}(o.Component),b=Object(h.GoogleApiWrapper)({apiKey:"".concat(k)})(w),v=function(e){var t=e.venues;return i.a.createElement("div",null,i.a.createElement("label",{className:"label",htmlFor:"searchBox"},"Search Box"),i.a.createElement("input",{id:"searchBox",type:"text",placeholder:"Type here to filter locations",value:e.query,onChange:function(t){return e.updateQuery(t.target.value)}}),i.a.createElement("ul",{className:"venue-list"},t&&t.map(function(t,n){return i.a.createElement("li",{className:"list-item",key:n},i.a.createElement("button",{className:"item",name:t.name,key:n,onClick:function(o){return e.onListClick(t,n)}},t.name))})))},y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){n.state.infoWindow&&n.state.infoWindow.close(),n.setState({query:e,menuOpen:!0},n.filterList(e))},n.onListClick=function(e){e=[e],n.setState({clickedPlace:e,menuOpen:!1}),setTimeout(function(){n.setMarkerVisibility([e[0]])},100)},n.filterList=function(e){var t=e.toUpperCase(),o=document.querySelectorAll(".item"),i=[];o.forEach(function(e){if(e.innerHTML.toUpperCase().indexOf(t)>-1){e.style.display="";var n=e.innerHTML.replace(/&amp;/,"&");i.push(n.trim())}else e.style.display="none"}),n.setState({placesOnList:i},n.setMarkerVisibility(i))},n.setMarkerVisibility=function(e){n.state.allMarkers.find(function(t){return e.includes(t.title.trim())?t.setVisible(!0):n.state.clickedPlace?!![e[0].name].includes(t.title.trim())&&(n.setState({activeMarker:t}),n.triggerMarkerClick()):t.setVisible(!1)})},n.triggerMarkerClick=function(){n.state.google.maps.event.trigger(n.state.activeMarker,"click")},n.onMarkerClick=function(e,t,o){n.state.allMarkers.forEach(function(e){t.title!==e.title&&e.setAnimation(null)}),n.setState({activeMarker:t,clickedPlace:e,infoWindow:o,menuOpen:!1,showingInfoWindow:!0})},n.onInfoWindowClose=function(){n.setState({activeMarker:{},clickedPlace:null,infoWindow:null,menuOpen:!1,showingInfoWindow:!1},n.showAllMarkers)},n.showAllMarkers=function(){n.state.allMarkers.forEach(function(e){e.setVisible(!0)})},n.getMap=function(e,t,o,i){n.setState({allMarkers:e,infoWindow:t,map:o,google:i})},n.getFbResults=function(e){n.setState({fbResults:e})},n.state={activeMarker:{},fbResults:null,allMarkers:[],clickedPlace:null,infoWindow:null,map:null,menuOpen:!1,placesOnList:"",query:"",showingInfoWindow:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("nav",{className:"App-header",role:"navigation"},i.a.createElement("h1",null,"Singapore Restaurants"),i.a.createElement("div",{tabIndex:"0"},i.a.createElement(d.slide,{noOverlay:!0,isOpen:this.state.menuOpen,tabIndex:0,className:"burger-menu",width:300},i.a.createElement(v,{className:"map-list",onListClick:this.onListClick,venues:this.state.fbResults,query:this.state.query,updateQuery:this.updateQuery.bind(this)})))),i.a.createElement("main",null,i.a.createElement(b,{ref:"map",className:"map-wrapper",fbResults:this.state.fbResults,infoWindow:this.state.infoWindow,allMarkers:this.state.allMarkers,query:this.state.query,getFbResults:this.getFbResults,getMap:this.getMap,onInfoWindowClose:this.onInfoWindowClose,onMapClicked:this.onMapClicked,onMarkerClick:this.onMarkerClick,setMarkerVisibility:this.setMarkerVisibility,triggerMarkerClick:this.triggerMarkerClick,updateQuery:this.updateQuery})))}}]),t}(o.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Neighborhood-Map",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Neighborhood-Map","/service-worker.js");M?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.0f77c3d7.chunk.js.map