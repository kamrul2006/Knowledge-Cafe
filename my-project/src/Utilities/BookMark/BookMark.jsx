import Mark from "./mark";
import ReadingTime from "./ReadingTime";

const BookMark = ({reading, bkmark  }) => {
    // console.log(bkmark)
    // console.log(reading)
    return (
        <div>

            <div>
               <ReadingTime reading={reading}></ReadingTime>
            </div>

            <hr />

            <div className="border border-gray-100 py-2 my-2 bg-emerald-50 rounded-md">
                <h4 className="text-xs lg:text-2xl font-bold text-center font-serif">Total BookMarks :- {bkmark.length} </h4>
            </div>

            <div>
                {
                    bkmark.map(mark => <Mark key={mark.id} mark={mark}></Mark>)
                }

            </div>
        </div>
    );
};

export default BookMark;