import { Chat } from "@/components/SmartBrowser/Chat";
import { Information } from "@/components/SmartBrowser/Information";
import { Map } from "@/components/SmartBrowser/Map";

export default function SmartBrowserPage() {
  return (
    <div className="flex flex-col gap-8">
      <Information />
      <div className="flex w-full justify-around">
        <Map />
        <Chat />
      </div>
    </div>
  );
}
