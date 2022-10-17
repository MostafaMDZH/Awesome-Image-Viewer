import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import Snackbar from 'awesome-snackbar'
import ImageViewer from 'awesome-image-viewer'
import * as data from '../data/data'
import editIcon from '../public/edit.svg'
import deleteIcon from '../public/delete.svg'

let isWelcomeSbShow = false;
let hasShow = false;

export default function Main(){

    //copyTextToClipboard:
    const copyTextToClipboard = (text) => {
        if(!navigator.clipboard) return;
        navigator.clipboard.writeText(text).then(function(){
            new Snackbar('Copied to clipboard 👍');
        },function(err){
            new Snackbar('cannot copy 👎');
        });
    }
    
    //welcome snackbar:
    const cookies = new Cookies();
    setTimeout(() => {
        if(isWelcomeSbShow) return;
        if(cookies.get('IV_WelcomeMsg') !== undefined) return;
        isWelcomeSbShow = true;
        new Snackbar('Welcome to Awesome Image Viewer! 👋', {
            position: 'top-center',
            timeout: 2000,
            afterHide: () => {
                new Snackbar('Click on code sections to run the demo', {
                    position: 'top-center',
                    timeout: 0,
                    actionText: 'Got it',
                    onAction: () => cookies.set('IV_WelcomeMsg', 'yes', { path: '/', maxAge: 1000*24*60*60 })
                });
            }
        });
    }, 2000);
    
    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>
            <Head>
                <title>Awesome Image Viewer | React, Angular, Vue, and Typescript compatible image viewer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* header */}
            <header id='header'>
                <Link href='https://awesome-components.com'><a className='headerLink'>Awesome Components</a></Link>
                <Link href='https://buymeacoffee.com/mostafamdzh'><a className='headerLink' id='coffee'>buy me a coffee! :)</a></Link>
            </header>

            <div className='container' id='intro'>

                <div id='main'>

                    {/* navigation */}
                    <div id='navigation'>
                        <div id='navigationWrapper'>
                            <a className='navLink' href='#intro'           >intro           </a>
                            <a className='navLink' href='#installation'    >installation    </a>
                            <a className='navLink' href='#images-format'   >images format   </a>
                            <a className='navLink' href='#current-selected'>current selected</a>
                            <a className='navLink' href='#cover-size'      >cover size      </a>
                            <a className='navLink' href='#thumbnails'      >thumbnails      </a>
                            <a className='navLink' href='#zoom'            >zoom            </a>
                            <a className='navLink' href='#custom-buttons'  >custom buttons  </a>
                        </div>
                    </div>

                    {/* content */}
                    <div id='content'>

                        <a href='https://github.com/MostafaMDZH/Awesome-Image-Viewer' id='github'>Github</a>

                        {/* intro */}
                        <h3 id='awesome'><Link href='/'>Awesome</Link></h3>
                        <div id='name-versionWrapper'>
                            <h1 id='appName'><Link href='/'>Image Viewer</Link></h1>
                            <a id='version'>V1.0.59</a>
                        </div>
                        <p className='sectionDescription'>React, Angular, Vue, and Typescript compatible image viewer</p>

                        <h3 className='sectionName' id='features'><a ># Features</a></h3>
                        <ul className='features'>
                            <li>Lazy Loading</li>
                            <li>Zoomable</li>
                            <li>Custom Buttons</li>
                            <li>Description</li>
                            <li>Custom Select</li>
                            <li>Swipe On Touchscreen</li>
                            <li>Cover Size</li>
                            <li>Thumbnail Support</li>
                            <li>Navigation With Arrow Keys</li>
                            <li>Responsive Design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                            <li>Zero Dependency</li>
                        </ul>

                        {/* installation */}
                        <h3 className='sectionName' id='installation'><a href='#installation'># Installation</a></h3>
                        <p className='step'><a className='bold'>{'>'} step 1 : </a>you can use either npm or yarn, or import the main file with the script tag.</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('npm i awesome-image-viewer')}>
                                <p>npm i <span>awesome-image-viewer</span></p>
                            </button>
                            <p className='comment'># yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('yarn add awesome-image-viewer')}>
                                <p>yarn add <span>awesome-image-viewer</span></p>
                            </button>
                            <p className='comment'>
                                # html (download the imageViewer.js file from the&nbsp;
                                <a href='https://github.com/MostafaMDZH/Awesome-Image-Viewer/tree/main/src'>src</a>
                                &nbsp;directory)
                            </p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('<script src="imageViewer.js"></script>')}>
                                <p>{"<script src=\""}<span>imageViewer.js</span>{"\"></script>"}</p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 2 : </a>include the package in your code:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm and yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('import ImageViewer from \'awesome-image-viewer\'')}>
                                <p>import <span>ImageViewer</span> from <span>&apos;awesome-image-viewer&apos;</span></p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 3 : </a>start showing your images!</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.allImages
                                    });
                                }}>
                                <p>
                                    <span>{"new ImageViewer"}</span>{"({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: myImages"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* images format */}
                        <h3 className='sectionName' id='images-format'><a href='#images-format'># Images Format</a></h3>
                        <p className='sectionDescription'>The format of the images should be like this:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># The thumbnail and description are optional</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.threeImages
                                    });
                                }}>
                                <p>
                                    {"const data = ["}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/img1.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"thumbnailUrl"}</span>{": 'cdn.com/img1.min.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"description"}</span>{": 'Steel Wool',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/img2.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"thumbnailUrl"}</span>{": 'cdn.com/img2.min.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"description"}</span>{": 'Beach',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/img3.jpg',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"..."}<br></br>
                                    {"]"}
                                </p>
                            </button>
                        </div>

                        {/* current selected */}
                        <h3 className='sectionName' id='current-selected'><a href='#current-selected'># Current Selected</a></h3>
                        <p className='sectionDescription'>Instead of the first image, you can select whatever you want:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># Index starts from one</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.threeImages,
                                        currentSelected: 1
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: sampleImages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"currentSelected"}</span>{": 2"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* cover size */}
                        <h3 className='sectionName' id='cover-size'><a href='#cover-size'># Cover Size</a></h3>
                        <p className='sectionDescription'>If you set the stretchImages to true, it would stretch the small images to fill the page:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># default:</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.smallImages,
                                        stretchImages: false
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: smallSampleImages"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                            <p className='comment'># stretch:</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.smallImages,
                                        stretchImages: true
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: smallSampleImages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"stretchImages"}</span>{": true"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* thumbnail */}
                        <h3 className='sectionName' id='thumbnails'><a href='#thumbnails'># Thumbnails</a></h3>
                        <p className='sectionDescription'>If you don&apos;t specify the thumbnail image, the main image will be used as the thumbnail. but if you don&apos;t want to show the thumbnails, you can set the showThumbnails to false:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.threeImages,
                                        showThumbnails: false
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: sampleImages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"showThumbnails"}</span>{": false"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* zoom */}
                        <h3 className='sectionName' id='zoom'><a href='#zoom'># Zoom</a></h3>
                        <p className='sectionDescription'>Zooming is available with the zoom button or double tap, but you can disable it with isZoomable parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.threeImages,
                                        isZoomable: false
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: sampleImages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"isZoomable"}</span>{": false"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* custom buttons */}
                        <h3 className='sectionName' id='custom-buttons'><a href='#custom-buttons'># Custom Buttons</a></h3>
                        <p className='sectionDescription'>You can add some custom buttons:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># iconSize is optional (default value is &apos;19px auto&apos;)</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        images: data.threeImages,
                                        buttons: [
                                            {
                                                name: 'Edit',
                                                iconSrc: editIcon.src,
                                                onSelect: ()=>alert('Edit selected!')
                                            },
                                            {
                                                name: 'Delete',
                                                iconSrc: deleteIcon.src,
                                                iconSize: '18px auto',
                                                onSelect: ()=>alert('Delete selected!')
                                            }
                                        ]
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"images: sampleImages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"buttons: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"name: 'Edit',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc: 'cdn.con/icons/edit.svg',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"onSelect: () => alert('Edit selected!')"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"},"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"name: 'Delete',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc: 'cdn.con/icons/delete.svg',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSize: '18px auto',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"onSelect: () => alert('Delete selected!')"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"]"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* footer */}
            <footer id='footer'>
                <p>Made with ♡ by <a href='https://github.com/MostafaMDZH'>Mostafa Mohammadzadeh</a></p>
                <p id='dash'>-</p>
                <p id='githubLink'>Source on <a href='https://github.com/MostafaMDZH/Awesome-Image-Viewer'>Github</a></p>
                <p id='awesomeComponents'>From <Link href='https://awesome-components.com'><a>Awesome Components</a></Link></p>
            </footer>
            
        </div>
    )
}