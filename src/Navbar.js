import React from "react";
import img0 from "./images/fylo-logo.svg";
import img1 from "./images/illustration-intro.png";
import img2 from "./images/phonecomputer.svg";
import img3 from "./images/security.svg";
import img4 from "./images/collaboration.svg";
import img5 from "./images/file.svg";
import img6 from "./images/illustration-stay-productive.png";
import img7 from "./images/icon-arrow.svg";
import img8 from "./images/bg-quotes.png";
import img9 from "./images/profile-1.jpg";
import profile from "./images/profile-2.jpg";
import picture from "./images/profile-3.jpg";
import logo from "./images/fylo-logo.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import facebook from "./images/facebook.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar px-5 navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand pb-3" href="#">
            {/* <a href="/"> */}
            <img src={img0} alt="" height={40} />
            {/* </a> */}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href=""
              >
                Features
              </a>
              <a className="nav-link text-white" href="">
                Team
              </a>
              <a className="nav-link text-white" href="">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* body part */}
      <div className="fylo3">
        <div className="fylo1">
          <img src={img1} alt="" height={200} />

          <p className="text-white">
            All your files in one secure location,
            <br /> are accessible in anywhere
          </p>
          <p className="fylo2 text-white">
            Fylo stores all your most important files in one location.
            <br /> Access them wherever you need, share and collaborate with
            <br /> with friends, family and co-workers.
          </p>
          <button className="btn1 text-white bg-info">Get Started</button>
        </div>
      </div>

      {/* body part 2 */}

      <div className="fylo11">
        <div className="fylo6 pt-5">
          <div className="fylo4">
            <img src={img2} alt="" height={80} />
            <p className="text-white">Access your files anywhere</p>
            <p className="fylo2 text-white">
              The ability to use a smartphone, tablet or computer
              <br /> to access your account means your files follow you
              <br /> everywhere.
            </p>
          </div>

          <div className="fylo5 pt-2">
            <img src={img3} alt="" height={80} />
            <p className="text-white">Security you can trust</p>
            <p className="fylo2 text-white">
              2-factor authentication and user-controlled encryption are
              <br /> just a couple of security features we allow to help
              <br /> secure your files.
            </p>
          </div>
        </div>

        <div className="fylo6 pt-5">
          <div className="fylo4">
            <img src={img4} alt="" height={80} />
            <p className="text-white">Real-time collaboration</p>
            <p className="fylo2 text-white">
              Securely share files and folders with friends, family and <br />{" "}
              collegues for live collaborations. No email attachments
              <br />
              required
            </p>
          </div>

          <div className="fylo4 pt-3">
            <img src={img5} alt="" height={80} />
            <p className="text-white">Store any type of file</p>
            <p className="fylo2 text-white">
              Whether you're sharing holidays or work
              <br /> documents, Fylo has you covered allowing for all file
              <br /> types to be securely stored and shared
            </p>
          </div>
        </div>

        <div className="fylo7 pt-5">
          <div>
            <img src={img6} alt="" height={300} />
          </div>
          <div>
            <h5 className="fylo8 text-white">
              Stay productive,
              <br /> wherever you are
            </h5>
            <p className="fylo9 text-white">
              Never let location be an issue when accessing your files.Fyle has
              <br /> you covered for all your file storage needs.
            </p>
            <p className="fylo9 text-white">
              Securely share files and folders with friends, family and
              collegues for live
              <br /> collaboration. No email attachements required.
            </p>

            <p className="fylo10">
              See how fylo works
              <img src={img7} alt="" height={30} />
            </p>
          </div>
        </div>

        {/* body part 3 */}

        <img className="mt-5" src={img8} alt="" height={30} />
        <div className="fylo12">
          <div className="fylo14 mt-5 ">
            <p className="fylo9 text-white">
              Fylo has improved our team productivity by
              <br /> an order of magnitude. Since making the
              <br /> switch our team has become a well-oiled
              <br /> colloaboration machine
            </p>

            <div className="fylo13">
              <img className="fylo17" src={img9} alt="" height={25} />
              <p className="fylo21 text-white">Satish Patel</p>
            </div>
            <p className="fylo20 text-white">Founder & CEO, Huddle</p>
          </div>

          <div className="fylo15 mt-5">
            <p className="fylo9 text-white">
              Fylo has improved our team productivity by
              <br /> an order of magnitude. Since making the
              <br /> switch our team has become a well-oiled
              <br /> colloaboration machine
            </p>

            <div className="fylo13">
              <img className="fylo17" src={profile} alt="" height={25} />
              <p className="fylo19 text-white">Bruce Kenzie</p>
            </div>
            <p className="fylo20 text-white">Founder & CEO, Huddle</p>
          </div>

          <div className="fylo16 mt-5">
            <p className="fylo9 text-white">
              Fylo has improved our team productivity by
              <br /> an order of magnitude. Since making the
              <br /> switch our team has become a well-oiled
              <br /> colloaboration machine
            </p>

            <div className="fylo13">
              <img className="fylo17" src={picture} alt="" height={25} />
              <p className="fylo18 text-white">Iva Boyd</p>
            </div>
            <p className="fylo20 text-white">Founder & CEO, Huddle</p>
          </div>
        </div>

        {/* form section */}
        <div className="fylo22 pt-5">
          <p className="text-white">Get early access today</p>
          <p className="fylo9 text-white">
            It only takes one minute to sign up and our free starter is
            generous. If you have any
            <br /> questions, our support team will be happy to help you.
          </p>

          <form action="">
            <input
              className="fylo23"
              type="text"
              placeholder="email@example.com"
              name="email@example.com"
            />
            <button className="btn2 bg-info" type="Get Started For Free">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>

      <footer className="fylo24">
        <img className="mt-5 fylo28 " src={logo} alt="" height={90} />

        <div className="fylo30">
          <div className="fylo27">
            <img src={location} alt="" height={20} />
            &nbsp;&nbsp;&nbsp;
            <p className="fylo9 text-white">
              Lorem ipsum dolor sit amet consectetur
              <br /> adipisicing elit. Harum, dolorem eum. Natus tenetur
              <br /> ullam molestiae labore totam sapiente.
            </p>
          </div>

          <div className="fylo27">
            <img src={phone} alt="" height={20} />
            &nbsp;&nbsp;&nbsp;
            <p className="fylo9 text-white">+1-543-123--4567</p>
          </div>

          <div className="fylo27">
            <img src={email} alt="" height={20} />
            &nbsp;&nbsp;&nbsp;
            <p className="fylo9 text-white">example@fylo.com</p>
          </div>

          <div>
            <p className="fylo26">
              <a href="">
                About Us
                <br />
                <br />
              </a>

              <a href="">
                Jobs
                <br />
                <br />
              </a>

              <a href="">
                Press
                <br />
                <br />
              </a>

              <a href="">
                Blog
                <br />
                <br />
              </a>
            </p>
          </div>

          <div>
            <p className="fylo26">
              <a href="">
                Contact Us
                <br />
                <br />
              </a>

              <a href="">
                Terms
                <br />
                <br />
              </a>

              <a href="">
                Privacy
                <br />
                <br />
              </a>
            </p>
          </div>

          <div className="fylo29">
            <img src={facebook} alt="" height={15} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={insta} alt="" height={15} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={twitter} alt="" height={15} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
