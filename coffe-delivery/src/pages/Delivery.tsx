import motoboyDelivery from '../assets/icons/motoboyDelivery.png'
import circleLocalization from '../assets/icons/circleLocalization.png'
import circleTimer from '../assets/icons/circleTimer.png'
import circleDollar from '../assets/icons/circleDollar.png'
import { useContext } from 'react'
import { contextApp } from '../Contexts/ContextMain'


export function Delivery(){
    const {storesReducerValue,typePay,formDataObject} = useContext(contextApp)
    return(
        <>
            <main className="flex flex-wrap gap-10 items-end justify-around mx-40 mt-24">
                <article>
                    <div className='mb-8'>
                        <h1 className='title-l text-yellow-dark mb-2'>Uhu! Pedido confirmado</h1>
                        <span className='Text-L font-normal text-base-subtitle'>Agora é só aguardar que logo o café chegará até você</span>
                    </div>
                    <div className='flex flex-col gap-6 p-8 w-[32.875rem] h-[16.875rem] border border-purple-dark rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md'>
                        <div className='flex gap-4'>
                            <img src={circleLocalization} alt="" className='w-8 h-8' />
                            <div className='flex flex-col'>
                                <span>Entrega em <strong>{formDataObject.inp_rua}, {formDataObject.inp_num}</strong></span>
                                <span>{formDataObject.inp_cidade}, {formDataObject.inp_uf}</span>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={circleTimer} alt=""  className='w-8 h-8'/>
                            <div className='flex flex-col'>
                                <span>Previsão de Entrega</span>
                                <span><strong>20 min - 30 min </strong></span>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={circleDollar} alt="" className='w-8 h-8' />
                            <div className='flex flex-col'>
                                <span>Pagamento na entrega</span>
                                <span><strong>{typePay}</strong></span>
                                
                            </div>
                        </div>
                    </div>
                </article>
                <img src={motoboyDelivery} alt="" className="w-[30.75rem] h-[18.3125rem]"/>
            </main>
        </>
    )
}