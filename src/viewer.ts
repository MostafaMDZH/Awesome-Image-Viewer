//custom types:
type image = {
    mainUrl: string;
    thumbnailUrl: string;
    description?: string;
}
type button = {
  title: string;
  iconSrc: string;
  iconSize: string;
  onSelect: () => void;
}
type constructorParameters = {
    images:             image[];
    currentSelected?:   number;
    buttons?:           button[];
    showThumbnails?:    boolean;
    theme?:             string;
    style?:             object;
}

export default class ImageViewer{
    
    //default values:
    public static readonly ROW_HEIGHT: number = 40;
    public static readonly COLUMN_WIDTH: number = 187;

    //object properties:
    protected viewID:           number;
    protected view:             HTMLElement;
    protected images:           image[];
    protected currentSelected?: number;
    protected buttons?:         button[];
    protected showThumbnails?:  boolean;
    protected theme?:           string;
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
        this.images           = parameters.images;
        this.currentSelected  = parameters.currentSelected;
        this.buttons          = parameters.buttons;
        this.showThumbnails   = parameters.showThumbnails;

        //show images:
        this.showImages();




        //set theme;
        this.setTheme(parameters.theme);
        
        //set style:
        this.setStyle(parameters.style);

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
                    <div class="toolBar">
                        <!-- this will auto generate with js:
                        <input type="button" class="actionButton closeButton"> -->
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
                class="actionButton"
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





    //setTheme:
    public setTheme(theme?:string):void{
        if(theme === undefined) return;
        this.theme == theme;
        this.view.classList.remove('light');
        this.view.classList.remove('dark');
        this.view.classList.add(theme);
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