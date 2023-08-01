import React, { useState, useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { paletteContext } from '../contexts/paletteContext'
import Header from '../components/Sections/Header/Header'
import Footer from '../components/Sections/Footer/Footer'
import BuilderBar from '../components/Layout/Sidebar/BuilderBar/BuilderBar'

const Builder = (): JSX.Element => {
  const [paletteVal, setPaletteVal] = useState(useContext(paletteContext).palette)

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
  }`

  return (
    <ThemeProvider theme={{ color: 'white' }}>
      <div id="builder-section">
        <div id="builder-sidebar">
          <BuilderBar />
        </div>
        <div id="builder-content">
          <Header />
          <main></main>
          <Footer />
        </div>
      </div>
      {true && <GlobalStyle />}
    </ThemeProvider>
  )
}

export default Builder
