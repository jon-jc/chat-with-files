"use client";
import React from "react";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

import { formattedText } from "@/lib/utils";

const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

interface ChatBubbleProps extends Partial<Message> {
  sources: string[];
}

export function ChatBubble({
  role = "assistant",
  content,
  sources,
}: ChatBubbleProps) {
  if (!content) {
    return null;
  }

  const wrappedMessage = convertNewLines(content);
  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role === "assistant"
                ? "rounded-xl bg-slate-100"
                : "rounded-xl bg-slate-100"
            }
          >
            {role === "assistant" ? "Assistant" : "User"}
          </CardTitle>
        </CardHeader>
        <CardContent>{wrappedMessage}</CardContent>
        <CardFooter>
          <CardDescription className="w-full">
            {sources && sources.length ? (
              <Accordion type="single" collapsible className="w-full">
                {sources.map((source, index) => (
                  <AccordionItem value={`source-${index}`} key={index}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <ReactMarkdown>{formattedText(source)}</ReactMarkdown>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ChatBubble;
