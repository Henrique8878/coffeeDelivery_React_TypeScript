import './App.css'
import './Router.tsx'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'  
import { useState } from 'react'

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

interface typeContext{
    haveProduct:boolean,
    setHaveProduct?:React.Dispatch<React.SetStateAction<boolean>>,
    isSubtitle?:number,
    setIsSubtitle?:React.Dispatch<React.SetStateAction<number>>,
    objectCoffee?:typeObjectCoffee[],
    setObjectCoffee?:React.Dispatch<React.SetStateAction<typeObjectCoffee[]>>
}

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



export const contextApp = createContext({
    
} as typeContext)

export function App() {
    return(
        <>
          <contextApp.Provider value={{haveProduct,setHaveProduct,isSubtitle,setIsSubtitle,objectCoffee,setObjectCoffee}}>
              <BrowserRouter>
                  <Router/>
              </BrowserRouter>
          </contextApp.Provider>
        </>
    ) 
}