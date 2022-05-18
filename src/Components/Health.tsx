import blogImg1 from "../Boom/blog-9.jpg";
function Health() {
  const data = [
    {
      img: blogImg1,
      category: "Health",
      date: "March 2020",
      headline: "Childhood survivors and later health researchers",
    },
    {
      img: blogImg1,
      category: "Health",
      date: "March 2020",
      headline: "Childhood survivors and later health researchers",
    },
    {
      img: blogImg1,
      category: "Health",
      date: "March 2020",
      headline: "Childhood survivors and later health researchers",
    },
    {
      img: blogImg1,
      category: "Health",
      date: "March 2020",
      headline: "Childhood survivors and later health researchers",
    },
    {
      img: blogImg1,
      category: "Health",
      date: "March 2020",
      headline: "Childhood survivors and later health researchers",
    },
  ];
  return (
    <div className="px-2 md:px-3 lg:px-0 my-5 h-full w-full ">
      <h1 className="font-bold">Health</h1>
      <div className="grid grid-cols-1 md:grid-cols-5  gap-4 mt-5">
        {data?.map((item) => (
          <div className="grid gap-2 w-full">
            <img src={item?.img} alt="" className="rounded md:h-40 w-full" />
            <p className="text-sm font-bold text-gray-400">
              <span className=" text-green-700 mr-2">{item?.category}</span>
              {item?.date}
            </p>
            <h1 className="font-bold text-lg">{item?.headline}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Health;
