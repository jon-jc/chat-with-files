/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AEFgoVUxuDR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileIcon } from "lucide-react";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="border-b p-4 flex items-center gap-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <FileIcon className="w-6 h-6" />
            <h1 className="text-xl font-bold">Chat with PDFs</h1>
          </div>
        </Link>
        <Button size="sm">Upgrade</Button>
      </header>
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-gray-100 flex-1 p-4 text-sm dark:bg-gray-800">
              Hi there! How can I assist you today?
            </div>
            <img
              alt="User"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </div>
          <div className="flex items-center gap-4">
            <img
              alt="AI"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="rounded-xl bg-gray-100 flex-1 p-4 text-sm dark:bg-gray-800">
              I've found the information you're looking for. Here is the PDF
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur euismod..."
            </div>
          </div>
        </div>
        <form className="flex items-end gap-4">
          <Input
            className="flex-1 min-h-[40px]"
            placeholder="Type a message..."
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
