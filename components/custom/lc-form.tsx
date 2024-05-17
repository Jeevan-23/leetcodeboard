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
  problem_id:  z.preprocess((a) => parseInt(z.string().parse(a),10),
    z.number().min(1, { message: "Enter a valid problem id (minimum 1)" })
    .max(1000000, { message: "Enter a valid problem id (maximum 1000000)" })),
});

export default function ProfileForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problem_id: 0,
    },
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
    console.log(typeof(values.problem_id))
    const id = values.problem_id;
    router.push(`/problems/${id}`);
  }
}

