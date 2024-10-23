
import './App.css'
import Articles from './Utilities/Article/Articles'
import BookMark from './Utilities/BookMark/BookMark'

function App() {

  return (
    <>
      <div className='flex items-center justify-between px-4 pb-2'>
        <h1 className="text-xl lg:text-3xl font-bold ">
          Knowledge Cafe
        </h1>
        <img className='w-10 lg:w-16 border border-red-500 rounded-full' src="./src/assets/profile.png" />
      </div>
      <hr />

      <div className='grid grid-cols-3 gap-2 mt-11'>
        <div className='col-span-2 p-2 lg:p-4  border border-gray-200 rounded-xl'>
          <Articles></Articles>
        </div>

        <div className='col-span-1 p-2 lg:p-4 border border-gray-200 rounded-xl'>
         <BookMark></BookMark>
        </div>
      </div>



    </>
  )
}

export default App
