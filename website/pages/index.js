import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import Snackbar from 'awesome-snackbar'
import ImageViewer from 'awesome-image-viewer'
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
        if(cookies.get('WelcomeSB') !== undefined) return;
        isWelcomeSbShow = true;
        new Snackbar('Welcome to Awesome Image Viewer! 👋', {
            position: 'top-center',
            timeout: 2000,
            afterHide: () => {
                new Snackbar('Click on code sections to run the demo', {
                    position: 'top-center',
                    timeout: 0,
                    actionText: 'Got it',
                    onAction: () => cookies.set('WelcomeSB', 'yes', { path: '/', maxAge: 1000*24*60*60 })
                });
            }
        });
    }, 2000);

    // setTimeout(function(){
    //     if(hasShow) return;
    //     hasShow = true;
    //     showSample();
    // }, 300);

    const showSample = () => {
        new ImageViewer({
            images: [
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                }
                ,{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                },{
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    description: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    description: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    description: 'Adonis Vernalis'
                }
            ],
            buttons: [
                {
                    name: 'Edit',
                    iconSrc: editIcon.src,
                    onSelect: ()=>alert('Edit Selected')
                },
                {
                    name: 'Delete',
                    iconSrc: deleteIcon.src,
                    iconSize: '18px auto',
                    onSelect: ()=>alert('Delete Selected')
                }
            ]
        });
    }

    
    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>
            <Head>
                <title>Awesome Image Viewer | React, Angular, Vue, and Typescript compatible image viewer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* header */}
            <header id='header'>
                <Link href='https://awesome-components.demos.mostafa-mdzh.ir/'><a className='headerLink'>Awesome Components</a></Link>
                <Link href='https://www.buymeacoffee.com/mostafamdzh'><a className='headerLink' id='coffee'>buy me a coffee! :)</a></Link>
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
                            <a className='navLink' href='#custom-style'    >custom style    </a>
                        </div>
                    </div>

                    {/* content */}
                    <div id='content'>

                        <a href='https://github.com/MostafaMDZH/Awesome-ImageViewer' id='github'>Github</a>

                        {/* intro */}
                        <h3 id='awesome'><Link href='/'>Awesome</Link></h3>
                        <div id='name-versionWrapper'>
                            <h1 id='appName'><Link href='/'>Image Viewer</Link></h1>
                            <a id='version'>V1.0.0</a>
                        </div>
                        <p className='sectionDescription'>React, Angular, Vue, and Typescript compatible image viewer</p>

                        <h3 className='sectionName' id='features'><a ># Features</a></h3>
                        <ul className='features'>
                            <li>Lazy Loading</li>
                            <li>Zoomable</li>
                            <li>Custom Buttons</li>
                            <li>Description</li>
                            <li>Custom Select</li>
                            <li>Cover Size</li>
                            <li>Thumbnail Support</li>
                            <li>Navigation With Arrow Keys</li>
                            <li>Custom Style</li>
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
                                onClick={() => {showSample()}}>
                                <p><span>new ImageViewer</span>{"({ ... some options ... });"}</p>
                            </button>
                        </div>

                        {/* images format */}
                        <h3 className='sectionName' id='images-format'><a href='#images-format'># Images Format</a></h3>
                        <p className='sectionDescription'>The format of the images should be like this:</p>
                        <div className='codeWrapper executable'
                                onClick={() => {
                                    new ImageViewer({
                                        // title: 'Pick a language',
                                        // options: data.sampleLanguages
                                    });
                                }}>
                            <p className='comment'># The thumbnailUrl and description are optional</p>
                            <button className='codeSection'>
                                <p>
                                    {"const data = ["}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/images/bmx.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"thumbnailUrl"}</span>{": 'cdn.com/images/bmx.min.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"description"}</span>{": 'BMX',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/images/apple.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"thumbnailUrl"}</span>{": 'cdn.com/images/apple.min.jpg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"description"}</span>{": 'apple',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"mainUrl"}</span>{": 'cdn.com/images/road.jpg',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"..."}<br></br>
                                    {"]"}
                                </p>
                            </button>
                        </div>

                        {/* icon support */}
                        <h3 className='sectionName' id='icon-support'><a href='#icon-support'># Icon Support</a></h3>
                        <p className='sectionDescription'>You can add iconSrc and iconSize attributes to the option objects so your option would have an icon:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># The default value of the icon size is &apos;17px auto&apos;</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        title: 'Pick a language',
                                        options: data.sampleLanguagesWithFlags
                                    });
                                }}>
                                <p>
                                    {"const sampleLanguagesWithFlags = ["}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"name"}{": 'English',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"id"}{": 'en',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc"}</span>{": 'ukFlag.svg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSize"}</span>{": '20px auto',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"name"}{": 'French',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"id"}{": 'fr',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc"}</span>{": 'frFlag.svg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSize"}</span>{": '20px 28px',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"{"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"name"}{": 'Spanish',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"id"}{": 'es',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc"}</span>{": 'spFlag.svg',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSize"}</span>{": '18px auto',"}<br></br>
                                    &nbsp;&nbsp;{"},"}<br></br>
                                    &nbsp;&nbsp;{"..."}<br></br>
                                    {"]"}
                                </p>
                            </button>
                        </div>

                        {/* current option */}
                        <h3 className='sectionName' id='current-option'><a href='#current-option'># Current Option</a></h3>
                        <p className='sectionDescription'>You can highlight the current selected option via the currentOptionId parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        title: 'Pick a language',
                                        options: data.sampleLanguagesWithFlags,
                                        currentOptionId: 'en'
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"title: 'Pick a language',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: sampleLanguagesWithFlags,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"currentOptionId"}</span>{": 'en',"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* recent selects */}
                        <h3 className='sectionName' id='recent-selects'><a href='#recent-selects'># Recent Selects</a></h3>
                        <p className='sectionDescription'>You can show the frequently selected option like this:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        isSearchable: true,
                                        searchPlaceholder: 'Search languages...',
                                        options: data.allLanguages,
                                        recentSelects: data.recentLanguages
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"isSearchable: true,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"searchPlaceholder: 'Search languages',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: allLanguages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"recentSelects"}</span>{": recentLanguages"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                            <p className='comment'># Notice: format of the recent selects is the same as the options, except in recent selects you can&apos;t have icons.</p>
                        </div>

                        {/* column number */}
                        <h3 className='sectionName' id='column-number'><a href='#column-number'># Column Number</a></h3>
                        <p className='sectionDescription'>You can customize the max column number via the maxColumns parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        isSearchable: true,
                                        searchPlaceholder: 'Search languages...',
                                        options: data.allLanguages,
                                        maxColumns: 1
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"isSearchable: true,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"searchPlaceholder: 'Search languages',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: allLanguages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"maxColumns"}</span>{": 1"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                            <p className='comment'># Notice: the final column number is the minimum between the screen size, the size of the options(in a similar 4:3 ratio), and your specified number.</p>
                        </div>

                        {/* theme */}
                        <h3 className='sectionName' id='theme'><a href='#theme'># Theme</a></h3>
                        <p className='sectionDescription'>The default theme is light, but you can enable the dark theme with the theme parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        title: 'Pick a language',
                                        options: data.sampleLanguagesWithFlags,
                                        theme: 'dark'
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"theme"}</span>{": 'dark',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"title: 'Pick a language',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: sampleLanguages"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* custom style */}
                        <h3 className='sectionName' id='custom-style'><a href='#custom-style'># Custom Style</a></h3>
                        <p className='sectionDescription'>The Awesome ImageViewer&apos;s html markup is equivalent to below:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection'>
                                <p>
                                    {"<div class='"}<span>{"shadow"}</span>{"'></div>"}<br></br>
                                    {"<div class='"}<span>{"container"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"window"}</span>{"'>"}<br></br>
                                    <br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"toolbar"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<a class='"}<span>{"title"}</span>{"'></a>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"searchContainer"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='text' class='"}<span>{"searchInput"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"recentSelectsWrapper"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<button class='"}<span>{"closeButton"}</span>{"'></button>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    <br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"optionsColumnsWrapper"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"optionsColumn"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton"}&nbsp;&nbsp;&nbsp;{"selected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div class='"}<span>{"optionsColumn"}</span>{"'>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button'"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"class='"}<span>{"navButton recentButton unselected"}</span>{"'/>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    <br></br>
                                    &nbsp;&nbsp;&nbsp;{"</div>"}<br></br>
                                    {"</div>"}
                                </p>
                            </button>
                        </div>
                        <p className='sectionDescription'>So you can apply your custom style in a form of an array of classes:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        title: 'Pick a language',
                                        options: data.sampleLanguages,
                                        currentOptionId: 'en',
                                        style: {
                                            shadow: [
                                                ['background-color', 'rgba(255,255,255, 0.5']
                                            ],
                                            title: [
                                                ['font-style', 'italic']
                                            ],
                                            optionButton: [
                                                ['font-weight', 'bold']
                                            ],
                                            selected: [
                                                ['background-color', '#dfd'],
                                                ['color', '#282']
                                            ]
                                        }
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"title: 'Pick a language',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: sampleLanguages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"style: {"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"shadow: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['background-color', 'rgba(255,255,255, 0.5'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"title: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['font-style', 'italic'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"optionButton: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['font-weight', 'bold'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"selected: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['background-color', '#dfd'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['color', '#282'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* on select */}
                        <h3 className='sectionName' id='on-select'><a href='#on-select'># On Select</a></h3>
                        <p className='sectionDescription'>When the user selects an option, the onSelect() function returns the selected option id and name:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    new ImageViewer({
                                        title: 'Pick a language',
                                        options: data.allLanguages,
                                        onSelect: (id, name) => alert(name + '(' + id + ') selected')
                                    });
                                }}>
                                <p>
                                    {"new ImageViewer({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"title: 'Pick a language',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"options: sampleLanguages,"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"onSelect"}</span>{": ("}<span>{"id, name"}</span>{") => {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"alert(name + '(' + id + ') selected');"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br></br>
                                    {"});"}
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
                <p id='githubLink'>Source on <a href='https://github.com/MostafaMDZH/Awesome-ImageViewer'>Github</a></p>
                <p id='awesomeComponents'>From <Link href='https://awesome-components.demos.mostafa-mdzh.ir/'><a>Awesome Components</a></Link></p>
            </footer>
            
        </div>
    )
}