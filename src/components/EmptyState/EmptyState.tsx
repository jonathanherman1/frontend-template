export type EmptyStateProps = {
  model: string
}

export const EmptyState = ({ model }: EmptyStateProps) => {
  return (
    <div className='flex h-full flex-col items-center justify-center rounded-lg bg-gray-100 p-12 dark:bg-gray-800'>
      <p className='text-lg font-semibold text-gray-500'>
        No {model} yet. Start the conversation!
      </p>
    </div>
  )
}
