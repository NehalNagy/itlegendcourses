import { lessonItemBadgeType } from "@/lib/types";
import { FileText, LockKeyhole } from "lucide-react";

export default function LessonItem({
  title,
  isLocked,
  badges,
}: {
  title: string;
  isLocked: boolean;
  badges?: lessonItemBadgeType[];
}) {
  return (
    <div className="flex flex-row gap-2 py-3 border-b border-border w-full justify-between items-center">
      
      <div ><FileText size={16} className="inline me-2"/>{title}</div>

      <div className="flex gap-2">
        {badges?.map((badge) => (
          <span
            key={badge.badgeTitle}
            className={`px-2 py-1 text-xs font-semibold rounded-full`}
            style={{ backgroundColor: badge.badgeColor }}
          >
            {badge.badgeTitle}
          </span>
        ))}
      </div>
      <div >{isLocked && <LockKeyhole size={16}/>}</div>
    </div>
  );
}
