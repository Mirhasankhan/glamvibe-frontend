import { baseApi } from "../../api/baseApi";

const careerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (service) => ({
        url: `/service/create`,
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),
    experts: builder.query({
      query: (categoryId) => ({
        url: `/expert/all?categoryId=${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateServiceMutation, useExpertsQuery } = careerApi;
