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
  type: z.string().min(3, {
    message: 'type must be at least 20 characters.',
  }),
  value: z.string().min(2, {
    message: 'value must be at least 20 characters.',
  }),
})

export function ComponentForm() {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Creating component... 🚀',
    })
    newComponent(data)
  }

  const newComponent = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    post('/components', data)
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
                <Input placeholder="my-component" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="header" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Component</FormLabel>
              <FormControl>
                <Input placeholder="HeaderA" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}
