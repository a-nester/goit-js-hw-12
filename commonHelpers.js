import{a as L,S as b,i as n}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",x="https://pixabay.com/api/";async function h(o,t){try{return L(x,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}catch(r){return r}}function g(o){return o.map(({webformatURL:t,largeImageURL:r,tags:d,likes:e,views:s,comments:l,downloads:y})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${r}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${r}" 
          alt="${d}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${s}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${l}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${y}</p>
            </div>
        </div>
      </li>
    `).join("")}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".js-load-more");u.addEventListener("submit",w);i.addEventListener("click",S);let a=1,p="",f=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});async function w(o){if(o.preventDefault(),a=1,m.innerHTML="",c.classList.remove("isHiden"),i.classList.replace("load-more","load-more-hiden"),p=u.elements[0].value.trim(),!p)return c.classList.add("isHiden"),n.error({position:"topRight",message:"Input is empty. Fill input please!"});try{const{data:t}=await h(p,a);if(t.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});m.innerHTML=g(t.hits);const r=Math.ceil(t.totalHits/t.hits.length);a<r&&i.classList.replace("load-more-hiden","load-more"),f.refresh()}catch{i.classList.replace("load-more","load-more-hiden"),n.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{u.elements[0].value="",c.classList.add("isHiden")}}async function S(){i.classList.replace("load-more","load-more-hiden"),c.classList.remove("isHiden"),a+=1;try{const{data:o}=await h(p,a);m.insertAdjacentHTML("beforeend",g(o.hits)),f.refresh();const t=Math.ceil(o.totalHits/o.hits.length);console.log(t),console.log(a),a<t?i.classList.replace("load-more-hiden","load-more"):n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{n.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{c.classList.add("isHiden");const o=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
