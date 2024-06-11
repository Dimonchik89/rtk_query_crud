import { useEffect, useState } from 'react'
import Post from './components/Post'
import { useGetPostsQuery } from './store/myApi'
import Form from "./components/Form";

import './App.css'


function App() {
  const { data: posts, isFetching, isError, refetch } = useGetPostsQuery("", { 
    refetchOnReconnect: true, 
    // pollingInterval: 30000
  });

  if(isFetching) return <h3>Loading...</h3>;
  if(isError) return <h3>Error</h3>;

  const content = posts?.map(({id, title}) => <Post key={id} title={title} id={id}/>)

  return (
    <>
      <Form/>
      <button onClick={refetch}>Refetch</button>
      {content}
    </>
  )
}

export default App
