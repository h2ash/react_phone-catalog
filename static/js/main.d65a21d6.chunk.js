(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),c=a.n(s),o=a(12),i=a.n(o),l=a(16),u=a(26),m=a(13),d=a(5),h=a(6),p=a(8),b=a(7),f=a(9),g=(a(33),a(10)),E=a(11),v=function(){return r.a.createElement("h2",null,"Home page")},k=function(e){var t=e.isLoading;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:"loading"}))},_=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],phonesForShowing:[]},a.componentDidMount=function(){a.setState({phones:a.props.phones,phonesForShowing:a.props.phones})},a.handleInput=function(e){var t=e.target.value;a.setState(function(e){return{phonesForShowing:Object(m.a)(e.phones).filter(function(e){return e.id.toLowerCase().includes(t.toLowerCase())})}})},a.sortFunc=function(e){var t=e.target.value;a.setState(function(e){return{phonesForShowing:Object(m.a)(e.phonesForShowing).sort(function(e,a){var n=e[t],r=a[t];switch(typeof n){case"string":return n.localeCompare(r);case"number":return n-r;default:return 0}})}})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.phonesForShowing;return r.a.createElement("div",{className:"phoneCatalog"},r.a.createElement("label",{className:"searchField",htmlFor:"search_field"},"Search:",r.a.createElement("input",{onChange:this.handleInput,className:"searchField__input",id:"search_field",type:"text"})),r.a.createElement("label",{className:"sortField",htmlFor:"sort_select"},"Sort by:",r.a.createElement("select",{onChange:this.sortFunc,className:"sortField-select",id:"sort_select"},r.a.createElement("option",{selected:!0,value:"age"},"Newest"),r.a.createElement("option",{value:"name"},"Alphabetical"))),r.a.createElement("ul",{className:"listOfPhones"},t.map(function(t){return r.a.createElement("li",{className:"listOfPhones__item"},r.a.createElement("img",{className:"listOfPhones__item-img",src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(t.imageUrl),alt:"altImg"}),r.a.createElement(g.b,{className:"listOfPhones__item-link",to:"/phones/".concat(t.id)},t.name),r.a.createElement("section",{className:"listOfPhones__item-snippet"},t.snippet),r.a.createElement("button",{onClick:function(){return e.props.addItemToBasket(t)}},"Add to cart"))})))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.loadDataPhones()},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phones,a=e.isLoading,n=e.isLoaded,s=e.addItemToBasket;return r.a.createElement("div",null,n?r.a.createElement(_,{addItemToBasket:s,phones:t}):r.a.createElement(k,{isLoading:a}))}}]),t}(r.a.Component),j=function(){return r.a.createElement("div",null,"Not found page!")},O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={currentImg:""},a.componentDidMount=function(){var e="".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(a.props.phone.imageUrl);a.setState({currentImg:e})},a.chooseCurrentImg=function(e){var t=e.target.src;a.setState({currentImg:t})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.id,t.phone),n=t.details,s=this.state.currentImg;return r.a.createElement("div",null,r.a.createElement("section",{className:"currentPhone__top-block"},r.a.createElement("img",{className:"currentPhone__top-block-current-img",src:s,alt:"phone_photo"}),r.a.createElement("h1",{className:"currentPhone__top-block-title"},a.name),r.a.createElement("div",{className:"currentPhone__top-block-snippet"},a.snippet),r.a.createElement("ul",{className:"currentPhone__top-block-all-imgs"},n.images.map(function(t){return r.a.createElement("img",{onClick:e.chooseCurrentImg,className:"currentPhone__top-block-all-imgs-item",src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(t),alt:""})}))),r.a.createElement("section",null))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={details:[],phones:[],isLoading:!1,isLoaded:!1},a.loadDataPhones=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoaded:!1,isLoading:!0}),e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,setTimeout(function(){a.setState({phones:n,isLoading:!1,isLoaded:!0})},1e3);case 8:case"end":return e.stop()}},e)})),a.loadDataDetails=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoaded:!1,isLoading:!0}),e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(t,".json"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,setTimeout(function(){a.setState({details:r,isLoading:!1,isLoaded:!0})},1e3);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){a.loadDataPhones(),a.loadDataDetails(a.props.id)},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.id,t=this.state,a=t.details,n=t.isLoading,s=t.isLoaded;return console.log(a),r.a.createElement("section",null,s?r.a.createElement(r.a.Fragment,null,e===a.id?r.a.createElement(r.a.Fragment,null,this.state.phones.filter(function(t){return t.id===e}).map(function(e){return r.a.createElement(O,{phone:e,details:a})})):"No any data for this phone"):r.a.createElement(k,{isLoading:n}))}}]),t}(r.a.Component),P=function(e){var t=e.itemsAtBasket,a=e.basketManager;return r.a.createElement("div",{className:"basketPage"},t.length?r.a.createElement("table",{className:"basketPage__table"},r.a.createElement("thead",{className:"basketPage__table-thead"},r.a.createElement("tr",null,r.a.createElement("td",{className:"basketPage__table-thead-td"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"),r.a.createElement("td",null),r.a.createElement("td",{className:"basketPage__table-thead-td"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{className:"basketPage__table-tbody-tr"},r.a.createElement("td",{className:"basketPage__table-tbody-td"},r.a.createElement(g.b,{className:"basketPage__table-tbody-td-link",to:"/phones/".concat(e.id)},e.name)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e.id,"remove")},className:"basketPage__table-quantity-remove"},"x")),r.a.createElement("td",{className:"basketPage__table-tbody-td"},r.a.createElement("button",{onClick:function(){return a(e.id,"decrease")},className:"basketPage__table-quantity-minus"},"-"),e.quantity,r.a.createElement("button",{onClick:function(){return a(e.id,"increase")},className:"basketPage__table-quantity-plus"},"+")))}))):r.a.createElement("div",null,"Empty"))},L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={phones:"",isLoading:!1,isLoaded:!1,itemsAtBasket:[]},a.basketManager=function(e,t){var n=a.state.itemsAtBasket.findIndex(function(t){return t.id===e});a.setState(function(a){var r=Object(m.a)(a.itemsAtBasket);switch(t){case"increase":return r[n].quantity+=1;case"decrease":1===r[n].quantity?r=r.filter(function(t){return t.id!==e}):r[n].quantity-=1;break;case"remove":r=r.filter(function(t){return t.id!==e})}return{itemsAtBasket:r}})},a.addItemToBasket=function(e){var t=a.state.itemsAtBasket.findIndex(function(t){return t.id===e.id});if(t>=0)a.setState(function(e){var a=Object(m.a)(e.itemsAtBasket);return a[t].quantity+=1,{itemsAtBasket:a}});else{var n=Object(u.a)({},e);n.quantity=1,delete n.imageUrl,delete n.snippet,delete n.age,delete n.carrier,a.setState(function(e){return{itemsAtBasket:[].concat(Object(m.a)(e.itemsAtBasket),[n])}})}},a.loadDataPhones=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoaded:!1,isLoading:!0}),e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,setTimeout(function(){a.setState({phones:n,isLoading:!1,isLoaded:!0})},1e3);case 8:case"end":return e.stop()}},e)})),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.phones,n=t.isLoading,s=t.isLoaded,c=t.itemsAtBasket;return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-menu-header"},r.a.createElement(g.c,{className:"nav-menu-header__item",href:"#",exact:!0,to:"/"},"Home"),r.a.createElement(g.c,{className:"nav-menu-header__item",href:"#",to:"/phones/"},"Phones"),r.a.createElement(g.c,{className:"nav-menu-header__item basket",href:"#",to:"/basket/"})),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:v}),r.a.createElement(E.a,{path:"/phones/",exact:!0,render:function(){return r.a.createElement(y,{addItemToBasket:e.addItemToBasket,loadDataPhones:e.loadDataPhones,phones:a,isLoading:n,isLoaded:s})}}),r.a.createElement(E.a,{path:"/phones/:id?",render:function(e){var t=e.match;return r.a.createElement(N,{id:t.params.id})}}),r.a.createElement(E.a,{path:"/basket/",render:function(){return r.a.createElement(P,{itemsAtBasket:c,basketManager:e.basketManager})}}),r.a.createElement(E.a,{component:j})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(g.a,{basename:"/react_phone-catalog"},r.a.createElement(L,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d65a21d6.chunk.js.map