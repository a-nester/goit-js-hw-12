import{a as L,S as b,i as l}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",x="https://pixabay.com/api/";async function h(o,t){try{return L(x,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}catch(r){return r}}function f(o){return o.map(({webformatURL:t,largeImageURL:r,tags:d,likes:e,views:s,comments:i,downloads:y})=>`
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
                <p class="item-box">${i}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${y}</p>
            </div>
        </div>
      </li>
    `).join("")}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".js-load-more");u.addEventListener("submit",w);a.addEventListener("click",S);let c=1,p="",g=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});async function w(o){if(o.preventDefault(),m.innerHTML="",n.classList.remove("isHiden"),a.classList.replace("load-more","load-more-hiden"),p=u.elements[0].value.trim(),!p)return n.classList.add("isHiden"),l.error({position:"topRight",message:"Input is empty. Fill input please!"});try{const{data:t}=await h(p,c);if(t.hits.length===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});m.innerHTML=f(t.hits);const r=Math.ceil(t.totalHits/t.hits.length);c<r&&a.classList.replace("load-more-hiden","load-more"),g.refresh()}catch{a.classList.replace("load-more","load-more-hiden"),l.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{u.elements[0].value="",n.classList.add("isHiden")}}async function S(){a.classList.replace("load-more","load-more-hiden"),n.classList.remove("isHiden"),c+=1;try{const{data:o}=await h(p,c);m.insertAdjacentHTML("beforeend",f(o.hits)),g.refresh();const t=Math.ceil(o.totalHits/o.hits.length);c<t?a.classList.replace("load-more-hiden","load-more"):l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{l.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{n.classList.add("isHiden");const o=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
