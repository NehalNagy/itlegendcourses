export default function LessonItem({title, isLocked , badges }:{title: string, isLocked:boolean, badges?: string[]}) {
    return (
        <div className="flex flex-row gap-2 p-4 border border-border rounded-md">
            <div className="flex items-center">icon</div>
            <div className="flex items-center">{title}</div>

            <div className="flex items-center">badge</div>
            <div className="flex items-center">isLocked</div>

        </div>

    );
}