(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{789:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/event/modify",function(){return n(7306)}])},7306:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return P},default:function(){return M}});var r=n(5893),a=(n(5828),n(7294)),i=n(2649),o=n(2902),u=n(8572),c=n(4051),s=n.n(c),v=n(1163),l=n(7484),d=n.n(l),f=n(6693),p=n(6489),m=n(4988);function _(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}var b=function(){var e,t=(e=s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,r=t.id,e.next=3,fetch("".concat("http://dev-brave-people.o-r.kr/admin/v1","/events/").concat(r),{method:"PUT",headers:h({"Content-Type":"application/json",Authorization:p.parse(document.cookie).access_token},(0,m.P)()),body:JSON.stringify(n)}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){_(i,r,a,o,u,"next",e)}function u(e){_(i,r,a,o,u,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),k=n(5158),w=n(6274),x=n(4719);function y(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}var S=function(e){var t=e.event,n=(0,v.useRouter)(),i=n.query.id,o=void 0===i?"":i,u=(0,a.useState)(null===t||void 0===t?void 0:t.title),c=u[0],l=u[1],p=(0,a.useState)(null===t||void 0===t?void 0:t.description),m=p[0],_=p[1],g=(0,a.useState)(null===t||void 0===t?void 0:t.organizer),h=g[0],S=g[1],D=(0,a.useState)(null===t||void 0===t?void 0:t.event_link),P=D[0],M=D[1],j=(0,a.useState)(null===t||void 0===t?void 0:t.tags.map((function(e){return e.tag_name}))),O=j[0],T=j[1],E=(0,x.k)({title:c,organizer:h,eventLink:P,tags:O}),H=E.error,N=E.validateForm,Y=(0,a.useState)(new Date(null===t||void 0===t?void 0:t.start_date_time)),z=Y[0],L=Y[1],C=(0,a.useState)(new Date(null===t||void 0===t?void 0:t.start_date_time)),U=C[0],Z=C[1],q=(0,a.useState)(new Date(null===t||void 0===t?void 0:t.end_date_time)),F=q[0],I=q[1],X=(0,a.useState)(new Date(null===t||void 0===t?void 0:t.end_date_time)),A=X[0],J=X[1],R=(0,a.useState)(null===t||void 0===t?void 0:t.cover_image_link),B=R[0],G=R[1],K=function(){var e,r=(e=s().mark((function e(r){var a,i,u,v,l,p,_,g,w;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.stopPropagation(),c&&h&&P&&O.length){e.next=4;break}return e.abrupt("return",N());case 4:a=!0,i=!1,u=void 0,e.prev=5,v=O[Symbol.iterator]();case 7:if(a=(l=v.next()).done){e.next=21;break}if(p=l.value,(_=null===t||void 0===t?void 0:t.tags).length){e.next=15;break}return e.next=13,(0,f.L)({tag_name:p});case 13:e.next=18;break;case 15:if(!_.every((function(e){return e.tag_name!==p}))){e.next=18;break}return e.next=18,(0,f.L)({tag_name:p});case 18:a=!0,e.next=7;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(5),i=!0,u=e.t0;case 27:e.prev=27,e.prev=28,a||null==v.return||v.return();case 30:if(e.prev=30,!i){e.next=33;break}throw u;case 33:return e.finish(30);case 34:return e.finish(27);case 35:return g={title:c,description:m,organizer:h,display_sequence:0,event_link:P,start_date_time:d()(z).format("YYYY-MM-DD HH:MM"),start_time:d()(U).format("HH:MM"),end_date_time:d()(F).format("YYYY-MM-DD HH:MM"),end_time:d()(A).format("HH:MM"),tags:null===O||void 0===O?void 0:O.map((function(e){return{tag_name:e}})),cover_image_link:B},e.next=38,b({data:g,id:o.toString()});case 38:if((w=e.sent).status_code!==k.vz){e.next=41;break}return e.abrupt("return",n.reload());case 41:return e.abrupt("return",alert(w.message));case 42:case"end":return e.stop()}}),e,null,[[5,23,27,35],[28,,30,34]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){y(i,r,a,o,u,"next",e)}function u(e){y(i,r,a,o,u,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"list",children:(0,r.jsx)(w.Z,{title:c,description:m,organizer:h,eventLink:P,tags:O,setTags:T,allTags:null===t||void 0===t?void 0:t.tags,changeTitle:function(e){l(e.target.value)},changeDescription:function(e){_(e.target.value)},changeOrganizer:function(e){S(e.target.value)},changeEventLink:function(e){M(e.target.value)},startDate:z,setStartDate:L,startTime:U,setStartTime:Z,endDate:F,setEndDate:I,endTime:A,setEndTime:J,error:H,coverImageUrl:B,setCoverImageUrl:G,saveForm:K,isModify:!0})})},D=new i.Su,P=!0,M=function(e){var t=e.token,n=e.event;return(0,a.useEffect)((function(){t&&(0,o.Z)(document,t)}),[]),(0,r.jsx)(i.aH,{client:D,children:(0,r.jsx)(u.Z,{title:"\uac1c\ubc1c\uc790 \ud589\uc0ac \uc218\uc815",children:(0,r.jsx)(S,{event:n})})})}}},function(e){e.O(0,[492,552,900,215,774,888,179],(function(){return t=789,e(e.s=t);var t}));var t=e.O();_N_E=t}]);