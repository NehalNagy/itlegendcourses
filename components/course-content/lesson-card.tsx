import { lessonItemType } from "@/lib/types";
import LessonItem from "./lesson-item";

export default function LessonCard({
  lessonTitle,
  lessonDescription,
  lessonItems,
}: {
  lessonTitle: string;
  lessonDescription: string;
    lessonItems?: lessonItemType[]
}) {
  return (
    <div className=" p-4 border border-border rounded-md mb-5">
      <div className="border-b border-border">
        <h3 className="font-bold text-lg">{lessonTitle}</h3>
        <p className="text-dark-grey py-3">{lessonDescription}</p>
      </div>
      {lessonItems?.map((item) => (
        <LessonItem key={item.id} title={item.title} isLocked={item.isLocked} badges={item.badges} />
      ))}
    </div>
  );
}
