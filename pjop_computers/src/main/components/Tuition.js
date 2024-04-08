import React, { useRef, useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledAccordion,
  UncontrolledDropdown,
} from "reactstrap";
import pjop from "../assets/images/logos/logo-1.png";
import c1 from "../assets/images/portfolio/c1.jpg";
import c2 from "../assets/images/portfolio/c2.jpg";
import c33 from "../assets/images/portfolio/c33.jpg";
import c44 from "../assets/images/portfolio/c44.jpg";
import c55 from "../assets/images/portfolio/c55.jpg";
import c67 from "../assets/images/portfolio/c67.jpg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Tuition() {
  const ref = useRef(null);
  const tuitionRef = useRef(null);
  const contactRef = useRef(null);
  const trainingRef = useRef(null);
  const videosRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [MobileMenu, setMobileMenu] = useState(false);
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
          style={{ display: "flex", justifyContent: "space-between" }}
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
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            style={{ marginRight: "5px" }}
            onClick={() => setMobileMenu(false)}
          >
            <Link to="/">
              <b style={{ color: "#013C2C", fontWeight: "bold" }}>Tutorial
              </b>
            </Link>
          </ul>
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            style={{ marginRight: "55px" }}
            onClick={() => setMobileMenu(false)}
          >
            <Link to="/">
              <b style={{ color: "#013C2C", fontWeight: "bold" }}>Videos</b>
            </Link>
          </ul>
          <Button
            type="button"
            className="but btn btn-dark w-20 m-1 p-2"
            onClick={() => {
              window.location.href = "tel:+1234567890";
            }}
          >
            <i className="fa fa-phone" /> <b className="call">Call us</b>
          </Button>
        </div>
      </div>

      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/">
              <Image
                src={require("../assets/images/logos/pjop.png")}
                className="custom-pjop"
              ></Image>
            </NavbarBrand>

            {/* <NavLink href="/" className="pj">
                  <Link to={'/'} >
                    <b className="pj">PJOP</b>
                    </Link>
                  </NavLink>

                  <NavLink href="/" className="pj" style={{ color: "green", padding: '30px' }}>
                  <Link to={'/'} >
                    <b className="pj" style={{ color: "green" }}>BUSINESS</b>
                    </Link>
                  </NavLink> */}

            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: "green" }}>
                    <Link to={"/"}>
                      <b style={{ color: "green" }}>Home</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => {
                      ref.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >
                    <b style={{ color: "green" }}>About</b>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    onClick={() => {
                      courseRef.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >              
                    <b style={{ color: "green" }}>Courses</b>
                  </NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav style={{ color: "green" }}>
                    <b>Courses</b> <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>
                      <b>DCA</b>
                    </DropdownItem>
                    <DropdownItem>
                      <b>Desktop Publishing</b>
                    </DropdownItem>
                    <DropdownItem>
                      <b>Software Development</b>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <b>Web Designing</b>
                    </DropdownItem>
                    <DropdownItem>
                      <b>Advanced Python</b>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <b>Hardware Networking</b>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      trainingRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Training</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Gallery</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Typewriting</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      tuitionRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Tuition</b>
                    </Link>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Videos</b>
                    </Link>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    onClick={() => {
                      contactRef.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >
                    {/* <Link to={"/contact"}> */}
                    <b style={{ color: "green" }}>Contact</b>
                    {/* </Link> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  {/* <a className="btn btn-success text-black mt-0" href="#"> */}
                  {/* <Link to={"/login"}> */}
                  {/* <b style={{color:'black'}}>Call us</b> */}
                  {/* <Button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={() => {
                      window.location.href = "tel:+1234567890";
                    }}
                  >
                    <i class="fa fa-phone" /> <b>Call us</b>
                  </Button> */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
        {/* <div className="spacer courses"></div> */}

        <div ref={tuitionRef} className="title-holder courses" style={{ padding: "100px 0" }}>
          <h1 className="text-center">
            <b>Tuition</b>
            <hr
              style={{
                borderTop: "5px solid green",
                width: "8%",
                margin: "auto",
              }}
            />
          </h1>
          <br />
          <h2 className="text-center tsp">
            <b>Easy and effective Training and Learning</b>
          </h2>
        </div>
        <Container>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a className="img-ho">
                    <Link to={"/maths"} onClick={scrollToTop}>
                      <Image
                        src={require("../assets/images/landingpage/A1-Maths4.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>A1 Maths</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      MS OFFICE(Word,Excel,PowerPoint),
                      C,Photoshop,Coreldraw,Tally
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={"/physics"} onClick={scrollToTop}>
                      <Image
                        src={require("../assets/images/Tuition-centre/physics.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Physics</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      PhotoShop,CorelDraw,Indesign,
                      <br /> Illustrator, PageMaker projects
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={"/chemistry"} onClick={scrollToTop}>
                      <Image
                        src={require("../assets/images/Tuition-centre/chemistry.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Chemistry</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      C,C++,JAVA,DOTNET,SQLSERVER,
                      <br /> PROJECTS FRONT END AND BACK END
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={"/french"} onClick={scrollToTop}>
                      <Image
                        src={require("../assets/images/Tuition-centre/french.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>French</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      HTML5,CSS3,JAVASCRIPT, BOOTSTRAP,
                      <br /> ANGULAR JS, JQUERY
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={"/computer"} onClick={scrollToTop}>
                      <Image
                        src={require("../assets/images/Tuition-centre/computer.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Computer Science</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      Python,Django,Data Science, <br />
                      MachineLearning,Flask, MongoDB
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center mt-5">
                  <a href="#" className="img-ho">
                    <Link to={"/accountancy"} onClick={scrollToTop} >
                      <Image
                        src={require("../assets/images/Tuition-centre/accountancy.jpg")}
                        className="a1"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center mt-2">
                    <b>Accountancy</b>
                  </h5>
                  <br />
                  {/* <p className="m-b-0 font-14 text-center">
                    <b>
                      Computer,LapTop Service and <br /> Networking Practical
                      Training
                    </b>
                  </p> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <div
          className="footer4 b-t spacer"
          style={{ backgroundColor: "black" }}
        >
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
                  <a href="https://www.facebook.com" className="link">
                    <i className="fa fa-facebook" style={{ color: "blue" }}></i>
                  </a>
                  <a href="https://twitter.com/?lang=en" className="link">
                    <i
                      className="fa fa-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                  <a href="https://www.linkedin.com/" className="link">
                    <i
                      className="fa brands fa-linkedin"
                      style={{ color: "#007aff" }}
                    ></i>
                  </a>
                  <a href="https://www.youtube.com" className="link">
                    <i
                      className="fa fa-youtube-play"
                      style={{ color: "red" }}
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/" className="link">
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
                      Copyrights © 2024 pjop technologies. All Rights Reserved.
                    </div>
                    <div className="links ms-auto m-t-10 m-b-10">
                      <a
                        href="#"
                        className="col-md-6 p-10 p-l-0"
                        style={{ color: "white" }}
                      >
                        Developed by Legends Tech Solution
                      </a>
                      {/* <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Privacy Policy
                    </a> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}