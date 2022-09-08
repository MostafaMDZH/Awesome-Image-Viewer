"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageViewer {
    //constructor:
    constructor(parameters) {
        //append CSS styles to DOM:
        // ImageViewer.appendCSS();//comment at dev mode
        var _a, _b;
        //the view:
        this.viewID = ImageViewer.generateViewID();
        const view = ImageViewer.getHtml(this.viewID);
        document.body.appendChild(view);
        this.view = document.getElementById(this.viewID.toString()) || document.createElement('div');
        //set properties:
        this.images = parameters.images;
        this.currentSelected = (_a = parameters.currentSelected) !== null && _a !== void 0 ? _a : 0;
        this.buttons = parameters.buttons;
        this.showThumbnails = (_b = parameters.showThumbnails) !== null && _b !== void 0 ? _b : true;
        //show images:
        this.showImages();
        //show toolbar:
        this.showToolbar();
        //arrow event:
        this.addEventToArrows();
        //echo thumbnails:
        this.echoThumbnails();
        //select the image:
        this.selectImage(this.currentSelected);
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
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.id = 'imageViewer-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }
    //generateViewID:
    static generateViewID() {
        const id = Math.floor(Math.random() * 1000000000) + 100000000;
        const element = document.getElementById(id.toString());
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
                        <div class="imagesWrapper"></div>
                    </div>
                    <div class="toolbar">
                        <button class="closeButton"><div><svg fill="#aaa" width="22" height="22" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div></button>
                    </div>
                    <button class="arrowButton leftButton" ><div><svg fill="none" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="15 18 9 12 15 6" /></svg></div></button>
                    <button class="arrowButton rightButton"><div><svg fill="none" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="9 18 15 12 9 6"  /></svg></div></button>
                    <div class="footer">
                        <p dir="auto" class="description"></p>
                        <div class="thumbnailsWrapper"></div>
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
    static getThumbnailHtml(index, imageSrc, title) {
        const html = `<img class="thumbnail" data-index="${index}" src="${imageSrc}" title="${title}"/>`;
        return ImageViewer.getChildNode(html);
    }
    //getChildNode:
    static getChildNode(html) {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild || div;
    }
    //showImages:
    showImages() {
        const imagesWrapper = this.view.getElementsByClassName('imagesWrapper')[0];
        this.images.forEach((image) => {
            const imageHtml = ImageViewer.getImageHtml(image.mainUrl);
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
            buttonHtml.addEventListener('click', e => {
                e.stopPropagation();
                if (typeof button.onSelect !== undefined)
                    button.onSelect();
            });
        });
    }
    //addEventToArrows:
    addEventToArrows() {
        const leftButton = this.view.getElementsByClassName('leftButton')[0];
        leftButton.addEventListener('click', e => {
            e.stopPropagation();
            this.selectImage(this.currentSelected - 1);
        });
        const rightButton = this.view.getElementsByClassName('rightButton')[0];
        rightButton.addEventListener('click', e => {
            e.stopPropagation();
            this.selectImage(this.currentSelected + 1);
        });
    }
    //echoThumbnails:
    echoThumbnails() {
        if (!this.showThumbnails || this.images.length <= 0)
            return;
        const thumbnailsWrapper = this.view.getElementsByClassName('thumbnailsWrapper')[0];
        let i = 0;
        this.images.forEach((image) => {
            var _a;
            const thumbnailHtml = ImageViewer.getThumbnailHtml(i, (_a = image.thumbnailUrl) !== null && _a !== void 0 ? _a : image.mainUrl, image.description);
            thumbnailsWrapper.appendChild(thumbnailHtml);
            thumbnailHtml.addEventListener('click', e => {
                e.stopPropagation();
                const tar = e.target;
                const index = tar.dataset.index;
                this.selectImage(parseInt(index !== null && index !== void 0 ? index : '0'));
            });
            i++;
        });
    }
    //selectImage:
    selectImage(index) {
        if (index < 0 || index > this.images.length - 1)
            return;
        this.currentSelected = index;
        setTimeout(() => this.scrollToImage(index), 10);
        this.setDescription(this.images[index].description);
        this.setThumbnail(index);
    }
    //scrollToImage:
    scrollToImage(index) {
        const imagesWrapper = this.view.getElementsByClassName('imagesWrapper')[0];
        const imageContainers = imagesWrapper.children;
        const imageContainer = imageContainers.item(index);
        imageContainer === null || imageContainer === void 0 ? void 0 : imageContainer.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    //setDescription:
    setDescription(text) {
        const description = this.view.getElementsByClassName('description')[0];
        description.innerHTML = text || '';
    }
    //setThumbnail:
    setThumbnail(index) {
        const thumbnails = this.view.querySelectorAll('.thumbnail');
        thumbnails.forEach(th => {
            th.classList.remove('selected');
        });
        const thumbnail = this.view.querySelector('[data-index="' + index + '"]');
        thumbnail.classList.add('selected');
        this.scrollThumbnail(index);
    }
    //scrollThumbnail:
    scrollThumbnail(index) {
        const thumbnailsWrapper = this.view.getElementsByClassName('thumbnailsWrapper')[0];
        const thumbnails = thumbnailsWrapper.children;
        const thumbnail = thumbnails.item(index);
        thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.scrollIntoView({ inline: "center" });
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
        const images = this.view.querySelectorAll('.image');
        images.forEach(image => {
            image.addEventListener('click', e => {
                e.stopPropagation();
            });
        });
        const footer = this.view.getElementsByClassName('footer')[0];
        footer.addEventListener('click', e => {
            e.stopPropagation();
        });
        const container = this.view.getElementsByClassName('container')[0];
        container.addEventListener('click', e => {
            this.hide();
        });
        const shadow = this.view.getElementsByClassName('shadow')[0];
        shadow.addEventListener('click', e => {
            this.hide();
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
