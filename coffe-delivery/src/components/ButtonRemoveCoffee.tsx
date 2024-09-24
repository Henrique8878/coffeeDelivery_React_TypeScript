import Trash from '../assets/icons/Trash.png'

export function ButtonRemoveCoffee(){
    return(
        <>
             <button className='flex items-center justify-around gap-1 w-[5.68rem] h-[2.375rem] rounded-md p-1 Button-M bg-base-button'>
                    <img src={Trash} alt="" className='w-[0.875rem] h-[0.875rem] hover:cursor-pointer'/>
                   <span>REMOVER</span>
            </button>
        </>
    )
}