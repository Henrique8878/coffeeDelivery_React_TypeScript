import iconsMinus from '../assets/icons/Minus.png'
import iconsPlus from '../assets/icons/Plus.png'
import { useContext, useEffect } from 'react'
import { contextApp } from '../Contexts/contextMain'


interface typeButtonAdd{
    value:number,
    coffeeID:number
}


export function ButtonAddCoffee({value,coffeeID}:typeButtonAdd){
    const {objectCoffee,setObjectCoffee,sumValuesCoffees} = useContext(contextApp)

    useEffect(()=>{
        if(sumValuesCoffees){
            sumValuesCoffees()
        }
        console.log(objectCoffee)
    },[objectCoffee])

    function addCoffees(){
        let updateCoffees = objectCoffee&&objectCoffee.map((coffee)=>{
            if(coffee.id==coffeeID){
                return {...coffee,coffeeQuantity:coffee.coffeeQuantity+1}
            }else{
                return coffee
            }
        })
        if(updateCoffees&&setObjectCoffee){
            setObjectCoffee(updateCoffees)
        }
       
        
    }

    function removeCoffees(value:number){
        
        if(value>0){
            let updateCoffees = objectCoffee&&objectCoffee.map((coffee)=>{
                if(coffee.id==coffeeID){
                    return {...coffee,coffeeQuantity:coffee.coffeeQuantity-1}
                }else{
                   return coffee
                }
            })
            if(updateCoffees&&setObjectCoffee){
                setObjectCoffee(updateCoffees)
            }
        }else{
            return 
        }
    }


    return(
        <>
              <div className='flex items-center justify-around w-[4.5rem] h-[2.375rem] rounded-md bg-base-button'>
                    <img src={iconsMinus} alt="" className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer' onClick={()=>removeCoffees(value)}/>
                    <span id="" className='flex items-center justify-center w-5 h-5 bg-base-button Text-M text-black text-center'>{value}</span>
                    <img src={iconsPlus} alt=""className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer' onClick={()=>addCoffees()}/>
                </div>
        </>
    )
}