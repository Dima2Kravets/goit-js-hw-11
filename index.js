import{S as u,a as d,i as p}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelector(".gallery"),f=document.querySelector(".form"),c=document.querySelector("#loader"),m=new u(".gallery a");f.addEventListener("submit",h);function h(s){s.preventDefault();const t=s.target.elements[0].value.trim();if(!t)return;const n=new URLSearchParams({key:"50818565-86d44cf91814c3f45e3f7ee49",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});y(),d(`https://pixabay.com/api/?${n}`).then(o=>{const e=o.data.hits;if(e.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}a.innerHTML=g(e),m.refresh()}).catch(o=>{console.error("Error:",o),a.innerHTML="<p>Error loading images</p>"}).finally(()=>{L()})}function g(s){return s.map(({webformatURL:t,largeImageURL:n,tags:o,likes:e,views:r,comments:i,downloads:l})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${t}" alt="${o}" />
      </a>
      <div class="card">
        <p><span>👍 Likes</span>${e}</p>
        <p><span>👁 Views</span>${r}</p>
        <p><span>💬 Comments</span>${i}</p>
        <p><span>⬇ Downloads</span>${l}</p>
      </div>
    </li>
  `).join("")}function y(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}
//# sourceMappingURL=index.js.map
