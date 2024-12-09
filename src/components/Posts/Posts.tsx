import type { Post as TPost } from '@/schemas'
import { EmptyState } from '../EmptyState/EmptyState'
import { Overflow } from '../Overflow/Overflow'
import { Post } from '../Post/Post'

export type PostsProps = {
  posts: TPost[]
  loading: boolean
  error: string | null
}

export const Posts = ({ posts, loading, error }: PostsProps) => {
  const hasPosts = posts.length > 0

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return hasPosts ? (
    <>
      <h2 className="mb-4 text-left font-bold sm:text-2xl sm:font-medium">Posts</h2>
      <Overflow className="bg-content2 p-4">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Overflow>
    </>
  ) : (
    <EmptyState model="posts" />
  )
}
