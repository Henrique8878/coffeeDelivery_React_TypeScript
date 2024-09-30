import Trash from '../assets/icons/Trash.png'
import { useContext } from 'react'
import { contextApp } from '../Contexts/ContextMain'

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

interface typeButtonRemove{
    coffeeID:number,
    valueQuantity:number
}


export function ButtonRemoveCoffee({coffeeID,valueQuantity}:typeButtonRemove){
    

    const {setObjectCoffee} = useContext(contextApp)

    function removeCoffees(value:number){
        if(value>0){
            setObjectCoffee&&setObjectCoffee((prevObject):typeObjectCoffee[]=>{
                let updateObject = prevObject.map((coffee)=>{{
                    if(coffee.id==coffeeID){
                        return {...coffee,coffeeQuantity:0}
                    }
                    return coffee
                }})
                return updateObject
            })
        }
    }
    return(
        <>
             <button className='flex items-center justify-around gap-1 w-[5.68rem] h-[2.375rem] rounded-md p-1 Button-M bg-base-button' onClick={()=>removeCoffees(valueQuantity)}>
                    <img src={Trash} alt="" className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer'/>
                   <span>REMOVER</span>
            </button>
        </>
    )
}