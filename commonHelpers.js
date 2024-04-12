import{a as b,i,S as u}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",L="https://pixabay.com/api/";async function g(r,t){return b(L,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function y(r){return r.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:a,comments:l,downloads:f})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${o}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${o}" 
          alt="${s}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${a}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${l}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${f}</p>
            </div>
        </div>
      </li>
    `).join("")}const p=document.querySelector(".search-form"),h=document.querySelector(".gallery"),x=document.querySelector(".loader"),n=document.querySelector(".js-load-more");p.addEventListener("submit",S);n.addEventListener("click",P);let c=1,m="";async function S(r){if(r.preventDefault(),d(),m=p.elements[0].value.trim(),!m)return d(),i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});try{const{data:t}=await g(m,c);if(t.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let o=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});h.innerHTML=y(t.hits),o.refresh();const s=Math.ceil(t.totalHits/t.hits.length);c<s&&n.classList.replace("load-more-hiden","load-more")}catch{i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{p.elements[0].value="",d()}}async function P(){n.classList.replace("load-more","load-more-hiden"),d(),c+=1;try{const{data:r}=await g(m,c);if(r.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let t=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});h.insertAdjacentHTML("beforeend",y(r.hits)),t.refresh();const o=Math.ceil(r.totalHits/r.hits.length);if(c<o)n.classList.replace("load-more-hiden","load-more");else return n.classList.replace("load-more","load-more-hiden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{d();const r=h.firstElementChild.getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}}function d(){x.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
