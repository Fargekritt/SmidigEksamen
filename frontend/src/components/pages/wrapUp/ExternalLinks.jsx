import React from "react";

const links = [
  {
    description: "Mat & drikke på MUNCH",
    url: "https://www.munchmuseet.no/besok-oss/mat-drikke-MUNCH/",
  },
  // { description: "Hva skjer?", url: "https://www.munchmuseet.no/hva_skjer/" },
  {
    description: "Samlingen",
    url: "https://www.munchmuseet.no/samlingen/?query=&page=1&sortOrder=default&classification=Malerier&years=1863%7C1944&motif=V%C3%A5r&motif=Norge&munchSamlingen=true&d=1",
  },
  {
    description: "Utstillinger",
    url: "https://www.munchmuseet.no/utstillinger/",
  },
  {
    description: "Nettbutikk",
    url: "https://shop.munchmuseet.no/?___store=no",
  },
  {
    description: "Kontakt oss",
    url: "https://www.munchmuseet.no/om-oss/kontakt/",
  },
];

const ExternalLinks = () => {
  return (
    <div className="external-links">
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.description}
        </a>
      ))}
    </div>
  );
};

export default ExternalLinks;
