import { useContext } from 'react'
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
import { contextApp } from '../App'

/**Expresso Tradicional: R$ 9,00
Expresso Americano: R$ 8,50
Expresso Cremoso: R$ 10,00
Expresso Gelado: R$ 11,00
Café com Leite: R$ 10,50
Café com Leite (dobro de leite): R$ 11,50
Capuccino: R$ 12,00
Macchiato: R$ 10,00
Mocaccino: R$ 12,50
Chocolate Quente: R$ 9,50
Cubano: R$ 14,00
Havaiano: R$ 12,00
Café Árabe: R$ 11,00
Irlandês: R$ 15,00 */


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
    const {haveProduct,setHaveProduct,isSubtitle,setIsSubtitle,objectCoffee,setObjectCoffee} = useContext(contextApp)
    const [haveProduct,setHaveProduct] = useState(false)
    const [isSubtitle,setIsSubtitle] = useState(0)
    const [objectCoffee,setObjectCoffee] = useState<typeObjectCoffee[]>([
    {
        id:new Date().getTime()+1,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCoffeTraditional,
        coffeeTitle:"Expresso Tradicional",
        coffeeContent:"O tradicional café feito com água quente e grãos moídos",
        isSubtitle:0,
        coffeePrice:9.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+2,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgAmerican,
        coffeeTitle:"Expresso Americano",
        coffeeContent:"Expresso diluído, menos intenso que o tradicional",
        isSubtitle:0,
        coffeePrice:8.50,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+3,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCreamyExpress,
        coffeeTitle:"Expresso Cremoso",
        coffeeContent:"Café expresso tradicional com espuma cremosa",
        isSubtitle:0,
        coffeePrice:10.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+4,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgIceCoffe,
        coffeeTitle:"Expresso Gelado",
        coffeeContent:"Bebida preparada com café expresso e cubos de gelo",
        isSubtitle:0,
        coffeePrice:11.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+5,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCoffeWithMilk,
        coffeeTitle:"Café com leite",
        coffeeContent:"Meio a meio de expresso tradicional com leite vaporizado",
        isSubtitle:1,
        coffeeSubtitle:"GELADO",
        coffeePrice:10.50,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+6,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCoffeLatte,
        coffeeTitle:"Latte",
        coffeeContent:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
        isSubtitle:1,
        coffeeSubtitle:"COM LEITE",
        coffeePrice:11.50,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+7,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCapuccino,
        coffeeTitle:"Capuccino",
        coffeeContent:"Bebida com canela feita de doses iguais de café, leite e espuma",
        isSubtitle:1,
        coffeeSubtitle:"COM LEITE",
        coffeePrice:12.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+8,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgMachiatto,
        coffeeTitle:"Macchiato",
        coffeeContent:"Café expresso misturado com um pouco de leite quente e espuma",
        isSubtitle:1,
        coffeeSubtitle:"COM LEITE",
        coffeePrice:10.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+9,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgMochaccino,
        coffeeTitle:"Mocaccino",
        coffeeContent:"Café expresso com calda de chocolate, com pouco leite e espuma",
        isSubtitle:1,
        coffeeSubtitle:"COM LEITE",
        coffeePrice:12.50,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+10,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgHotChocolate,
        coffeeTitle:"Chocolate Quente",
        coffeeContent:"Bebida feita com chocolate dissolvido no leite quente e café",
        isSubtitle:1,
        coffeeSubtitle:"COM LEITE",
        coffeePrice:9.50,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+11,
        coffeeType:"TRADICIONAL",
        coffeePicture:imgCubano,
        coffeeTitle:"Cubano",
        coffeeContent:"Drinque gelado de café expresso com rum, creme de leite e hortelã",
        isSubtitle:2,
        coffeeSubtitle:"ALCOÓLICO",
        coffeeSubtitle2:"GELADO",
        coffeePrice:14.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+12,
        coffeeType:"ESPECIAL",
        coffeePicture:imgHavaiano,
        coffeeTitle:"Havaiano",
        coffeeContent:"Bebida adocicada preparada com café e leite de coco",
        isSubtitle:0,
        coffeePrice:12.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+13,
        coffeeType:"ESPECIAL",
        coffeePicture:imgArabe,
        coffeeTitle:"Árabe",
        coffeeContent:"Bebida preparada com grãos de café árabe e especiarias",
        isSubtitle:0,
        coffeePrice:11.00,
        coffeeQuantity:0
    },
    {
        id:new Date().getTime()+14,
        coffeeType:"ESPECIAL",
        coffeePicture:imgIrland,
        coffeeTitle:"Irlandês",
        coffeeContent:"Bebida a base de café, whisky irlandês açucar e chantilly",
        isSubtitle:1,
        coffeeSubtitle:"ALCOÓLICO",
        coffeePrice:15.00,
        coffeeQuantity:0
    },
    

    ])

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
            <div id="app" className='h-screen w-screen'>
                <HeaderPage Url="http://localhost:5173/pay" haveProduct={haveProduct}/>
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
                                                <img src={cartWhiteSmall} alt="" className=''/>
                                                <span className='Text-M'>Compra simples e segura</span>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                                <img src={iconBox} alt="" />
                                                <span className='Text-M'>Embalagem mantém o café intacto</span>
                                        </div>
                                  </section>
                                  <section className='flex gap-8'>
                                        <div className='flex items-center gap-2'>
                                                <img src={iconTimer} alt="" />
                                                <span className='Text-M'>Entrega rápida e rastreada</span>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                                <img src={iconCoffe} alt="" />
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
                            {objectCoffee.map((coffee)=>(
                                <CardCoffee
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
                            ))}

                        </div>
                        
                    </section>
                </main>
            </div>
        </>
    )
}


