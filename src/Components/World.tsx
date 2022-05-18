import blogImg1 from "../Boom/blog-14.jpg";
import blogImg5 from "../Boom/blog-3.jpg";
function World() {
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
  ];
  return (
    <div className="px-2 md:px-3 lg:px-0 my-5 h-full w-full ">
      <h1 className="font-bold">World</h1>
      <div className="grid grid-cols-1 md:grid-cols-4  md:gap-6 mt-5">
        <div className="col-span-2">
          <div className="grid gap-6 w-full">
            <img src={blogImg5} alt="" className="rounded h-full w-full" />
            <p className="text-sm font-bold text-gray-400">
              <span className=" text-green-700 mr-2">Politics</span>
              feb 2022
            </p>
            <h1 className="font-bold text-lg">
              Democratic's chief executive: Interpreting the consitution and
              defining the future
            </h1>
            <h1>
              My visual universe is surrealistic, colorful and dark at the same
              time.
            </h1>
          </div>
        </div>
        <div className="md:col-span-2 w-full	">
          <div className="grid md:grid-cols-2  gap-5">
            {data?.map((item) => (
              <div className="grid gap-2 w-full">
                <img src={item?.img} alt="" className="rounded h-full w-full" />
                <p className="text-sm font-bold text-gray-400">
                  <span className=" text-green-700 mr-2">{item?.category}</span>
                  {item?.date}
                </p>
                <h1 className="font-bold text-lg">{item?.headline}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default World;
