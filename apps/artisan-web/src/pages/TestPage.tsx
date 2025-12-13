import React from "react";
import { Button } from "@repo/ui/button/Button";
export const TestPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-start gap-6 font-semibold">
          <Button size={"sm"} className="">
            <span>Button sm</span>
          </Button>
          <Button size={"md"}>
            <span>Button md</span>
          </Button>
          <Button size={"md"} variant={"link"}>
            <span>Button md</span>
          </Button>
        </div>
      </div>
    </>
  );
};
