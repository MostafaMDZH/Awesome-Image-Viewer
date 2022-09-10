declare type image = {
    mainUrl: string;
    thumbnailUrl?: string;
    description?: string;
};
declare type button = {
    name: string;
    iconSrc: string;
    iconSize: string;
    onSelect: () => void;
};
declare type constructorParameters = {
    images: image[];
    currentSelected?: number;
    buttons?: button[];
    showThumbnails?: boolean;
    style?: object;
};
export default class ImageViewer {
    protected viewID: number;
    protected view: HTMLElement;
    protected images: image[];
    protected currentSelected: number;
    protected buttons?: button[];
    protected showThumbnails: boolean;
    protected isHudHide: boolean;
    protected style?: object;
    constructor(parameters: constructorParameters);
    protected static appendCSS(): void;
    protected static generateViewID(): number;
    protected static getHtml(viewID: number): ChildNode;
    protected static getImageHtml(imageSrc: string): ChildNode;
    protected static getButtonHtml(name: string, iconSrc: string, iconSize: string): ChildNode;
    protected static getThumbnailHtml(index: number, imageSrc: string, title?: string): ChildNode;
    protected static getChildNode(html: string): ChildNode;
    protected showImages(): void;
    protected showToolbar(): void;
    protected addEventToArrows(): void;
    protected echoThumbnails(): void;
    protected selectImage(index: number): void;
    protected loadImage(index: number): void;
    protected scrollToImage(index: number): void;
    protected setDescription(text?: string): void;
    protected setThumbnail(index: number): void;
    protected scrollThumbnail(index: number): void;
    protected addEventToSwipe(onSwipe: (direction: string) => void, notSwiped: () => void): void;
    protected addEventToHudHide(): void;
    setStyle(style?: object): void;
    protected show(): void;
    protected addEventToHide(): void;
    protected hide(): void;
}
export {};
