import React from "react";
import MapArea from "./style";
export default function ContactMap() {
  return (
    <MapArea>
      <img src="/image/home-services/contact-map.png" alt="content"/>
      <MapArea.Card className="card-1">
        <p>4 G-ral. Traian Mosoiu Street, A Building, 2nd</p>
      </MapArea.Card>
      <MapArea.Card className="card-2">
        <p>Entrance, Flat 30, Cluj-Napoca, Romania</p>
      </MapArea.Card>
    </MapArea>
  );
}
