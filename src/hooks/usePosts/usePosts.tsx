import { useEffect } from 'react'
import { getPosts } from '@/api/posts'
import type { Post } from '@/schemas'
import { usePostsStore } from '@/stores/usePostsStore'
import { useFetch } from '../useFetch/useFetch'

export const usePosts = () => {
  const { data, loading, error } = useFetch<Post[]>(getPosts)

  // set the initial global state store with the fetched data
  const setPosts = usePostsStore((state) => state.setPosts)
  const posts = usePostsStore((state) => state.posts)

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setPosts(data)
    }
  }, [data, setPosts]);

  return { posts, loading, error }
}
