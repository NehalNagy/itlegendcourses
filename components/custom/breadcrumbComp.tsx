import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbItemType } from "@/lib/types";

export default function BreadcrumbComp(items: breadcrumbItemType[]) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
          {(index !== items.length - 1 )?(
            <>
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href={item.path} />}>
                {item.text}
              </BreadcrumbLink>
            </BreadcrumbItem>
             <BreadcrumbSeparator />
             </>
             ): (
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold">{item.text}</BreadcrumbPage>
              </BreadcrumbItem>
             )}
            
            
          </React.Fragment>
        ))}
        
      </BreadcrumbList>
    </Breadcrumb>
    
  );
}
