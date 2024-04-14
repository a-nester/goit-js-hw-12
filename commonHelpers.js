import{a as b,S as L,i as d}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",x="https://pixabay.com/api/";async function h(r,t){try{return b(x,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}catch(o){return o}}function f(r){return r.map(({webformatURL:t,largeImageURL:o,tags:c,likes:e,views:s,comments:i,downloads:g})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${o}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${o}" 
          alt="${c}" />
          
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
                <p class="item-box">${g}</p>
            </div>
        </div>
      </li>
    `).join("")}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".js-load-more");u.addEventListener("submit",w);n.addEventListener("click",H);let a=null,p="",y=new L(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});async function w(r){if(r.preventDefault(),m.innerHTML="",l.classList.remove("isHiden"),n.classList.replace("load-more","load-more-hiden"),a=1,p=u.elements[0].value.trim(),!p)return l.classList.add("isHiden"),d.error({position:"topRight",message:"Input is empty. Fill input please!"});try{const{data:t}=await h(p,a);if(t.hits.length===0)return d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});m.innerHTML=f(t.hits);const o=Math.ceil(t.totalHits/t.hits.length);a<o&&n.classList.replace("load-more-hiden","load-more"),y.refresh()}catch{n.classList.replace("load-more","load-more-hiden"),d.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{u.elements[0].value="",l.classList.add("isHiden")}}async function H(){l.classList.remove("isHiden"),a+=1;try{const{data:r}=await h(p,a);m.insertAdjacentHTML("beforeend",f(r.hits)),y.refresh();const t=Math.ceil(r.totalHits/r.hits.length);a>=t&&n.classList.replace("load-more","load-more-hiden")}catch{d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}finally{l.classList.add("isHiden");const r=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
