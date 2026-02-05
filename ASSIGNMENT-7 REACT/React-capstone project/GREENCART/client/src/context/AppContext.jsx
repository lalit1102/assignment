import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext()

export const AppContextProvider = ({children}) =>{

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate()

  const [user,setUser] = useState(null)
  const [isSeller,setIsSeller] = useState(false)
  const [showUserLogin,setShowUserLogin] = useState(false)

  const [searchQuery,setSearchQuery] = useState({})

  // best Selller
  const [products,setProducts] = useState([])

  const [cartItem,setCartItem] = useState({})

  const fetchProducts = async () => {
    setProducts(dummyProducts)
  }

  // add to cart

  const addToCart = (itemId)=>{
    const cartData = structuredClone(cartItem)
    console.log("add to cart",cartData)

    if(cartData[itemId]){
        cartData[itemId] += 1
    } else {
       cartData[itemId] = 1
    }
    console.log("Inside addToCart (updated):", cartData)
    setCartItem(cartData)
    toast.success("Add to Cart")
  }


  // update cart quenty

  const updateCartItem = (itemId,quantity) => {
    let cartData = structuredClone(cartItem)
    cartData[itemId] = quantity
    setCartItem(cartData)
    toast.success("Cart Updated")
  }

  // remove cart data 

  const removeFromCart = (itemId) => {
    let cartData =  structuredClone(cartItem)
    if(cartData[itemId]){
      cartData[itemId] -= 1
      if(cartData[itemId]===0){
        delete cartData [itemId]
      }

    }
    toast.success("Remove From Cart")
    setCartItem(cartData)
  }
   
  useEffect(()=>{
    fetchProducts()
  },[])


  const value = {navigate,user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItem,searchQuery,setSearchQuery}
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}