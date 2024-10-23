
const ReadingTime = ({reading}) => {
    return (
        <div className="border border-blue-400 p-2 bg-blue-100 rounded-2xl my-3">
            <h4
                className="text-xs lg:text-xl font-semibold text-center font-mono text-blue-600"
            >Total Reading Time: {reading} Minute</h4>
       
        </div>
    );
};

export default ReadingTime;