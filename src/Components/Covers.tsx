import blogImg1 from "../Boom/blog-1.jpg";
import blogImg2 from "../Boom/blog-2.jpg";
import blogImg3 from "../Boom/blog-3.jpg";
import blogImg4 from "../Boom/blog-4.jpg";
function Covers() {
  const data = [
    {
      category: "Science",
      heading: "Here's what no one told you about science today",
      img: blogImg1,
    },
    {
      category: "Health",
      heading: "New molecules uncovered in small training lab",
      img: blogImg2,
    },
    {
      category: "Politic",
      heading: "This week's top stories about politics",
      img: blogImg3,
    },
    {
      category: "Business",
      heading: "Using instagram to promote your youtube video",
      img: blogImg4,
    },
  ];
  return (
    <div className="px-2 md:px-3 lg:px-0 my-6  gap-6 flex flex-col md:flex-row items-center w-full ">
      {data.map((item) => (
        <div className="flex gap-4">
          <img
            src={item?.img}
            alt=""
            width="100"
            height="100"
            className="rounded"
          />
          <div>
            <span className="text-green-700 font-bold text-sm">
              {item?.category}
            </span>
            <h1 className="font-bold">{item?.heading}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Covers;
