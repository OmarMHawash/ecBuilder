import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { paletteContext } from '../../contexts/PaletteContext'
import type { PaletteContext } from '@/src/types/paletteContext'
import type { Palette } from '@/src/types/palette'

const StyledLayout = (): JSX.Element => {
  const [paletteVal, setPaletteVal] = useState(
    useContext(paletteContext).palette
  )

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

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${paletteVal.back};
  }
  button,input,textarea,select{
    background-color: ${paletteVal.prim};
  }
  .l2-back{
    background-color: ${paletteVal.prim};
  }
  .l3-back,header,footer{
    background-color: ${paletteVal.secd};
  }
  .l3-text{
    color: ${paletteVal.secd};
  }
  h1,h2,h3,h4,h5,h6,p,label,a{
    color: ${paletteVal.text};
  }
`
  return (
    <paletteContext.Provider value={{ ...paletteObj }}>
      <ThemeProvider theme={{ color: 'white' }}>
        <Outlet />
        {true && <GlobalStyle />}
      </ThemeProvider>
    </paletteContext.Provider>
  )
}

export default StyledLayout
