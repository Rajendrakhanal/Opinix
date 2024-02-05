import { apiSlice } from "./apiSlice";
const UPLOAD_URL = "/api/upload";

export const analyzeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    analyzeData: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}/`, // hit this url on backend
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAnalyzeDataMutation } = analyzeApiSlice;
