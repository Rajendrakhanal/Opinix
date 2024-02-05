// this slice makes asynchronous requests to backend and is like the parent slice to analyzeApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
