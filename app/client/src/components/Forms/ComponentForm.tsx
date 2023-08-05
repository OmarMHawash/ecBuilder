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
  description: z.string().min(4, {
    message: 'description must be at least 20 characters.',
  }),
  logo: z.string(),
})

export function InputForm() {
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
    post('/webapps', data)
      .then((res) => {
        console.log(res)
        // todo: apply data to localstorage and context
        navigate(`/component/${res.id}`)
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="write some desc here" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>App Logo</FormLabel>
              <FormControl>
                <Input placeholder="logo url" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}
