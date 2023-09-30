import { Information } from "@/components/SmartBrowser/Information";
import { Map } from "@/components/SmartBrowser/Map";

export default function SmartBrowserPage() {
  return (
    <div>
      <Information />
      <div className="flex">
        <Map />
      </div>
    </div>
  );
}
