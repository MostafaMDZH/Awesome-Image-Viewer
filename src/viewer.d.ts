declare type image = {
    mainUrl: string;
    thumbnailUrl: string;
    description?: string;
};
declare type button = {
    title: string;
    iconSrc: string;
    iconSize: string;
    onSelect: () => void;
};
declare type constructorParameters = {
    images: image[];
    currentSelected?: number;
    buttons?: button[];
    showThumbnails?: boolean;
    theme?: string;
    style?: object;
};
export default class ImageViewer {
    static readonly ROW_HEIGHT: number;
    static readonly COLUMN_WIDTH: number;
    protected viewID: number;
    protected view: HTMLElement;
    protected images: image[];
    protected currentSelected?: number;
    protected buttons?: button[];
    protected showThumbnails?: boolean;
    protected theme?: string;
    protected style?: object;
    constructor(parameters: constructorParameters);
    protected static appendCSS(): void;
    protected static generateViewID(): number;
    protected static getHtml(viewID: number): ChildNode;
    protected static getImageHtml(imageSrc: string): ChildNode;
    protected static getButtonHtml(name: string, iconSrc: string, iconSize: string): ChildNode;
    protected static getThumbnailHtml(number: number, name: string, imageSrc: string): ChildNode;
    protected static getChildNode(html: string): ChildNode;
    protected showImages(): void;
    setTheme(theme?: string): void;
    setStyle(style?: object): void;
    protected show(): void;
    protected hide(): void;
}
export {};
