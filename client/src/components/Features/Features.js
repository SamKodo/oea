import React from "react";
import Card from "./Card";
import data from "./FeaturesApi";
import cbs from "./images/cbs.png";
import forbes from "./images/forbes.png";
import rfi from "./images/rfi.png";
import France24 from "./images/France24.png";
import fox7 from "./images/fox7.png";

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <h6
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontWeight: 500,
            }}
          >
            DECOUVRE CES QUELQUES MEDIAS QUI PARLENT DE MOI
          </h6>

          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li style={{ margin: 40, display: "inline-block" }}>
              <a
                href="https://www.rfi.fr/fr/emission/20180310-maroc-bot-le-robot-enseignant-vedette-forum-futur-es-in-africa-casablanca"
                target="_blank"
              >
                <img
                  src={rfi}
                  style={{ height: 100, width: 200, cursor: "pointer" }}
                  alt=""
                ></img>
              </a>
            </li>
            <li style={{ margin: 40, display: "inline-block" }}>
              <a
                href="https://www.youtube.com/watch?v=QMgsfbfu9CE"
                target="_blank"
              >
                <img
                  src={France24}
                  style={{ height: 100, width: 150, cursor: "pointer" }}
                  className="mediaLogo"
                  alt=""
                ></img>
              </a>
            </li>

            <li style={{ margin: 40, display: "inline-block" }}>
              <a>
                <img
                  className="mediaLogo"
                  style={{ height: 100, width: 170, cursor: "pointer" }}
                  src={forbes}
                ></img>
              </a>
            </li>
            <li style={{ margin: 40, display: "inline-block" }}>
              <a
                href="https://cbsaustin.com/news/local/acc-local-startup-partner-to-build-new-drone-train-students"
                target="_blank"
              >
                <img
                  src={cbs}
                  style={{ height: 100, width: 150, cursor: "pointer" }}
                  className="mediaLogo"
                  alt=""
                ></img>
              </a>
            </li>
            <li style={{ margin: 40, display: "inline-block" }}>
              <a
                href="https://www.fox7austin.com/news/zpryme-first-company-at-austin-community-college-manufacturing-incubator"
                target="_blank"
              >
                <img
                  src={fox7}
                  style={{ height: 100, width: 180, cursor: "pointer" }}
                  className="mediaLogo"
                  alt=""
                ></img>
              </a>
            </li>
          </ul>
          <div>
            <img
              style={{
                width: 90,
                height: 100,
                borderRadius: 100,
              }}
              src="https://karsh.org/wordpress/wp-content/uploads/2017/06/Yousuf-Karsh-Nelson-Mandela-1990-1523x1960.jpg"
              alt=""
            />
            <h5
              style={{
                color: "gray",
                fontFamily: "cursive",
                fontStyle: "oblique",
              }}
            >
              « L'éducation est l'arme la plus puissante que l'on puisse
              utiliser pour changer le monde » Nelson Mandela
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
