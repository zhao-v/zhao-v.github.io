document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("site-name");let i=o&&o.offsetWidth;const s=document.querySelector("#menus .menus_items");let c=s&&s.offsetWidth;const a=document.querySelector("#search-button");let l=a&&a.offsetWidth;const d=(e=!1)=>{e&&(i=o&&o.offsetWidth,c=s&&s.offsetWidth,l=a&&a.offsetWidth);const t=document.getElementById("nav");let n;n=window.innerWidth<768||i+c+l>t.offsetWidth-120,n?t.classList.add("hide-menu"):t.classList.remove("hide-menu")},e=function(){var e=GLOBAL_CONFIG.highlight;if(e){var t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink;const l=e.highlightHeightLimit,d=t||n||void 0!==o,s="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((d||l)&&s.length){const r="prismjs"===e.plugin;let c="",a="";const u=!0===o?"closed":"";void 0!==o&&(c=`<i class="fas fa-angle-down expand ${u}"></i>`),t&&(a='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');const m=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();r?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();(e=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout(()=>{t.style.opacity=0},700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(e.lastChild),n.removeAllRanges(),t.classList.remove("copy-true")},f=function(e){const t=e.target.classList;t.contains("expand")?(e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(e=>{e.style.display="block"}):t.forEach(e=>{e.style.display="none"})})(this):t.contains("copy-button")&&m(this)},h=function(){this.classList.toggle("expand-done")};function i(e,t,n){const o=document.createDocumentFragment();if(d){const i=document.createElement("div");i.className=`highlight-tools ${u}`,i.innerHTML=c+e+a,i.addEventListener("click",f),o.appendChild(i)}if(l&&t.offsetHeight>l+30){const s=document.createElement("div");s.className="code-expand-btn",s.innerHTML='<i class="fas fa-angle-double-down"></i>',s.addEventListener("click",h),o.appendChild(s)}"hl"===n?t.insertBefore(o,t.firstChild):t.parentNode.insertBefore(o,t)}n?r?s.forEach(function(e){var t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;btf.wrap(e,"figure","","highlight"),i(t,e)}):s.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code"),i(`<div class="code-lang">${t}</div>`,e,"hl")}):r?s.forEach(function(e){btf.wrap(e,"figure","","highlight"),i("",e)}):s.forEach(function(e){i("",e,"hl")})}}};let r=!1;const t=()=>{const e="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],t=0<e.length,n=document.querySelectorAll("#article-container .justified-gallery"),o=0<n.length;(o||t)&&btf.isJqueryLoad(()=>{o&&function(e){const t=$(e),n=t.find("img");n.unwrap(),n.length&&n.each(function(e,t){$(t).attr("data-lazy-src")&&$(t).attr("src",$(t).attr("data-lazy-src")),$(t).wrap("<div></div>")}),r?btf.initJustifiedGallery(t):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`),$.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`,function(){btf.initJustifiedGallery(t)}),r=!0)}(n),t&&function(e){const t=e=>{e.each(function(e,t){const n=$(t);var o=n.attr("data-lazy-src")||n.attr("src"),t=n.attr("alt")||"";n.wrap(`<a href="${o}" data-fancybox="group" data-caption="${t}" class="fancybox"></a>`)}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})};void 0===$.fancybox?($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`),$.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`,function(){t($(e))})):t($(e))}(e)})},n=function(){const c=document.getElementById("rightside"),a=window.innerHeight+56;if(document.body.scrollHeight<=a)c.style.cssText="opacity: 1; transform: translateX(-38px)";else{let i=0,s=!0;const l=document.getElementById("page-header"),d="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow;window.addEventListener("scroll",btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=(t=o)>i,i=t,n);56<o?(n?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),r&&!0===s&&(chatBtnHide(),s=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),d&&!1===s&&(chatBtnShow(),s=!0)),l.classList.add("nav-fixed"),"0"===window.getComputedStyle(c).getPropertyValue("opacity")&&(c.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===o&&l.classList.remove("nav-fixed","nav-visible"),c.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=a&&(c.style.cssText="opacity: 1; transform: translateX(-38px)")},200))}},u=function(){const e=document.getElementById("card-toc"),c=e.getElementsByClassName("toc-content")[0],a=c.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(e){var t=window.scrollY||document.documentElement.scrollTop;n(t),s(t)},100));const n=function(e){var t=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,n=n<t?t-n:document.documentElement.scrollHeight-n,n=Math.round(100*((e-o)/n)),n=100<n?100:n<=0?0:n;c.setAttribute("progress-percentage",n)},l=GLOBAL_CONFIG.isanchor,o={open:()=>{e.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},close:()=>{e.style.animation="toc-close .2s",setTimeout(()=>{e.style.cssText="opacity:''; animation: ''; right: ''"},100)}};document.getElementById("mobile-toc-button").addEventListener("click",()=>{"0"===window.getComputedStyle(e).getPropertyValue("opacity")?o.open():o.close()}),c.addEventListener("click",e=>{e.preventDefault();const t=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o.close()});const d=i.querySelectorAll("h1,h2,h3,h4,h5,h6");let r="";const s=function(n){if(0===a.length||0===n)return!1;let o="",i="";if(d.forEach(function(e,t){n>btf.getEleTop(e)-80&&(o="#"+encodeURI(e.getAttribute("id")),i=t)}),r!==i){var t;if(l&&(t=o,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===o)return c.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),void(r=i);r=i,c.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")});const s=a[i];s.classList.add("active"),setTimeout(()=>{var e,t;e=s,t=e.getBoundingClientRect().top,e=c.scrollTop,t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)},0);let e=s.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}},m={switchReadMode:()=>{const t=document.body;t.classList.add("read-mode");const n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},switchDarkMode:()=>{"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200)},showOrHideBtn:()=>{document.getElementById("rightside-config-hide").classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},adjustFontSize:e=>{var t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let n="";if(e){if(20<=t)return;n=t+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||d(!0)}else{if(t<=10)return;n=t-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&d(!0)}saveToLocal.set("global-font-size",n,2)}};document.getElementById("rightside").addEventListener("click",function(e){switch(e.target.id||e.target.parentNode.id){case"go-up":m.scrollToTop();break;case"rightside_config":m.showOrHideBtn();break;case"readmode":m.switchReadMode();break;case"darkmode":m.switchDarkMode();break;case"hide-aside-btn":m.hideAsideBtn();break;case"font-plus":m.adjustFontSize(!0);break;case"font-minus":m.adjustFontSize()}});const f={clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){const t=this.parentNode;if(!t.classList.contains("active")){const o=t.parentNode.nextElementSibling,i=btf.siblings(t,".active")[0];i&&i.classList.remove("active"),t.classList.add("active");const s=this.getAttribute("data-href").replace("#",""),c=[...o.children];c.forEach(e=>{e.id===s?e.classList.add("active"):e.classList.remove("active")});var n=o.querySelectorAll(`#${s} .justified-gallery`);0<n.length&&btf.initJustifiedGallery(n)}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}},h=function(e){e.forEach(e=>{const t=e;e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})};window.refreshFn=function(){d(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&u(),void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){var e=GLOBAL_CONFIG.noticeOutdate,t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");"top"===e.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&h(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&h(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");var t;e&&(t=e.getAttribute("data-publishDate"),e.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime)})(),(()=>{const e=document.getElementById("last-push-date");var t;e&&(t=e.getAttribute("data-lastPushDate"),e.innerText=btf.diffDate(t,!0))})(),function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");e.length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");const t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})})}()),(()=>{const t=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),e=document.getElementById("menu-mask"),o=document.body;function i(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(e,.5),n.classList.remove("open")}t.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(e,.5),n.classList.add("open")}),e.addEventListener("click",e=>{n.classList.contains("open")&&i()}),window.addEventListener("resize",e=>{btf.isHidden(t)&&n.classList.contains("open")&&i()})})(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down");e&&e.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)})})(),e(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){const t=e.parentNode;if(!t.parentNode.classList.contains("justified-gallery")){const n=document.createElement("div");n.className="img-alt is-center",n.textContent=e.getAttribute("alt"),t.insertBefore(n,e.nextSibling)}}),t(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(()=>{const n=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));n.on("open",e=>{var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";n.update({background:t})})})(),n(),function(){const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");e.length&&e.forEach(e=>{btf.wrap(e,"div","","table-wrap")})}(),function(){const e=document.querySelectorAll("#article-container .hide-button");e.length&&e.forEach(function(e){e.addEventListener("click",function(e){const t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".justified-gallery"))})})}(),f.clickFnOfTabs(),f.backToTop(),function(){let e=!1;const t=document.querySelector("#comment-switch > .switch-btn");t&&t.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())})}()},refreshFn(),window.addEventListener("resize",d),window.addEventListener("orientationchange",()=>{setTimeout(d(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide");const e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}),window.addEventListener("touchmove",function(e){const t=document.querySelectorAll("#nav .menus_item_child");t.forEach(e=>{btf.isHidden(e)||(e.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const o=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;var n=window.getSelection(0).toString();return t=n.length>o.limitCount?n+"\n\n\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info:n,(e.clipboardData?e:window).clipboardData.setData("text",t)}})()});