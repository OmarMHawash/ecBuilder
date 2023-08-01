import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const CardE = ({ title, desc, content, footer, href }: CardEProps): JSX.Element => {
  return (
    <Card className="back-t">
      <CardContent>
        <img src={content} alt="content-img" />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={href}>
          <em>{footer}</em>
        </a>
      </CardFooter>
    </Card>
  )
}

interface CardEProps {
  title: string
  desc: string
  content: string
  footer: string
  href: string
}

export default CardE
