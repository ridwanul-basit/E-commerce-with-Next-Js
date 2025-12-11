'use client'
import Filter from "@/components/Application/Website/Filter";
import Shorting from "@/components/Application/Website/Shorting";
import WebsiteBreadCrumb from "@/components/Application/Website/WebsiteBreadCrumb";
import { WEBSITE_SHOP } from "@/routes/WebsiteRoute";
import React, { useState } from "react";

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
  return (
    <div>
      <WebsiteBreadCrumb props={breadcrumb} />
      <section className="lg:flex lg:px-32 px-4 my-20 ">
        <div className="w-72 me-4">
          <div className="sticky top-0 bg-gray-50 p-4 rounded">
            <Filter />
          </div>
        </div>
        <div className="lg:w-[calc(100%-18rem)]">
          <Shorting    
          limit={limit}
          setLimit={setLimit}
          />
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
