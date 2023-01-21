import React from "react";
import abyssinian from "../assets/Abyssinian.jpeg";
import aegean from "../assets/Aegean.jpeg";
import americanbobtail from "../assets/american-bobtail.jpeg";
import americancurl from "../assets/american-curl.jpeg";
import americanshorthair from "../assets/american-shorthair.jpeg";
import americanwirehair from "../assets/american-wirehair.jpeg";
import arabianmau from "../assets/arabian-mau.jpeg";
import australianmist from "../assets/australian-mist.jpeg";
import balinese from "../assets/balinese.jpeg";
import bambino from "../assets/bambino.jpeg";
import bengal from "../assets/bengal.jpeg";
import birman from "../assets/birman.jpeg";
import bombay from "../assets/bombay.jpeg";
import britishlonghair from "../assets/British-longhair.jpeg";
import britishshorthair from "../assets/british-shorthair.jpeg";
import burmese from "../assets/burmese.jpeg";
import burmilla from "../assets/burmilla.jpeg";
import californiaspangled from "../assets/california.spangled.jpeg";
import chantilly from "../assets/chantilly-tiffany.jpeg";
import chartreux from "../assets/chartreux.jpeg";
import "../styles/images.css";

const Images = () => {
  return (
    <div class='columns'>
    <h1>Photos</h1>
      <div className="gallery">
        <img src={abyssinian} alt="images" />
        <h3>Abyssinian</h3>
        <img src={aegean} alt="images" />
        <h3>Aegean</h3>
        <img src={americanbobtail} alt="images" />
        <h3>American Bobtail</h3>
        <img src={americancurl} alt="images" />
        <h3>American Curl</h3>
        <img src={americanshorthair} alt="images" />
        <h3>American Shorthair</h3>
        <img src={americanwirehair} alt="images" />
        <h3>American Wirehair </h3>
        <img src={arabianmau} alt="images" />
        <h3>Arabian Mau</h3>
        <img src={australianmist} alt="images" />
        <h3>Australian Mist</h3>
        <img src={balinese} alt="images" />
        <h3>Balinese</h3>
        <img src={bambino} alt="images" />
        <h3>Bambino</h3>
        <img src={bengal} alt="images" />
        <h3>Bengal</h3>
        <img src={birman} alt="images" />
        <h3>Birman</h3>
        <img src={bombay} alt="images" />
        <h3>Bombay</h3>
        <img src={britishlonghair} alt="images" />
        <h3>British Longhair</h3>
        <img src={britishshorthair} alt="images" />
        <h3>British Shorthair</h3>
        <img src={burmese} alt="images" />
        <h3>Burmese</h3>
        <img src={burmilla} alt="images" />
        <h3>Burmilla</h3>
        <img src={californiaspangled} alt="images" />
        <h3>California Spangled</h3>
        <img src={chantilly} alt="images" />
        <h3>Chantilly-tiffany</h3>
        <img src={chartreux} alt="images" />
        <h3>Chartreux</h3>
      </div>
    </div>
  );
};

export default Images;
