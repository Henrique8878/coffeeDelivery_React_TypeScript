import { useContext, useState } from 'react'
import { ButtonAddCoffee } from '../components/ButtonAddCoffee'
import { ButtonRemoveCoffee } from '../components/ButtonRemoveCoffee'
import { HeaderPage } from '../components/HeaderPage'
import { PayCardCoffee } from '../components/PayCardCoffee'
import localizationYellowDark from '../assets/icons/localizationYellowDark.png'
import dollarPurple from '../assets/icons/dollarPurple.png'
import creditCard from '../assets/icons/creditCard.png'
import bank from '../assets/icons/bank.png'
import moneyNote from '../assets/icons/moneyNote.png'
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
import { contextApp } from '../Contexts/contextMain'


export function Pay(){
   const {haveProduct,objectCoffee,isSubtitle,sumValuesCoffees,storesReducerValue} = useContext(contextApp)
   const [valueDelivery,setvalueDelivery] = useState(3.50)

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
    return(
        <>
            <HeaderPage Url="http://localhost:5173/delivery" haveProduct = {haveProduct}/>
            <main className="flex justify-between gap-5 mx-40 h-[32.93rem]">
                <div className="w-[60%] h-[100%]">
                    <h3 className="title-xs h-[5%]">Complete seu pedido</h3>
                    <article className='flex flex-col gap-4 w-[100%] h-[95%]'>
                        <div className='flex flex-col w-[100%] h-[65%] p-8 space-y-4 rounded-md bg-base-card'>
                            <div className='flex gap-2'>
                                <img src={localizationYellowDark} alt="" className='w-[1rem] h-[1.18rem]' />
                                <div>
                                <h4 className='Text-M'>Endereço de entrega</h4>
                                <span className='Text-S text-base-text'>Informe o endereço onde deseja receber seu pedido</span>
                                </div>
                            </div>
                            <input type="text" name="" id="" placeholder='CEP' className='bg-base-input w-[12.5rem] h-[2.5rem] p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black'/>
                            <input type="text" name="" id="" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Rua'/>
                            <div className='grid grid-cols-[1fr_2fr] gap-2'>
                                <input type="number" name="" id="" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder = 'Número'/>
                                <input type="text" name="" id="" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder = 'Complemento'/>
                            </div>
                            <div className='grid grid-cols-[3fr_5fr_1fr] gap-2'>
                                <input type="text" name="" id="" className='w-full h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Bairro'/>
                                <input type="text" name="" id="" className='w-full h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Cidade'/>
                                <select name="" id="" className='w-full h-[2.5rem] Text-S text-base-label bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black'>
                                    <option value="">UF</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col p-8 space-y-4 w-[100%] h-[35%] rounded-md bg-base-card'>
                            <div className='flex gap-2'>
                                <img src={dollarPurple} alt="" className='w-[1rem] h-[1.18rem]'/>
                                <div>
                                    <h4 className='Text-M'>Pagamento</h4>
                                    <span className='Text-S'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                                </div>
                            </div> 
                            <div className='grid grid-cols-3 gap-3'>
                                <button className=' flex items-center justify-center gap-3 h-[3.18rem]  bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark'>
                                    <img src={creditCard} alt="" />
                                    <span>CARTÃO DE CRÉDITO</span>
                                </button>
                                <button  className=' flex items-center justify-center gap-3 h-[3.18rem]  bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark'>
                                    <img src={bank} alt="" />
                                    <span>CARTÃO DE DÉBITO</span>
                                </button>
                                <button  className=' flex items-center justify-center gap-3 h-[3.18rem] bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark'>
                                    <img src={moneyNote} alt="" />
                                    <span>DINHEIRO</span>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="w-[40%]">
                    <h3 className='title-xs h-[5%]'>Cafés selecionados</h3>
                    <article className='w-[100%] rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md p-9 space-y-5 bg-base-card'>
                     <PayCardCoffee/>
                        <div className='flex justify-between'>
                            <span>Total de itens</span>
                            <span>R$ {storesReducerValue?transformNumberToString(storesReducerValue):objectCoffee?.find((coffee)=>coffee.coffeeQuantity!=0)?storesReducerValue&&transformNumberToString(storesReducerValue):0}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Entrega</span>
                            <span>R$ {transformNumberToString(valueDelivery)}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span><strong>Total</strong></span>
                            <span><strong>R$ {storesReducerValue?transformNumberToString((valueDelivery+storesReducerValue)):0}</strong></span>
                        </div>
                        <button className='w-[100%] h-[2.875rem] Button-G text-gray-100 bg-yellow rounded-md hover:bg-yellow-dark'>
                            <span>CONFIRMAR PEDIDO</span>
                        </button>
                    </article>
                </div>
            </main>
        </>
    )
}
                    
            

                      



                                
        

