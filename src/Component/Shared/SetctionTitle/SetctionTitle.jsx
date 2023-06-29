
const SetctionTitle = ({name,className}) => {
  console.log(className);
    return (
        <div className="w-full bg-[#1F1F1F] shadow-lg rounded-full flex justify-between items-center py-5 px-8 gap-3 ">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <button className={`py-2 ${className} px-8 border rounded-full font-semibold`}>
          View All
        </button>
      </div>
    );
};

export default SetctionTitle;