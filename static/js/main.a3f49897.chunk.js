(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);n(8),n(2);var o=n(0),a=n(4),r=n(1),i=n.n(r),c=n(5),l=n(6),s=function(e){return o.createElement("form",{className:"col-12 mt-3",onSubmit:e.getWeather},o.createElement("input",{type:"text",name:"city",placeholder:"Insert city"}),o.createElement("input",{type:"text",name:"country",placeholder:"Inserisci country"}),o.createElement("button",{className:"text-uppercase",type:"submit"},"Find"))},u=function(e){return o.createElement("div",{className:"mt-3"},o.createElement("h3",{className:"col-12 title-container__title"},"1980's World Weather app"),o.createElement("h6",{className:"col-12 title-container__subtitle mt-2"},"Get in real time weather, infos like conditions, temperature and humidity!"))},d=function(e){var t=e.locationResult.error.length;return o.createElement("div",{className:"container-fluid row"},o.createElement("div",{className:"col-12 my-3 d-flex flex-column"},t?o.createElement("span",{className:"weather__error"},"Errors during fetching data, chech if you insert city and country both."):o.createElement(o.Fragment,null,o.createElement("h6",{className:"font-weight-bold"}," Risultati:"),e.locationResult.city&&o.createElement("span",null,"Location: ",o.createElement("b",null,e.locationResult.city)),e.locationResult.description&&o.createElement("span",{className:"text-capitalize"},"What's going on: ",o.createElement("b",null,e.locationResult.description)),e.locationResult.humidity&&o.createElement("span",null,"Humidity: ",o.createElement("b",null,e.locationResult.humidity),"%"),e.locationResult.temperature&&o.createElement("span",null,"Temperature: ",o.createElement("b",null,e.locationResult.temperature),"\xb0"))),!t&&!1)},m=function(){var e=Object(o.useState)(void 0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,o,r,c,l,s,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,o=t.target.elements.country.value,e.next=5,fetch("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(n,",").concat(o,"&appid=").concat("53b8c510025423ce7d42791df96a29e2","&units=metric"));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,a(n&&o?{temperature:null===c||void 0===c||null===(l=c.main)||void 0===l?void 0:l.temp,city:null===c||void 0===c?void 0:c.name,country:null===c||void 0===c||null===(s=c.sys)||void 0===s?void 0:s.country,humidity:null===(u=c.main)||void 0===u?void 0:u.humidity,description:null===c||void 0===c||null===(d=c.weather[0])||void 0===d?void 0:d.description,error:""}:{temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Citt\xe0 non trovata"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.createElement("div",{className:"container p-3",style:{border:"2px dashed black",marginTop:30,height:"100%"},id:"weather-container"},o.createElement(u,null),o.createElement(s,{getWeather:r}),!!n&&o.createElement(d,{locationResult:n}))},p=function(e){return o.createElement("div",{id:"main-container",className:"container"},o.createElement(m,null))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}console.debug("STARTING WEATHER APP"),a.render(o.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()},2:function(e,t,n){},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a3f49897.chunk.js.map