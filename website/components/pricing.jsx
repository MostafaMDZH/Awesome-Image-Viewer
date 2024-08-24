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
                Pricing
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
        <div className={'pricingModal' + (isVisible ? ' visible' : '')} onClick={e => e.stopPropagation()}>
            <div className='window'>
                <div className='container'>
                    <div className='imageWrapper'>
                        <span className='image'></span>
                    </div>
                    <div className='bottomArea'>
                        <div className='textsWrapper'>
                            <h2 className='massage'>This website uses cookies!</h2>
                            <p  className='description'>We use cookies in order to personalize your site experience.</p>
                        </div>


                        <div className='buttonWrapper'>
                            <input type='button' className='buyButton' value='Buy' onClick={goToStripe}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
