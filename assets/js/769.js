(self.webpackChunksoftline=self.webpackChunksoftline||[]).push([[769],{2579:function(e,t,i){"use strict";var o=i(7652),n=i(8678);new o.Z(".swiper",{modules:[n.W_,n.tl],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},spaceBetween:100})},8775:function(e,t,i){"use strict";function o(e){const t=document.createElement("button");return t.type="button",t.classList.add("button","button_tab"),t.textContent=e,t}const n=[{city:"Москва",region:"Москва",coordinates:[223.9,141.5],size:"medium"},{city:"Воронеж",region:"Центр",coordinates:[245.91,93.5],size:"small"},{city:"Ярославль",region:"Центр",coordinates:[196.9,179],size:"small"},{city:"Белгород",region:"Центр",coordinates:[276.08,90.5],size:"small"},{city:"Санкт-Петербург",region:"Северо-Запад",coordinates:[130.68,149.5],size:"large"},{city:"Калининград",region:"Северо-Запад",coordinates:[123.58,38.5],size:"small"},{city:"Ростов-на-Дону",region:"Юг",coordinates:[319.18,81.38],size:"medium"},{city:"Краснодар",region:"Юг",coordinates:[378.58,49.87],size:"medium"},{city:"Волгоград",region:"Юг",coordinates:[360.58,108.5],size:"small"},{city:"Казань",region:"Волга",coordinates:[298.18,249.67],size:"small"},{city:"Самара",region:"Волга",coordinates:[306.18,187.5],size:"small"},{city:"Уфа",region:"Волга",coordinates:[336.18,253.67],size:"small"},{city:"Оренбург",region:"Волга",coordinates:[364.58,219.67],size:"small"},{city:"Нижний Новгород",region:"Волга",coordinates:[260.04,192.17],cityShortName:"Н. Новгород",size:"small"},{city:"Екатеринбург",region:"Урал",coordinates:[328.18,320.9],size:"small"},{city:"Челябинск",region:"Урал",coordinates:[362.58,318.5],size:"medium"},{city:"Пермь",region:"Урал",coordinates:[299.18,379.5],size:"medium"},{city:"Сургут",region:"Урал",coordinates:[311.18,433],size:"small"},{city:"Тюмень",region:"Урал",coordinates:[362.58,411.5],size:"medium"},{city:"Ижевск",region:"Урал",coordinates:[289.18,326.4],size:"small"},{city:"Новосибирск",region:"Сибирь",coordinates:[453.74,511],size:"small"},{city:"Омск",region:"Сибирь",coordinates:[473.74,458.5],size:"medium"},{city:"Томск",region:"Сибирь",coordinates:[457.74,577.5],size:"medium"},{city:"Красноярск",region:"Сибирь",coordinates:[455.74,634.5],size:"small"},{city:"Иркутск",region:"Сибирь",coordinates:[488.74,690.5],size:"medium"},{city:"Хабаровск",region:"Дальний Восток",coordinates:[496.74,984.5],size:"large"},{city:"Владивосток",region:"Дальний Восток",coordinates:[574,971.63],size:"large"}];var s=i(2774),c=i.n(s);function r(e){const t=new(c()),i=document.documentElement.scrollWidth<=720?.72:document.documentElement.scrollWidth<=1200?.97:1,o=document.documentElement.scrollWidth<=375?8:0,n=document.documentElement.scrollWidth<=375?-1:0,s=document.createElement("div");s.classList.add("offices__city-point"),s.style=`top: ${e.coordinates[0]*i+n}px; left: ${e.coordinates[1]*i+o}px;`;const r=document.createElement("span");return r.classList.add("offices__city-point-name",`offices__city-point-name_${e.size}`),r.textContent=e.cityShortName?e.cityShortName:e.city,r.dataset.pointName=t.transform(e.city).toLowerCase(),s.appendChild(r),s}function a(e,t){e.classList.add("offices__backdrop_fade"),t.classList.add("offices__dropdown_move"),window.setTimeout((()=>{e.classList.add("visually-hidden"),t.classList.add("visually-hidden")}),300)}const l=document.getElementById("offices-map"),d=document.getElementById("offices-regions"),u=document.getElementById("offices-dropdown"),f=o("Все"),m=document.getElementById("offices__select"),p=document.getElementById("offices__backdrop"),_=document.getElementById("offices__select").querySelector(".offices__select-arrow");f.classList.add("button_active-tab"),d.appendChild(f),n.map((e=>e.region)).filter(((e,t,i)=>i.indexOf(e)===t)).forEach((e=>{d.appendChild(o(e)),u.appendChild(function(e){const t=new(c()),i=document.createElement("span"),o=document.createElement("div");i.classList.add("offices__dropdown-region-name"),i.textContent=e,i.dataset.regionName=t.transform(e).toLowerCase();const n="moskva"!==i.dataset.regionName?document.createElement("div"):null;return null!==n&&(i.addEventListener("click",(()=>{document.querySelectorAll(".offices__dropdown-cities").forEach((e=>{e.classList.contains("offices__dropdown-cities_visible")&&e.classList.contains("offices__dropdown-cities_flexible")&&(e.classList.remove("offices__dropdown-cities_visible"),window.setTimeout((()=>{e.classList.remove("offices__dropdown-cities_flexible")}),300))})),n.classList.contains("offices__dropdown-cities_visible")||n.classList.contains("offices__dropdown-cities_flexible")?(n.classList.remove("offices__dropdown-cities_visible"),window.setTimeout((()=>{n.classList.remove("offices__dropdown-cities_flexible")}),300)):(n.classList.add("offices__dropdown-cities_flexible"),window.setTimeout((()=>{n.classList.add("offices__dropdown-cities_visible")}),1))})),n.classList.add("offices__dropdown-cities")),o.classList.add("offices__dropdown-region"),o.appendChild(i),null!==n&&o.appendChild(n),o}(e))})),n.forEach((e=>{l.appendChild(r(e)),u.querySelectorAll(".offices__dropdown-region-name").forEach((t=>{e.region===t.textContent&&"Москва"!==e.city&&function(e,t){const i=document.createElement("span");i.classList.add("offices__dropdown-city"),i.textContent=t,e.closest(".offices__dropdown-region").querySelector(".offices__dropdown-cities").appendChild(i)}(t,e.city)}))})),document.documentElement.scrollWidth<=375&&l.closest(".offices__map-wrapper").scrollTo(35,0),p.addEventListener("click",(()=>{a(p,u),_.classList.contains("offices__select-arrow_rotate")&&_.classList.remove("offices__select-arrow_rotate")})),m.addEventListener("click",(()=>{p.classList.contains("visually-hidden")&&u.classList.contains("visually-hidden")?(_.classList.add("offices__select-arrow_rotate"),function(e){e.classList.remove("visually-hidden","offices__backdrop_fade")}(p),function(e){e.classList.remove("visually-hidden","offices__dropdown_move")}(u)):(_.classList.remove("offices__select-arrow_rotate"),a(p,u))}));const g=d.querySelectorAll(".button_tab");d.querySelectorAll(".button_tab").forEach((e=>e.addEventListener("click",(()=>{!function(e,t,i){e.classList.contains("button_active-tab")||(t.forEach((e=>{e.classList.remove("button_active-tab")})),e.classList.add("button_active-tab"),i.innerHTML="","Все"===e.textContent?n.forEach((e=>{i.appendChild(r(e))})):n.filter((t=>t.region===e.textContent)).forEach((e=>{i.appendChild(r(e))})))}(e,g,l)}))))},2774:function(e,t,i){"use strict";e.exports=function(e){const t=i(6668),o=e?e.preset:"ru",n={"а":"a","б":"b","в":"v","д":"d","з":"z","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","ь":""};let s;"ru"===o?Object.assign(n,{"г":"g","и":"i","ъ":"","ы":"i","э":"e"}):"uk"===o?Object.assign(n,{"г":"h","ґ":"g","е":"e","и":"y","і":"i","'":"","’":"","ʼ":""}):"mn"===o&&Object.assign(n,{"г":"g","ө":"o","ү":"u","и":"i","ы":"y","э":"e","ъ":""}),"ru"===o?s=Object.assign(t(n),{i:"и","":""}):("uk"===o||"mn"===o)&&(s=Object.assign(t(n),{"":""}));const c="ru"===o?{"е":"ye"}:{"є":"ye","ї":"yi"},r={"ё":"yo","ж":"zh","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ю":"yu","я":"ya"},a=Object.assign({},r,c),l=Object.assign(t(a)),d=Object.assign(n,a),u=Object.assign({},n,{"й":"i"});let f;"ru"===o?Object.assign(u,{"е":"e"}):"uk"===o?Object.assign(u,{"ї":"i"}):"mn"===o&&Object.assign(u,{"е":"e"}),"ru"===o?f=Object.assign(t(n),{i:"и",y:"ы",e:"е","":""}):"uk"===o&&(f=Object.assign(t(n),{"":""}));let m={};"uk"===o&&(m={"є":"ie","ю":"iu","я":"ia"});const p=Object.assign(r,m),_=Object.assign(t(p)),g=Object.assign(u,p);return{transform:function(e,t){if(!e)return"";const i=e.normalize();let n="",s=!1;for(let e=0;e<i.length;e++){const c=i[e]===i[e].toUpperCase();let r,a=i[e].toLowerCase();" "!==a?("uk"===o&&"зг"===i.slice(e-1,e+1).toLowerCase()?r="gh":0===e||s?(r=d[a],s=!1):r=g[a],void 0===r?n+=c?a.toUpperCase():a:c?r.length>1?n+=r[0].toUpperCase()+r.slice(1):n+=r.toUpperCase():n+=r):(n+=t||" ",s=!0)}return n},reverse:function(e,t){if(!e)return"";const i=e.normalize();let o="",n=!1,c=0;for(;c<i.length;){const e=i[c]===i[c].toUpperCase();let r,a=i[c].toLowerCase(),d=c;if(" "===a||a===t){o+=" ",n=!0,c++;continue}let u=i.slice(c,c+2).toLowerCase();0===c||n?(r=l[u],r?c+=2:(r=s[a],c++),n=!1):(r=_[u],r?c+=2:(r=f[a],c++)),"shch"===i.slice(d,d+4).toLowerCase()?(r="щ",c=d+4):"zgh"===i.slice(d-1,d+2).toLowerCase()&&(r="г",c=d+2),void 0===r?o+=e?a.toUpperCase():a:e?r.length>1?o+=r[0].toUpperCase()+r.slice(1):o+=r.toUpperCase():o+=r}return o}}}},6668:function(e){var t,i,o=9007199254740991,n="[object Arguments]",s="[object Function]",c="[object GeneratorFunction]",r=/^(?:0|[1-9]\d*)$/,a=Object.prototype,l=a.hasOwnProperty,d=a.toString,u=a.propertyIsEnumerable,f=(t=Object.keys,i=Object,function(e){return t(i(e))});function m(e,t,i,o){return function(e,t){e&&function(e,t,i){for(var o=-1,n=Object(e),s=i(e),c=s.length;c--;){var r=s[++o];if(!1===t(n[r],r,n))break}}(e,t,w)}(e,(function(e,n,s){t(o,i(e),n,s)})),o}function p(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<t}var _=Array.isArray;function g(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?d.call(e):"";return t==s||t==c}(e)}var y,b,h,v=(y=function(e,t,i){e[t]=i},h=function(e){return e},b=function(){return h},function(e,t){return m(e,y,b(),{})});function w(e){return g(e)?function(e,t){var i=_(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&g(e)}(e)&&l.call(e,"callee")&&(!u.call(e,"callee")||d.call(e)==n)}(e)?function(e,t){for(var i=-1,o=Array(e);++i<e;)o[i]=t(i);return o}(e.length,String):[],o=i.length,s=!!o;for(var c in e)!t&&!l.call(e,c)||s&&("length"==c||p(c,o))||i.push(c);return i}(e):function(e){if(i=(t=e)&&t.constructor,t!==("function"==typeof i&&i.prototype||a))return f(e);var t,i,o=[];for(var n in Object(e))l.call(e,n)&&"constructor"!=n&&o.push(n);return o}(e)}e.exports=v}}]);