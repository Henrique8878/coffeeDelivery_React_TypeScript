import React, { useEffect, useState } from 'react'
import iconsMinus from '../assets/icons/Minus.png'
import iconsPlus from '../assets/icons/Plus.png'
import imgCart from '../assets/icons/shoppingCartPurple.png'
import { useContext } from 'react'
import { contextApp } from '../Contexts/contextMain'

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
    coffeeQuantity:number,
}

interface dataCard{
    coffeeId:number,
    coffeeType:string,
    coffeePicture:string,
    coffeeTitle:string,
    coffeeContent:string,
    coffeeSubtitle?:string|undefined|null,
    coffeeSubtitle2?:string|undefined|null,
    isSubtitle?:number|undefined
    coffeePrice:string,
    coffeeQuantity:number,
    objectCoffee:typeObjectCoffee[],
    setObjectCoffee:React.Dispatch<React.SetStateAction<typeObjectCoffee[]>>,
    setHaveProduct:React.Dispatch<React.SetStateAction<boolean>>,
}

export function CardCoffee({coffeeId,coffeeType,coffeePicture,coffeeTitle,coffeeContent,coffeeSubtitle,
                            coffeeSubtitle2,isSubtitle,coffeePrice,coffeeQuantity,objectCoffee,
                            setObjectCoffee,setHaveProduct}:dataCard){

        const {storesReducerValue,sumValuesCoffees} = useContext(contextApp)

        function verifyEmptyObject(){
          let searchCoffee = objectCoffee.find((coffee)=>{
            return coffee.coffeeQuantity!=0
          })
            if(searchCoffee){
            setHaveProduct(true)
            }else{
                setHaveProduct(false)
            }
        }


        useEffect(()=>{
            verifyEmptyObject()
            if(sumValuesCoffees){
                sumValuesCoffees()
            }
        },[objectCoffee])

        function addCoffees(){
            let updateCoffees = objectCoffee.map((coffee)=>{
                if(coffee.id==coffeeId){
                    return {...coffee,coffeeQuantity:coffeeQuantity+1}
                }else{
                    return coffee
                }
            })
            setObjectCoffee(updateCoffees)
            
        }

        function removeCoffees(value:number){
            if(value>0){
                let updateCoffees = objectCoffee.map((coffee)=>{
                    if(coffee.id==coffeeId){
                        return {...coffee,coffeeQuantity:coffeeQuantity-1}
                    }else{
                       return coffee
                    }
                })
                setObjectCoffee(updateCoffees)
            }else{
                return 
            }
        }

    return(
        <>
                <article className='flex flex-col items-center bg-base-card w-64 h-[19.375rem] rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl px-5 pb-5 gap-4'>
                                <img src={coffeePicture} alt="" className='-mt-5'/>
                                {isSubtitle==1?
                                    (
                                        <div className='flex gap-2'>
                                            <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeType}</span>
                                            <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeSubtitle}</span>
                                        </div>
                                    )
                                    :isSubtitle==0?
                                    (
                                        
                                        <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeType}</span>
                                    )
                                    :
                                    (
                                    <div className='flex gap-2'>
                                        <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeType}</span>
                                        <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeSubtitle}</span>
                                        <span className='Tag bg-yellow-light text-yellow-dark rounded-md p-1'>{coffeeSubtitle2}</span>
                                    </div>
                                    )
                                }
                                <div className='flex flex-col gap-2 justify-center text-center'>
                                    <h3 className='title-s'>{coffeeTitle}</h3>
                                    <span className='Text-S font-normal text-base-label text-center'>{coffeeContent}</span>
                                </div>
                                <div className='flex justify-between w-[100%]'>
                                    <span>R$<strong className='title-m'>{coffeePrice}</strong></span>
                                    <div className='flex items-center justify-around w-[4.5rem] h-[2.375rem] bg-base-button'>
                                        <img src={iconsMinus} alt="" className='w-[0.875rem] h-[0.875rem] bg-brand-purple hover:cursor-pointer' onClick={()=>removeCoffees(coffeeQuantity)}/>
                                        <input type="text" name="" id="" className='flex items-center justify-center w-5 h-5 bg-base-button Text-M text-black text-center' value={coffeeQuantity} />
                                        <img src={iconsPlus} alt=""className='w-[0.875rem] h-[0.875rem] bg-brand-purple hover:cursor-pointer' onClick={addCoffees}/>
                                    </div>
                                    <div>
                                        <img src={imgCart} alt="" />
                                    </div>
                                </div>
                </article>
        </>
    )
}
                                

                                