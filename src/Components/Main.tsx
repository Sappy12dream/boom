import blog1 from "../Boom/blog-5.jpg";
import blog2 from "../Boom/blog-6.jpg";
import blog3 from "../Boom/blog-7.jpg";
import blog4 from "../Boom/blog-8.jpg";
function Main() {
  const latest = [
    {
      category: "Health",
      date: "feb 2020",
      headline: "How much dou you know about covid-19?",
      img: blog1,
    },
    {
      category: "Business",
      date: "feb 2020",
      headline: "Uber and lyft are finally available in New York",
      img: blog2,
    },
    {
      category: "Health",
      date: "feb 2020",
      headline: "Top 5 pros and cons of healthy life style",
      img: blog3,
    },
  ];
  const Business = [
    {
      category: "Business",
      headline: "Uber and lyft are finally available in New York",
      date: "feb 2020",
    },
    {
      category: "Business",
      headline: "Mayors agree, Congress should invest in affordable housing",
      date: "feb 2020",
    },
    {
      category: "Business",
      headline: "Successfull entrepreneurs recognize when to move on",
      date: "feb 2020",
    },
  ];
  return (
    <div className=" px-2 md:px-3 lg:px-0 my-2 md:my-5 md:gap-16 grid grid-cols-1 md:grid-cols-4 w-full h-full">
      <div className="grid my-6 w-full">
        <h1 className="font-bold">Latest News</h1>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 mt-5">
          {latest?.map((item) => (
            <div className="grid gap-2 w-full">
              <img
                src={item?.img}
                alt=""
                className="rounded h-full md:h-40 w-full"
              />
              <p className="text-sm font-bold text-gray-400">
                <span className=" text-green-700 mr-2">{item?.category}</span>
                {item?.date}
              </p>
              <h1 className="font-bold text-lg">{item?.headline}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 mt-5">
        <h1 className="font-bold">Trending</h1>
        <div className="grid gap-4 w-full mt-5">
          <img src={blog4} alt="" className="rounded h-full w-full" />
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
      <div className="mt-5">
        <h1 className="font-bold">Business</h1>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 mt-5">
          {Business?.map((item) => (
            <div className="grid gap-2 w-full">
              <h1 className="font-bold text-lg">{item?.headline}</h1>
              <p className="text-sm font-bold text-gray-400">
                <span className=" text-green-700 mr-2">{item?.category}</span>
                {item?.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
