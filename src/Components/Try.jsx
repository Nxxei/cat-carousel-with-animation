const Try = ({ cat }) => {
  return (
    <>
      <div className="mb-4">
        <span className="text-white text-2xl ">Cat Information Card</span>
      </div>
      <div className="flex flex-col rounded-2xl border-white ">
        <img
          className="rounded-t-xl w-90 h-80 object-cover"
          src={cat.imageUrl}
        />
        <div className="p-8 border-white border-t rounded-b-2xl bg-neutral-800">
          <div className="text-white text-xl">
            <div className="flex">
              <div className="w-30">Name</div>
              <div>{cat.name}</div>
            </div>
            <div className="flex">
              <div className="w-30">Age</div>
              <div>{cat.age}</div>
            </div>
            <div className="flex">
              <div className=" w-30">Breed </div>
              <div>{cat.breed}</div>
            </div>
            <div className="flex">
              <div className="w-30">Location </div>
              <div>{cat.location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Try;
