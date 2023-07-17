import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { paletteContext } from '../../contexts/PaletteContext'
import type { PaletteContext } from '@/src/types/paletteContext'
import type { Palette } from '@/src/types/palette'

const StyledLayout = (): JSX.Element => {
  const [paletteVal, setPalette] = useState(useContext(paletteContext).palette)

  const paletteObj: PaletteContext = {
    setPalette: (pal: Palette) => {
      const newPal = {
        ecL1: pal.ecL1 !== '' ? pal.ecL1 : paletteVal.ecL1,
        ecL2: pal.ecL2 !== '' ? pal.ecL2 : paletteVal.ecL2,
        ecL3: pal.ecL3 !== '' ? pal.ecL3 : paletteVal.ecL3,
        ecL4: pal.ecL4 !== '' ? pal.ecL4 : paletteVal.ecL4,
      }
      setPalette(newPal)
    },
    palette: paletteVal,
  }

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${paletteVal.ecL1};
  }
  button,input,textarea,select{
    background-color: ${paletteVal.ecL2};
  }
  .l2-back{
    background-color: ${paletteVal.ecL2};
  }
  .l3-back,header,footer{
    background-color: ${paletteVal.ecL3};
  }
  .l3-text{
    color: ${paletteVal.ecL3};
  }
  h1,h2,h3,h4,h5,h6,p,label,a{
    color: ${paletteVal.ecL4};
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
