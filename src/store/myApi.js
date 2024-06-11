import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const url = "http://localhost:3000/";

export const postsApi = createApi({
    reducerPath: "todoApi",
    baseQuery: retry(fetchBaseQuery({ baseUrl: url }), { maxRetries: 5 }),
    tagTypes: ["Posts"],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "posts",
            // providesTags: (result, error, arg) => [{ type: "Posts", id: arg }, {type: "Posts", id: "ALL"}]
            providesTags: ["Posts"]
        }),
        getOnePost: builder.query({
            query: (id) => `posts/${id}`,
            providesTags: ["Posts"]
        }),
        createPost: builder.mutation({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body
            }),
            // invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }]
            invalidatesTags: ["Posts"]
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: (result, error, arg ) => [{ type: "Posts" }]
            invalidatesTags: ["Posts"]
        }),
        updatePost: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `posts/${id}`,
                method: "PATCH",
                body
            }),
            // invalidatesTags: (result, error, { id }) => [{ type: "Posts" }]
            invalidatesTags: ["Posts"]
        }),
    })
})

export const { useGetPostsQuery, useGetOnePostQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postsApi;








