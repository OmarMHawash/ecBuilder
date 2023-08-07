import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { type PaletteContext, paletteContext } from '../../../contexts/PaletteContext'
import { userContext, type UserContext } from '../../../contexts/userContext'
import { Toaster } from '../../ui/toaster'
import type { Palette, User } from '@/src/types/types'

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
        name: pal.name !== '' ? pal.name : paletteVal.name,
      }
      setPaletteVal(newPal)
    },
    palette: paletteVal,
  }

  const userObj: UserContext = {
    setUser: (user: User) => {
      setUserVal(user)
      console.log('BuilderLayout ~ user:', user)
    },
    user: userVal,
  }

  const GlobalStyle = createGlobalStyle`
  .back, body{
    background-color: ${paletteVal.back};
  }
  .text-b {
    color: ${paletteVal.back};
  }
  .prim, footer, tbody {
    background-color: ${paletteVal.prim};
  }
  .text-p {
    color: ${paletteVal.prim};
  }
  .secd, section, table, aside, thead, textarea, button {
    background-color: ${paletteVal.secd};
  }
  .text-s {
    color: ${paletteVal.secd};
  }
  .text {
    background-color: ${paletteVal.text};
  }
  .text-t, h1, h2, h3, h4, h5, h6, p, li, label, pre {
    color: ${paletteVal.text};
  }
  .text-a {
    color: ${paletteVal.accn};
  }
  .accn, a:hover {
    color: ${paletteVal.accn};
    background-color: ${paletteVal.accn}10;
  }`

  return (
    <paletteContext.Provider value={{ ...paletteObj }}>
      <userContext.Provider value={{ ...userObj }}>
        <ThemeProvider theme={{ color: 'white' }}>
          <Outlet />
          <Toaster />
        </ThemeProvider>
        {true && <GlobalStyle />}
      </userContext.Provider>
    </paletteContext.Provider>
  )
}

export default BuilderLayout
