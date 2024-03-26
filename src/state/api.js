import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Cars"],
  endpoints: (build) => ({
    getCars: build.query({
      query: (payload) => {
        return {
          url: "/car/",
          params: { payload },
        };
      },
      providesTags: ["Cars"],
    }),
    getCarById: build.query({
      query: (payload) => {
        console.log(payload);
        return {
          url: `/car/${payload}`,
        };
      },
      providesTags: ["Cars"],
    }),
    getCarsByClass: build.query({
      query: (payload) => {
        console.log(payload);
        return {
          url: `/car/filter/${payload}`,
        };
      },
      providesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarByIdQuery, useGetCarsByClassQuery } =
  api;
