import { zschema } from '@/lib/ZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ButtonLoading } from './ButtonLoading'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'

const OTPVerification = ({email,onSubmit,loading}) => {

      const formSchema = zschema.pick({
        otp:true , email:true
      })

      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            otp: "",
            email: email
        }
      })

const handleOtpVerification = async (values) => {
        onSubmit(values)
      }

  return (
    <div>
       <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOtpVerification)}>

                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-2'>Please Complete Verification</h1>
                    <p className='text-md'>Check Your e-mail for otp we have sent to you</p>
                </div>

              {/* OTP */}

              <div className="mb-3">

              </div>
              <FormField
                control={form.control}
                name="otp"
                className=''
                render={({ field }) => (
                  <FormItem className="mb-5 relative   ">
                  <FormLabel className="block text-center text-lg font-semibold">Enter OTP</FormLabel>
                    <FormControl>
                       <div className="flex justify-center">   {/* ✅ centers horizontally */}
                            <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                                <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                    </FormControl>
                     <div className="flex justify-center"><FormMessage /></div>

                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="mb-3">
                <ButtonLoading loading={loading} type="submit" text="Verify" className="w-full" />
                <div className='text-center mt-5'>
                    <button type='button' className='text-blue-500 cursor-pointer hover:underline'>Resend OTP</button>
                </div>
              </div>

             
             
            </form>
          </Form>
    </div>
  )
}

export default OTPVerification
