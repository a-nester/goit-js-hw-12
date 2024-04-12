import{a as b,i,S as u}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="43256839-6988dc73e83ff3bdf7562f6e8",L="https://pixabay.com/api/";async function g(r,t){return b(L,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function y(r){return r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:l,downloads:f})=>`
        <li class="gallery-item" >
        <a class="gallery-link" href=${s}>
          <img class="gallery-image"
          src="${t}" 
          data-source="${s}" 
          alt="${a}" />
          
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
    `).join("")}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),x=document.querySelector(".loader"),n=document.querySelector(".js-load-more");m.addEventListener("submit",S);n.addEventListener("click",P);let c=1,h="";async function S(r){if(r.preventDefault(),d(),h=m.elements[0].value.trim(),!h)return d(),i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});await g(h,c).then(({data:t})=>{if(t.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let s=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});p.innerHTML=y(t.hits),s.refresh();const a=Math.ceil(t.totalHits/t.hits.length);c<a&&n.classList.replace("load-more-hiden","load-more")}).catch(t=>i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{m.elements[0].value="",d()})}async function P(){n.classList.replace("load-more","load-more-hiden"),d(),c+=1,await g(h,c).then(({data:r})=>{if(r.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});let t=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"text-center"});p.insertAdjacentHTML("beforeend",y(r.hits)),t.refresh();const s=Math.ceil(r.totalHits/r.hits.length);if(c<s)n.classList.replace("load-more-hiden","load-more");else return n.classList.replace("load-more","load-more-hiden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}).catch(r=>i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{d();const r=p.lastElementChild.getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})})}function d(){x.classList.toggle("isHiden")}
//# sourceMappingURL=commonHelpers.js.map
