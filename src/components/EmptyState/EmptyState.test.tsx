import { render } from '@testing-library/react'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders correctly with a given model', () => {
    const render1 = render(<EmptyState model="messages" />)
    expect(render1.getByText('No messages yet. Start the conversation!')).toBeInTheDocument()
  })
})
