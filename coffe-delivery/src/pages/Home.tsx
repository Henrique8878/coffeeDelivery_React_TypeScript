import { useContext, useEffect } from 'react'
import{createContext} from 'react'
import { useState } from 'react'
import { CardCoffee } from '../components/CardCoffee'
import { HeaderPage } from '../components/HeaderPage'
import '../assets/icons/Coffe.png'
import Logo from '../assets/icons/Logo.png'
import logoLocationHeader from '../assets/icons/logoLocationHeader.png'
import cartHeader from '../assets/icons/Cart.png'
import cartWhiteSmall from '../assets/icons/cartWhiteSmall.png'
import iconCart from '../assets/icons/shoppingCart.png'
import iconBox from '../assets/icons/boxWhiteSmall.png'
import iconCoffe from '../assets/icons/Coffe.png'
import iconTimer from '../assets/icons/timerWhiteSmall.png'
import imgMainHome from '../assets/icons/imgMainHome.png'
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
export function Home(){

    function transformNumberToString(value:number){
        if(value<10){
            let newString = String(value)
            if(newString.includes(".")){
                let replaceString = newString.replace(".",",")
                let addZeroString = replaceString.padEnd(4,"0")
                return addZeroString
            }else{
                let addCommaAndZero = newString.padEnd(4,",00")
                return addCommaAndZero
            }
        }else{
            let newString = String(value)
            if(newString.includes(".")){
                let replaceString = newString.replace(".",",")
                let addZeroString = replaceString.padEnd(5,"0")
                return addZeroString
            }else{
                let addCommaAndZero = newString.padEnd(5,",00")
                return addCommaAndZero
            }
        }    
    }

    const {haveProduct,objectCoffee,setHaveProduct,setIsSubtitle,setObjectCoffee,sumValuesCoffees,storesReducerValue} = useContext(contextApp)
      return(
          <>
              <div id="app" className='h-screen w-screen'>
                {objectCoffee?.find((coffee)=>coffee.coffeeQuantity!=0)? 
                <HeaderPage Url="http://localhost:5173/pay" haveProduct={haveProduct}/>
                :
                <HeaderPage Url="http://localhost:5173/" haveProduct={haveProduct}/>
                }
                 
                  <main className='mx-40 Title '>
                      <section className='flex py-20'>
                          <div className='flex flex-col w-[4
                          0%] '>
                              <article className='flex flex-col gap-5 mb-10 ml-2'>
                                  <h1 className='title-xl'>Encontre o café perfeito para qualquer hora do dia</h1>
                                  <span className='Text-M'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                              </article>
                              <article className='flex flex-col gap-6'>
                                  <section className='flex gap-8'>
                                          <div className='flex items-center gap-2'>
                                                  <img src={cartWhiteSmall} alt="" className='w-[2rem] h-[2rem]'/>
                                                  <span className='Text-M'>Compra simples e segura</span>
                                          </div>
                                          <div className='flex  items-center gap-2'>
                                                  <img src={iconBox} alt=""  className='w-[2rem] h-[2rem]' />
                                                  <span className='Text-M'>Embalagem mantém o café intacto</span>
                                          </div>
                                    </section>
                                    <section className='flex gap-8'>
                                          <div className='flex items-center gap-2'>
                                                  <img src={iconTimer} alt=""  className='w-[2rem] h-[2rem]'/>
                                                  <span className='Text-M'>Entrega rápida e rastreada</span>
                                          </div>
                                          <div className='flex  items-center gap-2'>
                                                  <img src={iconCoffe} alt=""  className='w-[2rem] h-[2rem]'/>
                                                  <span className='Text-M'>O café chega fresquinho até você</span>
                                          </div>
                                         
                                    </section>
                              
                              </article>
                          </div>
                          <article>
                              <img src={imgMainHome} alt="" />
                          </article>
  
                      </section>
                      <section>
                          <h2 className='title-l w-[60%] mb-14'>Nossos cafés</h2>
                          <div className='flex flex-row gap-14 space flex-wrap  '>
                              {objectCoffee!=undefined && setObjectCoffee && setHaveProduct?objectCoffee.map((coffee)=>(
                                  <CardCoffee
                                  key={coffee.id}
                                      coffeeId={coffee.id} 
                                      coffeeType={coffee.coffeeType}
                                      coffeePicture={coffee.coffeePicture}
                                      coffeeTitle={coffee.coffeeTitle}
                                      coffeeContent={coffee.coffeeContent}
                                      coffeeSubtitle={coffee.coffeeSubtitle}
                                      coffeeSubtitle2={coffee.coffeeSubtitle2}
                                      isSubtitle={coffee.isSubtitle}
                                      coffeePrice={transformNumberToString(coffee.coffeePrice)}
                                      coffeeQuantity={coffee.coffeeQuantity}
                                      objectCoffee={objectCoffee}
                                      setObjectCoffee={setObjectCoffee}
                                      setHaveProduct = {setHaveProduct}
                                      
                                  />
                              )):<h1>Erro 404</h1>}
  
                          </div>
                      </section>
                  </main>
              </div>
          </>
      )
  }
                          
  


    
  





