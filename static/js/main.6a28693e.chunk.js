(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(23),c=n.n(o),s=(n(30),n(2)),i=n.n(s),u=n(8),l=n(3),d=n(7),h=n(5),p=n(4),f=(n(32),n(33),n(0)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(f.jsx)("div",{className:"event",children:Object(f.jsxs)("div",{className:"summary",as:"h4",children:[e.summary,Object(f.jsxs)("div",{className:"event-body",children:[Object(f.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(f.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(f.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(f.jsx)("br",{}),Object(f.jsx)("h6",{className:"about",children:"About Event"}),Object(f.jsx)("a",{href:e.htmlLink,role:"noopener",target:"_blank",children:"See details on Google calendar"}),Object(f.jsx)("p",{className:"event-description",children:e.description})]}),Object(f.jsx)("button",{variant:"light",size:"md",id:"eventButton",className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"show Details":"Hide Details"})]})]})})}}]),n}(r.Component),v=m,b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})},e.id)}))})}}]),n}(r.Component),g=b,j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,marginTop:r.marginTop,fontSize:r.fontSize}},r.color=null,r.marginTop=null,r.fontSize="16px",r}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).color="blue",r.fontSize="16px",r.marginTop="0",r}return n}(j),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).color="red",r.fontSize="16px",r}return n}(j),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(w,{text:this.state.infoText}),Object(f.jsx)("p",{children:"Search by City:"}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),y=x,k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"NumberOfEvents",children:[Object(f.jsx)(O,{text:this.props.errorText}),Object(f.jsx)("p",{children:"Number of events to show:"}),Object(f.jsx)("input",{type:"number",value:this.props.numberOfEvents,className:"number-of-events",onChange:function(t){return e.props.updateNumberOfEvents(t)}})]})}}]),n}(r.Component),S=k,T=n(25),N=n(9),E=n.n(N),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=n(13),Z=n.n(W),A=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=10;break}return e.next=7,localStorage.getItem("lastEvents");case 7:return t=e.sent,E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=12,M();case 12:if(!(n=e.sent)){e.next=22;break}return B(),r="https://ma5oinm7w8.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=18,Z.a.get(r);case 18:return(a=e.sent).data&&(o=A(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",a.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://ma5oinm7w8.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",a&&q(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ma5oinm7w8.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)};n(52);var J=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})})]})}),Object(f.jsx)("a",{href:"https://TwoFloorLoft.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},U=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(){var t=Object(u.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L().then((function(t){var r="all"===n?t:t.filter((function(e){return e.location===n}));e.mounted&&e.setState({events:r.slice(0,e.state.numberOfEvents),currentLocation:n})}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.updateNumberOfEvents=function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=n.target.value?parseInt(n.target.value):32)<1||r>32)){t.next=5;break}return t.abrupt("return",e.setState({errorText:"Please choose a number between 1 and 32.",numberOfEvents:0}));case 5:e.setState({errorText:"",numberOfEvents:r}),e.updateEvents(e.state.currentLocation,e.state.numberOfEvents);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getData=function(){if(e.mounted){var t=e.state,n=t.locations,r=t.events;return n.map((function(e){var t=r.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,I(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&L().then((function(e){o.mounted&&o.setState({events:e,locations:A(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(S,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents,errorText:this.state.errorText}),Object(f.jsx)(g,{events:this.state.events}),Object(f.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}})]})}}]),n}(r.Component),z=U,D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},F=n(24);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),_(),F.config("9baeaa5a6f3b48ff83bc25c4e79ca093").install()}},[[54,1,2]]]);
//# sourceMappingURL=main.6a28693e.chunk.js.map