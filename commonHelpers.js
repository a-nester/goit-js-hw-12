import{a as b,S as v,i as l}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const x="43256839-6988dc73e83ff3bdf7562f6e8",w="https://pixabay.com/api/";async function h(r,t){try{return b(w,{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}catch(o){return o}}function f(r){return r.map(({webformatURL:t,largeImageURL:o,tags:d,likes:e,views:s,comments:i,downloads:L})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${o}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${o}" 
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
                <p class="item-box">${L}</p>
            </div>
        </div>
      </li>
    `).join("")}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".js-load-more");u.addEventListener("submit",S);a.addEventListener("click",H);let g=0,c=1,p="",y=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});async function S(r){if(r.preventDefault(),c=1,m.innerHTML="",n.classList.remove("isHiden"),a.classList.replace("load-more","load-more-hiden"),p=u.elements[0].value.trim(),!p)return n.classList.add("isHiden"),l.error({position:"topRight",message:"Input is empty. Fill input please!"});try{const{data:t}=await h(p,c);if(t.hits.length===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});m.innerHTML=f(t.hits),t.totalHits>t.hits.length&&a.classList.replace("load-more-hiden","load-more"),y.refresh(),g=Math.ceil(t.totalHits/t.hits.length)}catch{a.classList.replace("load-more","load-more-hiden"),l.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{u.elements[0].value="",n.classList.add("isHiden")}}async function H(){a.classList.replace("load-more","load-more-hiden"),n.classList.remove("isHiden"),c+=1;try{const{data:r}=await h(p,c);m.insertAdjacentHTML("beforeend",f(r.hits)),y.refresh(),c<g?a.classList.replace("load-more-hiden","load-more"):l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{l.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{n.classList.add("isHiden");const r=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
