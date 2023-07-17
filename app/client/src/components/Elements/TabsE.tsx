import React from 'react'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { TabsContent } from '../ui/tabs'

const TabsE = ({ title, img, description }: TabsEProps): JSX.Element => {
  const descFormatted = description.split('.')
  return (
    <TabsContent className="l2-back" value={title}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="img-placeholder">
            <img src={img} alt="feat-img" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {descFormatted.map((item) => (
            <p key={item}>
              {item}.<br />
            </p>
          ))}
        </CardContent>
        <CardFooter>
          <Button>Sounds Great</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}

interface TabsEProps {
  title: string
  img: string
  description: string
}

export default TabsE
