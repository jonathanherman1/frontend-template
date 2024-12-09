import type { Post } from '@/schemas'
import { getPosts, createPost, updatePost, deletePost } from './index'

describe('API Posts', () => {
  let consoleErrorMock: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.resetAllMocks()
    // suppress console.error output from forcing fake network errors to trigger catch blocks
    consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorMock.mockRestore()
  })

  describe('getPosts', () => {
    it('fetches posts successfully', async () => {
      const mockPosts: Post[] = [{ _id: '1', name: 'Jon', message: 'Hello!' }]
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockPosts,
      })

      const response = await getPosts()
      expect(response).toEqual({ success: true, data: mockPosts })
    })

    it('handles fetch posts error', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      })

      const response = await getPosts()
      expect(response).toEqual({ success: false, message: 'There was a problem with the request.' })
    })

    it('handles network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'))
  
      const response = await getPosts()
      expect(response).toEqual({ success: false, message: 'There was a problem fetching posts.' })
    })
  })

  describe('createPost', () => {
    it('creates a post successfully', async () => {
      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Hello again' }
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [mockPost],
      })

      const response = await createPost(mockPost)
      expect(response).toEqual({ success: true, data: [mockPost] })
    })

    it('handles create post error', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      })

      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Hello again' }
      const response = await createPost(mockPost)
      expect(response).toEqual({ success: false, message: 'There was a problem with the request.' })
    })

    it('handles network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'))
  
      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Hello again' }
      const response = await createPost(mockPost)
      expect(response).toEqual({ success: false, message: 'There was a problem creating your post.' })
    })
  })

  describe('updatePost', () => {
    it('updates a post successfully', async () => {
      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Updated Content' }
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [mockPost],
      })

      const response = await updatePost('1', mockPost)
      expect(response).toEqual({ success: true, data: [mockPost] })
    })

    it('handles update post error', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      })

      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Updated Content' }
      const response = await updatePost('1', mockPost)
      expect(response).toEqual({ success: false, message: 'There was a problem with the request.' })
    })

    it('handles network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'))
  
      const mockPost: Post = { _id: '1', name: 'Jon', message: 'Hello again' }
      const response = await updatePost('1', mockPost)
      expect(response).toEqual({ success: false, message: 'There was a problem updating your post.' })
    })
  })

  describe('deletePost', () => {
    it('deletes a post successfully', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [],
      })

      const response = await deletePost('1')
      expect(response).toEqual({ success: true, data: [] })
    })

    it('handles delete post error', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      })

      const response = await deletePost('1')
      expect(response).toEqual({ success: false, message: 'There was a problem with the request.' })
    })

    it('handles network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'))
  
      const response = await deletePost('1')
      expect(response).toEqual({ success: false, message: 'There was a problem deleting your post.' })
    })
  })
})
