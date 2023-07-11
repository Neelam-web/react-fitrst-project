import React, { useContext, useEffect } from 'react'
import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import { GlobalContext } from '../Context/context'

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    console.log("Recieving From Context",state)
  }, [])
  return (
    <>
      <HeaderSection />
      <CategoriesSection />
    </>
  )
}

