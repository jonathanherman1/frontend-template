import { render } from '@testing-library/react'
import type { Post as TPost } from '@/schemas'
import { Post } from './Post'

describe('Post component', () => {
  const mockPost: TPost = {
    _id: '1',
    message: 'This is a test message',
    name: 'testuser',
    createdAt: new Date('2024-11-01T12:00:00.000Z'),
  }

  it('renders the post message', () => {
    const { getByText } = render(<Post post={mockPost} />)
    expect(getByText('This is a test message')).toBeInTheDocument()
  })

  it('renders the post name', () => {
    const { getByText } = render(<Post post={mockPost} />)
    expect(getByText('testuser')).toBeInTheDocument()
  })

  it('renders the date display', () => {
    const { getByText } = render(<Post post={mockPost} />)
    expect(getByText('Nov 1, 2024 12:00 PM')).toBeInTheDocument()
  })
})
