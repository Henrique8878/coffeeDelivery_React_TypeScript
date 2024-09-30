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
import { contextApp } from '../Contexts/ContextMain'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Link } from 'react-router-dom'


export function Pay(){
   const {haveProduct,objectCoffee,isSubtitle,sumValuesCoffees,storesReducerValue,setTypePay,setFormDataObject,typePay} = useContext(contextApp)
   const [valueDelivery,setvalueDelivery] = useState(3.50)

   const formValidationPattern = zod.object({
    inp_cep:zod.string().min(9,"O cep precisa ter no mínimo 9 caracteres").max(9,"O cep pode ter no máximo 9 caracteres"),
    inp_rua:zod.string().min(1, "").max(40, "o campo rua pode ter no máximo 20 caracteres"),
    inp_num:zod.number().min(1),
    inp_complemento:zod.string().min(3,"O campo complemento tem que ter no mínimo 5 caracteres").max(40,"O campo complemento pode ter no máximo 40 caracteres"),
    inp_bairro:zod.string().min(1).max(20),
    inp_cidade:zod.string().min(1).max(20),
    inp_uf:zod.string().min(2).max(2)
})

   const {register,handleSubmit,watch,formState} = useForm({
    resolver:zodResolver(formValidationPattern)
   })
   const watchCep = watch('inp_cep')

   function handleChangedForm(data:any){
        setFormDataObject(data)
    }
    console.log(formState.errors)
    
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
            <HeaderPage Url="http://localhost:5173/pay" haveProduct = {haveProduct}/>
            <form className="flex justify-between gap-5 mx-40 h-[32.93rem]" onSubmit={handleSubmit(handleChangedForm)}>
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
                            <input type="text"  id="inp_cep" placeholder='CEP' className='bg-base-input w-[12.5rem] h-[2.5rem] p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black'{...register('inp_cep')}/>
                            <input type="text"  id="inp_rua" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Rua'{...register('inp_rua')}/>
                            <div className='grid grid-cols-[1fr_2fr] gap-2'>
                                <input type="number" id="inp_num" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black max-1000:w-20' placeholder = 'Número' {...register('inp_num',{valueAsNumber:true})}/>
                                <input type="text"  id="inp_complemento" className='h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder = 'Complemento'{...register('inp_complemento')}/>
                            </div>
                            <div className='grid grid-cols-[3fr_5fr_1fr] gap-2'>
                                <input type="text"  id="inp_bairro" className='w-full h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Bairro' {...register('inp_bairro')}/>
                                <input type="text" id="inp_cidade" className='w-full h-[2.5rem] bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' placeholder='Cidade' {...register('inp_cidade')}/>
                                <select  id="inp_uf" className='w-full h-[2.5rem] Text-S text-base-label bg-base-input rounded-md p-2 outline-none focus:border border-yellow-dark focus:placeholder:text-black' {...register('inp_uf')}>
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
                                <button className=' flex items-center justify-center gap-3 h-[3.18rem]  bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark' onClick={()=>setTypePay("CARTÃO DE CRÉDITO")}>
                                    <img src={creditCard} alt="" className='w-[1rem] h-[1rem]'/>
                                    <span className='Button-M max-1000:text-[0.6rem]'>CARTÃO DE CRÉDITO</span>
                                </button>
                                <button  className=' flex items-center justify-center gap-3 h-[3.18rem]  bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark' onClick={()=>setTypePay("CARTÃO DE DÉBITO")}>
                                    <img src={bank} alt="" className='w-[1rem] h-[1.18rem]'/>
                                    <span  className='Button-M max-1000:text-[0.6rem]'>CARTÃO DE DÉBITO</span>
                                </button>
                                <button  className=' flex items-center justify-center gap-3 h-[3.18rem] bg-base-button rounded-md hover:bg-gray-300  focus:border border-purple-dark' onClick={()=>setTypePay("DINHEIRO")}>
                                    <img src={moneyNote} alt="" className='w-[1rem] h-[1.18rem]'/>
                                    <span  className='Button-M max-1000:text-[0.6rem]'>DINHEIRO</span>
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
                            <span>R$ {(storesReducerValue?transformNumberToString(storesReducerValue):0)}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Entrega</span>
                            <span>R$ {transformNumberToString(valueDelivery)}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span><strong>Total</strong></span>
                            <span><strong>R$ {storesReducerValue?transformNumberToString((valueDelivery+storesReducerValue)):0}</strong></span>
                        </div>
                        {typePay==""?  
                            <button id ="btn_confirm" type='submit' className='w-[100%] h-[2.875rem] Button-G text-gray-100 bg-yellow rounded-md hover:bg-yellow-dark cursor-pointer' disabled = {!watchCep}>
                                <span className='Button-M'>CONFIRMAR PEDIDO</span>
                            </button>
                                : 
                            <Link to={'http://localhost:5173/delivery'}>
                            <button id ="btn_confirm" type='submit' className='w-[100%] h-[2.875rem] mt-5 Button-G text-gray-100 bg-yellow rounded-md hover:bg-yellow-dark cursor-pointer' disabled = {!watchCep}>
                                <span className='Button-M'>CONFIRMAR PEDIDO</span>
                            </button>
                            </Link>
                        }
                    </article>
                </div>
            </form>
        </>
    )
}
                    
                        
                       

            

                      



                                
        

