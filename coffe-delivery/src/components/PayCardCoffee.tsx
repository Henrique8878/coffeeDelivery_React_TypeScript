import { ButtonAddCoffee } from "./ButtonAddCoffee"
import { ButtonRemoveCoffee } from "./ButtonRemoveCoffee"
import imgCoffeTraditional from '../assets/images_coffes/Express.png'
import imgAmerican from '../assets/images_coffes/American.png'
import imgCreamyExpress from '../assets/images_coffes/creamyExpress.png'
import imgIceCoffe from '../assets/images_coffes/iceCoffe.png'
import imgCoffeWithMilk from '../assets/images_coffes/coffeWithMilk.png'
import imgCoffeLatte from '../assets/images_coffes/Latte.png'
import imgCapuccino from '../assets/images_coffes/Capuccino.png'
import imgMachiatto from '../assets/images_coffes/Macchiato.png'
import imgMochaccino from '../assets/images_coffes/Mochaccino.png'
import imgHotChocolate from '../assets/images_coffes/hotChocolate.png'
import imgCubano from '../assets/images_coffes/Cubano.png'
import imgHavaiano from '../assets/images_coffes/havaiano.png'
import imgArabe from '../assets/images_coffes/arabe.png'
import imgIrland from '../assets/images_coffes/Irland.png'
import { useContext, useState } from "react"
import { contextApp } from "../Contexts/contextMain"

export function PayCardCoffee(){
    const [newArrayFiltered,setNewArrayFiltered] = useState([])

    const {objectCoffee,transformNumberToString} = useContext(contextApp)
    return(
        <>
            {objectCoffee?objectCoffee.filter((coffee)=>coffee.coffeeQuantity!=0).map((coffee)=>(
            <div className='flex justify-between w-[100%] pb-6 h-[100px] border-b border-base-button'>
                        <img src={coffee.coffeePicture} alt="" />
                        <div className='flex flex-col gap-2'>
                            <span className='Text-M font-bold text-base-subtitle'>{coffee.coffeeTitle}</span>
                            <div className='flex gap-2'>
                                <ButtonAddCoffee value = {coffee.coffeeQuantity} coffeeID ={coffee.id}/>
                                <ButtonRemoveCoffee/>
                            </div>
                            
                        </div>
                        <span><strong>R$ {transformNumberToString(coffee.coffeePrice)}</strong></span>
            </div>
            )):<h1>""</h1>}
        </>
    )
}
 

    

    