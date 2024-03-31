import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MCA Burger Wale</h2>
        <p>We are trying to give ypu the best test possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @mcaburgerwale</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <AiFillFacebook />
        </a>
        <a href="">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
