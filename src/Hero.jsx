import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quae, quaerat repellat inventore doloremque tempore unde similique
            distinctio. Temporibus adipisci delectus ab impedit, tempora facere
            suscipit rerum sunt magnam assumenda?
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={heroImg} alt="woman and browser" className="img"></img>
      </div>
    </section>
  );
};
export default Hero;
