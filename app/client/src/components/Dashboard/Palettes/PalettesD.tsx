import React, { useEffect } from 'react'
import { Palette } from '@/src/types/types'
import { Link } from 'react-router-dom'
import CardE from '../../Elements/CardE'
import { get } from '../../../utils/api'

import '../Dashboard.scss'
import './Palettes.scss'
import PaletteSheet from '../../Sheets/PaletteSheet'
const PalettesD = (): JSX.Element => {
  const [palettes, setpalettes] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  useEffect(() => {
    getPalettes()
  }, [])

  const getPalettes = () => {
    // @ts-ignore
    ;(async () => {
      await get('/palettes')
        .then((res) => {
          setpalettes(res)
          console.log(res)
        })
        .then(() => {
          setLoaded(true)
        })
    })()
  }
  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        <h3>Palettes: </h3>
        <PaletteSheet />
      </div>
      <div className="dashboard">
        <div className="dashboard-wrapper palettes">
          {loaded ? (
            palettes.map((palette: any) => {
              return (
                <Link to="/quick-start" className="palette-card">
                  <CardE
                    title={palette.name}
                    desc={
                      palette.background +
                      ', ' +
                      palette.primary +
                      ', ' +
                      palette.secondary +
                      ', ' +
                      palette.text +
                      ', ' +
                      palette.accent
                    }
                    content=""
                    footer=""
                    href=""
                  />
                </Link>
              )
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PalettesD
