'use client'
import Filter from "@/components/Application/Website/Filter";
import Shorting from "@/components/Application/Website/Shorting";
import WebsiteBreadCrumb from "@/components/Application/Website/WebsiteBreadCrumb";
import { WEBSITE_SHOP } from "@/routes/WebsiteRoute";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const breadcrumb = {
  title: "Shop",
  links: [
    {
      label: "Shop",
      href: WEBSITE_SHOP,
    },
  ],
};

const ShopPage = () => {
  const [limit,setLimit] = useState(9)
  const [sorting, setSorting] = useState("default_sorting")
  return (
    <div>
      <WebsiteBreadCrumb props={breadcrumb} />
      <section className="lg:flex lg:px-32 px-4 my-20 ">
        <div className="w-72 me-4">
          <div className="sticky top-0 bg-gray-50 p-4 rounded">
            <Filter />
          </div>
        </div>
       
       <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


        <div className="lg:w-[calc(100%-18rem)]">
          <Shorting    
          limit={limit}
          setLimit={setLimit}
          sorting={sorting}
          setSorting={setSorting}
          />
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
