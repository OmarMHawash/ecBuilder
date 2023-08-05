'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { toast } from '../ui/use-toast'
import { post } from '../../utils/api'
import { useNavigate } from 'react-router-dom'
const FormSchema = z.object({
  name: z.string().min(4, {
    message: 'name must be at least 4 characters.',
  }),
})

export function PaletteForm() {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Creating palette... 🚀',
    })
    newPalette(data)
  }

  const newPalette = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    post('/palettes', data)
      .then((res) => {
        console.log(res)
        // todo: apply data to localstorage and context
        navigate(`/quick-start`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="my-palette" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}
