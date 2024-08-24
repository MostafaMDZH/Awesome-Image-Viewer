import '../styles/index.scss'
import '../styles/main.scss'
import '../styles/main.responsive.scss'
import '../components/pricing/pricing.scss'
// import '../node_modules/awesome-image-viewer/src/imageViewer.scss' //uncomment at dev mode

export default function MyApp({ Component, pageProps }){
    return <Component {...pageProps} />
}