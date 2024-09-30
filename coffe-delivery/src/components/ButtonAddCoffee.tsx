import iconsMinus from '../assets/icons/Minus.png'
import iconsPlus from '../assets/icons/Plus.png'
import { useContext, useEffect } from 'react'
import { contextApp } from '../Contexts/ContextMain'


interface typeButtonAdd{
    valueQuantity:number,
    coffeeID:number
}

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



export function ButtonAddCoffee({valueQuantity,coffeeID}:typeButtonAdd){
    const {objectCoffee,setObjectCoffee,sumValuesCoffees} = useContext(contextApp)

   

    useEffect(()=>{
        if(sumValuesCoffees){
            sumValuesCoffees()
        }
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
            setObjectCoffee&&setObjectCoffee((prevObject):typeObjectCoffee[]=>{
                let updateObject = prevObject.map((coffee)=>{{
                    if(coffee.id==coffeeID){
                        return {...coffee,coffeeQuantity:coffee.coffeeQuantity-1}
                    }
                    return coffee
                }})
                return updateObject
            })
        }
    }


    return(
        <>
              <div className='flex items-center justify-around w-[4.5rem] h-[2.375rem] rounded-md bg-base-button'>
                    <img src={iconsMinus} alt="" className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer' onClick={()=>{removeCoffees(valueQuantity)}}/>
                    <span id="" className='flex items-center justify-center w-5 h-5 bg-base-button Text-M text-black text-center'>{valueQuantity}</span>
                    <img src={iconsPlus} alt=""className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer' onClick={addCoffees}/>
                </div>
        </>
    )
}