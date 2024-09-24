import Logo from '../assets/icons/Logo.png'
import LogoFull from '../assets/icons/State=Full.png'
import logoLocationHeader from '../assets/icons/logoLocationHeader.png'
import cartHeader from '../assets/icons/Cart.png'
import { Link } from 'react-router-dom'

interface typeObjectCoffee{
    id:number,
    coffeeType:string,
    coffeePicture:string,
    coffeeTitle:string,
    coffeeContent:string,
    coffeeSubtitle?:string,
    coffeeSubtitle2?:string,
    isSubtitle:number,
    coffeePrice:number,
    coffeeQuantity:number
}

interface typeHeaders {
    Url:string,
    haveProduct:boolean
}
export function HeaderPage({Url,haveProduct}:typeHeaders){
    return(
        <>
             <header className='flex justify-between mx-40 my-8'>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <div className='flex gap-3'>
                       <img src={logoLocationHeader} alt="" />
                        <Link to={Url} className='flex items-center justify-center'>
                            {haveProduct?
                                (<img src={LogoFull} alt="" className=' w-[2.5rem] h-[2.5rem] cursor-pointer' />):
                                (<img src={cartHeader} alt="" className=' w-[2.5rem] h-[] cursor-pointer' />)   
                            }
                        </Link>
                    </div>
            </header>
        </>
    )
}
                       
                           
                        