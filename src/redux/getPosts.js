import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseapi = import.meta.env.VITE_API_URL;

export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseapi,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers; 
    },
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    deletePost : builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      })
    }),
    getProfile: builder.query({
      query: () => "profile"
    }),
    getProfileById: builder.query({
      query: (id) => `/profile/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation, useGetProfileQuery, useGetProfileByIdQuery } = postApi;



