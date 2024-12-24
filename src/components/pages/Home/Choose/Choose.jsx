import choose from "../../../../assets/choose.png";

const Choose = () => {
  return (
    <div className="container bg-card py-8 md:py-28">
      <div className="pb-8 md:pb-16 text-center flex flex-col gap-5 text-primary">
        <h1 className="font-bold text-xl xl:text-5xl text-center  uppercase ">
          Why Choose Us
        </h1>
        <span className="text-secondary text-xl">
          Education can Change Your Life! So what are you waiting for?
        </span>
      </div>

      <div className="md:flex justify-between items-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            "Trending Courses",
            "Books Liberary",
            "Certified Teachers",
            "Certified Courses",
            "Online E-Books",
            "Guaranteed Career",
            "Clean Enveronment",
            "Big playground & area",
            "Arrange Rooms"
          ].map((res) => (
            <div key={res} className="uppercase bg-background h-16 flex flex-col items-center justify-center p-5 rounded-md font-medium">
              <span>{res}</span>
            </div>
          ))}
        </div>
        <div>
          <img src={choose} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
