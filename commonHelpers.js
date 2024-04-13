import{a as b,i as n,S as h}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L="43256839-6988dc73e83ff3bdf7562f6e8",v="https://pixabay.com/api/";async function y(s,t){return b(v,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function g(s){return s.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:l,downloads:f})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${a}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${a}" 
          alt="${o}" />
          
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
    `).join("")}const m=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".js-load-more");m.addEventListener("submit",x);d.addEventListener("click",S);let i=null,p="";async function x(s){if(s.preventDefault(),c.classList.remove("isHiden"),i=1,p=m.elements[0].value.trim(),console.log(m.elements),!p)return c.classList.add("isHiden"),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});try{const{data:t}=await y(p,i);if(t.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let a=new h(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});u.innerHTML=g(t.hits),a.refresh();const o=Math.ceil(t.totalHits/t.hits.length);i<o&&d.classList.replace("load-more-hiden","load-more")}catch{n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{m.elements[0].value="",c.classList.add("isHiden")}}async function S(){d.classList.replace("load-more","load-more-hiden"),c.classList.remove("isHiden"),i+=1;try{const{data:s}=await y(p,i);let t=new h(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});const a=Math.ceil(s.totalHits/s.hits.length);if(u.insertAdjacentHTML("beforeend",g(s.hits)),t.refresh(),i<a)d.classList.replace("load-more-hiden","load-more");else return d.classList.replace("load-more","load-more-hiden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c.classList.add("isHiden");const s=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
