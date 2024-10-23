

const Mark = ({ mark }) => {
    return (
        <div className="text-xs lg:text-xl border border-gray-400 m-2 lg:m-5 p-1 text-center font-semibold rounded-md bg-slate-50">
            <h4>{mark.title}</h4>
        </div>
    );
};

export default Mark;