import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query({
      query: (query) => ({
        url: `get-user?${query}`,
      }),
      providesTags: ["user"],
    }),
    register: build.mutation({
      query: (data) => ({
        url: "create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useRegisterMutation, useLazyLoginQuery, useLoginQuery } =
  authApi;
