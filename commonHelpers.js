import{a as b,S as L,i as l}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",x="https://pixabay.com/api/";async function h(s,t){return b(x,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function g(s){return s.map(({webformatURL:t,largeImageURL:o,tags:d,likes:e,views:r,comments:i,downloads:f})=>`
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
                <p class="item-box">${r}</p>
            </div>
            <div>
                <p class="item-box-bolt">Comments</p>
                <p class="item-box">${i}</p>
            </div>
            <div>
                <p class="item-box-bolt">Downloads</p>
                <p class="item-box">${f}</p>
            </div>
        </div>
      </li>
    `).join("")}const p=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),c=document.querySelector(".js-load-more");p.addEventListener("submit",S);c.addEventListener("click",P);let a=null,m="",y=new L(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});async function S(s){if(s.preventDefault(),n.classList.remove("isHiden"),a=1,m=p.elements[0].value.trim(),!m)return n.classList.add("isHiden"),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});try{const{data:t}=await h(m,a);if(t.hits.length===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const o=Math.ceil(t.totalHits/t.hits.length);a<o&&c.classList.replace("load-more-hiden","load-more"),u.innerHTML=g(t.hits),y.refresh()}catch{l.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{p.elements[0].value="",n.classList.add("isHiden")}}async function P(){c.classList.replace("load-more","load-more-hiden"),n.classList.remove("isHiden"),a+=1;try{const{data:s}=await h(m,a),t=Math.ceil(s.totalHits/s.hits.length);if(u.insertAdjacentHTML("beforeend",g(s.hits)),y.refresh(),a<t)c.classList.replace("load-more-hiden","load-more");else return c.classList.replace("load-more","load-more-hiden"),l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{n.classList.add("isHiden");const s=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
