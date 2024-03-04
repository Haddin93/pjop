import React, { useRef, useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Carousel, Image, Stack } from "react-bootstrap";
import c1 from "../assets/images/portfolio/c1.jpg";
import c2 from "../assets/images/portfolio/c2.jpg";
import c33 from "../assets/images/portfolio/c33.jpg";
import c44 from "../assets/images/portfolio/c44.jpg";
import c55 from "../assets/images/portfolio/c55.jpg";
import c67 from "../assets/images/portfolio/c67.jpg";
import img1 from "../assets/images/testimonial/1.jpg";
import img2 from "../assets/images/testimonial/2.jpg";
import img3 from "../assets/images/testimonial/3.jpg";
import about from "../assets/images/portfolio/about.png";

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function () {
  const ref = useRef(null);
  const courseRef = useRef(null);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="header-bar-one">
        <Container>
          <p style={{ color: "white" }}>
            <b>No.4/A Velrampet Main Road Velrampet,Puducherry</b>
          </p>
        </Container>
        <div
          className="header-bar-two float-end clearfix"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/home">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </ul>
        </div>
      </div>

      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/">
              <Image
                src={require("../assets/images/logos/pjop.png")}
                className="custom-logo"
              ></Image>
            </NavbarBrand>

            <NavbarToggler>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse navbar id="header1">
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: "green" }}>
                    <Link to={"/"}>
                      <b style={{ color: "green" }}>Home</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: "green" }}>
                    <b>About</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Courses</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Training</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" style={{ color: "green" }}>
                    <b>Videos</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: "green" }}>
                    <Link to={"/contact"}>
                      <b style={{ color: "green" }}>Contact</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  {/* <a className="btn btn-success text-black mt-0" href="#"> */}

                  {/* <b style={{ color: "black" }}>Join Now</b> */}
                  <Button type="button" className="btn btn-success w-100">
                    <i class="fa fa-phone" /> <b>Call us</b>
                  </Button>

                  {/* </a> */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
        {/* <div className="spacer courses"></div> */}

        <div className="title-holder courses" style={{padding:'100px 0'}}>
          <h1 className="text-center">
            <b>Videos</b>
            <hr
              style={{
                borderTop: "5px solid green",
                width: "10%",
                margin: "auto",
              }}
            />
          </h1>
          <h2 className="text-center tsp">
            <b>We package the videos to make you a happy student</b>
          </h2>
        </div>
        <br />
        <br />
        <h1 className="text-center">
          <b>12th Ncert Maths</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/17hpUDujJ_0?si=cxIZnbNukFGBFsyR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
       
       <div className="spacer"></div>
        <h1 className="text-center">
          <b>French Class</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5nSQS4_1ioc?si=e5277I67Cd9bS3cg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="spacer"></div>
        <h1 className="text-center">
          <b>Photoshop Class</b>
          <hr
            style={{
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <div className="iframe-div">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vo4OG7ZUCMs?si=jN255aa-84j44vZv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="footer4 b-t spacer" style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Address</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Phone</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Mobile: +91 9942364752
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Email</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Office :{" "}
                <a href="#" className="link" style={{ color: "white" }}>
                  info@pjoptechnologies.com
                </a>{" "}
                <br />
              </p>
            </Col>
            <Col lg="3" md="6">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Social</b>
              </h5>
              <div className="round-social light">
                <a href="#" className="link">
                  <i className="fa fa-facebook" style={{ color: "blue" }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{ color: "#1DA1F2" }}></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-google-plus"
                    style={{ color: "darkred" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-youtube-play"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#C13584" }}
                  ></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="f4-bottom-bar">
            <Row>
              <Col md="12">
                <div className="d-flex font-14 justify-content-between">
                  <div
                    className="m-t-10 m-b-10 copyright"
                    style={{ color: "white" }}
                  >
                    Copyrights © 2023 Saraswathi Constructions. All Rights
                    Reserved.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a
                      href="#"
                      className="p-10 p-l-0"
                      style={{ color: "white" }}
                    >
                      Terms of Use
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
