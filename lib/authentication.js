import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export const isAuthenticated = async (role) => {
  try {
    const cookieStore = cookies();

    // 1️⃣ Check token exists
    if (!cookieStore.has("access_token")) {
      return { isAuth: false };
    }

    const accessToken = cookieStore.get("access_token").value;

    // 2️⃣ Verify JWT
    const { payload } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.SECRET_KEY)
    );

    // 3️⃣ Check role (if provided)
    if (role && payload.role !== role) {
      return { isAuth: false };
    }

    return {
      isAuth: true,
      userId: payload.userId, // ✅ should match what you store in token
      role: payload.role
    };
  } catch (error) {
    console.log("Auth Error:", error);
    return {
      isAuth: false,
      error: error.message,
    };
  }
};
