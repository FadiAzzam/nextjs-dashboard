import React from "react";
import AcmeLogo from "./acme-logo";
import Link from "next/link";

import { HeaderLinks } from "./dashboard/nav-links";

const header = () => {
  return (
    <div className="w-full bg-gray-50 p-3 flex">
      <div>
        <Link className="" href="/">
          <AcmeLogo />
        </Link>
      </div>
      <div className="flex justify-end flex-1 gap-3">
        <HeaderLinks />
      </div>
    </div>
  );
};

export default header;
