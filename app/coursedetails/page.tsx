import Header from "@/components/custom/header";
import VideoComponent from "@/components/custom/video-component";

import { breadcrumbItemType } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

let breadcrumbItems: breadcrumbItemType[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Courses",
    path: "/courses",
  },
  {
    text: "Course Details",
    path: "/courses/course-details",
  },
];

const pageTitle = "Starting SEO as your Home";
export default function CourseDetails() {
  return (
    <>
      <Header title={pageTitle} breadcrumbItems={breadcrumbItems} />
      <div className="container-fluid flex flex-wrap p-4 ">
        <div className="w-full md:w-3/4">
          <div className="h-96 rounded-sm">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent />
            </Suspense>
          </div>
          <div>Icons</div>
          <div>
            <h2 className="font-bold">Course Materials</h2>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="font-bold">Topics for This Course</h2>
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="font-bold">Comments</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-dark-grey">John Doe</p>
                <p className="text-sm text-light-grey">2023-10-01</p>
                <p className="text-light-grey">
                  This is a comment from a student.
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-dark-grey">John Doe</p>
                <p className="text-sm text-light-grey">2023-10-01</p>
                <p className="text-light-grey">
                  This is a comment from a student.
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-dark-grey">John Doe</p>
                <p className="text-sm text-light-grey">2023-10-01</p>
                <p className="text-light-grey">
                  This is a comment from a student.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid w-full gap-2">
            <Textarea className="h-52" placeholder="Write a comment..." />
            <Button className="w-fit bg-accent p-6 rounded-sm">
              Submit Review
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
