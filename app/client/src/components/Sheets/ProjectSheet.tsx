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
import { InputForm } from '../Forms/UserForm'

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
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <br />
        {/* <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" /> <br />
        <label htmlFor="logo">logo</label>
        <input type="text" name="logo" id="logo" /> <br />
        <input type="hidden" name="palette" id="palette" value={1} /> */}
        <InputForm />
      </SheetContent>
    </Sheet>
  )
}

export default ProjectSheet
