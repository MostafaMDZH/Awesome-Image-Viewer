(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{8577:function(a,b){"use strict";class c{constructor(a){var b;c.appendCSS(),this.viewID=c.generateViewID();let d=c.getHtml(this.viewID);document.body.appendChild(d),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.setTitle(this.title=a.title||""),this.allOptions=a.options,this.optionsToShow=a.options,this.recentSelects=a.recentSelects,this.currentOptionId=a.currentOptionId,this.isSearchable=null!==(b=a.isSearchable)&& void 0!==b&&b,this.setSearchPlaceholder(this.searchPlaceholder=a.searchPlaceholder||""),this.maxColumns=a.maxColumns||7,this.maxRows=a.maxRows||16,this.rowsNumber=1,this.columnsNumber=1,this.onSelect=a.onSelect,this.showRecentSelects(),this.showAllOptions(!0),this.setTheme(a.theme),this.addWindowSizeEvent(),this.addEventToSearch(),this.addEventToClose(),this.setStyle(a.style),this.show()}static appendCSS(){if(null===document.getElementById("imageViewer-style")){let a=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.id="imageViewer-style",a.appendChild(b),b.appendChild(document.createTextNode(d))}}static generateViewID(){let a=Math.floor(1e9*Math.random())+1e8;return null===document.getElementById(a.toString())?a:c.generateViewID()}static getHtml(a){let b=`
            <div class="imageViewer" id="${a}">
                <div class="shadow"></div>
                <div class="container">
                    <div class="window">
                        <div class="toolbar">
                            <a class="title"></a>
                            <div class="searchContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-7 -7 65 65" fill="#aaa"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
                                <input type="text" dir="auto" autocomplete="off" class="searchInput" placeholder=""/>
                            </div>
                            <div class="recentSelectsWrapper">
                                <!-- //this is the structure of the recently selected options that will generate dynamically with js:
                                <input type="button" class="recentButton" id="en" value="English"/>-->
                            </div>
                            <button class="closeButton ">
                                <div class="closeIcon_light"><svg fill="#5a5a5a" width="16" height="16" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div>
                                <div class="closeIcon_dark" ><svg fill="#bbbbbb" width="16" height="16" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div>
                                <div class="downIcon_light" ><svg fill="#5a5a5a" width="16" height="16" viewBox="2 1 20 20"   xmlns="http://www.w3.org/2000/svg"><path d="m8.12 9.29 3.88 3.88 3.88-3.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0l-4.59-4.59c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg></div>
                                <div class="downIcon_dark"  ><svg fill="#bbbbbb" width="16" height="16" viewBox="2 1 20 20"   xmlns="http://www.w3.org/2000/svg"><path d="m8.12 9.29 3.88 3.88 3.88-3.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0l-4.59-4.59c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg></div>
                            </button>
                        </div>
                        <div class="optionsColumnsWrapper">
                            <!-- //this is the button structure of a column that will generate dynamically with js:
                            <div class="optionsColumn">
                                <input type="button" class="optionButton" id="en" value="English"/>
                                <input type="button" class="optionButton" id="sp" value="Spanish"/>
                                <input type="button" class="optionButton" id="fr" value="French"/>
                            </div/>-->
                        </div>
                    </div>
                </div>
            </div>
        `;return c.getChildNode(b)}static getOptionButtonHtml(a,b,d,e,f,g,h){let i=`
            <input
                type="button"
                class="navButton ${a}${""!==e?" withIcon":""}${h?" selected":" unselected"}"
                id="${b}"
                value="${d}"
                number="${g}"
                title="${d}"
                style="${""!==e?"background-image:url('"+e+"');":""} ${""!==f?"background-size:"+f+";":""}"
            />`;return c.getChildNode(i)}static getColumnHtml(a){let b=`<div class="optionsColumn column_${a}">`;return c.getChildNode(b)}static getChildNode(a){let b=document.createElement("div");return b.innerHTML=a.trim(),b.firstChild||b}setTitle(a){this.title=a;this.view.getElementsByClassName("title")[0].innerHTML=this.title,this.setupHeader()}setSearchPlaceholder(a){this.searchPlaceholder=a;this.view.getElementsByClassName("searchInput")[0].placeholder=this.searchPlaceholder,this.setupHeader()}setupHeader(){let a=this.view.getElementsByClassName("title")[0],b=this.view.getElementsByClassName("searchContainer")[0];this.isSearchable?(a.style.display="none",b.style.display="flex"):(a.style.display="block",b.style.display="none")}showRecentSelects(){var a;let b=this.view.getElementsByClassName("recentSelectsWrapper")[0],d=1;null===(a=this.recentSelects)|| void 0===a||a.forEach(a=>{let e=a.id,f=a.name,g=c.getOptionButtonHtml("recentButton",e,f,"","",d+"_0",!1);b.appendChild(g),d++}),void 0!==this.recentSelects&&this.recentSelects.length>0&&(b.style.display="inline")}showAllOptions(a){if(a||this.fixTheWindow(),this.rowsNumber=this.calcRowsNumber(),this.removeAllOptions(),this.printColumns(),1===this.columnsNumber){let b=this.view.getElementsByClassName("optionsColumn")[0];b.classList.add("singleColumn")}this.addEventToOptions(),a&&this.releaseTheWindow()}fixTheWindow(){let a=this.view.getElementsByClassName("window")[0],b=a.offsetWidth,c=a.offsetHeight;a.style.width=b+"px",a.style.height=c+"px"}releaseTheWindow(){let a=this.view.getElementsByClassName("window")[0];a.style.width="auto",a.style.height="auto"}removeAllOptions(){this.view.getElementsByClassName("optionsColumnsWrapper")[0].innerHTML=""}calcRowsNumber(){let a=this.calcMaxRows(),b=this.calcMaxColumns(),c=a,d=b*a,e=this.optionsToShow.length;return c=e<d?e<a?e:Math.ceil(5*Math.sqrt(e/10)):Math.ceil(e/b)}calcMaxRows(){let a=Math.floor((window.innerHeight-270)/c.ROW_HEIGHT);return a>this.maxRows&&(a=this.maxRows),a}calcMaxColumns(){let a=Math.floor((window.innerWidth-250)/c.COLUMN_WIDTH);return a>this.maxColumns&&(a=this.maxColumns),a}printColumns(){var a,b;if(0===this.optionsToShow.length)return;let d=this.view.getElementsByClassName("optionsColumnsWrapper")[0],e=0;for(this.columnsNumber=1;;){let f=c.getColumnHtml(this.columnsNumber);d.appendChild(f);let g=this.view.getElementsByClassName("column_"+this.columnsNumber)[0];for(let h=1;h<=this.rowsNumber;h++){let i=!1,j=this.optionsToShow[e],k=this.columnsNumber+"_"+h;j.id===this.currentOptionId&&(i=!0);let l=c.getOptionButtonHtml("optionButton",j.id,j.name,null!==(a=j.iconSrc)&& void 0!==a?a:"",null!==(b=j.iconSize)&& void 0!==b?b:"",k,i);if(g.appendChild(l),++e>=this.optionsToShow.length)return}this.columnsNumber++}}setTheme(a){void 0!==a&&(this.theme,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(a))}setStyle(a){if(void 0!==a)for(let[b,c]of(this.style=a,Object.entries(this.style))){let d=this.view.queryImageViewerAll("."+b);d.forEach(a=>{for(let b of c)a.style.setProperty(b[0],b[1])})}}show(){let a=this;setTimeout(()=>{a.view.classList.add("visible"),setTimeout(()=>{let a=this.view.getElementsByClassName("searchInput")[0];a.focus()},100)},50)}addWindowSizeEvent(){window.addEventListener("resize",()=>{this.columnsNumber!==this.calcMaxColumns()&&this.showAllOptions(!0)})}addEventToSearch(){let a=this,b=this.view.getElementsByClassName("searchInput")[0];b.addEventListener("input",b=>{let c=b.target,d=c.value;a.optionsToShow=a.allOptions.filter(a=>a.name.toLowerCase().search(d.toLowerCase())>=0)||[],a.showAllOptions(""===d)}),b.addEventListener("keyup",a=>{if("ArrowDown"===a.key){let b=this.view.getElementsByClassName("optionsColumnsWrapper")[0],c=b.getElementsByClassName("optionButton")[0];c.focus()}})}addEventToOptions(){let a=Array.from(this.view.queryImageViewerAll(".recentButton")),b=Array.from(this.view.queryImageViewerAll(".optionButton")),c=a.concat(b);c.forEach(a=>{a.addEventListener("click",a=>{let b=null==a?void 0:a.target;void 0!==this.onSelect&&this.onSelect(b.id,b.value),this.hide()})}),this.addNavigationEvents()}addNavigationEvents(){let a=this,b=this.view.queryImageViewerAll(".navButton");b.forEach(b=>{b.addEventListener("keydown",b=>{var c,d,e,f;b.preventDefault();let g=b.target,h=(null!==(c=g.getAttribute("number"))&& void 0!==c?c:"0_0").split("_"),i=parseInt(h[0]),j=parseInt(h[1]);switch(b.key){case"ArrowUp":null===(d=a.getOptionButton(i,j-1))|| void 0===d||d.focus(),1==j&&a.view.getElementsByClassName("searchInput")[0].focus();break;case"ArrowDown":for(;;){let k=a.getOptionButton(i,j+1);if(null!==k){k.focus();return}if(i-- <0)return}break;case"ArrowLeft":null===(e=a.getOptionButton(i-1,j))|| void 0===e||e.focus();break;case"ArrowRight":null===(f=a.getOptionButton(i+1,j))|| void 0===f||f.focus()}})})}getOptionButton(a,b){return this.view.queryImageViewer('[number="'+a+"_"+b+'"]')}addEventToClose(){let a=this,b=this.view.getElementsByClassName("closeButton")[0];b.addEventListener("click",b=>{a.hide()});let c=this.view.getElementsByClassName("window")[0];c.addEventListener("click",a=>{a.stopPropagation()});let d=this.view.getElementsByClassName("container")[0];d.addEventListener("click",b=>{a.hide()});let e=this.view.getElementsByClassName("shadow")[0];e.addEventListener("click",b=>{a.hide()})}hide(){this.view.classList.remove("visible");let a=this;setTimeout(()=>{a.view.remove()},500)}}b.Z=c,c.ROW_HEIGHT=40,c.COLUMN_WIDTH=187;let d=`
@media (hover: hover) and (pointer: fine) {
  .thinScrollbar::-webkit-scrollbar, .imageViewer > .container > .window > .optionsColumnsWrapper::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .thinScrollbar::-webkit-scrollbar-track, .imageViewer > .container > .window > .optionsColumnsWrapper::-webkit-scrollbar-track {
    background: transparent;
  }
  .thinScrollbar::-webkit-scrollbar-thumb, .imageViewer > .container > .window > .optionsColumnsWrapper::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 20px;
  }
  .darkMode .thinScrollbar::-webkit-scrollbar-thumb, .darkMode .imageViewer > .container > .window > .optionsColumnsWrapper::-webkit-scrollbar-thumb {
    background: #555;
  }
}
.transparentBackground, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected, .imageViewer > .container > .window > .toolbar > .closeButton, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
  transition: background-color 50ms;
}

.transparentBackground:enabled:active, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:active, .imageViewer > .container > .window > .toolbar > .closeButton:enabled:active, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:active {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

@media (hover: hover) and (pointer: fine) {
  .transparentBackground, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected, .imageViewer > .container > .window > .toolbar > .closeButton, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
    transition: background-color 150ms;
  }
  .transparentBackground:enabled:hover, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:hover, .imageViewer > .container > .window > .toolbar > .closeButton:enabled:hover, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:hover {
    background-color: rgba(0, 0, 0, 0.03) !important;
  }
  .transparentBackground:enabled:focus, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:focus, .imageViewer > .container > .window > .toolbar > .closeButton:enabled:focus, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:focus {
    background-color: rgba(0, 0, 0, 0.04) !important;
  }
  .transparentBackground:enabled:active, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:active, .imageViewer > .container > .window > .toolbar > .closeButton:enabled:active, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:active {
    background-color: rgba(0, 0, 0, 0.08) !important;
  }
}
.transparentBackground:disabled, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:disabled, .imageViewer > .container > .window > .toolbar > .closeButton:disabled, .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:disabled {
  opacity: 0.5;
  cursor: default;
}

.coloredBackground, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected {
  opacity: 0.8;
}

.coloredBackground:enabled:active, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected:enabled:active {
  opacity: 1;
}

@media (hover: hover) and (pointer: fine) {
  .coloredBackground:enabled:hover, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected:enabled:hover {
    opacity: 0.85;
  }
  .coloredBackground:enabled:focus, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected:enabled:focus {
    opacity: 0.9;
  }
  .coloredBackground:enabled:active, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected:enabled:active {
    opacity: 1;
  }
}
.coloredBackground:disabled, .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected:disabled {
  opacity: 0.5;
  cursor: default;
}

.transparentBackground_dark, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected, .imageViewer.dark > .container > .window > .toolbar > .closeButton, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
  transition: background-color 50ms;
}

.transparentBackground_dark:enabled:active, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:active, .imageViewer.dark > .container > .window > .toolbar > .closeButton:enabled:active, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:active {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

@media (hover: hover) and (pointer: fine) {
  .transparentBackground_dark, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected, .imageViewer.dark > .container > .window > .toolbar > .closeButton, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
    transition: background-color 150ms;
  }
  .transparentBackground_dark:enabled:hover, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:hover, .imageViewer.dark > .container > .window > .toolbar > .closeButton:enabled:hover, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:hover {
    background-color: rgba(255, 255, 255, 0.12) !important;
  }
  .transparentBackground_dark:enabled:focus, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:focus, .imageViewer.dark > .container > .window > .toolbar > .closeButton:enabled:focus, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:focus {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  .transparentBackground_dark:enabled:active, .imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected:enabled:active, .imageViewer.dark > .container > .window > .toolbar > .closeButton:enabled:active, .imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton:enabled:active {
    background-color: rgba(255, 255, 255, 0.07) !important;
  }
}
.imageViewer {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 160ms ease-in-out;
}
.imageViewer > .container {
  width: 100%;
  height: 100%;
  max-height: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 160ms ease-in-out;
}
.imageViewer > .container > .window {
  max-width: calc(100% - 100px);
  min-height: 260px;
  max-height: calc(100% - 60px);
  padding: 15px 17px;
  padding-top: 13px;
  background-color: white;
  border: solid 1px rgb(100, 100, 100);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imageViewer > .container > .window > .toolbar {
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}
.imageViewer > .container > .window > .toolbar > .title {
  min-width: 226px;
  padding-left: 2px;
  color: #333;
}
.imageViewer > .container > .window > .toolbar > .searchContainer {
  flex: 1;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
}
.imageViewer > .container > .window > .toolbar > .searchContainer > svg {
  min-width: 30px;
}
.imageViewer > .container > .window > .toolbar > .searchContainer > .searchInput {
  flex: 1;
  font-size: 1rem;
  color: #333;
}
.imageViewer > .container > .window > .toolbar > .recentSelectsWrapper {
  text-align: right;
  height: 35px;
  display: none;
  overflow: hidden;
}
.imageViewer > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
  min-width: -webkit-fit-content;
  min-width: -moz-fit-content;
  min-width: fit-content;
  padding-left: 7px;
  padding-right: 7px;
  height: 35px;
  font-size: 1rem;
  text-align: center;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 3px;
}
.imageViewer > .container > .window > .toolbar > .closeButton {
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: -5px;
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imageViewer > .container > .window > .toolbar > .closeButton > * {
  display: none;
  justify-content: center;
  align-items: center;
}
.imageViewer > .container > .window > .toolbar > .closeButton > .closeIcon_light {
  display: flex;
}
.imageViewer > .container > .window > .optionsColumnsWrapper {
  flex: 1;
  width: 100%;
  padding-right: 10px;
  display: flex;
  gap: 5px;
  overflow-y: auto;
}
.imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn {
  flex: 1;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn .optionButton {
  width: 100%;
  min-width: 167px;
  max-width: 200px;
  padding-left: 20px;
  padding-right: 7px;
  height: 38px;
  font-size: 1rem;
  text-align: left;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 3px;
}
.imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected {
  background-color: #e0eaf5;
  color: #0729ae;
}
.imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.withIcon {
  padding-left: 35px;
  background-repeat: no-repeat;
  background-position: left 8px center;
  background-size: 17px auto;
}
.imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn.singleColumn .optionButton {
  max-width: 100%;
}

.imageViewer.visible {
  visibility: visible;
}
.imageViewer.visible > .shadow,
.imageViewer.visible > .container {
  opacity: 1;
}

.imageViewer.dark > .container > .window {
  background-color: #181818;
  border-color: #1a1a1a;
}
.imageViewer.dark > .container > .window > .toolbar {
  border-bottom-color: #e6e6e6;
}
.imageViewer.dark > .container > .window > .toolbar > .searchInput {
  color: #ccc;
}
.imageViewer.dark > .container > .window > .toolbar > .title {
  color: #ccc;
}
.imageViewer.dark > .container > .window > .toolbar > .recentSelectsWrapper > .recentButton {
  color: #ccc;
}
.imageViewer.dark > .container > .window > .toolbar > .closeButton > * {
  display: none;
}
.imageViewer.dark > .container > .window > .toolbar > .closeButton > .closeIcon_dark {
  display: flex;
}
.imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.unselected {
  color: #ccc;
}
.imageViewer.dark > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton.selected {
  background-color: #269;
  color: #fff;
}

@media only screen and (max-width: 450px) {
  .imageViewer > .container > .window {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: unset;
    max-height: 85%;
    padding-top: 20px;
    border: unset;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    top: unset;
    bottom: 0;
    left: 0;
    transform: unset;
  }
  .imageViewer > .container > .window > .toolbar {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    padding-bottom: 8px;
  }
  .imageViewer > .container > .window > .toolbar > .searchContainer {
    width: calc(100% - 50px);
    flex: none;
  }
  .imageViewer > .container > .window > .toolbar > .recentSelectsWrapper {
    text-align: left;
    flex: none;
    width: 100%;
    margin-bottom: -5px;
  }
  .imageViewer > .container > .window > .toolbar > .closeButton {
    flex: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: -6px -8px 0 0;
  }
  .imageViewer > .container > .window > .toolbar > .closeButton > * {
    display: none !important;
  }
  .imageViewer > .container > .window > .toolbar > .closeButton > .downIcon_light {
    display: flex !important;
  }
  .imageViewer > .container > .window > .optionsColumnsWrapper {
    width: calc(100% + 5px);
    padding-right: 5px;
  }
  .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn {
    width: 100%;
  }
  .imageViewer > .container > .window > .optionsColumnsWrapper > .optionsColumn > .optionButton {
    min-width: unset;
    max-width: unset;
  }
  .imageViewer.dark > .container > .window > .toolbar > .closeButton > * {
    display: none !important;
  }
  .imageViewer.dark > .container > .window > .toolbar > .closeButton > .downIcon_dark {
    display: flex !important;
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
        `,c=document.createElement("div");return c.innerHTML=b.trim(),c.firstChild||c}setMessage(a){this.message=a;this.view.getElementsByClassName("message")[0].innerHTML=this.message}setPosition(a){this.position=a,this.view.classList.remove("bottom-left"),this.view.classList.remove("bottom-center"),this.view.classList.remove("bottom-right"),this.view.classList.remove("top-left"),this.view.classList.remove("top-center"),this.view.classList.remove("top-right"),this.view.classList.add(a),c.adjustListPositions(this)}setIconSrc(a){if(void 0===a)return;this.iconSrc=a;let b=this.view.getElementsByClassName("icon")[0];b.style.setProperty("display","block"),b.style.setProperty("background-image","url("+this.iconSrc+")")}setTheme(a){void 0!==a&&(this.theme,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(a))}setStyle(a){if(void 0!==a)for(let[b,c]of(this.style=a,Object.entries(this.style))){let d=document.getElementById(this.viewID.toString()).getElementsByClassName(b)[0];if(void 0!==d)for(let e of c)d.style.setProperty(e[0],e[1])}}setActionText(a){if(void 0===a)return;this.actionText=a;let b=this.view.getElementsByClassName("actionButton")[0];b.style.setProperty("display","block"),b.value=this.actionText}setActionCallback(a){this.onAction=a;this.view.getElementsByClassName("actionButton")[0].addEventListener("click",()=>{void 0!==this.onAction&&this.onAction(),this.hide()})}show(){setTimeout(()=>{c.List.push(this),c.adjustListPositions(this)},10)}addHideEventListener(){let a=this;"mousemove mousedown mouseup touchmove click keydown keyup".split(" ").forEach(function(b){window.addEventListener(b,a.hideEventHandler)})}removeHideEventListener(){let a=this;"mousemove mousedown mouseup touchmove click keydown keyup".split(" ").forEach(b=>{window.removeEventListener(b,a.hideEventHandler)})}handleHideEvent(){let a=this.timeout;Date.now()-this.bornTime>this.timeout&&(a=this.timeout/2),this.startHidingTimer(a),this.removeHideEventListener()}startHidingTimer(a){a>0&&!this.isWaitingForHide&&(this.isWaitingForHide=!0,setTimeout(()=>{this.hide()},a))}hide(){let a=this;c.List.filter(a=>a.position===this.position).length>1?(this.view.style.opacity="0",this.position.indexOf("bottom")>=0?this.view.style.marginBottom="-"+(this.getHeight()+5)+"px":this.view.style.marginTop="-"+(this.getHeight()+5)+"px"):this.position.indexOf("bottom")>=0?this.view.style.bottom="-"+(this.getHeight()+15)+"px":this.view.style.top="-"+(this.getHeight()+15)+"px";let b=c.List.indexOf(this);b> -1&&c.List.splice(b,1),c.adjustListPositions(this),setTimeout(function(){a.view.remove(),void 0!==a.afterHide&&a.afterHide()},500)}static adjustListPositions(a){let b=c.List.filter(b=>b.position===a.position);b.forEach(function(c,d){let e=20+(b.length-d-1)*(c.getHeight()+5)+"px";a.position.indexOf("bottom")>=0?(c.view.style.bottom=e,c.view.style.top="unset"):(c.view.style.top=e,c.view.style.bottom="unset")})}getHeight(){return+getComputedStyle(this.view).height.replace("px","")}}b.Z=c,c.List=[],c.DEFAULT_HIDING_TIMEOUT=4e3,c.DEFAULT_POSITION="bottom-left";let d=`
.snackbar {
    z-index: 999999999;
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
`},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=(d=c(7294),d&&d.__esModule?d:{default:d}),g=c(6273),h=c(2725),i=c(3462),j=c(1018),k=c(7190),l=c(1210),m=c(8684),n=void 0!==f.default.useTransition,o={};function p(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;o[b+"%"+c+(e?"%"+e:"")]=!0}}var q=f.default.forwardRef(function(a,b){var c,d,q=a.href,r=a.as,s=a.children,t=a.prefetch,u=a.passHref,v=a.replace,w=a.soft,x=a.shallow,y=a.scroll,z=a.locale,A=a.onClick,B=a.onMouseEnter,C=a.legacyBehavior,D=void 0===C?!0!==Boolean(!1):C,E=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=s,D&&("string"==typeof c||"number"==typeof c)&&(c=f.default.createElement("a",null,c));var F=!1!==t,G=e(n?f.default.useTransition():[],2),H=G[1],I=f.default.useContext(i.RouterContext),J=f.default.useContext(j.AppRouterContext);J&&(I=J);var K=f.default.useMemo(function(){var a=e(g.resolveHref(I,q,!0),2),b=a[0],c=a[1];return{href:b,as:r?g.resolveHref(I,r):c||b}},[I,q,r]),L=K.href,M=K.as,N=f.default.useRef(L),O=f.default.useRef(M);D&&(d=f.default.Children.only(c));var P=D?d&&"object"==typeof d&&d.ref:b,Q=e(k.useIntersection({rootMargin:"200px"}),3),R=Q[0],S=Q[1],T=Q[2],U=f.default.useCallback(function(a){(O.current!==M||N.current!==L)&&(T(),O.current=M,N.current=L),R(a),P&&("function"==typeof P?P(a):"object"==typeof P&&(P.current=a))},[M,P,L,T,R]);f.default.useEffect(function(){var a=S&&F&&g.isLocalURL(L),b=void 0!==z?z:I&&I.locale,c=o[L+"%"+M+(b?"%"+b:"")];a&&!c&&p(I,L,M,{locale:b})},[M,L,S,z,F,I]);var V={ref:U,onClick:function(a){D||"function"!=typeof A||A(a),D&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,h,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&g.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:h,locale:j,scroll:i})};k?k(n):n()}}(a,I,L,M,v,w,x,y,z,J?H:void 0)},onMouseEnter:function(a){D||"function"!=typeof B||B(a),D&&d.props&&"function"==typeof d.props.onMouseEnter&&d.props.onMouseEnter(a),g.isLocalURL(L)&&p(I,L,M,{priority:!0})}};if(!D||u||"a"===d.type&&!("href"in d.props)){var W=void 0!==z?z:I&&I.locale,X=I&&I.isLocaleDomain&&l.getDomainLocale(M,W,I.locales,I.domainLocales);V.href=X||m.addBasePath(h.addLocale(M,W,I&&I.defaultLocale))}return D?f.default.cloneElement(d,V):f.default.createElement("a",Object.assign({},E,V),c)});b.default=q,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.FullAppTreeContext=b.AppTreeContext=b.AppRouterContext=void 0;var d,e=(d=c(7294),d&&d.__esModule?d:{default:d}),f=e.default.createContext(null);b.AppRouterContext=f;var g=e.default.createContext(null);b.AppTreeContext=g;var h=e.default.createContext(null);b.FullAppTreeContext=h},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)}}])