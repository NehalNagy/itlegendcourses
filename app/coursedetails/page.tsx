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
        {/* left side section */}
        <div className="w-full md:w-3/4">
          <div className="h-96 rounded-sm">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent />
            </Suspense>
          </div>
          {/* icons section */}
          <div className="flex items-center gap-2 mt-4 my-5">
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2"
              title="Table of Contents"
            >
              <TableOfContents className="text-black" />
            </Button>
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2"
              title="Comments"
            >
              <MessageSquareText className="text-black" />
            </Button>
            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2"
              title="Ask a Question"
            >
              <MessageCircleQuestionMark className="text-black" />
            </Button>

            <Button
              className="bg-accent hover:bg-accent/80 rounded-full p-2"
              title="Leaderboard"
            >
              <Podium className="text-black" />
            </Button>
          </div>
          {/* Course Details Section */}
          <div className="w-3/4">
            <h2 className="font-bold my-3">Course Details</h2>
            <Card className="rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] ">
              <CardContent>
                <div className="grid grid-cols-2 gap-1 ">
                  <div className="grid grid-cols-2 gap-1 ">
                    <div>
                      <Clock size="20" className="inline" />
                      <span className="font-bold"> Duration:</span>
                    </div>
                    <div>3 weeks</div>
                    <div className="mt-3">
                      <LibraryBig size="20" className="inline" />
                      <span className="font-bold"> Lessions:</span>
                    </div>
                    <div className="mt-3">8</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 ">
                    <div>
                      <Users size="20" className="inline" />
                      <span className="font-bold"> Enrolled:</span>
                    </div>
                    <div>65 Students</div>

                    <div className="mt-3">                     
                      <Globe size="20" className="inline" />
                      <span className="font-bold"> Language:</span>
                    </div>
                    <div className="mt-3">English</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* right side section */}
        <div className="w-full md:w-1/4">
          <h2 className="font-bold">Topics for This Course</h2>
        </div>
        {/* Comments Section */}
        <div className="w-full md:w-3/4">
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
