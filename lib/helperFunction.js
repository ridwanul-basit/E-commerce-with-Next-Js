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


export const generateOTP = () =>{
    const otp = Math.floor(100000 + Math.random()* 90000 ).toString
    return otp
}