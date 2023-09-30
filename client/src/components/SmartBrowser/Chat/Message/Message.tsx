import { cn } from "@/lib/utils";

interface MessageProps {
  isMine: boolean;
  text: string;
}

export const Message = ({ isMine, text }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mt-2 space-x-3 ml-auto justify-end p-2",
        isMine && "mr-auto justify-start"
      )}
    >
      <div
        className={cn(
          "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg",
          !isMine && "",
          isMine && "bg-gray-400 rounded-l-none rounded-r-lg rounded-bl-lg"
        )}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
