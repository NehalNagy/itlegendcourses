import BreadcrumbComp from "./breadcrumbComp"


export default function Header(title: string, breadcrumbItems: { text: string; path: string }[]) {
  return (
    <header>
      {BreadcrumbComp(breadcrumbItems)}
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}