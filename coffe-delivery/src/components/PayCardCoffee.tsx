import { ButtonAddCoffee } from "./ButtonAddCoffee"
import { ButtonRemoveCoffee } from "./ButtonRemoveCoffee"
import imgCoffeTraditional from '../assets/images_coffes/Express.png'

export function PayCardCoffee(){
    return(
        <div className='flex justify-between w-[100%] pb-6 h-[100px] border-b border-base-button'>
        <img src={imgCoffeTraditional} alt="" />
        <div className='flex flex-col gap-2'>
            <span className='Text-M font-bold text-base-subtitle'>Expresso Tradicional</span>
            <div className='flex gap-2'>
                <ButtonAddCoffee/>
                <ButtonRemoveCoffee/>
            </div>
            
        </div>
        <span><strong>R$ 9,90</strong></span>
   </div>
    )
}