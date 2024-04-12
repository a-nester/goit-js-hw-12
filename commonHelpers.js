import{a as b,i,S as u}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",L="https://pixabay.com/api/";async function g(t,r){return b(L,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})}function y(t){return t.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:o,comments:l,downloads:f})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${a}>
          <img class="gallery-image"
          src="${r}" 
          data-source="${a}" 
          alt="${s}" />
          
        </a>
        <div class="data-box">
            <div>
                <p class="item-box-bolt">Likes</p>
                <p class="item-box">${e}</p>
            </div>
            <div>
                <p class="item-box-bolt">Views</p>
                <p class="item-box">${o}</p>
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
    `).join("")}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),x=document.querySelector(".loader"),n=document.querySelector(".js-load-more");m.addEventListener("submit",S);n.addEventListener("click",P);let c=1,h="";async function S(t){if(t.preventDefault(),d(),h=m.elements[0].value.trim(),!h)return d(),i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});try{const{data:r}=await g(h,c);if(r.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let a=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});p.innerHTML=y(r.hits),a.refresh();const s=Math.ceil(r.totalHits/r.hits.length);c<s&&n.classList.replace("load-more-hiden","load-more")}catch{i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{m.elements[0].value="",d()}}async function P(){n.classList.replace("load-more","load-more-hiden"),d(),c+=1,await g(h,c).then(({data:t})=>{if(t.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let r=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});p.insertAdjacentHTML("beforeend",y(t.hits)),r.refresh();const a=Math.ceil(t.totalHits/t.hits.length);if(c<a)n.classList.replace("load-more-hiden","load-more");else return n.classList.replace("load-more","load-more-hiden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}).catch(t=>i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{d();const t=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})})}function d(){x.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
