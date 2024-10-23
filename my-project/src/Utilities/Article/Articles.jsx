
const Articles = () => {
    return (
        <div>
            <div className="border rounded-lg border-emerald-200 p-2">
                <img className="mb-2 rounded-md" src="../../../src/assets/1.jpg" alt="" />
                <hr />
                <h4 className="font-bold lg:text-2xl text-left">How to get your first job as a self-taught programmer</h4>

                <div className="flex items-center justify-between">
                         <p className="text-xs text-left  text-gray-400">#beginners  #programming</p>
                <a className="underline text-purple-600 text-xs font-bold " href="">Mark As Read</a>
                </div>
            </div>

        </div>

    );
};

export default Articles;