import "./Banner.css";
import Brand from "../../../json-api/Brand";
const Banner = ()=>{
  const design = (
    <>
      <header className="video-box">
          <video width="100%" autoPlay muted loop>
              <source src="header.mp4"></source>
          </video>
          <div className="overlay d-flex justify-content-center align-items-center">
              <div>
              <h1>{Brand.name} </h1><br/>
              <p>{Brand.tagline} </p>
              </div>
          </div>
      </header>
    </>
  );
  return design
}

export default Banner;
