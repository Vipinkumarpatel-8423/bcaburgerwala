import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg"

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>MCA Burger Wala</h4>
          <p>
            We are MCA Burger Wala. The Place for most testy burgers on the
            enitre earth.
          </p>
          <p>
            Explore the various type of food and burger. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
            <h2>Founder</h2>

            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Vipin Kumar Patel</h3>
                </div>
                <p>I am Vipin Kumar , the founder of MCA Burger Wala, Affiliated to God Tase..</p>
            </article>
        </div>
      </main>
    </section>
  );
};

export default About;
