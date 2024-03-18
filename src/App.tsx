import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Cart from './components/Cart'
import ScrollToTop from "react-scroll-to-top";

export type CartItem = {
  name: string
  description: string
  price: number
  picture: string
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  // Packages used:
  // aos
  // Tailwind
  // DaisyUI
  // React
  // React Icons
  // React Scroll To Top


  return (
    <>
      <Navbar numberOfCartItems={cart.length} />
      <Hero />
      <ItemList setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <div className='flex w-full items-center justify-center bg-secondary h-24'>
        <p className=''>Nicole Astorne, 2024</p>
      </div>
      <ScrollToTop smooth />
    </>
  )
}

export default App
