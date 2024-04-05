import Chat from "@/components/Chat";
import PDFReader from "@/components/PDFReader";
import React from "react";
import ChatPage from "@/components/ChatPage";
import Sidebar from "@/components/Sidebar";
const page = () => {
  return (
    <div className="flex flex-row">
      <div className="overflow-hidden">
        <Sidebar />
      </div>

      <div className="mx-auto w-full">
        <Chat />
      </div>

      {/* <Chat />
      <ChatPage />
      <PDFReader pdf_url="" /> */}
    </div>
  );
};

export default page;
