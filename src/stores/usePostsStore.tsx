import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { Post } from '@/schemas'

type PostsState = {
  posts: Post[]
  addPost: (post: Post) => void
  deletePost: (id: string) => void
  setPosts: (posts: Post[]) => void
  updatePost: (id: string, updatedPost: Partial<Post>) => void
}

export const usePostsStore = create<PostsState>()(
  immer((set) => ({
    posts: [],
    addPost: (post: Post) =>
      set((state: PostsState) => {
        state.posts.unshift(post)
      }),
    deletePost: (id: string) =>
      set((state: PostsState) => {
        state.posts = state.posts.filter((post: Post) => post._id !== id)
      }),
    setPosts: (posts: Post[]) => set((state: PostsState) => {
      state.posts = posts
    }),
    updatePost: (id: string, updatedPost: Partial<Post>) =>
      set((state: PostsState) => {
        const index = state.posts.findIndex((post: Post) => post._id === id)
        if (index !== -1) {
          state.posts[index] = { ...state.posts[index], ...updatedPost }
        }
      }),
  })),
)
