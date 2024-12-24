import person from "../../../../assets/pd-person.jpg";
import Button from "../../../common/Button";

const Courses = () => {
  return (
    <div className="container py-8 md:py-28 bg-card">
      <div className="">
        <div className="pb-8 md:pb-16 text-center flex flex-col gap-5 text-primary">
          <h1 className="font-bold text-xl xl:text-5xl text-center  uppercase ">
            We provide alot of courses
          </h1>
          <span className="text-secondary text-xl">Explore a wide range of learning opportunities with us!</span>
        </div>

        <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-5 ">
          {[...Array(4).keys()].map((course) => (
            <div
              key={course}
              className="bg-background p-3 rounded-md border border-border-primary"
            >
              <img className="rounded-md w-full h-52" src={person} alt="course" />
              <div className="text-primary py-3">
                <h2 className="font-medium text-xl">Basic Marketing</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum provident! Commodi rem at quia veritatis sed distinctio reiciendis doloribus?</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
          <Button className="w-40">Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
