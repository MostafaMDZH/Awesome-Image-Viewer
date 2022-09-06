import Head from 'next/head'
import Link from 'next/link'
import Snackbar from 'awesome-snackbar';
import ImageViewer from 'awesome-image-viewer';
import editIcon from '../public/edit.svg'
import deleteIcon from '../public/delete.svg'

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


    setTimeout(function(){
        if(hasShow) return;
        hasShow = true;
        showSample();
    }, 300);

    const showSample = () => {
        new ImageViewer({
            images: [
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Baloon.1.min.jpg',
                    name: 'Balloon'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Fun/Bmx.1.min.jpg',
                    name: 'Bmx'
                },
                {
                    mainUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.jpg',
                    thumbnailUrl: 'https://api.caspiandictionary.com/App/Resources/Gallery/Flower/Adonis%20Vernalis.1.min.jpg',
                    name: 'Adonis Vernalis'
                }
            ],
            buttons: [
                {
                    name: 'Edit',
                    iconSrc: editIcon.src
                },
                {
                    name: 'Delete',
                    iconSrc: deleteIcon.src,
                    iconSize: '17px auto'
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