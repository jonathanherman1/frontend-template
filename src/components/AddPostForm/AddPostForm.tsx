import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { Controller, type FieldErrors, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { createPost } from '@/api/posts'
import { postSchema, type Post } from '@/schemas'
import { usePostsStore } from '@/stores/usePostsStore'
import type { StyleSlots } from '@/types'
import { ErrorMessageWrapper } from '../ErrorMessageWrapper'

export type AddPostFormProps = StyleSlots

const defaultPost: Post = {
  message: '',
  name: '',
}

export const AddPostForm = ({ className, classNames }: AddPostFormProps) => {
  const [serverError, setServerError] = useState<string | null>(null)
  const { control, handleSubmit, reset, formState } = useForm<Post>({
    defaultValues: defaultPost,
    mode: 'all',
    resolver: zodResolver(postSchema),
  })

  const addPost = usePostsStore((state) => state.addPost)

  const onSubmit = async (data: Post) => {
    const res = await createPost(data)
    if (res.success) {
      // Update the global state store with the new post
      if (!Array.isArray(res.data)) {
        addPost(res.data)
      }
      reset(defaultPost)
    } else {
      setServerError(res.message)
    }
  }

  const onError = (errors: FieldErrors) => {
    console.error(errors)
  }

  return (
    <form
      className={twMerge(className, classNames?.base)}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h2 className="mb-2 text-left font-bold sm:text-2xl sm:font-medium">Add Post</h2>
      <p className='mb-4 text-left text-sm text-gray-500'>This is a public forum. Please be mindful of what you post.</p>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <>
            <Input
              autoComplete="off"
              className="mb-2"
              isInvalid={!!formState.errors.name}
              errorMessage={
                <ErrorMessageWrapper>{formState.errors.name?.message}</ErrorMessageWrapper>
              }
              label="Name"
              type="text"
              {...field}
            />
          </>
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Textarea
            autoComplete="off"
            className="mb-4"
            isInvalid={!!formState.errors.message}
            errorMessage={
              <ErrorMessageWrapper>{formState.errors.message?.message}</ErrorMessageWrapper>
            }
            label="Message"
            {...field}
          />
        )}
      />

      <Button color="primary" type="submit" fullWidth isDisabled={!formState.isValid || formState.isSubmitting}>
        Add Post
      </Button>

      {serverError && <p className="mt-6 rounded-lg bg-red-50 p-6 text-red-500">{serverError}</p>}
    </form>
  )
}
