(window["webpackJsonpcrwn-clothing"]=window["webpackJsonpcrwn-clothing"]||[]).push([[0],{204:function(e,t,n){e.exports=n(443)},421:function(e,t,n){},422:function(e,t,n){},424:function(e,t,n){},425:function(e,t,n){},426:function(e,t,n){},427:function(e,t,n){},428:function(e,t,n){},429:function(e,t,n){},430:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){},437:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);n(205),n(214);var a=n(0),r=n.n(a),c=n(103),i=n.n(c),l=n(14),o=n(25),s=n(198),u=(n(413),n(199)),m=n(39),p=n(105),f=n(200),d=n.n(f),b=n(19),h="SET_CURRENT_USER";function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return E({},e,{currentUser:t.payload});default:return e}},y={TOGGLE_CART_SHOWN:"TOGGLE_CART_SHOWN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",REDUCE_QUANTITY:"REDUCE_QUANTITY"},_=y,j=n(203);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e,t){var n=e.find(function(e){return e.id===t.id});return n?e.map(function(e){return e.id===t.id?N({},e,{quantity:e.quantity+1}):e}):(console.log(n),[].concat(Object(j.a)(e),[N({},t,{quantity:1})]))},C=function(e,t){var n=e.find(function(e){return e.id===t.id});return n&&n.quantity>1?e.map(function(e){return e.id===n.id?N({},e,{quantity:e.quantity-1}):e}):e};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I={show:!1,cartItems:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.TOGGLE_CART_SHOWN:return S({},e,{show:!e.show});case _.ADD_ITEM:return S({},e,{cartItems:k(e.cartItems,t.payload)});case _.REMOVE_ITEM:return S({},e,{cartItems:e.cartItems.filter(function(e){return e.id!==t.payload.id})});case _.REDUCE_QUANTITY:return S({},e,{cartItems:C(e.cartItems,t.payload)});default:return e}},D={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"menu-item--large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"menu-item--large",id:5,linkUrl:"shop/mens"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return t.type,e},L={COLLECTIONS_FETCH:"FETCH_COLLECTIONS",COLLECTIONS_DID_FETCH:"COLLECTIONS_DID_FETCH",COLLECTIONS_FETCH_FAIL:"COLLECTIONS_FETCH_FAIL"};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R={collections:null,isFetching:!1,errorMsg:void 0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.COLLECTIONS_FETCH:return A({},e,{isFetching:!0});case L.COLLECTIONS_DID_FETCH:return A({},e,{isFetching:!1,collections:t.payload});case L.COLLECTIONS_FETCH_FAIL:return A({},e,{isFetching:!1,errorMsg:t.payload});default:return e}},H={key:"root",storage:d.a,whitelist:["cart"]},q=Object(m.c)({user:v,cart:T,directory:x,shop:F}),M=Object(p.a)(H,q),z=[u.a];var G=Object(m.d)(M,m.a.apply(void 0,z)),W=Object(p.b)(G),Q=n(35),B=n.n(Q),V=n(54),Y=n(55),$=n(56),K=n(58),J=n(57),X=n(59),Z=n(7),ee=n(60),te=n(72),ne=n.n(te);n(416),n(419);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}ne.a.initializeApp({apiKey:"AIzaSyBMh9E4PSKkjH4HxLkBNXHsHU3uWN5JuXc",authDomain:"dzp-crwn-db.firebaseapp.com",databaseURL:"https://dzp-crwn-db.firebaseio.com",projectId:"dzp-crwn-db",storageBucket:"",messagingSenderId:"434549349717",appId:"1:434549349717:web:c5dbed080dfda54d"});var ce=ne.a.auth(),ie=ne.a.firestore(),le=function(){var e=Object(V.a)(B.a.mark(function e(t,n){var a,r,c,i;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=ie.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(re({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error while creating a user: ".concat(e.t0.message));case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}(),oe=new ne.a.auth.GoogleAuthProvider;oe.setCustomParameters({prompt:"select_account"});var se=function(){return ce.signInWithPopup(oe)},ue=(ne.a,function(e){return{type:h,payload:e}}),me=Object(Z.a)([function(e){return e.user}],function(e){return e.currentUser}),pe=(n(421),n(42)),fe=(n(422),Object(ee.g)(function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.linkUrl,i=e.history,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"menu-item__background",style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("div",{className:"menu-item__content"},r.a.createElement("h1",{className:"menu-item__title"},t),r.a.createElement("span",{className:"menu-item__subtitle"},"SHOP NOW"))))})),de=(n(424),Object(Z.a)([function(e){return e.directory}],function(e){return e.sections})),be=Object(Z.b)({sections:de}),he=Object(l.b)(be)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(pe.a)(e,["id"]);return r.a.createElement(fe,Object.assign({key:t},n))}))}),ge=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(he,null))},Ee=function(){return{type:L.COLLECTIONS_FETCH}},Oe=function(){return function(e){var t=ie.collection("collections");e(Ee),t.get().then(function(t){var n=function(e){return e.docs.map(function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{})}(t);e(function(e){return{type:L.COLLECTIONS_DID_FETCH,payload:e}}(n))}).catch(function(t){return e((n=t.message,{type:L.COLLECTIONS_FETCH_FAIL,payload:n}));var n})}},ve=function(e){return e.shop},ye=Object(Z.a)([ve],function(e){return e.collections}),_e=Object(Z.a)([ye],function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),je=Object(Z.a)([ve],function(e){return e.isFetching}),we=Object(Z.a)([ve],function(e){return!!e.collections}),Ne=(n(425),function(e){return function(t){var n=t.isLoading,a=Object(pe.a)(t,["isLoading"]);return n?r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"spinner__container"})):r.a.createElement(e,a)}}),ke=(n(426),n(427),n(428),function(){return{type:y.TOGGLE_CART_SHOWN}}),Ce=function(e){return{type:y.ADD_ITEM,payload:e}},Pe=(n(429),function(e){var t=e.children,n=e.extraClasses,a=Object(pe.a)(e,["children","extraClasses"]);return r.a.createElement("button",Object.assign({className:"".concat(n," button")},a),t)}),Se=Object(l.b)(null,function(e){return{addItem:function(t){return e(Ce(t))}}})(function(e){var t=e.item,n=e.addItem,a=(t.id,t.name),c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"collection-item__image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-item__footer"},r.a.createElement("span",{className:"collection-item__name"},a),r.a.createElement("span",{className:"collection-item__price"},c,"$")),r.a.createElement(Pe,{onClick:function(){return n(t)},extraClasses:"button--inverted"},"Add to cart"))}),Ie=function(e){var t=e.title,n=e.items,a=e.routeName;return r.a.createElement("div",{className:"collection"},r.a.createElement(o.b,{to:"/shop/".concat(a)},r.a.createElement("h1",{className:"collection__title"},t.toUpperCase())),r.a.createElement("div",{className:"collection__preview"},n.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(Se,{key:e.id,item:e})})))},Te=Object(Z.b)({collections:_e}),De=Object(l.b)(Te)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(pe.a)(e,["id"]);return r.a.createElement(Ie,Object.assign({key:t},n))}))}),xe=(n(430),Object(l.b)(function(e,t){return{collection:(n=t.match.params.collection,Object(Z.a)([ye],function(e){return e?e[n]:null}))(e)};var n})(function(e){e.match;var t=e.collection;return console.log(t),r.a.createElement("div",{className:"collection-page"},r.a.createElement("h1",{className:"collection__title"},t.title.toUpperCase()),r.a.createElement("div",{className:"collection__preview"},t.items.map(function(e){return r.a.createElement(Se,{key:e.id,item:e})})))})),Le=Ne(De),Ue=Ne(xe),Ae=function(e){function t(){return Object(Y.a)(this,t),Object(K.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.collectionsFetchAsync)()}},{key:"render",value:function(){var e=this.props.match.path,t=this.props,n=(t.match,t.isFetching,t.isLoaded);return r.a.createElement("div",{className:"shop-page"},r.a.createElement(ee.b,{exact:!0,path:e,render:function(e){return r.a.createElement(Le,Object.assign({isLoading:!n},e))}}),r.a.createElement(ee.b,{path:"".concat(e,"/:collection"),render:function(e){return r.a.createElement(Ue,Object.assign({isLoading:!n},e))}}))}}]),t}(r.a.Component),Re=Object(Z.b)({isFetching:je,isLoaded:we}),Fe=Object(l.b)(Re,function(e){return{collectionsFetchAsync:function(){return e(Oe())}}})(Ae),He=(n(431),n(45)),qe=(n(432),n(433),function(e){var t=e.handleChange,n=e.label,a=e.type,c=Object(pe.a)(e,["handleChange","label","type"]);return"textarea"!==a?r.a.createElement("div",{className:"form-element"},r.a.createElement("input",Object.assign({type:a,className:"form-element__input",onChange:t},c)),n?r.a.createElement("label",{className:"".concat(c.value.length?"form-element__label--shrink":""," form-element__label")},n):null):r.a.createElement("div",{class:"form-element"},r.a.createElement("textarea",Object.assign({className:"form-element__input form-element__input--textarea",onChange:t},c)),n?r.a.createElement("label",{className:"".concat(c.value.length?"form-element__label--shrink":""," form-element__label")}):null)}),Me=function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(K.a)(this,Object(J.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(b.a)({},r,a))},n.handleSubmit=function(){var e=Object(V.a)(B.a.mark(function e(t){var a,r,c;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,ce.signInWithEmailAndPassword(r,c);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:n.setState({email:"",password:""});case 11:case"end":return e.stop()}},e,null,[[2,7]])}));return function(t){return e.apply(this,arguments)}}(),n.state={email:"",password:""},n.hangleChange=n.handleChange.bind(Object(He.a)(n)),n}return Object(X.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"sign-in__title"},"I already have an account"),r.a.createElement("span",{className:"sign-in__subtitle"},"Sign in using email address and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(qe,{name:"email",type:"email",label:"Email",value:this.state.email,required:"required",onChange:this.hangleChange}),r.a.createElement(qe,{name:"password",type:"password",label:"Password",value:this.state.password,required:"required",onChange:this.hangleChange}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Pe,{type:"submit"},"Sign in"),r.a.createElement(Pe,{extraClasses:"button--google",onClick:se},"Sign in with Google"))))}}]),t}(r.a.Component),ze=(n(434),function(e){function t(){var e;return Object(Y.a)(this,t),(e=Object(K.a)(this,Object(J.a)(t).call(this))).handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(b.a)({},r,a))},e.handleSubmit=function(){var t=Object(V.a)(B.a.mark(function t(n){var a,r,c,i,l,o,s;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("Passwords don't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ce.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,s=o.user,t.next=12,le(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}},t,null,[[5,15]])}));return function(e){return t.apply(this,arguments)}}(),e.state={displayName:"",email:"",password:"",confirmPassword:""},e.handleChange=e.handleChange.bind(Object(He.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(He.a)(e)),e}return Object(X.a)(t,e),Object($.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"sign-up__title"},"I don't have an account"),r.a.createElement("span",{className:"sign-up__subtitle"},"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up__form",onSubmit:this.handleSubmit},r.a.createElement(qe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:"required"}),r.a.createElement(qe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:"required"}),r.a.createElement(qe,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:"required"}),r.a.createElement(qe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:"required"}),r.a.createElement(Pe,{type:"submit"},"Sign up")))}}]),t}(r.a.Component)),Ge=function(){return r.a.createElement("div",{className:"sign-page"},r.a.createElement(Me,null),r.a.createElement(ze,null))},We=function(e){return e.cart},Qe=Object(Z.a)([We],function(e){return e.cartItems}),Be=Object(Z.a)([We],function(e){return e.show}),Ve=Object(Z.a)([Qe],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),Ye=Object(Z.a)([Qe],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),$e=(n(435),Object(l.b)(null,function(e){return{removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))},reduceQuantity:function(t){return e(function(e){return{type:y.REDUCE_QUANTITY,payload:e}}(t))},addItem:function(t){return e(Ce(t))}}})(function(e){var t=e.cartItem,n=e.removeItem,a=e.reduceQuantity,c=e.addItem;console.log(t.cartItem);var i=t.imageUrl,l=t.name,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"checkout-item__container checkout-item__container--img"},r.a.createElement("img",{className:"checkout-item__img",src:i,alt:l})),r.a.createElement("div",{className:"checkout-item__container"},r.a.createElement("span",{className:"checkout-item__span"},l)),r.a.createElement("div",{className:"checkout-item__container"},r.a.createElement("span",{className:"checkout-item__span"},r.a.createElement("span",{onClick:function(){return a(t)},className:"checkout-item__arrow"},"\u276e"),s,r.a.createElement("span",{onClick:function(){return c(t)},className:"checkout-item__arrow"},"\u276f"))),r.a.createElement("div",{className:"checkout-item__container"},r.a.createElement("span",{className:"checkout-item__span"},o,"$")),r.a.createElement("div",{className:"checkout-item__container checkout-item__container--remove"},r.a.createElement("span",{onClick:function(){return n(t)},className:"checkout-item__span"},"\u2716")))})),Ke=n(202),Je=n.n(Ke),Xe=function(e){console.log(e),alert("Payment succeded")},Ze=function(e){var t=e.price,n=100*t;return r.a.createElement(Je.a,{amount:n,label:"Pay now",name:"crwn-clothing",billingAddress:!0,shippingAddress:!0,image:"https://www.dziopak.com/img/logo.png",description:"Your total is ".concat(t,"$"),panelLabel:"Pay now",token:Xe,stripeKey:"pk_test_Gnzho3gpjC1LEdTkgzjXl7Kb00PNTcMzQ7"})},et=(n(436),Object(Z.b)({cartItems:Qe,cartTotal:Ve})),tt=Object(l.b)(et)(function(e){var t=e.cartItems,n=e.cartTotal;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-page__header"},r.a.createElement("div",{className:"checkout-page__header-block"},r.a.createElement("span",{className:"checkout-page__block-title"},"Product")),r.a.createElement("div",{className:"checkout-page__header-block"},r.a.createElement("span",{className:"checkout-page__block-title"},"Description")),r.a.createElement("div",{className:"checkout-page__header-block"},r.a.createElement("span",{className:"checkout-page__block-title"},"Quantity")),r.a.createElement("div",{className:"checkout-page__header-block"},r.a.createElement("span",{className:"checkout-page__block-title"},"Price")),r.a.createElement("div",{className:"checkout-page__header-block checkout-page__header-block--short"},r.a.createElement("span",{className:"checkout-page__block-title"},"Remove"))),t.map(function(e){return r.a.createElement($e,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"checkout-page__total"},n,"$"),r.a.createElement(Ze,{price:n}))});function nt(){return(nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var rt=r.a.createElement("title",null,"Group"),ct=r.a.createElement("desc",null,"Created with Sketch."),it=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),lt=function(e){var t=e.svgRef,n=e.title,a=at(e,["svgRef","title"]);return r.a.createElement("svg",nt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?rt:r.a.createElement("title",null,n),ct,it)},ot=r.a.forwardRef(function(e,t){return r.a.createElement(lt,nt({svgRef:t},e))});n.p;function st(){return(st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ut(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var mt=r.a.createElement("g",null),pt=r.a.createElement("g",null),ft=r.a.createElement("g",null),dt=r.a.createElement("g",null),bt=r.a.createElement("g",null),ht=r.a.createElement("g",null),gt=r.a.createElement("g",null),Et=r.a.createElement("g",null),Ot=r.a.createElement("g",null),vt=r.a.createElement("g",null),yt=r.a.createElement("g",null),_t=r.a.createElement("g",null),jt=r.a.createElement("g",null),wt=r.a.createElement("g",null),Nt=r.a.createElement("g",null),kt=function(e){var t=e.svgRef,n=e.title,a=ut(e,["svgRef","title"]);return r.a.createElement("svg",st({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("title",null,n),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),mt,pt,ft,dt,bt,ht,gt,Et,Ot,vt,yt,_t,jt,wt,Nt)},Ct=r.a.forwardRef(function(e,t){return r.a.createElement(kt,st({svgRef:t},e))}),Pt=(n.p,n(437),Object(Z.b)({itemCount:Ye})),St=Object(l.b)(Pt,function(e){return{toggleCartShown:function(){return e(ke())}}})(function(e){var t=e.toggleCartShown,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ct,{className:"cart-icon__img"}),r.a.createElement("span",{className:"cart-icon__counter"},n))}),It=(n(438),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{className:"cart-item__image",src:n,alt:"Shop item: ".concat(c)}),r.a.createElement("div",{className:"cart-item__details"},r.a.createElement("span",{className:"cart-item__name"},c),r.a.createElement("span",{className:"cart-item__price"},i," x ",a,"$")))}),Tt=(n(439),Object(Z.b)({cartItems:Qe})),Dt=Object(ee.g)(Object(l.b)(Tt,function(e){return{toggleCartShown:function(t){return e(ke())}}})(function(e){var t=e.cartItems,n=e.history,a=e.toggleCartShown;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-dropdown__list"},t.length?t.map(function(e){return r.a.createElement(It,{key:e.id,item:e})}):r.a.createElement("span",{className:"cart-dropdown__message"},"Your cart is empty")),r.a.createElement(Pe,{onClick:function(){n.push("/shop/checkout"),a()}},"Checkout"))})),xt=(n(440),Object(Z.b)({show:Be,currentUser:me})),Lt=Object(l.b)(xt)(function(e){var t=e.currentUser,n=e.show;return r.a.createElement("div",{className:"header"},r.a.createElement(o.b,{className:"header__logo-container",to:"/"},r.a.createElement(ot,{className:"header__logo"})),r.a.createElement("div",{className:"menu"},r.a.createElement(o.b,{className:"menu__item",to:"/"},"Homepage"),r.a.createElement(o.b,{className:"menu__item",to:"/shop"},"Shop"),r.a.createElement(o.b,{className:"menu__item",to:"/contact"},"Contact"),t?r.a.createElement("div",{className:"menu__item",onClick:function(){return ce.signOut()}},"Sign out"):r.a.createElement(o.b,{className:"menu__item",to:"/sign-in"},"Sign in"),r.a.createElement(St,null)),n?r.a.createElement(Dt,null):null)});n(441);function Ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function At(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ut(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ut(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Rt=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(K.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(X.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ce.onAuthStateChanged(function(){var t=Object(V.a)(B.a.mark(function t(n){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,le(n);case 3:t.sent.onSnapshot(function(t){e(At({id:t.id},t.data()))}),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Lt,null),r.a.createElement(ee.d,null,r.a.createElement(ee.b,{path:"/",exact:!0,component:ge}),r.a.createElement(ee.b,{path:"/shop/checkout",exact:!0,component:tt}),r.a.createElement(ee.b,{path:"/shop",component:Fe}),r.a.createElement(ee.b,{path:"/sign-in",exact:!0,render:function(){return e.props.currentUser?r.a.createElement(ee.a,{to:"/"}):r.a.createElement(Ge,null)}})))}}]),t}(r.a.Component),Ft=Object(Z.b)({currentUser:me}),Ht=Object(l.b)(Ft,function(e){return{setCurrentUser:function(t){return e(ue(t))}}})(Rt);n(442);i.a.render(r.a.createElement(l.a,{store:G},r.a.createElement(o.a,null,r.a.createElement(s.a,{persistor:W},r.a.createElement(Ht,null)))),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.b9e8a1c9.chunk.js.map