"use client";
import React, { useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { UserButton } from "@clerk/nextjs";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="ml-4 mt-2">
        <UserButton />
      </div>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/ai-pdf-processing">
                AI & PDF Processing
              </HoveredLink>
              <HoveredLink href="/openai-integration">
                OpenAI Integration
              </HoveredLink>
              <HoveredLink href="/user-experience-design">
                User Experience Design
              </HoveredLink>
              <HoveredLink href="/accessibility">Accessibility</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="PDF AI Explorer"
                href="/"
                src="/pdfReader.png"
                description="Unlock the full potential of your PDFs with cutting-edge AI technology. Extract and analyze data effortlessly."
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
