(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=a(1),s=a(12),i=a.n(s),m=a(16),u=a(26),d=a(14),p=a(6),h=a(7),g=a(9),E=a(8),f=a(10),b=(a(33),a(11)),k="https://mate-academy.github.io/phone-catalogue-static",_=function(e){var t=e.itemsInBasket;return r.a.createElement("header",{className:"header"},r.a.createElement(c.c,{className:"header_wrapper-logo",href:"#",to:"/"},r.a.createElement("img",{className:"header__logo",src:"".concat("https://h2ash.github.io","/react_phone-catalog/img/logo.svg"),alt:"logo"})),r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__nav"},r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:"link link--header link--header_active",className:"link link--header",href:"#",exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:"link link--header link--header_active",className:"link link--header",href:"#",to:{pathname:"/phones",search:""}},"Phones")),r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:"link link--header link--header_active",className:"link link--header",href:"#",to:"/basket/"},"Basket",r.a.createElement("span",{className:"header__basket-quantity"},t.length))))))},v=function(){return r.a.createElement("main",{className:"wrapper__main wrapper__main--home home"},r.a.createElement("section",{className:"home__section"},r.a.createElement("h1",{className:"home__heading"},"Welcome to phone shop!"),r.a.createElement("p",{className:"home__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),r.a.createElement(c.c,{className:"link button button--home ",to:"/phones"},"Watch phones")),r.a.createElement("div",{className:"home__caller-div"},r.a.createElement(c.c,{to:"/phones",exact:!0},r.a.createElement("img",{className:"home__caller-gif",src:"".concat("https://h2ash.github.io","/react_phone-catalog/img/phone_2x.gif"),alt:"gif with phone on green circle"}))))},y=function(e){var t=e.isLoading;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:"loader"}))},N=function(e){var t=e.choosePage,a=e.page,n=e.pages,l=e.arrOfPages;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination__buttons"},r.a.createElement("li",null,r.a.createElement("button",{className:1===a?"button button--pagination button--pagination_disabled":"button button--pagination",onClick:function(){return t(a-1)}}," < ")),l.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("button",{className:n+1===a?"button button--pagination button--pagination_active":"button button--pagination",onClick:function(){return t(e)}},e))}),r.a.createElement("li",null,r.a.createElement("button",{className:a===n?"button button--pagination button--pagination_disabled":"button button--pagination",onClick:function(){return t(a+1)}}," > "))))},P=function(e){var t=e.page,a=e.pages,n=e.phonesPerPage,l=e.phonesForShowing,o=1===t?1:(t-1)*n+1,c=t===a?l.length:t*n;return r.a.createElement("div",{className:"phones-page__pagination-info"},"Shown ",o," - ",c," of ",l.length)},I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={phonesForShowing:[],sortBy:"age",inputValue:"",page:1,phonesPerPage:20,pages:1,arrOfPages:[1]},a.componentDidMount=function(){var e=new URLSearchParams(a.props.location.search);e.get("curpage")&&a.setState({page:Number(e.get("curpage"))}),e.get("perpage")&&a.setState({phonesPerPage:Number(e.get("perpage"))}),e.get("filter")?(a.setState(function(t){return{phonesForShowing:Object(d.a)(a.props.phones).filter(function(t){return t.id.toLowerCase().includes(e.get("filter").toLowerCase())}),inputValue:e.get("filter")}}),e.get("sort")&&a.sortFunctionByValue(e.get("sort"))):(a.setState({phonesForShowing:a.props.phones}),e.get("sort")&&a.sortFunctionByValue(e.get("sort"))),a.calcQuantityAndArrOfPages()},a.filterHandleInput=function(e){var t=e.target.value;a.setState({inputValue:t,phonesForShowing:a.props.phones.filter(function(e){return e.id.toLowerCase().includes(t.toLowerCase())})}),a.sortFunctionByValue(a.state.sortBy),a.calcQuantityAndArrOfPages(),a.choosePage(1),a.setQueryParamsInURL("filter",t)},a.sortHandleSelect=function(e){var t=e.target.value;a.sortFunctionByValue(t),a.choosePage(1),a.setQueryParamsInURL("sort",t)},a.sortFunctionByValue=function(e){a.setState(function(t){return{sortBy:e,phonesForShowing:Object(d.a)(t.phonesForShowing).sort(function(t,a){var n=t[e],r=a[e];switch(e){case"age":return n-r;case"name":return n.localeCompare(r);default:return 0}})}})},a.setQueryParamsInURL=function(e,t){var n=new URLSearchParams(a.props.location.search);n.set(e,t),a.props.history.push({pathname:"/phones",search:"?".concat(n.toString())})},a.chooseQuantityOfPhonesPerPage=function(e){var t=e.target.value;a.setState({phonesPerPage:Number(t)}),a.calcQuantityAndArrOfPages(),a.choosePage(1),a.setQueryParamsInURL("perpage",t)},a.choosePage=function(e){a.setState({page:e}),a.setQueryParamsInURL("curpage",e)},a.calcQuantityAndArrOfPages=function(){a.setState(function(e){return{pages:Math.ceil(e.phonesForShowing.length/e.phonesPerPage)}}),a.setState(function(e){for(var t=[],a=1;a<=e.pages;a++)t.push(a);return{arrOfPages:t}})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.phonesForShowing,n=t.phonesPerPage,l=t.page,o=t.pages,s=t.arrOfPages,i=t.inputValue,m=t.sortBy,u=1===l?0:(l-1)*n,d=l*n-1;return r.a.createElement("div",{className:"phones-page"},r.a.createElement("h2",{className:"phones-page__quantity-phones"},"Phones Quantity: ",a.length),r.a.createElement("div",{className:"phones-page__input-and-select-container"},r.a.createElement("input",{className:"phones-page__filter",placeholder:"Filter phones by name",value:i,onChange:this.filterHandleInput,id:"search_field",type:"text"}),r.a.createElement("select",{className:"phones-page__sort",value:m,id:"sort",onChange:this.sortHandleSelect},r.a.createElement("option",{value:"age"},"Newest"),r.a.createElement("option",{value:"name"},"Alphabetical")),r.a.createElement("select",{className:"phones-page__perpage",value:this.state.phonesPerPage,onChange:this.chooseQuantityOfPhonesPerPage,id:"chooseQuantityOfPhonesPerPage"},r.a.createElement("option",{value:"20"},"Per Page: 20"),r.a.createElement("option",{value:"10"},"Per Page: 10"),r.a.createElement("option",{value:"5"},"Per Page: 5"),r.a.createElement("option",{value:"3"},"Per Page: 3"))),r.a.createElement("ul",{className:"phones-page__list-of-phones"},a.filter(function(e,t){return t>=u&&t<=d}).map(function(t){return r.a.createElement("li",{key:t.id,className:"phone-card"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/phones/".concat(t.id)},r.a.createElement("img",{className:"phone-card__img",src:"".concat(k,"/").concat(t.imageUrl),alt:"altImg"})),r.a.createElement(c.b,{className:"phone-card__heading link link--phone-heading",to:"/phones/".concat(t.id)},t.name),r.a.createElement("section",{className:"phone-card__snippet"},t.snippet)),r.a.createElement("button",{className:e.props.itemsInBasket.find(function(e){return e.id===t.id})?"phone-card__button button button--add-in-basket button--add-in-basket_added":"phone-card__button button button--add-in-basket",onClick:function(){return e.props.addItemToBasket(t)}},e.props.itemsInBasket.find(function(e){return e.id===t.id})?"Added to basket":"Add to basket"))})),o>1?r.a.createElement("div",{className:"phones-page__pagination-container pagination"},r.a.createElement(P,{page:l,pages:o,phonesPerPage:n,phonesForShowing:a}),r.a.createElement(N,{choosePage:this.choosePage,page:l,pages:o,arrOfPages:s})):"")}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.loadDataPhones()},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phones,a=e.isLoading,n=e.isLoaded,l=e.addItemToBasket,o=e.location,c=e.history,s=e.itemsInBasket;return r.a.createElement("main",{className:"wrapper__main"},n?r.a.createElement(I,{addItemToBasket:l,phones:t,isLoading:a,isLoaded:n,location:o,history:c,itemsInBasket:s}):r.a.createElement(y,{isLoading:a}))}}]),t}(r.a.Component),O=function(){return r.a.createElement("main",{className:"wrapper__main"},"Not found page!")},S=function(e){return!1!==e[0]?r.a.createElement("img",{className:"icon",src:"./img/check_circle.svg",alt:"Yes"}):r.a.createElement("img",{className:"icon",src:"./img/no_circle.svg",alt:"No"})},w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={currentImg:""},a.componentDidMount=function(){var e=a.props.detailsOfCurrentPhone,t="".concat(k,"/").concat(e.images[0]);a.setState({currentImg:t})},a.chooseCurrentImg=function(e){var t=e.target.src;a.setState({currentImg:t})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.phone,l=t.detailsOfCurrentPhone,o=t.itemsInBasket,c=t.addItemToBasket,s=this.state.currentImg;return console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"phone-page__top-container"},r.a.createElement("div",{className:"phone-page__photos-container"},r.a.createElement("div",{className:"phone-page__photos-container-for-non-fall"},r.a.createElement("img",{className:"phone-page__main-photo",src:s,alt:"phone_photo"})),r.a.createElement("div",null,l.images.map(function(t){return r.a.createElement("input",{className:"phone-page__additional-photo",key:"".concat(k,"/").concat(t),type:"image",onClick:e.chooseCurrentImg,src:"".concat(k,"/").concat(t),alt:""})}))),r.a.createElement("div",{className:"phone-page__name-and-description-container"},r.a.createElement("h1",{className:"phone-page__heading"},l.name),r.a.createElement("div",{className:"phone-page__general-description"},l.description),r.a.createElement("button",{className:o.find(function(e){return e.id===a})?"button button--add-in-basket button--add-in-basket_added button--add-in-basket_page-details":"button button--add-in-basket button--add-in-basket_page-details",onClick:function(){return c(n)}},o.find(function(e){return e.id===a})?"Added to basket":"Add to basket"))),r.a.createElement("div",{className:"phone-page__details-container"},r.a.createElement("h3",{className:"phone-page__details-heading"},"Phone details"),r.a.createElement("ul",{className:"phone-page__details-list"},r.a.createElement("li",{className:"phone-page__details-column",key:"android"},r.a.createElement("h4",null,"Android:"),r.a.createElement("dl",null,r.a.createElement("dt",null,"OS:"),r.a.createElement("dd",null,l.android.os),r.a.createElement("dt",null,"UI:"),r.a.createElement("dd",null,l.android.ui))),r.a.createElement("li",{className:"phone-page__details-column",key:"battery"},r.a.createElement("h4",null,"Battery"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Stand by time:"),r.a.createElement("dd",null,l.battery.standbyTime),r.a.createElement("dt",null,"Talk time:"),r.a.createElement("dd",null,l.battery.talkTime),r.a.createElement("dt",null,"Type:"),r.a.createElement("dd",null,l.battery.type))),r.a.createElement("li",{className:"phone-page__details-column",key:"camera"},r.a.createElement("h4",null,"Camera: "),r.a.createElement("dl",null,r.a.createElement("dt",null,"Screen Resolution:"),r.a.createElement("dd",null,r.a.createElement(S,[l.camera.features])),r.a.createElement("dt",null,"Primary:"),r.a.createElement("dd",null,r.a.createElement(S,[l.camera.primary])))),r.a.createElement("li",{className:"phone-page__details-column",key:"connectivity"},r.a.createElement("h4",null,"Connectivity:"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Bluetooth:"),r.a.createElement("dd",null,l.connectivity.bluetooth),r.a.createElement("dt",null,"Cell:"),r.a.createElement("dd",null,l.connectivity.cell),r.a.createElement("dt",null,"Gps:"),r.a.createElement("dd",null,r.a.createElement(S,[l.connectivity.gps])),r.a.createElement("dt",null,"Infrared:"),r.a.createElement("dd",null,r.a.createElement(S,[l.connectivity.infrared])),r.a.createElement("dt",null,"Wifi:"),r.a.createElement("dd",null,l.connectivity.wifi))),r.a.createElement("li",{className:"phone-page__details-column",key:"display"},r.a.createElement("h4",null,"Display:"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Screen Resolution:"),r.a.createElement("dd",null,l.display.screenResolution),r.a.createElement("dt",null,"Sreen Size:"),r.a.createElement("dd",null,l.display.screenSize),r.a.createElement("dt",null,"TouchScreen:"),r.a.createElement("dd",null,r.a.createElement(S,[l.display.touchScreen])))),r.a.createElement("li",{className:"phone-page__details-column",key:"hardware"},r.a.createElement("h4",null,"Hardware:"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Accelerometer:"),r.a.createElement("dd",null,r.a.createElement(S,[l.display.touchScreen])),r.a.createElement("dt",null,"AudioJack:"),r.a.createElement("dd",null,l.hardware.audioJack),r.a.createElement("dt",null,"CPU:"),r.a.createElement("dd",null,l.hardware.cpu),r.a.createElement("dt",null,"Fm Radio:"),r.a.createElement("dd",null,r.a.createElement(S,[l.hardware.fmRadio])),r.a.createElement("dt",null,"Physical Keyboard:"),r.a.createElement("dd",null,r.a.createElement(S,[l.hardware.physicalKeyboard])),r.a.createElement("dt",null,"USB:"),r.a.createElement("dd",null,l.hardware.usb))),r.a.createElement("li",{className:"phone-page__details-column",key:"sizeAndWeight"},r.a.createElement("h4",null,"Size And Weight:"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Dimensions:"),r.a.createElement("dd",null,l.sizeAndWeight.dimensions),r.a.createElement("dt",null,"Weight:"),r.a.createElement("dd",null,l.sizeAndWeight.dimensions))))))}}]),t}(r.a.Component),C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={detailsOfCurrentPhone:{},isLoading:!1,isLoaded:!1},a.componentDidMount=function(){a.props.loadDataPhones(),a.loadDataDetails(a.props.id)},a.loadDataDetails=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,fetch("".concat(k,"/api/phones/").concat(t,".json"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a.setState({detailsOfCurrentPhone:r,isLoading:!1,isLoaded:!0});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.phones,n=e.itemsInBasket,l=e.addItemToBasket,o=this.state,c=o.detailsOfCurrentPhone,s=o.isLoading,i=o.isLoaded;return r.a.createElement("main",{className:"wrapper__main"},i?r.a.createElement(r.a.Fragment,null,t===c.id?r.a.createElement(r.a.Fragment,null,a.filter(function(e){return e.id===t}).map(function(e){return r.a.createElement(w,{id:t,phone:e,itemsInBasket:n,addItemToBasket:l,key:e.id,detailsOfCurrentPhone:c})})):"No any data for this phone"):r.a.createElement(y,{isLoading:s}))}}]),t}(r.a.Component),L=function(e){var t=e.itemsInBasket,a=e.basketManager;return console.log(t),r.a.createElement("main",{className:"wrapper__main basket"},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"basket__quantity-of-phones"},"Chosen phones: ",t.length),r.a.createElement("ul",{className:"basket__phones-list"},t.map(function(e){return r.a.createElement("li",{className:"basket-card",key:e.id},r.a.createElement("div",{className:"basket-card__img-and-name-container"},r.a.createElement("div",{className:"basket-card__img-container"},r.a.createElement(c.b,{to:"/phones/".concat(e.id)},r.a.createElement("img",{className:"basket-card__img",src:"".concat(k,"/").concat(e.imageUrl),alt:"img ".concat(e.name," phone in basket")}))),r.a.createElement("h3",null,r.a.createElement(c.b,{className:"link",to:"/phones/".concat(e.id)},e.name))),r.a.createElement("div",{className:"basket-card__buttons-container"},r.a.createElement("button",{onClick:function(){return a(e.id,"decrease")},className:e.quantity<=1?"button button--decrease-increase button--decrease-increase-disabled":"button button--decrease-increase button--decrease-increase-active"},"-"),r.a.createElement("p",{className:"basket-card__quantity-of-phone"},e.quantity),r.a.createElement("button",{onClick:function(){return a(e.id,"increase")},className:"basket-card__increase-button button button--decrease-increase button--decrease-increase-active"},"+"),r.a.createElement("button",{onClick:function(){return a(e.id,"remove")},className:"button button--remove"},"x")))})),r.a.createElement("div",{className:"basket__buttons"},r.a.createElement("button",{onClick:function(){return a(0,"removeAll")},className:"button button--delete-items"},"Delete all items from basket"),r.a.createElement(c.b,{className:"link link--back-to-catalog",to:"/phones"},"Back to catalog"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"basket__quantity-of-phones"},"Chosen phones: ",t.length),r.a.createElement(c.b,{className:"link link--back-to-catalog",to:"/phones"},"Back to catalog")))},j=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(c.b,{className:"link link--footer"},"GitHub Link"),r.a.createElement(c.b,{className:"link link--footer"},"Rights"))},A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],isLoading:!1,isLoaded:!1,itemsInBasket:[]},a.basketManager=function(e,t){var n=a.state.itemsInBasket.findIndex(function(t){return t.id===e});a.setState(function(a){var r=Object(d.a)(a.itemsInBasket);switch(t){case"increase":return r[n].quantity+=1;case"decrease":1===r[n].quantity?r=r.filter(function(t){return t.id!==e}):r[n].quantity-=1;break;case"remove":r=r.filter(function(t){return t.id!==e});break;case"removeAll":r=[];break;default:console.log("\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0442\u0441\u0442\u0443\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0440\u0435\u0434\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439")}return{itemsInBasket:r}},function(){localStorage.setItem("itemsFromBasketInLocal",JSON.stringify(a.state.itemsInBasket))})},a.addItemToBasket=function(e){if(a.state.itemsInBasket.findIndex(function(t){return t.id===e.id})<0){var t=Object(u.a)({},e);t.quantity=1,a.setState(function(e){return{itemsInBasket:[].concat(Object(d.a)(e.itemsInBasket),[t])}},function(){localStorage.setItem("itemsFromBasketInLocal",JSON.stringify(a.state.itemsInBasket))})}},a.loadDataPhones=Object(m.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoaded:!1,isLoading:!0}),e.next=3,fetch("".concat(k,"/api/phones.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a.setState({phones:n,isLoading:!1,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("itemsFromBasketInLocal"));null!==e&&this.setState({itemsInBasket:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.phones,n=t.isLoading,l=t.isLoaded,o=t.itemsInBasket;return r.a.createElement("div",{className:"app"},r.a.createElement(_,{itemsInBasket:o}),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:v}),r.a.createElement(b.a,{path:"/phones",exact:!0,render:function(t){var c=t.location,s=t.history;return r.a.createElement(B,{addItemToBasket:e.addItemToBasket,loadDataPhones:e.loadDataPhones,phones:a,isLoading:n,isLoaded:l,location:c,history:s,itemsInBasket:o})}}),r.a.createElement(b.a,{path:"/phones/:id?",render:function(t){var n=t.match;return r.a.createElement(C,{id:n.params.id,phones:a,itemsInBasket:o,addItemToBasket:e.addItemToBasket,loadDataPhones:e.loadDataPhones})}}),r.a.createElement(b.a,{path:"/basket/",render:function(){return r.a.createElement(L,{itemsInBasket:o,basketManager:e.basketManager})}}),r.a.createElement(b.a,{component:O})),r.a.createElement(j,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(c.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.caebad16.chunk.js.map