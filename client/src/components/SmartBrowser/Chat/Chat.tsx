"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "./Message";
import { SendMessage } from "./SendMessage";

export const Chat = () => {
  return (
    <div className="w-[400px] h-[400px] border border-border rounded-sm">
      <div className="flex flex-col flex-grow w-full h-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <ScrollArea>
          <Message isMine text="LoremIpsum" />
          <Message isMine={false} text="Lorem Ipsum" />
          <Message isMine={false} text="Lorem Ipsum" />

          <Message isMine={false} text="Lorem Ipsum" />
          <Message isMine={false} text="Lorem Ipsum" />
          <Message isMine={false} text="Lorem Ipsum" />
          <Message isMine={false} text="Lorem Ipsum" />
        </ScrollArea>

        <SendMessage />
      </div>
    </div>
  );
};
