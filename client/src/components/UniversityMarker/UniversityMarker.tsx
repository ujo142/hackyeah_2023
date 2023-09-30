import { InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface UniversityMarkerProps {
  position: google.maps.LatLng | google.maps.LatLngLiteral;
  name: string;
  desc: string;
  src: string;
}

export const UniversityMarker = ({
  position,
  name,
  desc,
  src,
}: UniversityMarkerProps) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <Marker position={position} label="A" onClick={() => setIsInfoOpen(true)}>
      {isInfoOpen && (
        <InfoWindow onCloseClick={() => setIsInfoOpen(false)}>
          <div className="flex flex-col gap-2 items-center">
            <Image src={src} alt="" width={100} height={50} />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{desc}</p>
            <Button>Więcej informacji</Button>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};
