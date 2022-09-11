/// <reference types="node" />
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
    isZommable?: boolean;
    stretchImages?: boolean;
    style?: object;
};
export default class ImageViewer {
    protected viewID: number;
    protected view: HTMLElement;
    protected images: image[];
    protected currentSelected: number;
    protected buttons?: button[];
    protected showThumbnails: boolean;
    protected isZoomable: boolean;
    protected isInZoom: boolean;
    protected stretchImages: boolean;
    protected isHudShow: boolean;
    protected dbcTimer: NodeJS.Timeout;
    protected dbcWaiting: boolean;
    protected style?: object;
    constructor(parameters: constructorParameters);
    protected static appendCSS(): void;
    protected static generateViewID(): number;
    protected static getHtml(viewID: number): ChildNode;
    protected static getImageHtml(imageSrc: string, stretchImages: boolean): ChildNode;
    protected static getButtonHtml(name: string, iconSrc: string, iconSize: string): ChildNode;
    protected static getThumbnailHtml(index: number, imageSrc: string, title?: string): ChildNode;
    protected static getChildNode(html: string): ChildNode;
    protected showImages(): void;
    protected showToolbar(): void;
    protected echoThumbnails(): void;
    protected addEventToArrows(): void;
    protected selectImage(index: number): void;
    protected loadImage(index: number): void;
    protected scrollToImage(index: number): void;
    protected setDescription(text?: string): void;
    protected setThumbnail(index: number): void;
    protected scrollThumbnail(index: number): void;
    protected addEventToSwipe(onSwipe: (direction: string) => void, notSwiped: () => void): void;
    protected addEventToHudAndZoom(): void;
    protected flipZoom(imageContainer: HTMLElement, clickX: number, clickY: number): void;
    protected flipHud(show: boolean): void;
    protected addEventToWindowResize(): void;
    setStyle(style?: object): void;
    protected show(): void;
    protected addEventToHide(): void;
    protected hide(): void;
}
export {};
