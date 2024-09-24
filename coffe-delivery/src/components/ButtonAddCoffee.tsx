import iconsMinus from '../assets/icons/Minus.png'
import iconsPlus from '../assets/icons/Plus.png'

export function ButtonAddCoffee(){
    return(
        <>
              <div className='flex items-center justify-around w-[4.5rem] h-[2.375rem] rounded-md bg-base-button'>
                    <img src={iconsMinus} alt="" className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer'/>
                    <input type="text" name="" id="" className='flex items-center justify-center w-5 h-5 bg-base-button Text-M text-black text-center' value="1" />
                    <img src={iconsPlus} alt=""className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer' />
                </div>
        </>
    )
}