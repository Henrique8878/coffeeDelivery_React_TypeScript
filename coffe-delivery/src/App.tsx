import './App.css'
import './Router.tsx'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'  
import { useState } from 'react'
import { ContextMain } from './Contexts/contextMain.tsx'

export function App() {
    
    return(
        <>
              <ContextMain>
                  <BrowserRouter>
                      <Router/>
                  </BrowserRouter>
              </ContextMain>
        </>
    ) 
}
         


          