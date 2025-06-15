import{a as u,S as d,i as p}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(o){const t=new URLSearchParams({key:"50818565-86d44cf91814c3f45e3f7ee49",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u(`https://pixabay.com/api/?${t}`)}const l=document.querySelector("#loader"),m=new d(".gallery a");function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:c})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${t}" alt="${s}" />
        </a>
        <div class="card">
          <p><span>👍 Likes</span>${e}</p>
          <p><span>👁 Views</span>${r}</p>
          <p><span>💬 Comments</span>${a}</p>
          <p><span>⬇ Downloads</span>${c}</p>
        </div>
      </li>
    `).join("")}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function h(){l.classList.add("hidden")}function L(){l.classList.remove("hidden")}const i=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",b);function b(o){o.preventDefault();const t=o.target.elements[0].value.trim();t&&(L(),f(t).then(n=>{const s=n.data.hits;if(s.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g();return}i.innerHTML=y(s),m.refresh()}).catch(n=>{console.error("Error:",n),i.innerHTML="<p>Error loading images</p>"}).finally(()=>{h()}))}
//# sourceMappingURL=index.js.map
