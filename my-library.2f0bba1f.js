var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("cTOKP"),a=n("baGT8");function s(e){const t=e.map((e=>{return`<li class="film__item" id="${e.id}"><a class="film__item__link">\n                ${r=e.poster_path,n=e.name,i=e.title,r?`<img src=" ${a=r,`https://www.themoviedb.org/t/p/w500${a}`}" alt="${n||i}" loading="lazy" />`:""}\n                <h2>${function(e){if(e)return e.length>=32?e.substr(0,25)+"...":e}(e.title||e.name)}</h2>\n                <p> ${function(e){const t=[];if(o.map((r=>{for(const n of e)r.id===n&&t.push(r.name)})),t.length>=2){const e=t.slice(0,2);return e[2]="Other",e}return"Other"}(e.genres)} | ${t=e.release_date,t?t.split("-")[0]:"2022"}</p>\n                <button class="film__trailer-btn" type="button">Trailer <span class="film__trailer-btn">&#9654;</span></button>\n              </a>\n            </li>`;var t,r,n,i,a})).join("");p.cardHolderLibrary.innerHTML=t}n("1iCTa");const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var c=n("2Dfe2"),d=n("2nhTy");const l=document.querySelector(".empty__page"),u=document.querySelector(".empty__page-text");let m=1;function y(e=0){e&&(m=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,c.spiner)();const t=JSON.parse(localStorage.getItem("movies-watched"));t?.length?_(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,c.spinerRemove)())}function g(e=0){e&&(m=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,c.spiner)();const t=JSON.parse(localStorage.getItem("movies-queue"));t?.length?_(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,c.spinerRemove)())}function _(e){let t=null;e.length<=18&&(s(e),(0,c.spinerRemove)()),t=e.length%18?Math.floor(e.length/18)+1:e.length/18,m===t?(s(e.slice(18*m-18,e.length)),(0,c.spinerRemove)()):(s(e.slice(18*m-18,18*m)),(0,c.spinerRemove)()),(0,d.getPagination)(m,t,!0)}c=n("2Dfe2");var h=n("eAoKO"),b=n("422V3"),f=n("ka9Wh");const p={cardHolderLibrary:document.querySelector(".card-holder"),footerLink:document.querySelector(".footer__link"),stickyHeaderMyLibrary:document.querySelector(".js-my-library-header__sticky"),watchedBtn:document.querySelector(".js-watched"),queuedBtn:document.querySelector(".js-queue"),movieModal:document.querySelector(".js-movie-modal"),pagination:document.querySelector(".pagination__container")},L=(window.onscroll=function(){window.pageYOffset>200?p.stickyHeaderMyLibrary.classList.add("my-library-header__sticky"):p.stickyHeaderMyLibrary.classList.remove("my-library-header__sticky")},new(0,i.default));p.footerLink.addEventListener("click",a.onOpenTeamModal),p.cardHolderLibrary.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;if(e.target.classList.contains("film__trailer-btn"))return h.default.showTrailer(e.target.closest("li").id);L.movieId=e.target.closest("li").id,(0,c.spiner)(),L.fetchById().then((e=>{(0,b.showModal)(e.data),(0,c.spinerRemove)()}))})),p.watchedBtn.addEventListener("click",(function(e){if(e.target.classList.contains("my-library-header__button--current"))return;e.target.classList.add("my-library-header__button--current"),p.queuedBtn.classList.remove("my-library-header__button--current"),p.cardHolderLibrary.innerHTML="",y(1)})),p.queuedBtn.addEventListener("click",(function(e){if(e.target.classList.contains("my-library-header__button--current"))return;e.target.classList.add("my-library-header__button--current"),p.watchedBtn.classList.remove("my-library-header__button--current"),p.cardHolderLibrary.innerHTML="",g(1)})),p.movieModal.addEventListener("click",(function(e){if(e.target.classList.contains("add-watched")&&p.watchedBtn.classList.contains("my-library-header__button--current")){const e=p.cardHolderLibrary.children.length;p.cardHolderLibrary.innerHTML="",y(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}if(e.target.classList.contains("add-queue")&&p.queuedBtn.classList.contains("my-library-header__button--current")){const e=p.cardHolderLibrary.children.length;p.cardHolderLibrary.innerHTML="",g(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}})),p.pagination.addEventListener("click",(function(e){if(e.target===e.currentTarget||"UL"===e.target.nodeName)return;let t=null;if("svg"===e.target.nodeName||"BUTTON"===e.target.nodeName||"path"===e.target.nodeName)if(e.target.closest("button").classList.contains("pagination__left-btn")&&e.target.closest("button").classList.contains("on"))t=Number(document.querySelector(".pagination__item--current").id)-1;else{if(!e.target.closest("button").classList.contains("pagination__right-btn")||!e.target.closest("button").classList.contains("on"))return;t=Number(document.querySelector(".pagination__item--current").id)+1}else{if(isNaN(e.target.closest("li").id))return"..."===e.target.closest("li").id?L.query?successPages(1,1):successPages(1):void 0;t=Number(e.target.closest("li").id)}p.watchedBtn.classList.contains("my-library-header__button--current")?((0,f.onSubmitScroll)(),y(t)):((0,f.onSubmitScroll)(),g(t))})),y();
//# sourceMappingURL=my-library.2f0bba1f.js.map
