"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image";
import Link from "next/link";
import FormField from "./formFeild";


import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const authFormSchema = (type: FormType)=> {
    return z.object({
        name: type==='sign-up'? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
        })
}


const AuthForm = ({type}:{type:FormType}) => {

    const router = useRouter();

    const formSchema = authFormSchema(type);

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
        if(type==="sign-up"){
            toast.success("Account created sucessfully. Please Sign in!");
            router.push("/sign-in");
                }else if(type==="sign-in"){
                    toast.success("SignedIn Sucessfully!");
            router.push("/");
                        }
    } catch (error) {
        console.log(error);
        toast.error(`There was an error ${error}`);
        
    }
  }

  const isSignedIn = type === 'sign-in';

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">mockMATE</h2>
        </div>

        <h3>Practice job interviews with AI</h3>

      
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">

          {!isSignedIn && (<FormField control={form.control} name="name" label="Name" placeholder="Enter Your Name" type="text"/>)}
        <FormField control={form.control} name="email" label="Email" placeholder="Enter Your Email" type="email"/>
        <FormField control={form.control} name="password" label="Password" placeholder="Enter Your Password" type="password"/>

       
        <Button type="submit" className="btn">{isSignedIn? "Sign In":"Create an Account"}</Button>
      </form>
    </Form>
    <p className="text-center">{isSignedIn?"No account yet?":"Already have an account!"}
         <Link
            href={!isSignedIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignedIn ? "Sign In" : "Sign Up"}
          </Link>
    </p>

      </div>
    </div>
  
  )
}

export default AuthForm;
