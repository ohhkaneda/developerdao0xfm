import { React } from "react";
import Image from "next/image";
import BackgroundImg from "../../img/dddddddddddd.png";
import { black_logo, black_arrow } from "../../img/index.js";

import img1 from "../../img/playlist/1.webp";
import img2 from "../../img/playlist/2.webp";
import img3 from "../../img/playlist/3.webp";
import img4 from "../../img/playlist/4.png";
import img5 from "../../img/playlist/5.webp";
import img6 from "../../img/playlist/6.webp";
import img7 from "../../img/playlist/7.webp";
export default function Playlist({
  info,
  playListMode,
  channelProp,
  setChannel
}) {
  const channelPlaylist = (channelLink) => {
    setChannel(channelLink);
  };
  return (
    <span
      className={
        playListMode
          ? "ddddd show_playlist menu menu_playlist "
          : " ddddd hide_playlist menu menu_playlist"
      }
    >
      <Image
        className="background_img"
        src={BackgroundImg}
        alt="Background Img"
      />
      <div className="inner_menu inner_playlist">
        <div className="info_menu_logo"></div>
        <div className="info_menu_text playlist_inner">
          <ul>
            {playlists.map((i, r) => {
              return (
                <li
                  key={r}
                  className="playlists"
                  onClick={() => channelPlaylist(i.link)}
                >
                  <div className="left_sec">
                    <div className="iamges_playlist">
                      <div className="overlay">
                        <Image src={i.img} quality={100} />
                      </div>
                    </div>
                  </div>
                  <div className="right_sec">
                    <h5>{i.title}</h5>
                    <p>{i.name}</p>
                    <span>Live</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </span>
  );
}

const playlists = [
  {
    img: img6,
    title: "Defunk",
    name: "Shodan's picks",
    link:
      "https://www.youtube.com/playlist?list=PLvwnljNCP6Kh4tZc0zGC7adkfo1kDIaCL"
  },
  {
    img: img2,
    title: " - beats to rip/tear to",
    name: "Doom RADIO",
    link: "https://www.youtube.com/watch?v=JEuAYnjtJP0"
  },

  {
    img: img5,
    title: "Dark TECHNO",
    name: "BLADE RAVE RADIO",
    link: "https://www.youtube.com/watch?v=80vfwFzKQqA"
  },
  {
    img: img1,
    title: " - dark synthwave FM",
    name: "Darksynth RADIO",
    link: "https://www.youtube.com/watch?v=DbepZk4PSiI"
  },
  {
    img: img7,
    title: "TECHNO RAVE 24/7 DJ Mixes",
    name: "ART OF TECHNO RADIO",
    link: "https://www.youtube.com/watch?v=uD-yRxTHinA"
  }
  //  {
  //   img: img3,
  //    title: "This is what daydreaming sounds like  Lofi Music..",
  //    name: "Lofi Vibes",
  //    link: "https://www.youtube.com/watch?v=KeWGT2IBvMk"
  //  },
  //  {
  //    img: img4,
  //    title: "Stop Overthinking - Lofi Music - Lofi Hip Hop Mix ~ ..",
  //   name: "Lofi Vibes",
  //    link: "https://www.youtube.com/watch?v=J8bjw_15thg"
  //  }
];
