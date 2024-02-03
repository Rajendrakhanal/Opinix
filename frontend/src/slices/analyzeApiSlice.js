import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/analyze";

export const analyzeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    analyzeData: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/`, // hit this url on backend
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAnalyzeDataMutation } = analyzeApiSlice;
