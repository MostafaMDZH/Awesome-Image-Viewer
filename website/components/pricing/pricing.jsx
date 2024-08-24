import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

export const Pricing = () => {

    const [ isVisible, setIsVisible ] = useState(false)

    useEffect(() => {
        const cookies = new Cookies()
        setTimeout(() => {
            if(cookies.get('pricingPopupShowed') === undefined){
                setIsVisible(true)
            }
            setCookie()
        }, 30000)
    }, [])

    const openModal = () => {
        setIsVisible(true)
        setCookie()
    }

    const setCookie = () => {
        const cookies = new Cookies()
        cookies.set('pricingPopupShowed', 'yes', { path: '/', maxAge: 399*24*60*60 })
    }

    return (
        <div>
            
            <button
                id="pricingButton"
                onClick={openModal}
            >
                Buy it for $1
            </button>

            <PricingModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
            />

        </div>
    )
}

const PricingModal = ({ isVisible, onClose }) => {

    const goToStripe = () => {
        window.location = 'https://buy.stripe.com/test_5kAeXM1Xh4ra4iA000'
    }

    return (
        <div
            className={'pricingModal' + (isVisible ? ' visible' : '')}
            onClick={onClose}
        >
            <div className='window' onClick={e => e.stopPropagation()}>

                <button className="close" onClick={onClose}/>

                <div className='container'>

                    <div className="header">
                        <p className="itIsNotFree">This component is <a className="not">NOT</a> free!</p>
                        <p className="buyAIV">Buy Awesome Image Viewer</p>
                        <p className="priceText">For Just <a className="dollar">$</a><a className="price">1</a> !</p>
                    </div>

                    <div className='bottomArea'>
                        
                        <div className="featuresWrapper">
                            <a className="featureItem">One-time purchase</a>
                            <a className="featureItem">Use in unlimited projects</a>
                            <a className="featureItem">Access to future updates</a>
                            <a className="featureItem">Fork and customization</a>
                            <a className="featureItem">Lifetime money back guarantee!</a>
                            <a className="featureItem">Save at least 2 work days with just <a className="dollar">$</a><a className="price">1</a></a>
                        </div>

                        <div className='buttonWrapper'>
                            <input type='button' className='buyButton' value='Buy' onClick={goToStripe}/>
                        </div>

                        <p className="note">If you are from countries that cannot pay online, you can use it for free.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
