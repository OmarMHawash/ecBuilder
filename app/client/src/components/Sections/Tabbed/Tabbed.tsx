import React from 'react'
import TabsE from '../../Elements/TabsE'
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { featuresData } from '../../../utils/newProject'
import './Tabbed.scss'

const Tabbed = (): JSX.Element => {
  return (
    <Tabs defaultValue={featuresData[0].title} className="tabbed-section">
      <TabsList className="grid w-full grid-cols-3 l3-back">
        {featuresData.map((item) => (
          <TabsTrigger value={item.title} key={item.title.toString()}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {featuresData.map((item) => (
        <TabsE
          key={item.title.toString()}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </Tabs>
  )
}

export default Tabbed
