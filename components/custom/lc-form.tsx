"use client"
 
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
 
const formSchema = z.object({
  problem_id: z.coerce.number().gte(1, "Enter a valid problem id")
});


export default function ProfileForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })
  const router = useRouter()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="problem_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Problem id</FormLabel>
              <FormControl>
                <Input placeholder="Enter you problem id" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

  
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/problems/${values.problem_id}`);
  }
}

