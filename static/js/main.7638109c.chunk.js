(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",MealsLoading:"AvailableMeals_MealsLoading__UmYIn",MealsError:"AvailableMeals_MealsError__38x-D"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=n(10),d=n.n(u),j=Object(s.createContext)({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),m=function(e){var t=Object(s.useContext)(j),n=t.items.reduce((function(e,t){return e+t.amount}),0),c=t.items,a=Object(s.useState)(!1),i=Object(r.a)(a,2),u=i[0],m=i[1];Object(s.useEffect)((function(){if(0!==c.length){m(!0);var e=setTimeout((function(){m(!1)}),300);return function(){clearTimeout(e)}}}),[c]);var b="".concat(d.a.button," ").concat(u?d.a.bump:"");return Object(o.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:n})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),x=n.n(O),f=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"good food"})})]})},h=n(19),p=n.n(h),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(12),C=n(6),N=n.n(C),g=n(20),y=n.n(g),A=function(e){return Object(o.jsx)("div",{className:y.a.card,children:e.children})},M=n(13),w=n.n(M),k=n(4),I=n(21),S=n.n(I),F=Object(s.forwardRef)((function(e,t){return Object(o.jsxs)("div",{className:S.a.input,children:[Object(o.jsxs)("label",{children:[" ",e.label," "]}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),E=n(22),R=n.n(E),D=function(e){var t=Object(s.useRef)();return Object(o.jsxs)("form",{className:R.a.form,onSubmit:function(n){n.preventDefault();var c=+t.current.value;e.onAddToCart(c)},children:[Object(o.jsx)(F,{ref:t,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"})]})},P=function(e){var t=Object(s.useContext)(j),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:w.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:w.a.description,children:e.description}),Object(o.jsx)("div",{className:w.a.price,children:n})]}),Object(o.jsxs)("div",{children:[" ",Object(o.jsx)(D,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})," "]})]})},H=n(14),B=n.n(H),L=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(v.a)(N.a.mark((function e(){var t,n,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-ordering-app-c54ca-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:B.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsxs)("p",{children:[m," "]})});var O=n.map((function(e){return Object(o.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},T=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(L,{})]})},U=n(15),Y=n.n(U),z=function(e){return Object(o.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},J=function(e){return Object(o.jsx)("div",{className:Y.a.modal,children:Object(o.jsxs)("div",{className:Y.a.content,children:[" ",e.children," "]})})},V=document.getElementById("overlays"),Z=function(e){return Object(o.jsxs)(s.Fragment,{children:[a.a.createPortal(Object(o.jsx)(z,{onClose:e.onClose}),V),a.a.createPortal(Object(o.jsxs)(J,{children:[" ",e.children," "]}),V)]})},q=n(5),Q=n.n(q),X=n(7),$=n.n(X),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:$.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:$.a.summary,children:[Object(o.jsx)("span",{className:$.a.price,children:t}),Object(o.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(3),W=n.n(K),ee=function(e){return""===e.trim()},te=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(W.a.control," ").concat(c.name?"":W.a.invalid),m="".concat(W.a.control," ").concat(c.street?"":W.a.invalid),b="".concat(W.a.control," ").concat(c.postalCode?"":W.a.invalid),O="".concat(W.a.control," ").concat(c.city?"":W.a.invalid);return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,r=l.current.value,s=u.current.value,o=d.current.value;console.log("name",n);var j=!ee(n),m=!ee(r),b=5===s.trim().length,O=!ee(o);a({name:j,street:m,city:O,postalCode:b}),console.log("hey",c),j&&m&&b&&O&&e.onConfirm({name:n,street:r,city:o,postalCode:s})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(o.jsx)("p",{children:" Please enter valid name"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:" Please enter valid street"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:" Please enter valid postal"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:" Please enter valid city"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(!1),u=Object(r.a)(l,2),d=u[0],m=u[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),x=O[0],f=O[1],h=Object(s.useContext)(j),p="$".concat(h.totalAmount.toFixed(2)),_=h.items.length>0,C=function(e){h.removeItem(e)},g=function(e){h.addItem(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},y=function(){var e=Object(v.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://food-ordering-app-c54ca-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:m(!1),f(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:Q.a["cart-items"],children:h.items.map((function(e){return Object(o.jsx)(G,{amount:e.amount,name:e.name,price:e.price,onRemove:C.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),M=Object(o.jsxs)("div",{className:Q.a.actions,children:[Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:Q.a.button,onClick:function(){a(!0)},children:"Order"})]}),w=Object(o.jsxs)(i.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:Q.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(te,{onConfirm:y,onCancel:e.onClose}),!c&&M]}),I=Object(o.jsx)("p",{children:"Sending order data..."}),S=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order..."}),Object(o.jsx)("div",{className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Z,{onClose:e.onClose,children:[!d&&!x&&w,d&&I,!d&&x&&S]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ae},se=function(e){var t=Object(s.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(e){a({type:"CLEAR"})}};return Object(o.jsx)(j.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(f,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})})]})};a.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.7638109c.chunk.js.map