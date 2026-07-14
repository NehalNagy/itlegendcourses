export type breadcrumbItemType = {
  text: string;
  path: string;
  
};

export type studentType={
  name:string;
  email:string;
  phone:string;
  image:string;
}

export type commentType={
  student:studentType;
  date:string;
  commentContent:string;

}
export type lessonItemBadgeType={
  badgeTitle:string;
  badgeColor:string;
}

export type lessonItemType={
  id:number;
  title:string;
  isLocked:boolean;
  badges?:lessonItemBadgeType[];
}