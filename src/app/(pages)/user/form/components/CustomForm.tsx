"use client"
import { insertUserSchema, insertUserSchemaType } from '@/zod-schemas/user';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomInput from './CustomInput';
import { createUser } from '@/services/user/userService';



export default function CustomForm() {
    const defaultValues: insertUserSchemaType = {
        id:  Math.floor(999*Math.random()),
        firstName: "",
        lastName:  "",
        email:  "",
        bills:  "",
      };

    const {control, handleSubmit, formState: {errors}} = useForm<insertUserSchemaType>({
        mode: "onBlur",
        resolver: zodResolver(insertUserSchema),
        defaultValues,
      });

      const onSubmit: SubmitHandler<insertUserSchemaType> = async (data) => {
        try {
            console.log(data);
              const response = await createUser(data);
              console.log("User created:", response);
              alert("User created successfully!");
            } catch (error) {
              console.error("Error:", error);
              alert("Failed to create user.");
            }
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput name='firstName' control={control} label='First Name' type='text' error={errors.firstName}/>
        <CustomInput name='lastName' control={control} label='Last Name' type='text' error={errors.lastName}/>
        <CustomInput name='email' control={control} label='Email' type='email' error={errors.email}/>
        <CustomInput name='bills' control={control} label='Bills' type='text' error={errors.bills}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
