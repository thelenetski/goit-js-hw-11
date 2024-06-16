import{S as c,i as n}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();function u(s){const a=document.querySelector(".gallery"),o=s.hits;let t="";o.forEach(e=>{t+=`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          title="${e.tags}"
        />
      
      <ul>
        <li><h5>Likes</h5><span>${e.likes}</span></li>
        <li><h5>Views</h5><span>${e.views}</span></li>
        <li><h5>Comments</h5><span>${e.comments}</span></li>
        <li><h5>Downloads</h5><span>${e.downloads}</span></li>
      </ul>
      </a>
    </li>
  `}),a.insertAdjacentHTML("afterbegin",t),new c(".gallery a",{captionDelay:250}).refresh()}function f(){const s=document.querySelector(".gallery");s.innerHTML=""}function d(s,a){const o=new URLSearchParams({key:"44412279-8977454442245f14893e5bf31",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{(t.hits.length===0||t.hits==="undefined")&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hide"),u(t)}).catch(t=>{n.error({title:"Error",message:t})})}const h=document.querySelector(".search-form"),i=document.querySelector(".loader");h.addEventListener("submit",s=>{s.preventDefault();const a=s.target.elements.search.value;if(a===""||/^\s*$/.test(a)){n.error({title:"Error",message:"Empty request"}),s.target.elements.search.value="";return}i.classList.remove("hide"),f(),d(a.trim(),i),s.target.elements.search.value=""});
//# sourceMappingURL=commonHelpers.js.map
