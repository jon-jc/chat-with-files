/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AEFgoVUxuDR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CornerLeftDown, FileIcon, MicIcon, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Message } from "ai";
import ChatBubble from "./ui/chat-bubble";

export default function Chat() {
  const messages: Message[] = [
    { role: "assistant", content: "Hello! How can I help you today?", id: "1" },
    { role: "user", content: "I need help with my PDF file", id: "2" },
  ];
  const sources = ["I am sources 1", "source2", "source3", "source4"];
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
            <div className="rounded-2xl border h-[75vh] flex flex-col justify-between w-full">
              <div className="p-6 overflow-auto w">
                {messages.map(({ id, role, content }: Message, index) => (
                  <ChatBubble
                    key={id}
                    role={role}
                    content={content}
                    // Start from the third message of the assistant
                    sources={role !== "assistant" ? [] : sources}
                  />
                ))}
              </div>
            </div>
            <Image
              alt="User"
              className="rounded-full"
              height="40"
              src="/pdfReader.png"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="AI"
              className="rounded-full"
              height="40"
              src="/pdfReader.png"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </div>
        </div>
        <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
          <Label className="sr-only" htmlFor="message">
            Message
          </Label>
          <Textarea
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            id="message"
            placeholder="Type your message here..."
          />
          <div className="flex items-center p-3 pt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MicIcon className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
              </Tooltip>
              <Button className="ml-auto gap-1.5" size="sm" type="submit">
                Send Message
                <CornerLeftDown className="size-3.5" />
              </Button>
            </TooltipProvider>
          </div>
        </form>
      </div>
    </div>
  );
}
