import LessonItem from "./lesson-item";

export default function LessonCard({lessonTitle, lessonDescription}:{lessonTitle:string, lessonDescription:string}) {
    return (
        <LessonItem title="lesson1" isLocked={true}/>
    )
}