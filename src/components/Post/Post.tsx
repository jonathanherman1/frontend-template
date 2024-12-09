import type { Post as TPost } from '@/schemas'
import { DateDisplay } from '../DateDisplay/DateDisplay'

export type PostsProps = {
  post: TPost
}

export const Post = ({ post }: PostsProps) => (
  <div className="mb-4" data-testid='post'>
    <p>
      <span className="font-bold">{post.name}</span>
      <DateDisplay date={post.createdAt} className="ms-2 text-tiny" />
    </p>
    <p>{post.message}</p>
  </div>
)
