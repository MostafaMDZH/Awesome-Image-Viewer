(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{3991:function(a,b){"use strict";class c{constructor(a){var b,d,e,f;c.appendCSS(),this.viewID=c.generateViewID();let g=c.getHtml(this.viewID,this.isZoomable=null===(b=a.isZoomable)|| void 0===b||b);document.body.appendChild(g),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.images=a.images,this.currentSelected=null!==(d=a.currentSelected)&& void 0!==d?d:0,this.buttons=a.buttons,this.showThumbnails=null===(e=a.showThumbnails)|| void 0===e||e,this.isInZoom=!1,this.stretchImages=null!==(f=a.stretchImages)&& void 0!==f&&f,this.isHudShow=!0,this.dbcTimer=setTimeout(()=>{},0),this.dbcWaiting=!1,this.isSwiping=!1,this.showImages(),this.showToolbar(),this.addEventToArrows(),this.echoThumbnails(),this.selectImage(this.currentSelected),this.addEventToSwipe(a=>{let b=this.currentSelected;"RIGHT"===a?b--:b++,this.selectImage(b)},()=>this.selectImage(this.currentSelected)),this.addEventToHudAndZoom(),this.addEventToWindowResize(),this.setStyle(a.style),this.addEventToHide(),this.show()}static appendCSS(){if(null===document.getElementById("imageViewer-style")){let a=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.id="imageViewer-style",a.appendChild(b),b.appendChild(document.createTextNode(d))}}static generateViewID(){let a=Math.floor(1e9*Math.random())+1e8,b=document.getElementById(a.toString());return null===b?a:c.generateViewID()}static getHtml(a,b){let d=`
            <div class="imageViewer" id="${a}">
                <div class="shadow"></div>
                <div class="container">
                    <div class="imagesWrapper"></div>
                    <div class="toolbar">
                        <button class="defaultButton closeButton" title="Close"><div><svg fill="#bfbfbf" width="21" height="21" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div></button>
                        ${b?`
                            <button class="defaultButton zoomOutButton" title="Zoom out"><div><svg fill="#bfbfbf" width="22" height="22" viewBox="0 -1 17 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26-.7.71-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608zm-5.45 4.888a4.51 4.51 0 0 0 3.18-1.32l-.04.02a4.51 4.51 0 0 0 1.36-3.2 4.5 4.5 0 1 0-4.5 4.5zm-2.54-4.98h5v1h-5v-1z"/></svg></div></button>
                            <button class="defaultButton zoomInButton"  title="Zoom in" ><div><svg fill="#bfbfbf" width="22" height="22" viewBox="-1 -2 35 35" xmlns="http://www.w3.org/2000/svg"><path d="m18 12h-4v-4h-2v4h-4v2h4v4h2v-4h4z"/><path d="m21.4479 20a10.856 10.856 0 0 0 2.5521-7 11 11 0 1 0 -11 11 10.856 10.856 0 0 0 7-2.5521l7.5859 7.5521 1.4141-1.4141zm-8.4479 2a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></div></button>
                        `:""}
                    </div>
                    <button class="arrowButton leftButton" ><div><svg fill="none" stroke="#bbb" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="15 18 9 12 15 6" /></svg></div></button>
                    <button class="arrowButton rightButton"><div><svg fill="none" stroke="#bbb" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="9 18 15 12 9 6"  /></svg></div></button>
                    <div class="footer">
                        <p dir="auto" class="description"></p>
                        <div class="thumbnailsWrapper"></div>
                    </div>
                </div>
            </div>
        `;return c.getChildNode(d)}static getImageHtml(a,b){let d=`
            <button class="imageContainer${b?" stretch":""}" data-url="${a}">
                <img class="image"/>
            </button>
        `;return c.getChildNode(d)}static getButtonHtml(a,b,d){let e=`
            <input
                type="button"
                class="customButton"
                title="${a}"
                style="${"background-image:url('"+b+"');"} ${""!==d?"background-size:"+d+";":""}"
            />`;return c.getChildNode(e)}static getThumbnailHtml(a,b,d){let e=`
            <button class="thumbnailContainer">
                <img class="thumbnail" data-index="${a}" src="${b}" title="${d}"/>
            </button>
        `;return c.getChildNode(e)}static getChildNode(a){let b=document.createElement("div");return b.innerHTML=a.trim(),b.firstChild||b}showImages(){let a=this.view.getElementsByClassName("imagesWrapper")[0];this.images.forEach(b=>{let d=c.getImageHtml(b.mainUrl,this.stretchImages);a.appendChild(d)})}showToolbar(){var a;let b=this.view.getElementsByClassName("toolbar")[0];null===(a=this.buttons)|| void 0===a||a.forEach(a=>{let d=c.getButtonHtml(a.name,a.iconSrc,a.iconSize);b.appendChild(d),d.addEventListener("click",b=>{b.stopPropagation(),a.onSelect,a.onSelect()})})}addEventToArrows(){let a=this.view.getElementsByClassName("leftButton")[0],b=this.view.getElementsByClassName("rightButton")[0];if(1===this.images.length){a.style.display="none",b.style.display="none";return}a.addEventListener("click",a=>{a.stopPropagation(),this.selectImage(this.currentSelected-1)}),b.addEventListener("click",a=>{a.stopPropagation(),this.selectImage(this.currentSelected+1)});let c=this.view.querySelectorAll(".imageContainer, .arrowButton, .thumbnailContainer"),d=c[0];setTimeout(()=>d.focus(),100),c.forEach(a=>{a.addEventListener("keydown",a=>{let b=a;"ArrowLeft"===b.key&&(a.preventDefault(),this.selectImage(this.currentSelected-1)),"ArrowRight"===b.key&&(a.preventDefault(),this.selectImage(this.currentSelected+1))})})}echoThumbnails(){if(!this.showThumbnails||this.images.length<=1)return;let a=this.view.getElementsByClassName("thumbnailsWrapper")[0],b=0;this.images.forEach(d=>{var e;let f=c.getThumbnailHtml(b,null!==(e=d.thumbnailUrl)&& void 0!==e?e:d.mainUrl,d.description);a.appendChild(f),f.addEventListener("click",a=>{a.stopPropagation();let b=a.target,c=b.dataset.index;this.selectImage(parseInt(null!=c?c:"0"))}),b++})}selectImage(a){a<0||a>this.images.length-1||this.isInZoom||(this.currentSelected=a,this.loadImage(a-1),this.loadImage(a),this.loadImage(a+1),this.scrollToImage(a),this.setDescription(this.images[a].description),this.setThumbnail(a))}loadImage(a){if(a<0||a>this.images.length-1)return;let b=this.view.getElementsByClassName("imagesWrapper")[0],c=b.children,d=c.item(a),e=d.dataset.url,f=d.getElementsByClassName("image")[0];f.src=e}scrollToImage(a){let b=this.view.getElementsByClassName("imagesWrapper")[0],c=b.children,d=c.item(a),e=d.offsetLeft-(b.getBoundingClientRect().width-d.getBoundingClientRect().width)/2;b.scrollTo({left:e,behavior:"smooth"})}setDescription(a){let b=this.view.getElementsByClassName("description")[0];b.innerHTML=a||""}setThumbnail(a){let b=this.view.querySelectorAll(".thumbnail");b.forEach(a=>{a.classList.remove("selected")});let c=this.view.querySelector('[data-index="'+a+'"]');null!==c&&c.classList.add("selected")}scrollThumbnail(a){let b=this.view.getElementsByClassName("thumbnailsWrapper")[0],c=b.children,d=c.item(a),e=d.offsetLeft-(b.getBoundingClientRect().width-d.getBoundingClientRect().width)/2;b.scrollTo({left:e,behavior:"smooth"})}addEventToSwipe(a,b){let c={startX:0,startY:0,endX:0,endY:0},d="",e=this.view.getElementsByClassName("imagesWrapper")[0],f=e.getBoundingClientRect(),g=f.left;e.addEventListener("touchstart",a=>{if(this.isInZoom)return;let b=a.touches[0];c.startX=b.screenX,c.startY=b.screenY;let d=this.view.getElementsByClassName("imagesWrapper")[0],e=d.children,f=e.item(this.currentSelected);g=f.offsetLeft}),e.addEventListener("touchmove",a=>{if(this.isInZoom)return;a.preventDefault();let b=a.touches[0];c.endX=b.screenX,c.endY=b.screenY,c.startX,b.screenX}),e.addEventListener("touchend",e=>{this.isInZoom||((c.endX-30>c.startX||c.endX+30<c.startX)&&c.endY<c.startY+60&&c.startY>c.endY-60&&c.endX>0?d=c.endX>c.startX?"RIGHT":"LEFT":(c.endY-50>c.startY||c.endY+50<c.startY)&&c.endX<c.startX+30&&c.startX>c.endX-30&&c.endY>0&&(d=c.endY>c.startY?"DOWN":"UP"),""===d?b():a(d),c={startX:0,startY:0,endX:0,endY:0},d="",g=f.left)})}addEventToHudAndZoom(){let a=this.view.querySelectorAll(".image");a.forEach(a=>{a.addEventListener("click",b=>{b.stopPropagation(),this.dbcWaiting?(clearTimeout(this.dbcTimer),this.dbcWaiting=!1,this.flipZoom(a.parentElement,b.clientX,b.clientY)):(this.dbcWaiting=!0,this.dbcTimer=setTimeout(()=>{this.dbcWaiting&&this.flipHud(!this.isHudShow),this.dbcWaiting=!1},200))})});let b=this.view.querySelectorAll(".zoomInButton, .zoomOutButton");b.forEach(a=>{a.addEventListener("click",a=>{a.stopPropagation();let b=this.view.getElementsByClassName("imagesWrapper")[0],c=b.children,d=c.item(this.currentSelected);this.flipZoom(d,d.offsetWidth/2,d.offsetHeight/2)})});let c=this.view.getElementsByClassName("imagesWrapper")[0];c.addEventListener("touchmove",a=>{this.isInZoom?c.style.overflow="hidden":c.style.overflow="scroll"})}flipZoom(a,b,c){if(this.isZoomable){if(a.classList.contains("zoom"))a.classList.remove("zoom"),this.isInZoom=!1,this.flipHud(!0),this.view.classList.remove("halfHud");else{a.classList.add("zoom");let d=a.getElementsByClassName("image")[0];a.scrollTop=d.offsetHeight/2-a.offsetHeight/2+(c-a.offsetHeight/2)*(d.offsetHeight/a.offsetHeight),a.scrollLeft=d.offsetWidth/2-a.offsetWidth/2+(b-a.offsetWidth/2)*(d.offsetWidth/a.offsetWidth),this.isInZoom=!0,this.flipHud(!1),this.view.classList.add("halfHud")}}}flipHud(a){a?(this.view.classList.remove("hudDisplay"),setTimeout(()=>this.view.classList.remove("hudOpacity"),50)):(this.view.classList.add("hudOpacity"),setTimeout(()=>this.view.classList.add("hudDisplay"),200)),this.isHudShow=a}addEventToWindowResize(){window.addEventListener("resize",()=>{this.selectImage(this.currentSelected)})}setStyle(a){if(void 0!==a)for(let[b,c]of(this.style=a,Object.entries(this.style))){let d=this.view.querySelectorAll("."+b);d.forEach(a=>{for(let b of c)a.style.setProperty(b[0],b[1])})}}show(){let a=this;setTimeout(()=>{a.view.classList.add("visible")},50)}addEventToHide(){let a=this.view.getElementsByClassName("footer")[0];a.addEventListener("click",a=>{a.stopPropagation()});let b=this.view.getElementsByClassName("container")[0];b.addEventListener("click",a=>{this.hide()});let c=this.view.getElementsByClassName("shadow")[0];c.addEventListener("click",a=>{this.hide()})}hide(){this.view.classList.remove("visible");let a=this;setTimeout(()=>{a.view.remove()},500)}}b.Z=c;let d=`
@media (hover: hover) and (pointer: fine) {
    .thinScrollbar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .thinScrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .thinScrollbar::-webkit-scrollbar-thumb {
      background: #bbb;
      border-radius: 20px;
    }
    .darkMode .thinScrollbar::-webkit-scrollbar-thumb {
      background: #555;
    }
  }
  .hiddenScrollbar::-webkit-scrollbar, .imageViewer > .container > .footer > .thumbnailsWrapper::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper > .imageContainer::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper::-webkit-scrollbar {
    display: none;
  }
  
  .transparentBackground {
    transition: background-color 50ms;
  }
  
  .transparentBackground:enabled:active {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground {
      transition: background-color 150ms;
    }
    .transparentBackground:enabled:hover {
      background-color: rgba(0, 0, 0, 0.03) !important;
    }
    .transparentBackground:enabled:focus {
      background-color: rgba(0, 0, 0, 0.04) !important;
    }
    .transparentBackground:enabled:active {
      background-color: rgba(0, 0, 0, 0.08) !important;
    }
  }
  .transparentBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    transition: background-color 50ms;
  }
  
  .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      transition: background-color 150ms;
    }
    .darkTransparentBackground:enabled:hover, .imageViewer > .container > .arrowButton:enabled:hover, .imageViewer > .container > .toolbar > .defaultButton:enabled:hover,
  .imageViewer > .container > .toolbar > .customButton:enabled:hover {
      background-color: rgba(0, 0, 0, 0.2) !important;
    }
    .darkTransparentBackground:enabled:focus, .imageViewer > .container > .arrowButton:enabled:focus, .imageViewer > .container > .toolbar > .defaultButton:enabled:focus,
  .imageViewer > .container > .toolbar > .customButton:enabled:focus {
      background-color: rgba(0, 0, 0, 0.3) !important;
    }
    .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
      background-color: rgba(0, 0, 0, 0.4) !important;
    }
  }
  .darkTransparentBackground:disabled, .imageViewer > .container > .arrowButton:disabled, .imageViewer > .container > .toolbar > .defaultButton:disabled,
  .imageViewer > .container > .toolbar > .customButton:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .coloredBackground {
    opacity: 0.8;
  }
  
  .coloredBackground:enabled:active {
    opacity: 1;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .coloredBackground:enabled:hover {
      opacity: 0.85;
    }
    .coloredBackground:enabled:focus {
      opacity: 0.9;
    }
    .coloredBackground:enabled:active {
      opacity: 1;
    }
  }
  .coloredBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .transparentBackground_dark {
    transition: background-color 50ms;
  }
  
  .transparentBackground_dark:enabled:active {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground_dark {
      transition: background-color 150ms;
    }
    .transparentBackground_dark:enabled:hover {
      background-color: rgba(255, 255, 255, 0.12) !important;
    }
    .transparentBackground_dark:enabled:focus {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .transparentBackground_dark:enabled:active {
      background-color: rgba(255, 255, 255, 0.07) !important;
    }
  }
  .imageViewer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    visibility: hidden;
    z-index: 999999993;
  }
  .imageViewer * {
    padding: 0;
    margin: 0;
    font-family: Catamaran-Medium;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  .imageViewer a::-moz-focus-inner,
  .imageViewer input::-moz-focus-inner,
  .imageViewer button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .imageViewer a {
    text-decoration: none;
    outline: none;
  }
  .imageViewer input, .imageViewer button, .imageViewer select {
    border: none;
    outline: none;
  }
  .imageViewer input[type=button], .imageViewer button, .imageViewer select {
    cursor: pointer;
  }
  .imageViewer input:required,
  .imageViewer input:invalid {
    box-shadow: none;
  }
  .imageViewer input[type=button], .imageViewer button {
    font-size: 1rem;
    padding: 0;
    background: none;
  }
  .imageViewer > .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    opacity: 0;
    transition: opacity 160ms ease-in-out;
  }
  .imageViewer > .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .imageViewer > .container > .imagesWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 100px;
    overflow: scroll;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    cursor: default;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer > .image {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    cursor: pointer;
  }
  .imageViewer > .container > .imagesWrapper .stretch > .image {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  .imageViewer > .container > .imagesWrapper .zoom {
    display: inline;
  }
  .imageViewer > .container > .imagesWrapper .zoom > .image {
    max-width: unset;
    max-height: unset;
    margin-bottom: -20px;
  }
  .imageViewer > .container > .toolbar {
    width: 55px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .imageViewer > .container > .toolbar > * {
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    width: 100%;
    height: 55px;
    display: flex;
  }
  .imageViewer > .container > .toolbar > .defaultButton {
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .defaultButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .zoomOutButton {
    display: none;
  }
  .imageViewer > .container > .toolbar > .customButton {
    background-size: 19px auto;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .imageViewer > .container > .arrowButton {
    width: 80px;
    height: calc(100% - 300px);
    min-height: 100px;
    max-height: 160px;
    display: flex;
    color: #aaa;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .arrowButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .leftButton {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
  }
  .imageViewer > .container > .rightButton {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
  }
  .imageViewer > .container > .footer {
    width: auto;
    max-width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0);
    gap: 8px;
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .footer > .description {
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;
    color: #fafafa;
    border-radius: 2px;
  }
  .imageViewer > .container > .footer > .description:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 80px;
    overflow-x: auto;
    display: flex;
    gap: 12px;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .thumbnail {
    width: auto;
    height: calc(100% - 10px);
    border: solid 3px transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .selected {
    border-color: white;
  }
  
  .imageViewer.hudOpacity > .container > .toolbar > *,
  .imageViewer.hudOpacity > .container > .arrowButton,
  .imageViewer.hudOpacity > .container > .footer {
    opacity: 0;
  }
  
  .imageViewer.hudDisplay > .container > .toolbar > *,
  .imageViewer.hudDisplay > .container > .arrowButton,
  .imageViewer.hudDisplay > .container > .footer {
    display: none;
  }
  
  .imageViewer.halfHud > .container > .toolbar > .closeButton,
  .imageViewer.halfHud > .container > .toolbar > .zoomOutButton {
    opacity: 1;
    display: flex;
  }
  .imageViewer.halfHud > .container > .toolbar > .zoomInButton {
    opacity: 0;
    display: none;
  }
  
  .imageViewer.visible {
    visibility: visible;
  }
  .imageViewer.visible > .shadow,
  .imageViewer.visible > .container {
    opacity: 1;
  }
  
  @media (max-width: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .arrowButton {
      width: 65px;
    }
  }
  @media (orientation: landscape) and (max-height: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .footer {
      bottom: 5px;
    }
  }/*# sourceMappingURL=imageViewer.css.map */
`},2882:function(a,b){"use strict";class c{constructor(a,b){var d,e;this.bornTime=Date.now(),this.hideEventHandler=this.handleHideEvent.bind(this),c.appendCSS(),this.viewID=c.generateViewID();let f=c.getHtml(this.viewID);document.body.appendChild(f),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.setMessage(this.message=a),this.setPosition(this.position=(null==b?void 0:b.position)||c.DEFAULT_POSITION),this.setTheme(null==b?void 0:b.theme),this.setIconSrc(null==b?void 0:b.iconSrc),this.setStyle(null==b?void 0:b.style),this.setActionText(null==b?void 0:b.actionText),this.setActionCallback(null==b?void 0:b.onAction),this.waitForEvent=null===(d=null==b?void 0:b.waitForEvent)|| void 0===d||d,this.timeout=null!==(e=null==b?void 0:b.timeout)&& void 0!==e?e:c.DEFAULT_HIDING_TIMEOUT,this.isWaitingForHide=!1,this.afterHide=null==b?void 0:b.afterHide,this.addHideEventListener(),this.waitForEvent||this.startHidingTimer(this.timeout),this.show()}static appendCSS(){if(null===document.getElementById("snackbar-style")){let a=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.id="snackbar-style",a.appendChild(b),b.appendChild(document.createTextNode(d))}}static generateViewID(){let a=Math.floor(1e9*Math.random())+1e8;return null===document.getElementById(a.toString())?a:c.generateViewID()}static getHtml(a){let b=`
            <div class="snackbar" id="${a}">
                <div class="container">
                    <span class='icon'></span>
                    <p class="message"></p>
                    <input type="button" class="actionButton" id="${a}_actionButton" value="">
                </div>
            </div>
        `,c=document.createElement("div");return c.innerHTML=b.trim(),c.firstChild||c}setMessage(a){this.message=a;this.view.getElementsByClassName("message")[0].innerHTML=this.message}setPosition(a){this.position=a,this.view.classList.remove("bottom-left"),this.view.classList.remove("bottom-center"),this.view.classList.remove("bottom-right"),this.view.classList.remove("top-left"),this.view.classList.remove("top-center"),this.view.classList.remove("top-right"),this.view.classList.add(a),c.adjustListPositions(this)}setIconSrc(a){if(void 0===a)return;this.iconSrc=a;let b=this.view.getElementsByClassName("icon")[0];b.style.setProperty("display","block"),b.style.setProperty("background-image","url("+this.iconSrc+")")}setTheme(a){void 0!==a&&(this.theme,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(a))}setStyle(a){if(void 0!==a)for(let[b,c]of(this.style=a,Object.entries(this.style))){let d=document.getElementById(this.viewID.toString()).getElementsByClassName(b)[0];if(void 0!==d)for(let e of c)d.style.setProperty(e[0],e[1])}}setActionText(a){if(void 0===a)return;this.actionText=a;let b=this.view.getElementsByClassName("actionButton")[0];b.style.setProperty("display","block"),b.value=this.actionText}setActionCallback(a){this.onAction=a;this.view.getElementsByClassName("actionButton")[0].addEventListener("click",()=>{void 0!==this.onAction&&this.onAction(),this.hide()})}show(){setTimeout(()=>{c.List.push(this),c.adjustListPositions(this)},10)}addHideEventListener(){let a=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(function(b){window.addEventListener(b,a.hideEventHandler)})}removeHideEventListener(){let a=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(b=>{window.removeEventListener(b,a.hideEventHandler)})}handleHideEvent(){let a=this.timeout;Date.now()-this.bornTime>this.timeout&&(a=this.timeout/2),this.startHidingTimer(a),this.removeHideEventListener()}startHidingTimer(a){a>0&&!this.isWaitingForHide&&(this.isWaitingForHide=!0,setTimeout(()=>{this.hide()},a))}hide(){let a=this;c.List.filter(a=>a.position===this.position).length>1?(this.view.style.opacity="0",this.position.indexOf("bottom")>=0?this.view.style.marginBottom="-"+(this.getHeight()+5)+"px":this.view.style.marginTop="-"+(this.getHeight()+5)+"px"):this.position.indexOf("bottom")>=0?this.view.style.bottom="-"+(this.getHeight()+15)+"px":this.view.style.top="-"+(this.getHeight()+15)+"px";let b=c.List.indexOf(this);b> -1&&c.List.splice(b,1),c.adjustListPositions(this),setTimeout(function(){a.view.remove(),void 0!==a.afterHide&&a.afterHide()},500)}static adjustListPositions(a){let b=c.List.filter(b=>b.position===a.position);b.forEach(function(c,d){let e=20+(b.length-d-1)*(c.getHeight()+5)+"px";a.position.indexOf("bottom")>=0?(c.view.style.bottom=e,c.view.style.top="unset"):(c.view.style.top=e,c.view.style.bottom="unset")})}getHeight(){return+getComputedStyle(this.view).height.replace("px","")}}b.Z=c,c.List=[],c.DEFAULT_HIDING_TIMEOUT=4e3,c.DEFAULT_POSITION="bottom-left";let d=`
.snackbar {
    z-index: 999999995;
    position: fixed;
    transition: top 400ms ease 0s, bottom 400ms ease 0s, margin-top 300ms ease 0s, margin-bottom 300ms ease 0s, opacity 150ms ease 150ms;
  }
  .snackbar > .container {
    box-sizing: border-box;
    max-width: 450px;
    min-height: 46px;
    padding: 9px 20px 10px 20px;
    border-radius: 3px;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    color: rgb(250, 250, 250);
    align-items: center;
    gap: 10px;
    transition: all 150ms ease-in-out;
  }
  .snackbar > .container * {
    box-sizing: border-box;
  }
  .snackbar > .container > .icon {
    width: 20px;
    height: 20px;
    margin-left: -3px;
    margin-right: -2px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    display: none;
  }
  .snackbar > .container > .message {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
  }
  .snackbar > .container > .actionButton {
    padding: 5px 3px;
    background-color: transparent;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #F7FF00;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }
  
  .snackbar.bottom-left {
    left: 24px;
    bottom: -60px;
  }
  
  .snackbar.bottom-center {
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.bottom-right {
    right: 24px;
    bottom: -60px;
  }
  
  .snackbar.top-left {
    left: 24px;
    top: -60px;
  }
  
  .snackbar.top-center {
    left: 50%;
    top: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.top-right {
    right: 24px;
    top: -60px;
  }
  
  .snackbar.light > .container {
    background-color: #fbfbfb;
    color: #555;
  }
  .snackbar.light > .container > .actionButton {
    color: #D60;
  }
  
  @media only screen and (max-width: 500px) {
    .snackbar {
      max-width: calc(100% - 48px);
    }
    .snackbar.top-center,
  .snackbar.bottom-center {
      width: calc(100% - 24px);
      max-width: unset;
      left: 12px;
      transform: translate(0, 0);
      display: flex;
      justify-content: center;
    }
  }/*# sourceMappingURL=snackbar.css.map */
`},6489:function(a,b){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ b.Q=function(a,b){if("string"!=typeof a)throw TypeError("argument str must be a string");for(var d={},e=a.split(";"),g=(b||{}).decode||c,h=0;h<e.length;h++){var i=e[h],j=i.indexOf("=");if(!(j<0)){var k=i.substring(0,j).trim();if(void 0==d[k]){var l=i.substring(j+1,i.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),d[k]=f(l,g)}}}return d},b.q=function(a,b,c){var f=c||{},g=f.encode||d;if("function"!=typeof g)throw TypeError("option encode is invalid");if(!e.test(a))throw TypeError("argument name is invalid");var h=g(b);if(h&&!e.test(h))throw TypeError("argument val is invalid");var i=a+"="+h;if(null!=f.maxAge){var j=f.maxAge-0;if(isNaN(j)||!isFinite(j))throw TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(j)}if(f.domain){if(!e.test(f.domain))throw TypeError("option domain is invalid");i+="; Domain="+f.domain}if(f.path){if(!e.test(f.path))throw TypeError("option path is invalid");i+="; Path="+f.path}if(f.expires){if("function"!=typeof f.expires.toUTCString)throw TypeError("option expires is invalid");i+="; Expires="+f.expires.toUTCString()}if(f.httpOnly&&(i+="; HttpOnly"),f.secure&&(i+="; Secure"),f.sameSite){var k="string"==typeof f.sameSite?f.sameSite.toLowerCase():f.sameSite;switch(k){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}}return i};var c=decodeURIComponent,d=encodeURIComponent,e=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function f(a,b){try{return b(a)}catch(c){return a}}},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=(d=c(7294),d&&d.__esModule?d:{default:d}),g=c(6273),h=c(2725),i=c(3462),j=c(1018),k=c(7190),l=c(1210),m=c(8684),n=void 0!==f.default.useTransition,o={};function p(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;o[b+"%"+c+(e?"%"+e:"")]=!0}}var q=f.default.forwardRef(function(a,b){var c,d,q=a.href,r=a.as,s=a.children,t=a.prefetch,u=a.passHref,v=a.replace,w=a.soft,x=a.shallow,y=a.scroll,z=a.locale,A=a.onClick,B=a.onMouseEnter,C=a.legacyBehavior,D=void 0===C?!0!==Boolean(!1):C,E=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=s,D&&("string"==typeof c||"number"==typeof c)&&(c=f.default.createElement("a",null,c));var F=!1!==t,G=e(n?f.default.useTransition():[],2),H=G[1],I=f.default.useContext(i.RouterContext),J=f.default.useContext(j.AppRouterContext);J&&(I=J);var K=f.default.useMemo(function(){var a=e(g.resolveHref(I,q,!0),2),b=a[0],c=a[1];return{href:b,as:r?g.resolveHref(I,r):c||b}},[I,q,r]),L=K.href,M=K.as,N=f.default.useRef(L),O=f.default.useRef(M);D&&(d=f.default.Children.only(c));var P=D?d&&"object"==typeof d&&d.ref:b,Q=e(k.useIntersection({rootMargin:"200px"}),3),R=Q[0],S=Q[1],T=Q[2],U=f.default.useCallback(function(a){(O.current!==M||N.current!==L)&&(T(),O.current=M,N.current=L),R(a),P&&("function"==typeof P?P(a):"object"==typeof P&&(P.current=a))},[M,P,L,T,R]);f.default.useEffect(function(){var a=S&&F&&g.isLocalURL(L),b=void 0!==z?z:I&&I.locale,c=o[L+"%"+M+(b?"%"+b:"")];a&&!c&&p(I,L,M,{locale:b})},[M,L,S,z,F,I]);var V={ref:U,onClick:function(a){D||"function"!=typeof A||A(a),D&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,h,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&g.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:h,locale:j,scroll:i})};k?k(n):n()}}(a,I,L,M,v,w,x,y,z,J?H:void 0)},onMouseEnter:function(a){D||"function"!=typeof B||B(a),D&&d.props&&"function"==typeof d.props.onMouseEnter&&d.props.onMouseEnter(a),g.isLocalURL(L)&&p(I,L,M,{priority:!0})}};if(!D||u||"a"===d.type&&!("href"in d.props)){var W=void 0!==z?z:I&&I.locale,X=I&&I.isLocaleDomain&&l.getDomainLocale(M,W,I.locales,I.domainLocales);V.href=X||m.addBasePath(h.addLocale(M,W,I&&I.defaultLocale))}return D?f.default.cloneElement(d,V):f.default.createElement("a",Object.assign({},E,V),c)});b.default=q,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.FullAppTreeContext=b.AppTreeContext=b.AppRouterContext=void 0;var d,e=(d=c(7294),d&&d.__esModule?d:{default:d}),f=e.default.createContext(null);b.AppRouterContext=f;var g=e.default.createContext(null);b.AppTreeContext=g;var h=e.default.createContext(null);b.FullAppTreeContext=h},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},5885:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(6489);function e(a,b){void 0===b&&(b={});var c,d,e=f(a);if(c=e,void 0===(d=b.doNotParse)&&(d=!c||"{"!==c[0]&&"["!==c[0]&&'"'!==c[0]),!d)try{return JSON.parse(e)}catch(g){}return a}function f(a){return a&&"j"===a[0]&&":"===a[1]?a.substr(2):a}var g,h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},i=function(){function a(a,b){var c,e,f=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=(c=a,e=b,"string"==typeof c?d.Q(c,e):"object"==typeof c&&null!==c?c:{}),new Promise(function(){f.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return a.prototype._updateBrowserValues=function(a){this.HAS_DOCUMENT_COOKIE&&(this.cookies=d.Q(document.cookie,a))},a.prototype._emitChange=function(a){for(var b=0;b<this.changeListeners.length;++b)this.changeListeners[b](a)},a.prototype.get=function(a,b,c){return void 0===b&&(b={}),this._updateBrowserValues(c),e(this.cookies[a],b)},a.prototype.getAll=function(a,b){void 0===a&&(a={}),this._updateBrowserValues(b);var c={};for(var d in this.cookies)c[d]=e(this.cookies[d],a);return c},a.prototype.set=function(a,b,c){var e;"object"==typeof b&&(b=JSON.stringify(b)),this.cookies=h(h({},this.cookies),((e={})[a]=b,e)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=d.q(a,b,c)),this._emitChange({name:a,value:b,options:c})},a.prototype.remove=function(a,b){var c=b=h(h({},b),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=h({},this.cookies),delete this.cookies[a],this.HAS_DOCUMENT_COOKIE&&(document.cookie=d.q(a,"",c)),this._emitChange({name:a,value:void 0,options:b})},a.prototype.addChangeListener=function(a){this.changeListeners.push(a)},a.prototype.removeChangeListener=function(a){var b=this.changeListeners.indexOf(a);b>=0&&this.changeListeners.splice(b,1)},a}()}}])