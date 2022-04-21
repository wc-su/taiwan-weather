(()=>{var e={779:()=>{screen.width>768&&document.addEventListener("mousemove",(function(e){let t=e.clientX,n=e.clientY,c=document.querySelector("#js-jumbotron"),a=c.getBoundingClientRect().top,o=(c.getBoundingClientRect().height,c.getBoundingClientRect().bottom),l=c.getBoundingClientRect().width,i=document.querySelector("#mouse");i.style.opacity=n<a||n>o?"0":"1",i.style.top=n+"px",i.style.left=t+"px",document.querySelector(".jumbotron__cloud01").style.transform="translateX("+n/10+"px)",document.querySelector(".jumbotron__cloud02").style.transform="translateX("+t/-15+"px)",document.querySelector(".jumbotron__cloud03").style.transform="translateX("+n/-15+"px)";let r=l/2;document.querySelector(".jumbotron__heading").style.transform=t<r?"translateX("+n/-20+"px)":"translateX("+n/20+"px)"}))}},t={};function n(c){var a=t[c];if(void 0!==a)return a.exports;var o=t[c]={exports:{}};return e[c](o,o.exports,n),o.exports}(()=>{"use strict";function e(e){const t=document.querySelector("head"),n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=`./dist/css/${e}`,t.appendChild(n)}async function t(e,t=null){let n=`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${e}?Authorization=CWB-A91E69B8-CE2E-4DDA-A1F5-A22448AA9D4C&format=JSON`;t&&(n+=`&locationName=${t}`);const c=await fetch(n);return await c.json()}window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop,t=document.querySelector(".js-header");e>55?t.classList.add("class","header--colored"):t.classList.remove("class","header--colored")})),n(779);const c={PoP12h:!0,T:!0,RH:!1,MinCI:!1,WS:!1,MaxAT:!1,Wx:!0,MaxCI:!1,MinT:!0,UVI:!1,WeatherDescription:!1,MinAT:!1,MaxT:!0,WD:!1,Td:!1};const a={Wx:!0,PoP:!0,MinT:!0,CI:!1,MaxT:!0};function o(e){let t="";return e<=1?t='<svg viewbox="-50 -50 100 100">\n        <circle class="sun" cx="0" cy="0" r="22"></circle>\n    </svg>':e<=3?t='<svg viewbox="-50 -50 100 100">\n        <circle class="sun" cx="0" cy="0" r="22"></circle>\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>':e<=7?t='<svg viewbox="-63 -40 100 100">\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>':e<=22&&(t='<svg viewbox="-63 -40 100 100">\n        <line\n            class="rain"\n            x1="-25"\n            y1="15"\n            x2="-25"\n            y2="35"\n        ></line>\n        <line\n            class="rain"\n            x1="-14"\n            y1="5"\n            x2="-14"\n            y2="25"\n        ></line>\n        <line class="rain" x1="-5" y1="20" x2="-5" y2="45"></line>\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>'),(new DOMParser).parseFromString(t,"text/html").querySelector("svg")}function l(e){const t=document.createElement("div");t.classList.add("weather__loading"),t.innerHTML=`<div class="weather__loading-bg">\n        <div class="weather__loading-bg-circle"></div>\n        <div class="weather__loading-bg-rect"></div>\n    </div>\n    <div class="weather__loading-content">\n        <p>${e}<p>\n        <div class="weather__loading-dot">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>`,document.body.appendChild(t)}function i(){const e=document.querySelector(".weather__loading");e.classList.add("weather__loading--close"),setTimeout((()=>{document.body.removeChild(e)}),1e3)}e("weatherLoadingEffect.css");let r=null,s=null,d=0,u=0,h=0,p=!1;const g={flag:!1,locationName:""},v=document.querySelector(".weather__render"),w=document.querySelector(".weather__render-observer"),_=document.querySelector(".weather__UpdateTime > span"),x=document.querySelector(".icon-arrows-cw"),y=new IntersectionObserver((([e])=>{e&&e.isIntersecting&&function(){let e=0;g.flag?p||(e=r.findIndex((e=>e.locationName==g.locationName)),-1==e?(d=0,u=3*d,h=Math.min(r.length,u+3),g.flag=!1):(u=e,h=u+1)):p?u=0:(u=3*d,h=Math.min(r.length,u+3)),function(){for(let e=u;e<h;e++){const t=r[e],n=document.createElement("label");n.classList.add("weather__itme");const c=document.createElement("input");c.classList.add("switch_weather"),c.type="checkbox";const a=document.createElement("div");a.classList.add("weather__weekWeather"),b(t.locationName,a);const l=document.createElement("div");l.textContent=t.locationName,l.classList.add("weather__info-county");const i=document.createElement("div");i.textContent=`${t.MaxT[0]}°C`,i.classList.add("weather__info-temperature");const s=document.createElement("div");s.textContent=t.Wx[0],s.classList.add("weather__info-meteorological");const d=document.createElement("div");d.appendChild(i),d.appendChild(s);const u=document.createElement("div");u.classList.add("weather__info"),u.appendChild(l),u.appendChild(d);const m=document.createElement("div");m.classList.add("weather__chart");for(let e=0;e<t.time.length;e++){const n=document.createElement("div");n.classList.add("weather__dayweather");const c=document.createElement("div");c.classList.add("weather__chart-time");const a=new Date(t.time[e].replace(/-/gi,"/"));c.textContent=`${a.getHours()} ${a.getHours()>=12?"PM":"AM"}`;const l=document.createElement("div");l.classList.add("weather__dayweather-icon"),l.appendChild(o(t.Wx2[e]));const i=document.createElement("div");i.classList.add("weather__chart-temperature");const r=document.createElement("div"),s=document.createElement("div");r.textContent=`${t.MaxT[e]}°`,s.textContent=`${t.MinT[e]}°`,i.appendChild(r),i.appendChild(s),n.appendChild(c),n.appendChild(l),n.appendChild(i),m.appendChild(n)}n.appendChild(c),n.appendChild(a),n.appendChild(u),n.appendChild(m),v.appendChild(n)}}(),(g.flag&&-1!=e||h==r.length)&&y.unobserve(w),p?p=!1:d++}()}));function f(e){g.flag=!0,g.locationName=e,v.innerHTML="",y.observe(w)}const C={0:"SUN",1:"MON",2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT"};function b(e,t){const n=s.findIndex((t=>t.locationName==e)),c=s[n];for(let e=0;e<c.time.length;e++){const n=document.createElement("div");n.classList.add("weather__weekWeather-item");const a=new Date(c.time[e]).getDay(),l=document.createElement("h3");l.textContent=C[a],n.appendChild(l),n.append(o(c.Wx2[e])),t.appendChild(n)}}async function L(){r=await async function(e=null){return function(e){const t=[],n=e.records.location;let c=[];for(let e=0,o=n.length;e<o;e++){let o={};const l=n[e],i=l.weatherElement;for(let t=0,n=i.length;t<n;t++){const n=i[t];if(!a[`${n.elementName}`])continue;let l=n.time,r=(l.length,null),s=[],d=[];for(let a=0;(r=l[a])&&(0==e&&0==t&&c.push(r.startTime),"Wx"==n.elementName&&d.push(r.parameter.parameterValue),s.push(r.parameter.parameterName.trim()),!(s.length>=3));a++);o[`${n.elementName}`]=s,d.length>0&&(o[`${n.elementName}2`]=d)}o.time=c,o.locationName=l.locationName,t.push(o)}return t}(await t("F-C0032-001",e))}(),s=await async function(e=null){return function(e){const t=[],n=e.records.locations[0].location;let a=[];for(let e=0,o=n.length;e<o;e++){let o={};const l=n[e],i=l.weatherElement;for(let t=0,n=i.length;t<n;t++){const n=i[t];if(!c[`${n.elementName}`])continue;let l=n.time,r=(l.length,null),s=[],d=[],u=null;for(let c=0;r=l[c];c++){const c=new Date(r.startTime);if((!u||u.getDate()!=c.getDate())&&(0==e&&0==t&&a.push(r.startTime),"Wx"==n.elementName&&d.push(r.elementValue[1].value.trim()),s.push(r.elementValue[0].value.trim()),u=c,s.length>=7))break}o[`${n.elementName}`]=s,d.length>0&&(o[`${n.elementName}2`]=d)}o.time=a,o.locationName=l.locationName,t.push(o)}return t}(await t("F-D0047-091",e))}();const e=new Date;_.textContent=`更新時間：${e.getMonth()+1}/${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}window.addEventListener("DOMContentLoaded",(async function(){l("載入中"),await L(),y.observe(w),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){let t=e.coords.latitude,n=e.coords.longitude,c=9999,a="台北";document.querySelector("#geolocationIp").innerHTML=` <div>\n                                您的地理位置\n                                </div>\n                                <div>\n                                  <span class="phoneIp">\n                                    E:\n                                  </span>\n                                  ${t}\n                                </div>\n                                <div>\n                                  <span class="phoneIp">\n                                  N:\n                                  </span>\n                                  ${n}\n                                </div>`,fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-EF46CCF9-7FB5-4120-AA40-CFDDA8BC249C").then((e=>e.json())).then((e=>{e.records.locations[0].location.forEach((e=>{let o=e.lat,l=e.lon,i=((t-o)*(t-o)+(n-l)*(n-l))**.5;c>i&&(c=i,a=e.locationName)})),f(a),i()}))}),(function(){i()})):m.innerHTML="您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址"})),x.addEventListener("click",(async e=>{e.preventDefault(),l("資料更新中"),await L(),i(),p=!0,v.innerHTML="",y.observe(w)}));let E=document.querySelector(".weather__menu-bar"),S=document.createElement("div"),N=["全臺縣市","臺北市","新北市","桃園市","臺中市","臺南市","高雄市","基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣"];function M(){E.lastChild==S&&E.removeChild(E.lastChild)}E.addEventListener("click",(e=>{let t=document.querySelector("#weather__menu-bar-icon");if("icon-down-open-big"==e.target.className)return function(){if(S.classList.add("weather__menu-bar-options"),E.appendChild(S),!S.firstChild)for(let e=0;e<N.length;e++){let t=N[e],n=document.createElement("button");n.classList.add("weather__menu-bar-option"),n.value=t,n.innerHTML=t,S.appendChild(n)}}(),t.classList.remove("icon-down-open-big"),void t.classList.add("icon-up-open-big");if("icon-up-open-big"==e.target.className)return M(),t.classList.remove("icon-up-open-big"),void t.classList.add("icon-down-open-big");if("weather__menu-bar-option"==e.target.className){let n=e.target.value,c=E.querySelector(".weather__menu-bar-text");return M(),c.innerHTML=n,t.classList.remove("icon-up-open-big"),t.classList.add("icon-down-open-big"),void f(n)}}),!1),e("base.css"),e("layout.css"),e("component.css")})()})();