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
import { InputForm } from '../Forms/WebappForm'

const ProjectSheet = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="default">New Project</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Project</SheetTitle>
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

export default ProjectSheet
