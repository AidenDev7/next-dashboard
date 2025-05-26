import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const page = () => {
  return (
    <div className="max-w-[300px] mx-auto">
      <h2 className="text-2xl p-10 text-center">Register</h2>

      <input type="text" className="border block mb-3 w-full" />
      <input type="text" className="border block mb-3 w-full" />
      <Link href="/dashboard">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default page;
