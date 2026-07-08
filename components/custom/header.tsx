import { breadcrumbItemType } from "@/lib/types";
import BreadcrumbComp from "./breadcrumbComp";

export default function Header({
  title,
  breadcrumbItems,
}: {
  title: string;
  breadcrumbItems: breadcrumbItemType[];
}) {
  return (
    <header className="p-4 bg-secondary w-full">
      <BreadcrumbComp items={breadcrumbItems} />
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
