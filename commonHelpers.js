import{a as b,i as n,S as h}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",L="https://pixabay.com/api/";async function g(a,t){return b(L,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function y(a){return a.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:l,downloads:f})=>`
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
                <p class="item-box">${r}</p>
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
    `).join("")}const m=document.querySelector(".search-form"),u=document.querySelector(".gallery"),x=document.querySelector(".loader"),c=document.querySelector(".js-load-more");m.addEventListener("submit",S);c.addEventListener("click",P);let i=null,p="";async function S(a){if(a.preventDefault(),d(),i=1,p=m.elements[0].value.trim(),!p)return d(),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});try{const{data:t}=await g(p,i);if(t.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let o=new h(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});u.innerHTML=y(t.hits),o.refresh();const s=Math.ceil(t.totalHits/t.hits.length);i<s&&c.classList.replace("load-more-hiden","load-more")}catch{n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{m.elements[0].value="",d()}}async function P(){c.classList.replace("load-more","load-more-hiden"),d(),i+=1;try{const{data:a}=await g(p,i);let t=new h(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});const o=Math.ceil(a.totalHits/a.hits.length);if(u.insertAdjacentHTML("beforeend",y(a.hits)),t.refresh(),i<o)c.classList.replace("load-more-hiden","load-more");else return c.classList.replace("load-more","load-more-hiden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{d();const a=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}}function d(){x.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
