'use client';
import CountrySelectField from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import React from 'react'

import { useForm } from 'react-hook-form'

const SignUp = () => {
    const {register,handleSubmit,control,formState:{errors,isSubmiting}}=useForm<SignUpFormData>({
        defaultValues:{

            fullName:"",
            email:"",
            password:"",
            investmentGoals:"Grouth",
            riskTolerance:"Medium",
            preferredIndustry:"Tecknology"
        },
        mode:"onBlur"
    },);

    const onSubmit=async(data: SignUpFormData)=>{
      try {
        console.log(data);
      } catch (error) {
        console.error(error)
      }
    };
  return (
    <>
      <h1 className='form-title'>Sign up and Personalize</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
        name="fullName"
        label='Full Name'
        placeholder='Ahmad Khan'
        register={register}
        error={errors.fullName}
        validation={{required:"full name is required",minLength:2}}
        />
        <InputField
        name="email"
        label='email'
        placeholder='enter your email'
        register={register}
        error={errors.email}
        validation={{required:"Email is required",minLength:4}}
        />
        <InputField
        name="password"
        label='Password'
        placeholder='Enter a strong password'
        type="password"
        register={register}
        error={errors.password}
        validation={{required:"Password is required",minLength:2}}
        />
        {/* Country */}
        <CountrySelectField
        name="country"
        label='Country'
        control={control}
        error={errors.country}
        required
        />

        <SelectField 
        name="investmentGoals"
        label="Investment Goals"
        placeholder="Select Your Investment Goal"
        options={INVESTMENT_GOALS}
        control={control}
        error={errors.investmentGoals}
        required
        />
        <SelectField 
        name="riskTolerance"
        label="Risk Tolerance"
        placeholder="Select Your Risk Level"
        options={RISK_TOLERANCE_OPTIONS}
        control={control}
        error={errors.riskTolerance}
        required
        />
        <SelectField 
        name="preferredIndustry"
        label="Preferred Industry"
        placeholder="Select Your Preferred Industry"
        options={PREFERRED_INDUSTRIES}
        control={control}
        error={errors.preferredIndustry}
        required
        />
        <button type='submit' disabled={isSubmiting} className='yellow-btn w-full mt-5'>
          {isSubmiting ? "Creating account": "Start Your Investing Journey"}
        </button>
        <FooterLink text='Already have an account' linkText='Sign in' href='/sign-in'/>
      </form>


    </>
  )
}

export default SignUp
