import Header from "@/components/custom/header";
const breadcrumbItems = [
    {
        text: "Home",
        path: "/",
    },{
        text:"Courses",
        path:"/courses"
    },
    {
        text:"Course Details",
        path:"/courses/course-details"
    }
];
 const pageTitle = "Welcome to IT Legend Courses";
export default function Home() {
 
  return (
    <div >
      <h1 className="bg-accent">Hi</h1>
      {Header(pageTitle, breadcrumbItems)}
     </div>
  );
}
