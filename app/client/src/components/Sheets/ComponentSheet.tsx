import React, { useContext } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../Elements/ButtonE'
import { ComponentForm } from '../Forms/ComponentForm'
import { post } from '../../utils/api'
import { userContext } from '../../contexts/userContext'

const ComponentSheet = (): JSX.Element => {
  const { user } = useContext(userContext)
  const fillComponents = () => {
    const postComponents = user.components.map((item): any => {
      let path =
        '/src/components/Sections/' + item.name.charAt(0).toUpperCase() + item.name.slice(1)
      return {
        name: item.name,
        kind: item.kind,
        path: path,
        description: item.name + ' description',
        config: `${item.visible}`,
      }
    })
    console.log('postComponents', postComponents)
    post('components/many', postComponents)
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err.response.data.message)
      })
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="default">New Component</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Component</SheetTitle>
          <SheetDescription>
            Add your project details below. You can always edit them later.
          </SheetDescription>
        </SheetHeader>
        <br />
        <ComponentForm />
        <br />
        <div onClick={() => fillComponents()}>
          <Button variant="outline">Fill Components</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ComponentSheet
