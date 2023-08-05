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
import { InputForm } from '../Forms/PaletteForm'

const PaletteSheet = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="default">New Palette</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Palette</SheetTitle>
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

export default PaletteSheet
