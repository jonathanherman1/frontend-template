
import './App.css'
import { AddPostForm, Posts } from './components'
import { usePosts } from './hooks'

function App() {
  const { posts, loading, error } = usePosts()

  return (
    <div className='flex min-h-dvh w-full flex-col items-center'>
      <div className='w-full min-w-72 md:w-[44rem]'>
        <Posts posts={posts} loading={loading} error={error} />
        <AddPostForm className='mt-6'/>
      </div>
    </div>
  )
}

export default App
