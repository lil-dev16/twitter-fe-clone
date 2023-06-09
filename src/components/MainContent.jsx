import React from 'react'
import { useGlobalContext } from '../contexts/context'
import Post from './Post'

const MainContent = () => {
  const {textValue, setTextvalue, tweets, setTweets } = useGlobalContext()

  const handleSubmit = (e) => {
      e.preventDefault();
      setTweets((prev) => (
        [...prev, {
          nom: 'Segun Ojoo', 
        username: '@seggunn',
        date: 'May 12',
        tweet: textValue  
        }]
      )
      )
      setTextvalue('');
      localStorage.setItem('tweet', textValue)
  }

  return (
    <div className='md:w-[50%] md:ml-[10rem] xl:ml-[15rem]'>
      <h1 className='text-3xl font-bold mt-[1rem]'>Home</h1>
      <div className='flex justify-around mt-[2rem]'>
        <h3 className='tet-2xl font-bold foryou relative'>For you</h3>
        <h3 className='tet-2xl font-bold following relative'>Following</h3>
      </div>
      <div className='mt-[16px] bg-[red] w-[100%] h-[1px]'></div>
      <div className='new-tweet-sec'>
        <div className=''>
          <div></div>
          <div className=''>
            <form action="">
            <textarea 
            name="" 
            id="" 
            cols="" 
            rows="5" 
            className='mt-[5px] bg-transparent outline-none text-2xl w-[100%]' placeholder="What's happening?" 
            value={textValue} 
            onChange={(e)=>{
              setTextvalue(e.target.value)
            }}></textarea>
            <div className='flex justify-between'>
              <div className='flex'>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-7 fill-[blue]"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-7 fill-[blue]"><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-7 fill-[blue]"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-7 fill-[blue]"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>
              </div>
              <div className='bg-[blue] p-2 px-6 rounded-full cursor-pointer'>
                <p 
                className='font-bold'
                onClick={handleSubmit} >Tweet</p>
              </div> 
              </div>
            </form>
              
          </div>
        </div>
      </div>
      <div className='mt-[16px] bg-[red] w-[100%] h-[1px]'></div>
      {/* <Post displayName='Segun Ojo' username='@segun0x' date='May 3'/>
      <Post displayName='John Doe' username='@johndoe' date='March 4'/>
      <Post displayName='Mercy James' username='@mercy0xx' date='June 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/>
      <Post displayName='Michael John' username='@mickyy' date='Dec 12'/> */}
      {tweets.map(({tweet})=> {
          return  <Post displayName='John Doe' username='@johndoe' date='March 4' twe={tweet} key={tweet}/>
      })}
    </div>
  )
}

export default MainContent
