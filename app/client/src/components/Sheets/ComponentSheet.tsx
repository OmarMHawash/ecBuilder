import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../Elements/ButtonE'
import { InputForm } from '../Forms/ComponentForm'

const ComponentSheet = (): JSX.Element => {
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
        <InputForm />
      </SheetContent>
    </Sheet>
  )
}

export default ComponentSheet
