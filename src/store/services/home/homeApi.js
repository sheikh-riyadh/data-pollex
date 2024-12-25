import { baseApi } from "../../api/baseApi";

const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getData: build.query({
      query: () => ({
        url: `get-data`,
      }),
      providesTags: ["data"],
    }),
  }),
});

export const { useGetDataQuery } = homeApi;
