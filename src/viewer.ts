//custom types:
type image = {
    mainUrl: string;
    thumbnailUrl: string;
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
    showThumbnails?:  boolean;
    style?: object;
}

export default class ImageViewer{

    //object properties:
    protected viewID:           number;
    protected view:             HTMLElement;
    protected images:           image[];
    protected currentSelected?: number;
    protected buttons?:         button[];
    protected showThumbnails?:  boolean;
    protected style?:           object;

    //constructor:
    constructor(parameters:constructorParameters){

        //append CSS styles to DOM:
        // ImageViewer.appendCSS();//comment at dev mode

        //the view:
        this.viewID = ImageViewer.generateViewID();
        let view    = ImageViewer.getHtml(this.viewID);
        document.body.appendChild(view);
        this.view   = document.getElementById(this.viewID.toString()) || document.createElement('div');

        //set properties:
        this.images          = parameters.images;
        this.currentSelected = parameters.currentSelected;
        this.buttons         = parameters.buttons;
        this.showThumbnails  = parameters.showThumbnails;

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
    protected static appendCSS():void{
        if(document.getElementById('imageViewer-style') === null){
            let head  = document.head || document.getElementsByTagName('head')[0];
            let style = document.createElement('style');
            style.id  = 'imageViewer-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }

    //generateViewID:
    protected static generateViewID():number{
		let id = Math.floor(Math.random() * 1000000000) + 100000000;
        let element = document.getElementById(id.toString());
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
    protected static getImageHtml(imageSrc:string):ChildNode{
        const html = `
            <div class="imageContainer">
                <img class="image" src="${imageSrc}"/>
            </div>
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
    protected static getThumbnailHtml(number:number, name:string, imageSrc:string):ChildNode{
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
    protected static getChildNode(html:string):ChildNode{
        let div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild || div;
    }
    
    //showImages:
    protected showImages(){
        let imagesWrapper = <HTMLElement> this.view.getElementsByClassName('imagesWrapper')[0];
        this.images.forEach((image) => {
            let imageHtml = ImageViewer.getImageHtml(image.mainUrl);
            imagesWrapper.appendChild(imageHtml);
        });
    }
    
    //showToolbar:
    protected showToolbar(){
        const toolbar = <HTMLElement> this.view.getElementsByClassName('toolbar')[0];
        this.buttons?.forEach((button) => {
            const buttonHtml = ImageViewer.getButtonHtml(button.name, button.iconSrc, button.iconSize);
            toolbar.appendChild(buttonHtml);
        });
    }





    

    //setStyle:
    public setStyle(style?:object):void{
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
    protected show():void{
        const thisView = this;
        setTimeout(() => {
            thisView.view.classList.add('visible');
        }, 50);//slight delay between adding to DOM and running css animation
    }

    //addEventToHide:
    protected addEventToHide(){
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
    protected hide():void{
        this.view.classList.remove('visible');
        const thisView = this;
        setTimeout(() => {
            thisView.view.remove();
        }, 500);//long enough to make sure that it is hidden
    }

}

const Style = `

`;