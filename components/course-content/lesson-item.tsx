import { Badge } from "@/components/ui/badge";
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
        {badges?.map((badge) => {
          if (badge.badgeColor === "red") {
            return (
              <Badge key={badge.badgeTitle} variant="destructive">
                {badge.badgeTitle}
              </Badge>
            );
          }

          if (badge.badgeColor === "green") {
            return (
              <Badge
                key={badge.badgeTitle}
                className="bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
              >
                {badge.badgeTitle}
              </Badge>
            );
          }

          return <Badge key={badge.badgeTitle}>{badge.badgeTitle}</Badge>;
        })}
      </div>
      <div >{isLocked && <LockKeyhole size={16}/>}</div>
    </div>
  );
}
