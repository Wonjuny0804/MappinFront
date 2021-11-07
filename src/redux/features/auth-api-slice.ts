import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://15.164.40.176/api/v1/",
}),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (token) => ({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: "users/me",
      })
    }),
    SignUp: builder.query({
      query: (signUpInfo) => ({
        url: "/auth/signup",
        method: "POST", 
        body: signUpInfo
      })
    }),
    SignIn: builder.query({
      query: (signInInfo: { email: string; password: string; }) => ({
        url: "/auth/signin",
        method: "POST",
        body: signInInfo
      })
    })
  }),
})
