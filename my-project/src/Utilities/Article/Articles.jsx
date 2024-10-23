

const Articles = ({ artical, HandleReading,HandleAddToBookmark}) => {

    // console.log(artical)
    console.log(HandleAddToBookmark)

    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = artical
    const readingTime = parseFloat(reading_time)


    return (

        <div className="border rounded-lg border-emerald-400 p-5 my-3  bg-emerald-50">
            <img className="mb-2 mx-auto rounded-md lg:w-full" src={cover} alt="" />
            <hr />

            <div className="my-1 lg:my-5 flex items-center justify-between ">

                {/* NAme And Authore */}
                <div className="flex items-center gap-1 lg:gap-3">
                    <img className="w-8 lg:w-10 rounded-full" src={author_img} />
                    <div className="text-left">
                        <h4 className="text-sm font-bold">{author}</h4>
                        <p className="text-xs">{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 lg:gap-3">
                    <p className="text-xs lg:text-sm font-bold text-gray-500">{reading_time} min read</p>

                    <button onClick={() => HandleAddToBookmark(artical)} className="border border-sky-500 p-1 rounded-full"><img src="../../../src/assets/book.png" /></button>
                </div>

            </div>



            <h4 className="font-bold lg:text-2xl text-left">{title}</h4>




            <div className="lg:block flex items-center justify-between my-2">
                <div className="flex gap-2">
                    {hashtags.map((hash, idx) => <p key={idx} className="text-xs text-left  text-gray-400">#{hash}</p>)}
                </div>



                <button onClick={() => HandleReading(readingTime)} className="underline text-purple-600 text-xs lg:text-base lg:mt-3 font-bold " >Mark As Read</button>
            </div>
        </div>



    );
};

export default Articles;