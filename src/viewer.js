"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageViewer {
    //constructor:
    constructor(parameters) {
        //append CSS styles to DOM:
        // ImageViewer.appendCSS();//comment at dev mode
        //the view:
        this.viewID = ImageViewer.generateViewID();
        let view = ImageViewer.getHtml(this.viewID);
        document.body.appendChild(view);
        this.view = document.getElementById(this.viewID.toString()) || document.createElement('div');
        //set properties:
        this.images = parameters.images;
        this.currentSelected = parameters.currentSelected;
        this.buttons = parameters.buttons;
        this.showThumbnails = parameters.showThumbnails;
        //show images:
        this.showImages();
        //show toolbar:
        this.showToolbar();
        //set style:
        this.setStyle(parameters.style);
        //hide events:
        this.addEventToHide();
        //finally show:
        this.show();
    }
    //appendCSS:
    static appendCSS() {
        if (document.getElementById('imageViewer-style') === null) {
            let head = document.head || document.getElementsByTagName('head')[0];
            let style = document.createElement('style');
            style.id = 'imageViewer-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }
    //generateViewID:
    static generateViewID() {
        let id = Math.floor(Math.random() * 1000000000) + 100000000;
        let element = document.getElementById(id.toString());
        if (element === null)
            return id;
        return ImageViewer.generateViewID();
    }
    //getHtml:
    static getHtml(viewID) {
        const html = `
            <div class="imageViewer" id="${viewID}">
                <div class="shadow"></div>
                <div class="container">
                    <div class="imagesSlider">
                        <div class="imagesWrapper">
                            <!-- this will auto generate with js:
                            <div class="imageContainer"><img class="image" alt=""/></div> -->
                        </div>
                    </div>
                    <div class="toolbar">
                        <button class="closeButton"><div><svg fill="#aaa" width="19" height="19" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div></button>
                        <!-- this will auto generate with js:
                        <input type="button" class="customButton editButton"> -->
                    </div>
                    <input type="button" class="arrowButton rightButton">
                    <input type="button" class="arrowButton leftButton" >
                    <div class="footer">
                        <div class="descriptionContainer">
                            <p dir="auto" class="description"></p>
                        </div>
                        <div class="thumbnailsContainer">
                            <!-- this will auto generate with js:
                            <img class="thumbnail" number="0" alt=""/> -->
                        </div>
                    </div>
                </div>
            </div>
        `;
        return ImageViewer.getChildNode(html);
    }
    //getThumbnailHtml:
    static getImageHtml(imageSrc) {
        const html = `
            <div class="imageContainer">
                <img class="image" src="${imageSrc}"/>
            </div>
        `;
        return ImageViewer.getChildNode(html);
    }
    //getButtonHtml:
    static getButtonHtml(name, iconSrc, iconSize) {
        const html = `
            <input
                type="button"
                class="customButton"
                title="${name}"
                style="${'background-image:' + "url('" + iconSrc + "');"} ${iconSize !== '' ? ('background-size:' + iconSize + ';') : ''}"
            />`;
        return ImageViewer.getChildNode(html);
    }
    //getThumbnailHtml:
    static getThumbnailHtml(number, name, imageSrc) {
        const html = `
            <img
                class="thumbnail"
                number="${number}"
                title="${name}"
                src="${imageSrc}"
            />`;
        return ImageViewer.getChildNode(html);
    }
    //getChildNode:
    static getChildNode(html) {
        let div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild || div;
    }
    //showImages:
    showImages() {
        let imagesWrapper = this.view.getElementsByClassName('imagesWrapper')[0];
        this.images.forEach((image) => {
            let imageHtml = ImageViewer.getImageHtml(image.mainUrl);
            imagesWrapper.appendChild(imageHtml);
        });
    }
    //showToolbar:
    showToolbar() {
        var _a;
        const toolbar = this.view.getElementsByClassName('toolbar')[0];
        (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach((button) => {
            const buttonHtml = ImageViewer.getButtonHtml(button.name, button.iconSrc, button.iconSize);
            toolbar.appendChild(buttonHtml);
        });
    }
    //setStyle:
    setStyle(style) {
        if (style === undefined)
            return;
        this.style = style;
        for (const [className, style] of Object.entries(this.style)) {
            const elements = this.view.querySelectorAll('.' + className);
            elements.forEach(element => {
                for (const property of style)
                    element.style.setProperty(property[0], property[1]);
            });
        }
    }
    //show:
    show() {
        const thisView = this;
        setTimeout(() => {
            thisView.view.classList.add('visible');
        }, 50); //slight delay between adding to DOM and running css animation
    }
    //addEventToHide:
    addEventToHide() {
        const thisView = this;
        const closeButton = this.view.getElementsByClassName('closeButton')[0];
        closeButton.addEventListener('click', e => {
            thisView.hide();
        });
        const container = this.view.getElementsByClassName('container')[0];
        container.addEventListener('click', e => {
            thisView.hide();
        });
        const shadow = this.view.getElementsByClassName('shadow')[0];
        shadow.addEventListener('click', e => {
            thisView.hide();
        });
    }
    //hide:
    hide() {
        this.view.classList.remove('visible');
        const thisView = this;
        setTimeout(() => {
            thisView.view.remove();
        }, 500); //long enough to make sure that it is hidden
    }
}
exports.default = ImageViewer;
const Style = `

`;
