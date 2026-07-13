import Header from "@/components/custom/header";
import VideoComponent from "@/components/custom/video-component";

import { breadcrumbItemType } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import {
  Clock,
  Globe,
  LibraryBig,
  MessageCircleQuestionMark,
  MessageSquareText,
  Podium,
  TableOfContents,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import LessonCard from "@/components/course-content/lesson-card";

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
const courseProgress = 50;
export default function CourseDetails() {
  return (
    <>
      <Header title={pageTitle} breadcrumbItems={breadcrumbItems} />
      <div className="container mx-auto flex flex-wrap mt-3 ">
        {/* left side section */}
        <div className="w-full md:w-2/3">
          <div className="h-96 rounded-sm">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent />
            </Suspense>
          </div>
          {/* icons section */}
          <div className="flex items-center gap-2 mt-4 my-5">
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2 cursor-pointer"
              title="Table of Contents"
            >
              <TableOfContents className="text-black" />
            </Button>
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2 cursor-pointer"
              title="Comments"
            >
              <MessageSquareText className="text-black" />
            </Button>
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2 cursor-pointer"
              title="Ask a Question"
            >
              <MessageCircleQuestionMark className="text-black" />
            </Button>

            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2 cursor-pointer"
              title="Leaderboard"
            >
              <Podium className="text-black" />
            </Button>
          </div>
          {/* Course Details Section */}
          <div className="">
            <h2 className="font-bold my-3">Course Details</h2>
            <Card className="rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <CardContent>
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="grid grid-cols-2 gap-1 gap-y-3 ">
                    <div>
                      <Clock size="20" className="inline" />
                      <span className="font-bold"> Duration:</span>
                    </div>
                    <div>3 weeks</div>
                    <Separator className="col-span-2" />
                    <div>
                      <LibraryBig size="20" className="inline" />
                      <span className="font-bold"> Lessions:</span>
                    </div>
                    <div>8</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 gap-y-3 ">
                    <div>
                      <Users size="20" className="inline" />
                      <span className="font-bold"> Enrolled:</span>
                    </div>
                    <div>65 Students</div>
                    <Separator className="col-span-2" />
                    <div>
                      <Globe size="20" className="inline" />
                      <span className="font-bold"> Language:</span>
                    </div>
                    <div>English</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* right side section */}

        <div className=" w-full md:w-1/3">
          {/* progress bar section */}
          <div className="mb-10">
            <div className="flex items-center">
              <h2 className="font-bold">Topics for This Course</h2>
            </div>
            <div className="mt-10 px-1 ">
              <div className="relative pt-8">
                <div
                  className="absolute bottom-3 flex -translate-x-1/2 flex-col items-center"
                  style={{ left: `${courseProgress}%` }}
                >
                  <div className="rounded-full border-2 p-2 border-grey-50">
                    You
                  </div>
                
                  <div className="mt-1 w-2 h-2 rotate-180 bg-border [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
                </div>
                <Progress
                  value={courseProgress}
                  className="[&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-track]]:bg-muted [&_[data-slot=progress-indicator]]:bg-accent"
                />

                <p
                  className="absolute top-full -translate-x-1/2 pt-2 text-sm font-semibold text-dark-grey"
                  style={{ left: `${courseProgress}%` }}
                >
                  {courseProgress}%
                </p>
              </div>
            </div>
          </div>


          {/* Lesson List Section */}
          <LessonCard lessonTitle="Lesson1" lessonDescription="lesson 1 is about..."/>
        </div>
        {/* Comments Section */}

        <div className="w-full md:w-2/3">
          <h2 className="font-bold my-3">Comments</h2>
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
            <Textarea
              id="comment"
              className="h-52 focus-within:shadow-[0_0_15px_rgba(0,0,0,0.1)] focus-visible:ring-0 focus-visible:border-0"
              aria-label="Write a comment"
              placeholder="Write a comment..."
            />
            <Button className="w-fit bg-accent p-6 rounded-sm text-black hover:bg-accent/80">
              Submit Review
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
