import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PriceCard from "../components/cards/PriceCard";
import { UserContext } from "../context";
import "./home.css";
import Nav from "../components/Nav";
import sam from "./pic/sam.png";
import skill1 from "./pic/skill1.png";
import skill2 from "./pic/skill2.png";
import skill3 from "./pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import Features from "../components/Features/Features";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import { Countcomponent } from "./Countcomponent";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Home = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);

  const [userSubscriptions, setUserSubsciptions] = useState([]);

  /*useEffect(() => {
    fetchPrices();
  }, []);

   useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
    check();

    setUserSubsciptions(result);
  }, [state && state.user]);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");

    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      history.push(`/${price.nickname.toLowerCase()}`);
      return;
    }
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      history.push("/register");
    }
  };
*/
  return (
    <>
      <Nav />

      {/* <div className="timerstyle">
        <h4 style={{ marginTop: 80 }}>
          {" "}
          TEMPS RESTANT POUR LES INSCRIPTIONS DE LA PREMIERE VAGUE{" "}
        </h4>

        <Countcomponent></Countcomponent>
  </div>*/}
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3
              style={{
                color: "black",
                marginBottom: "50px",
                fontSize: 45,
                fontFamily: "sans-serif",
              }}
            >
              BIENVENUE SUR OPEN ENGINEER ACADEMY
            </h3>
            <ReactPlayer
              width="400px"
              height="390px"
              controls
              url="https://samsonkodo1.wistia.com/medias/s91winliw5"
              style={{ marginLeft: "100px" }}
            />
            <h1>
              Salut , Je suis <span>Sam Kodo</span>
            </h1>
            <h2>
              un
              <span>
                <Typewriter
                  words={[" Entrepreuneur.", " Ingieneur."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <h5 style={{ color: "black" }}>
              <p></p>
              <p></p>Sur Open Engineer Academy , je te formerai en technologie
              et a la fin de ta formation tu auras des competences solides
              requises pour passer facilement tes interviews Afin de te faire
              embaucher rapidement par l'entreprise de tes Reves .<p></p>

            <h3 style={{marginBottom:50 , color:"#cc00cc"}}> Qu'attends-tu pour commencer ta formation ? </h3> 
            </h5>
           
            <h6
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontWeight: 500,
            }}
          >
    
              

            <ReactPlayer
              width="800px"
              height="390px"
              controls
              url="https://samsonkodo1.wistia.com/medias/vas7eifzu2"
              style={{ marginLeft: "100px" }}
            />
 <ReactPlayer
              width="800px"
              height="390px"
              controls
              url="https://samsonkodo1.wistia.com/medias/o35czb8jna"
              style={{ marginLeft: "100px" }}
            />
 <ReactPlayer
              width="800px"
              height="390px"
              controls
              url="https://samsonkodo1.wistia.com/medias/yh0sxrflku"
              style={{ marginLeft: "100px" }}
            />
</h6>

<Link to="/rejoindre">
              {" "}
              <button className="startButton">DEMARRER</button>
            </Link>


            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>RETROUVE MOI SUR</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in">
                      <a href="https://www.linkedin.com/in/sam-kodo-1177459b/"></a>
                    </i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img className="pimage" src={sam} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Features />

      <Portfolio />

      <Footer />
    </>
  );
};

export default Home;
