import React from 'react'
import Image from 'next/image'
import MapArea  from "./style"
import prefix from '~lib/prefix';

export default function ContactMap(){
    return(
    <MapArea>
        <img src={`${prefix}/image/home-services/contact-map.png`} alt="map-image"/>
        <MapArea.Card className="card-1">
            <p>4 G-ral. Traian Mosoiu Street, A Building, 2nd</p>
        </MapArea.Card>
        <MapArea.Card className="card-2">
            <p>Entrance, Flat 30, Cluj-Napoca, Romania</p>
        </MapArea.Card>
    </MapArea>
    )
}