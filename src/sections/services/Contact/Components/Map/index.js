import React from 'react'
import Image from 'next/image'
 import MapArea  from "./style"
 import mapImage from '~image/home-services/contact-map.png'
export default function ContactMap(){
return(
<MapArea>
    <Image src={mapImage} alt="map-image" placeholder="blur"/>
    <MapArea.Card className="card-1">
        <p>4 G-ral. Traian Mosoiu Street, A Building, 2nd</p>
    </MapArea.Card>
    <MapArea.Card className="card-2">
        <p>Entrance, Flat 30, Cluj-Napoca, Romania</p>
    </MapArea.Card>
</MapArea>
)
}