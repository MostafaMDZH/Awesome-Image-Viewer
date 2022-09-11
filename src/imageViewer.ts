//custom types:
type image = {
    mainUrl: string;
    thumbnailUrl?: string;
    description?: string;
}
type button = {
  name: string;
  iconSrc: string;
  iconSize: string;
  onSelect: () => void;
}
type constructorParameters = {
    images: image[];
    currentSelected?: number;
    buttons?: button[];
    showThumbnails?: boolean;
    stretchImages?: boolean;
    style?: object;
}

export default class ImageViewer{

    //object properties:
    protected viewID:           number;
    protected view:             HTMLElement;
    protected images:           image[];
    protected currentSelected:  number;
    protected buttons?:         button[];
    protected showThumbnails:   boolean;
    protected stretchImages:    boolean;
    protected isHudHide:        boolean;
    protected style?:           object;

    //constructor:
    constructor(parameters:constructorParameters){

        //append CSS styles to DOM:
        // ImageViewer.appendCSS();//comment at dev mode

        //the view:
        this.viewID = ImageViewer.generateViewID();
        const view  = ImageViewer.getHtml(this.viewID);
        document.body.appendChild(view);
        this.view   = document.getElementById(this.viewID.toString()) || document.createElement('div');

        //set properties:
        this.images          = parameters.images;
        this.currentSelected = parameters.currentSelected ?? 0;
        this.buttons         = parameters.buttons;
        this.showThumbnails  = parameters.showThumbnails ?? true;
        this.stretchImages   = parameters.stretchImages ?? false;
        this.isHudHide       = false;

        //show images:
        this.showImages();

        //show toolbar:
        this.showToolbar();

        //echo thumbnails:
        this.echoThumbnails();

        //arrow event:
        this.addEventToArrows();

        //select the image:
        this.selectImage(this.currentSelected);

        //swipe event:
        this.addEventToSwipe((direction) => {
            switch(direction){
                case 'RIGHT':
                    this.selectImage(this.currentSelected - 1);
                    break;
                case 'LEFT':
                    this.selectImage(this.currentSelected + 1);
                    break;
            }
        }, () => this.selectImage(this.currentSelected));
        
        //hud hide event:
        this.addEventToHudHide();

        //addEventToWindowResize:
        this.addEventToWindowResize();

        //set style:
        this.setStyle(parameters.style);

        //hide events:
        this.addEventToHide();
        
        //finally show:
        this.show();

	}

    //appendCSS:
    protected static appendCSS(){
        if(document.getElementById('imageViewer-style') === null){
            const head  = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.id  = 'imageViewer-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }

    //generateViewID:
    protected static generateViewID():number{
		const id = Math.floor(Math.random() * 1000000000) + 100000000;
        const element = document.getElementById(id.toString());
        if(element === null)
            return id;
        return ImageViewer.generateViewID();
	}

    //getHtml:
    protected static getHtml(viewID:number):ChildNode{
        const html = `
            <div class="imageViewer" id="${viewID}">
                <div class="shadow"></div>
                <div class="container">
                    <div class="imagesWrapper"></div>
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
    protected static getImageHtml(imageSrc:string, stretchImages:boolean):ChildNode{
        const html = `
            <button class="imageContainer${stretchImages ? ' stretch' : ''}" data-url="${imageSrc}">
                <img class="image"/>
            </button>
        `;
        return ImageViewer.getChildNode(html);
    }

    //getButtonHtml:
    protected static getButtonHtml(name:string, iconSrc:string, iconSize:string):ChildNode{
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
    protected static getThumbnailHtml(index:number, imageSrc:string, title?:string):ChildNode{
        const html = `
            <button class="thumbnailContainer">
                <img class="thumbnail" data-index="${index}" src="${imageSrc}" title="${title}"/>
            </button>
        `;
        return ImageViewer.getChildNode(html);
    }

    //getChildNode:
    protected static getChildNode(html:string):ChildNode{
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild || div;
    }
    
    //showImages:
    protected showImages(){
        const imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
        this.images.forEach((image) => {
            const imageHtml = ImageViewer.getImageHtml(image.mainUrl, this.stretchImages);
            imagesWrapper.appendChild(imageHtml);
        });
    }
    
    //showToolbar:
    protected showToolbar(){
        const toolbar = <HTMLElement> this.view.getElementsByClassName('toolbar')[0];
        this.buttons?.forEach((button) => {
            const buttonHtml = ImageViewer.getButtonHtml(button.name, button.iconSrc, button.iconSize);
            toolbar.appendChild(buttonHtml);
            buttonHtml.addEventListener('click', e => {
                e.stopPropagation();
                if(typeof button.onSelect !== undefined)
                    button.onSelect();
            })
        });
    }
    
    //echoThumbnails:
    protected echoThumbnails(){
        if(!this.showThumbnails || this.images.length <= 0) return;
        const thumbnailsWrapper = <HTMLElement> this.view.getElementsByClassName('thumbnailsWrapper')[0];
        let i = 0;
        this.images.forEach((image) => {
            const thumbnailHtml = ImageViewer.getThumbnailHtml(i, image.thumbnailUrl ?? image.mainUrl, image.description);
            thumbnailsWrapper.appendChild(thumbnailHtml);
            thumbnailHtml.addEventListener('click', e => {
                e.stopPropagation();
                const tar = <HTMLHtmlElement> e.target;
                const index = tar.dataset.index;
                this.selectImage(parseInt(index ?? '0'));
            });
            i++;
        });
    }

    //addEventToArrows:
    protected addEventToArrows(){
        const leftButton = <HTMLElement> this.view.getElementsByClassName('leftButton')[0];
        leftButton.addEventListener('click', e => {
            e.stopPropagation();
            this.selectImage(this.currentSelected - 1);
        });
        const rightButton = <HTMLElement> this.view.getElementsByClassName('rightButton')[0];
        rightButton.addEventListener('click', e => {
            e.stopPropagation();
            this.selectImage(this.currentSelected + 1);
        });
        //navigation with arrow buttons:
        const imageContainers = this.view.querySelectorAll('.imageContainer, .arrowButton, .thumbnailContainer');
        const firstContainer = <HTMLElement> imageContainers[0];
        setTimeout(() => firstContainer.focus(), 100);
        imageContainers.forEach(container => {
            container.addEventListener('keydown', e => {
                const event  = <KeyboardEvent> e;
                if(event.key === 'ArrowLeft'){
                    e.preventDefault();
                    this.selectImage(this.currentSelected - 1);
                }
                if(event.key === 'ArrowRight'){
                    e.preventDefault();
                    this.selectImage(this.currentSelected + 1);
                }
                });
        });
    }

    //selectImage:
    protected selectImage(index:number){
        if(index < 0 || index > this.images.length - 1) return;
        this.currentSelected = index;
        this.loadImage(index-1);
        this.loadImage(index);
        this.loadImage(index+1);
        this.scrollToImage(index);
        this.setDescription(this.images[index].description);
        this.setThumbnail(index);
    }

    //loadImage:
    protected loadImage(index:number){
        if(index < 0 || index > this.images.length - 1) return;
        const imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
        const imageContainers = imagesWrapper.children;
        const imageContainer = <HTMLElement> imageContainers.item(index);
        const url = imageContainer.dataset.url;
        const image = <HTMLImageElement> imageContainer.getElementsByClassName('image')[0];
        image.src = url!;
    }

    //scrollToImage:
    protected scrollToImage(index:number){
        const imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
        const images = imagesWrapper.children;
        const image = <HTMLElement> images.item(index);
        const imageCenterPosition = image.offsetLeft - (imagesWrapper.getBoundingClientRect().width - image.getBoundingClientRect().width)/2;
        imagesWrapper.scrollTo({left: imageCenterPosition, behavior: 'smooth'});
    }

    //setDescription:
    protected setDescription(text?:string){
        const description = <HTMLElement> this.view.getElementsByClassName('description')[0];
        description.innerHTML = text || '';
    }

    //setThumbnail:
    protected setThumbnail(index:number){
        const thumbnails = this.view.querySelectorAll('.thumbnail');
        thumbnails.forEach(th => {
            th.classList.remove('selected');
        });
        const thumbnail = <HTMLElement> this.view.querySelector('[data-index="' + index + '"]');
        thumbnail.classList.add('selected');
        this.scrollThumbnail(index);
    }

    //scrollThumbnail:
    protected scrollThumbnail(index:number){
        const thumbnailsWrapper = <HTMLElement> this.view.getElementsByClassName('thumbnailsWrapper')[0];
        const thumbnails = thumbnailsWrapper.children;
        const thumbnail = <HTMLElement> thumbnails.item(index);
        const thumbnailCenterPosition = thumbnail.offsetLeft - (thumbnailsWrapper.getBoundingClientRect().width - thumbnail.getBoundingClientRect().width)/2;
        thumbnailsWrapper.scrollTo({left: thumbnailCenterPosition, behavior: 'smooth'});
    }

    //onSwipe:
    protected addEventToSwipe(onSwipe:(direction:string)=>void, notSwiped:()=>void){
        let swipeDetection = { startX: 0, startY: 0, endX: 0, endY: 0 };
        let minX = 30; //min x swipe for horizontal swipe
        let maxX = 30; //max x difference for vertical swipe
        let minY = 50; //min y swipe for vertical swipe
        let maxY = 60; //max y difference for horizontal swipe
        let direction = '';
        const imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
        let wrapperInfo = imagesWrapper.getBoundingClientRect();
        let scrollPosition = wrapperInfo.left;
        //events:
        imagesWrapper.addEventListener('touchstart', e => {
            let touch = e.touches[0];
            swipeDetection.startX = touch.screenX;
            swipeDetection.startY = touch.screenY;
            const imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
            const images = imagesWrapper.children;
            const currentImage = <HTMLElement> images.item(this.currentSelected);
            scrollPosition = currentImage.offsetLeft;
        });
        imagesWrapper.addEventListener('touchmove', e => {
            e.preventDefault();
            let touch = e.touches[0];
            swipeDetection.endX = touch.screenX;
            swipeDetection.endY = touch.screenY;
            //sync the scroll with touch:
            let touchChange = swipeDetection.startX - touch.screenX;
            imagesWrapper.scrollLeft = scrollPosition + touchChange;
        });
        imagesWrapper.addEventListener('touchend', e => {
            //horizontal detection:
            if(
                (((swipeDetection.endX - minX > swipeDetection.startX) || (swipeDetection.endX + minX < swipeDetection.startX)) &&
                 ((swipeDetection.endY < swipeDetection.startY + maxY) && (swipeDetection.startY > swipeDetection.endY - maxY)  &&
                  (swipeDetection.endX > 0)))){
                if(swipeDetection.endX > swipeDetection.startX)
                    direction = 'RIGHT'; else direction = 'LEFT';
            }
            //vertical detection:
            else if(
                (((swipeDetection.endY - minY > swipeDetection.startY) || (swipeDetection.endY + minY < swipeDetection.startY)) &&
                 ((swipeDetection.endX < swipeDetection.startX + maxX) && (swipeDetection.startX > swipeDetection.endX - maxX)  &&
                  (swipeDetection.endY > 0)))){
                if(swipeDetection.endY > swipeDetection.startY)
                    direction = 'DOWN'; else direction = 'UP';
            }

            //run the callback:
            if(direction === '') notSwiped();
            else onSwipe(direction);
            swipeDetection = { startX: 0, startY: 0, endX: 0, endY: 0 };
            direction = '';
        });
    }

    //addEventToHudHide:
    protected addEventToHudHide(){
        const images = this.view.querySelectorAll('.image');
        images.forEach(image => {
            image.addEventListener('click', e => {
                e.stopPropagation();
                if(this.isHudHide){
                    this.view.classList.remove('hudDisplay');
                    setTimeout(()=>this.view.classList.remove('hudOpacity'), 50);
                }else{
                    this.view.classList.add('hudOpacity');
                    setTimeout(()=>this.view.classList.add('hudDisplay'), 200);
                }
                this.isHudHide = !this.isHudHide;
            });
        });
    }

    //addEventToWindowResize:
    protected addEventToWindowResize(){
        window.addEventListener('resize', () => {
            this.selectImage(this.currentSelected);
        });
    }

    //setStyle:
    public setStyle(style?:object){
        if(style === undefined) return;
        this.style = style;
        for(const [className, style] of Object.entries(this.style)){
            const elements = this.view.querySelectorAll('.' + className);
            elements.forEach(element => {
                for(const property of style)
                    (<HTMLElement> element).style.setProperty(property[0], property[1]);
            });
        }
    }

    //show:
    protected show(){
        const thisView = this;
        setTimeout(() => {
            thisView.view.classList.add('visible');
        }, 50);//slight delay between adding to DOM and running css animation
    }

    //addEventToHide:
    protected addEventToHide(){//close button acts from its parent
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
    protected hide(){
        this.view.classList.remove('visible');
        const thisView = this;
        setTimeout(() => {
            thisView.view.remove();
        }, 500);//long enough to make sure that it is hidden
    }

}

const Style = `

`;