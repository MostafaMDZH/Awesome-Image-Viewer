import Head from 'next/head'
import Link from 'next/link'
import Snackbar from 'awesome-snackbar';
import ImageViewer from 'awesome-image-viewer';
import * as data from '../data/options';

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
        new ImageViewer({

        });
    }, 1000);

    
    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>

            

        </div>
    )
}