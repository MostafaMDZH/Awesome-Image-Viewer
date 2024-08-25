import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

export const PricingButton = () => {

    const [ isPurchased, setIsPurchased ] = useState(false)

    useEffect(() => {
        
        const cookies = new Cookies()

        //isPurchased
        if(
            window.location.search.includes('purchased') ||
            cookies.get('purchased') !== undefined
        ){
            setIsPurchased(true)
            setIsPurchasedCookie()
        }
        
        //popup timer:
        setTimeout(() => {
            if(cookies.get('pricingPopupShowed') === undefined){
                const modal = document.getElementById('pricingModal')
                modal.classList.add('visible')
            }
            setPopupShowedCookie()
        }, 30000)

    }, [])

    const openModal = () => {
        const modal = document.getElementById('pricingModal')
        modal.classList.add('visible')
        setPopupShowedCookie()
    }

    const setPopupShowedCookie = () => {
        const cookies = new Cookies()
        cookies.set('pricingPopupShowed', 'yes', { path: '/', maxAge: 399*24*60*60 })
    }

    const setIsPurchasedCookie = () => {
        const cookies = new Cookies()
        cookies.set('purchased', 'yes', { path: '/', maxAge: 399*24*60*60 })
    }

    return (
        <div>
            
            <button
                className={`pricingButton ${isPurchased ? 'purchased' : ''}`}
                onClick={openModal}
            >
                {isPurchased ? (
                    '✓ Purchased'
                ) : (
                    <a>Buy it for just <a className="dollar">$</a><a className="price">1</a></a>
                )}
            </button>

        </div>
    )
}

export const PricingModal = () => {

    const goToPayment = () => {
        // window.location = 'https://buy.stripe.com/test_5kAeXM1Xh4ra4iA000'
        // window.location = 'https://buymeacoffee.com/mostafamdzh'
        window.location = 'https://buymeacoffee.com/mostafamdzh/e/294424'
    }

    const closeModal = () => {
        const modal = document.getElementById('pricingModal')
        modal.classList.remove('visible')
    }

    return (
        <div
            id="pricingModal"
            onClick={closeModal}
        >
            <div className='window' onClick={e => e.stopPropagation()}>

                <button className="close" onClick={closeModal}/>

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
                            <input type='button' className='buyButton' value='Buy' onClick={goToPayment}/>
                        </div>

                        <p className="note">If you are from countries that cannot pay online, you can use it for free.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
