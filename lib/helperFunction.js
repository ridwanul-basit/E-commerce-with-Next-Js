import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const response = (success, statusCode, message, data = {}) => {
  return NextResponse.json({
    success,
    statusCode,
    message,
    data,
  });
};

export const catchError = (error, customMessage) => {
  if (error.code === 11000) {
    const keys = Object.keys(error.keyPattern).join(", ");
    error.message = `Duplicate field: ${keys}. These field values must be unique.`;
  }

  let errorObj = {};

  if (process.env.NODE_ENV === "development") {
    errorObj = {
      message: error.message,
      error,
    };
  } else {
    errorObj = {
      message: customMessage || "Internal server error",
    };
  }

  return response(
    false,
    error.statusCode || error.code || 500,
    errorObj.message,
    errorObj.error || {}
  );
};


export const generateOTP = () => Math.floor(100000 + Math.random() * 900000);


// export const isAuthenticated = async (role) => {
//   try {
//     const cookieStore = cookies();

//     // 1️⃣ Check token exists
//     if (!cookieStore.has("access_token")) {
//       return { isAuth: false };
//     }

//     const accessToken = cookieStore.get("access_token").value;

//     // 2️⃣ Verify JWT
//     const { payload } = await jwtVerify(
//       accessToken,
//       new TextEncoder().encode(process.env.SECRET_KEY)
//     );

//     // 3️⃣ Check role (if provided)
//     if (role && payload.role !== role) {
//       return { isAuth: false };
//     }

//     return {
//       isAuth: true,
//       userId: payload.userId, // ✅ should match what you store in token
//       role: payload.role
//     };
//   } catch (error) {
//     console.log("Auth Error:", error);
//     return {
//       isAuth: false,
//       error: error.message,
//     };
//   }
// };