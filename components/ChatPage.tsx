/**
 * v0 by Vercel.
 * @see https://v0.dev/t/89Uci2jxt03
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BellIcon,
  FileIcon,
  MessageCirclePlus,
  Package2Icon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="grid min-h-screen items-start gap-4 lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <FileIcon className="h-4 w-4" />
                PDFs
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <FileIcon className="h-4 w-4" />
                Chats
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>New</CardTitle>
                <CardDescription>
                  Start a new chat or upload a PDF
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Button className="rounded-full" size="icon">
                  <MessageCirclePlus className="w-6 h-6" />
                  <span className="sr-only">New chat</span>
                </Button>
                <Button className="rounded-full" size="icon">
                  <UploadIcon className="w-6 h-6" />
                  <span className="sr-only">Upload PDF</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-gray-100/50 rounded-lg shadow-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-800/50"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">PDFs</h1>
            <Button className="ml-auto" size="sm">
              New chat
            </Button>
          </div>
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold">
              Introduction to Robotics.pdf
            </h3>
            <p className="text-xs text-gray-500 leading-none dark:text-gray-400">
              The field of robotics is rapidly growing, and this book provides a
              comprehensive introduction to the subject.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold">
              Organic Chemistry Notes.pdf
            </h3>
            <p className="text-xs text-gray-500 leading-none dark:text-gray-400">
              These notes cover the fundamental concepts of organic chemistry
              and are an invaluable resource for students.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold">
              History of Ancient Civilizations.pdf
            </h3>
            <p className="text-xs text-gray-500 leading-none dark:text-gray-400">
              This book delves into the history of ancient civilizations,
              exploring their achievements, culture, and legacy.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold">
              Mastering Python Programming.pdf
            </h3>
            <p className="text-xs text-gray-500 leading-none dark:text-gray-400">
              This comprehensive guide covers all aspects of Python programming,
              from the basics to advanced topics.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold">
              The Art of Photography.pdf
            </h3>
            <p className="text-xs text-gray-500 leading-none dark:text-gray-400">
              This book provides insights into the art and technique of
              photography, making it a must-read for aspiring photographers.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
