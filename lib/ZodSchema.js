import {z} from 'zod'

export const zschema = z.object({


    name: z
      .string()
      .min(4, { message: "Name must be at least 4 characters long" })
      .max(50, { message: "Name cannot exceed 50 characters" })
      .regex(/[A-Za-z0-9]/, { message: "Name can only contain letters and spaces" }),

    email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters long" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),
    confirmPassword: z.string(),

  otp : z.string()
  .regex(/^\d{6}$/, "OTP must be exactly 6 digits"),

  _id: z.string().min(3,'_id is required'),
  alt: z.string().min(3,'Alt is required'),
  _title: z.string().min(3,'_Title is required')
})