import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { type PaletteContext, paletteContext } from '../../../contexts/paletteContext'
import { userContext, type UserContext } from '../../../contexts/userContext'
import type { Palette, User } from '@/src/types/types'
import { Toaster } from '../../ui/toaster'

const BuilderLayout = (): JSX.Element => {
  const [paletteVal, setPaletteVal] = useState(useContext(paletteContext).palette)
  const [userVal, setUserVal] = useState(useContext(userContext).user)

  const paletteObj: PaletteContext = {
    setPalette: (pal: Palette) => {
      const newPal = {
        back: pal.back !== '' ? pal.back : paletteVal.back,
        prim: pal.prim !== '' ? pal.prim : paletteVal.prim,
        secd: pal.secd !== '' ? pal.secd : paletteVal.secd,
        text: pal.text !== '' ? pal.text : paletteVal.text,
        accn: pal.accn !== '' ? pal.accn : paletteVal.accn,
      }
      console.log('StyledLayout ~ newPal:', newPal)
      setPaletteVal(newPal)
    },
    palette: paletteVal,
  }

  const userObj: UserContext = {
    user: userVal,
    setUser: (user: User) => {
      console.log('StyledLayout ~ user:', user)
      setUserVal(user)
    },
  }

  return (
    <paletteContext.Provider value={{ ...paletteObj, ...userObj }}>
      {/* <ActionBar /> */}
      <Outlet />
      <Toaster />
    </paletteContext.Provider>
  )
}

export default BuilderLayout
