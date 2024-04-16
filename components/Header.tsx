import { MessageSquare, Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const HeaderTop = () => {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <Package2 className="w-6 h-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <form className="mx-4 flex-1">
        <Input
          className="w-full md:w-[400px] lg:w-[500px] xl:w-[600px]"
          placeholder="Search documents..."
          type="search"
        />
      </form>
      <Button className="mr-2 md:mr-4" variant="outline">
        Upload
      </Button>
      <Button className="rounded-full ml-auto" size="icon" variant="ghost">
        <Badge className="translate-x-2">
          <span>3</span>
        </Badge>
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Open messages</span>
      </Button>
    </header>
  );
};

export default HeaderTop;
