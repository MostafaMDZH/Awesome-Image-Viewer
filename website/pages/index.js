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

    setTimeout(function(){
        if(hasShow) return;
        hasShow = true;
        showSample();
    }, 300);

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
        <div id='window' style={{scrollBehavior:'smooth'}} onClick={()=>showSample()}>

            

        </div>
    )
}