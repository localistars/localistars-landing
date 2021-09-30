import React from "react";
// import { Images } from "~data";
import Image from "next/image";
import HeroImageGroup from "./style";
import HeroImageOne from "~image/it-services/welcome-woman-l3.png";
import HeroImageTwo from "~image/it-services/welcome-man-l3.png";
import HeroImageThree from "~image/it-services/welcome-shape-l3.png";
import HeroImageFour from "~image/it-services/welcome-shape-l3-2.png";
export default function ImageGroup() {
  return (
    <HeroImageGroup>
      <HeroImageGroup.ImagesList>
        <Image src={HeroImageOne} alt="heroimg" placeholder="blur" />
        <HeroImageGroup.ImageOne>
          <Image src={HeroImageTwo} alt="heroimg" placeholder="blur" />
        </HeroImageGroup.ImageOne>
        <HeroImageGroup.ImageTwo>
          <Image src={HeroImageThree} alt="heroimg" placeholder="blur" />
        </HeroImageGroup.ImageTwo>
        <HeroImageGroup.ImageThree>
          <Image src={HeroImageFour} alt="heroimg" placeholder="blur" />
        </HeroImageGroup.ImageThree>
      </HeroImageGroup.ImagesList>
    </HeroImageGroup>
  );
}
