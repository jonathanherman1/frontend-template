// Testing this will be easier when react-hooks-testing-library releases support for React 18.
// https://www.npmjs.com/package/@testing-library/react-hooks
import { render, screen, act } from '@testing-library/react'
import { usePosts } from './usePosts'

vi.mock('@/api/posts', () => {
  return {
    getPosts: vi.fn(() =>
      Promise.resolve({
        success: true,
        data: [{ _id: '1', name: 'Jon', message: 'Hello, world!' }],
      }),
    ),
  }
})

const TestComponent = () => {
  const { posts } = usePosts()

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} data-testid="post">
          {post.message}
        </div>
      ))}
    </div>
  )
}

describe('usePosts', () => {
  it('fetches posts', async () => {
    render(<TestComponent />)

    // Wait for the posts to be fetched and displayed
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    const postElements = screen.getAllByTestId('post')
    expect(postElements.length).toBeGreaterThan(0)
  })
})
