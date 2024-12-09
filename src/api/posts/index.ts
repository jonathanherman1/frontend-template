const API_BASE_URL = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_BASE_PATH}`

import type { Post } from '@/schemas'
import type { ApiResponse } from '@/types'

const handleResponse = async <T,>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    return { success: false, message: 'There was a problem with the request.' }
  }
  const data = await response.json()
  return { success: true, data }
}

export const getPosts = async (): Promise<ApiResponse<Post[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return await handleResponse(response)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { success: false, message: 'There was a problem fetching posts.' }
  }
}

export const createPost = async (postData: Post): Promise<ApiResponse<Post>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    return await handleResponse(response)
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, message: 'There was a problem creating your post.' }
  }
}

export const updatePost = async (postId: string, postData: Post): Promise<ApiResponse<Post>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    return await handleResponse(response)
  } catch (error) {
    console.error('Error updating post:', error)
    return { success: false, message: 'There was a problem updating your post.' }
  }
}

export const deletePost = async (postId: string): Promise<ApiResponse<Post>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    return await handleResponse(response)
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, message: 'There was a problem deleting your post.' }
  }
}
