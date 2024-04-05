/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jWQ41wpUFle
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  BellIcon,
  BookIcon,
  FileCode,
  FileIcon,
  Package2Icon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden border-r lg:block dark:border-gray-850">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <BookIcon className="h-6 w-6" />
          <span className="">FileMagic</span>
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="flex items-center gap-4 px-4">
          <Button className="h-8 w-8 rounded-full" size="icon" variant="ghost">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h2 className="font-bold text-lg">Chats</h2>
          <Button className="ml-auto" variant="outline">
            New PDF file
          </Button>
        </div>
        <div className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <FileIcon className="h-4 w-4" />
            Chats
          </Link>
        </div>
      </div>
    </div>
  );
}
