import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Find Your Dream Career</h2>

        <p>
        CareerHub is a mini job portal application designed to display job vacancies from various companies. 
        It enables users to explore available opportunities and find positions that match their skills and career goals.
        </p>

        <button
          className="cta-button"
          onClick={() =>
            document
              .getElementById("job-list")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default Hero;