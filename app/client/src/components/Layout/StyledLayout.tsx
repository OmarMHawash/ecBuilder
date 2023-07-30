import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { paletteContext } from '../../contexts/PaletteContext'
import type { PaletteContext } from '@/src/types/paletteContext'
import type { Palette } from '@/src/types/palette'
import type { User } from '@/src/types/user'

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

  const userObj: User = {
    id: 1,
    name: 'Demo user',
    webapp: {
      id: 1,
      name: 'Demo webapp',
      logo: 'https://via.placeholder.com/150',
      description: 'This is a demo webapp',
      'mini-description': 'Demo webapp',
      palette_id: 1,
      components: ['header_1', 'footer_1'],
    },
    palette: {
      back: '#3AA6B9',
      prim: '#FFD0D0',
      secd: '#C1ECE4',
      text: '#000000',
      accn: '#a849d7aa',
    },
  }

  const GlobalStyle = createGlobalStyle`
  .back, body,input,textarea,select{
    background-color: ${paletteVal.back};
  }
  .text-b{
    color: ${paletteVal.back};
  }
  .prim, footer, header, tbody{
    background-color: ${paletteVal.prim};
  }
  .text-p{
    color: ${paletteVal.prim};
  }
  .secd, section, table, aside, thead, textarea, select, button{
    background-color: ${paletteVal.secd};
  }
  .text-s{
    color: ${paletteVal.secd};
  }
  .text{
    background-color: ${paletteVal.text};
  }
  .text-t, h1, h2, h3, h4, h5, h6, p, li, label, pre{
    color: ${paletteVal.text};
  }
  .text-a{
    color: ${paletteVal.accn};
  }
  .accn, a:hover{
    color: ${paletteVal.accn};
    background-color: ${paletteVal.text}10;
  }
`
  return (
    <paletteContext.Provider value={{ ...paletteObj, ...userObj }}>
      <ThemeProvider theme={{ color: 'white' }}>
        <Outlet />
        {true && <GlobalStyle />}
      </ThemeProvider>
    </paletteContext.Provider>
  )
}

export default StyledLayout
