import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddPostForm } from './AddPostForm'

// Mock the API call
vi.mock('@/api/posts', () => ({
  createPost: vi.fn(() => Promise.resolve({ success: true })),
}))

describe('AddPostForm', () => {
  it('renders the form with initial values', () => {
    render(<AddPostForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const messageInput = screen.getByLabelText(/message/i)

    expect(nameInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('submits the form with correct values and resets the form after submission', async () => {
    render(<AddPostForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /add post/i })

    await userEvent.type(nameInput, 'Jon')
    await userEvent.type(messageInput, 'Hello, world!')
    expect(submitButton).toBeEnabled()
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(nameInput).toHaveValue('')
      expect(messageInput).toHaveValue('')
    })
  })

  it('should disable the submit button by default and validate on input changes', async () => {
    render(<AddPostForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /add post/i })

    // Button should be disabled by default because the form starts in an invalid state
    expect(submitButton).toBeDisabled()

    // Add valid input
    await userEvent.type(nameInput, 'ValidUser')
    await userEvent.type(messageInput, 'This is a valid message.')

    expect(submitButton).toBeEnabled()

    // Clear the "name" input to trigger validation
    await userEvent.clear(nameInput)

    // Validation error should appear
    const nameError = await screen.findByText(/name is required/i)
    expect(nameError).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })
})
