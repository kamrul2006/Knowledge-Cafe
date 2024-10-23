
import { useEffect, useState } from "react";
import './App.css'
import Articles from './Utilities/Article/Articles'
import BookMark from './Utilities/BookMark/BookMark'

function App() {

  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, [])

  const [bkmark, setBkmark] = useState([])
  const HandleAddToBookmark = artical => setBkmark([...bkmark, artical])

  const [reading, setReading] = useState(0)
  const HandleReading = (reading_time) => {
    setReading([parseInt(reading) + reading_time])
  }
  console.log(reading)
  return (
    <>
      {/* --------------------header----------------- */}
      <div className='flex items-center justify-between px-4 py-2'>
        <h1 className="text-xl lg:text-3xl font-bold ">
          Knowledge Cafe
        </h1>
        <img className='w-10 lg:w-16 border border-red-500 rounded-full' src="./src/assets/profile.png" />
      </div>
      <hr />

      {/* --------------------Article----------------- */}

      <div className='grid grid-cols-3 gap-2 mt-11 px-2 lg:px-5'>
        <div className='col-span-2 p-2 lg:p-4  border border-gray-200 rounded-xl bg-orange-50'>
          {
            articles.map(artical => <Articles key={artical.id}
              artical={artical}
              HandleReading={HandleReading}
              HandleAddToBookmark={HandleAddToBookmark}
            ></Articles>)
          }
        </div>

        {/* -----------Bookmark-------------- */}

        <div className='col-span-1 p-2 lg:p-4 border border-gray-200 rounded-xl bg-orange-50'>
          <BookMark reading={reading} bkmark={bkmark}></BookMark>
        </div>
      </div>



    </>
  )
}

export default App


