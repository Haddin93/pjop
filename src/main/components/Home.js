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
  const trainingRef = useRef(null);
  const videosRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* topbar start */}

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

      {/* navbar start */}
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/">
              <Image
                src={require("../assets/images/logos/pjop.png")}
                className="custom-logo"
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
                <NavItem>
                  <NavLink
                    onClick={() => {
                      courseRef.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >
                    {/* <Link to={"/courses"}> */}
                    <b style={{ color: "green" }}>Courses</b>
                    {/* </Link> */}
                  </NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav style={{ color: "green" }}>
                    <b>Courses</b> <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem><b>DCA</b></DropdownItem>
                    <DropdownItem><b>Desktop Publishing</b></DropdownItem>
                    <DropdownItem><b>Software Development</b></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><b>Web Designing</b></DropdownItem>
                    <DropdownItem><b>Advanced Python</b></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><b>Hardware Networking</b></DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
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
                      <b style={{ color: "green" }}>Videos</b>
                    </Link>
                  </NavLink>
                </NavItem>
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
                  <Button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={() => {
                      window.location.href = "tel:+1234567890";
                    }}
                  >
                    <i class="fa fa-phone" /> <b>Call us</b>
                  </Button>

                  {/* </Link> */}
                  {/* </a>                  */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      {/* navbar end */}

      <Carousel interval={3000}>
        <Carousel.Item>
          <Image
            src={require("../assets/images/landingpage/slide1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <Container>
              <Row className="justify-content-center">
                <Col
                  lg="6"
                  md="6"
                  className="align-self-center text-center mb-5"
                  alt=""
                >
                  <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
                    PJOP Computers
                  </h1>
                  <h4 className="subtitle ms-3" style={{ color: "white" }}>
                    Upskill and Transform Your Career!
                  </h4>
                  <a
                    href="/"
                    className="btn btn-light m-r-20 btn-md m-t-30 font-14 ms-3"
                  >
                    <b>Get Started</b>
                  </a>
                </Col>
                <Col lg="6" md="6" className="text-center">
                  <div className="card-shadow increased-width">
                    <Card className="card-shadow move-right">
                      <CardBody className="mb-2">
                        <h4 className="font-weight-bold text-decoration">
                          <b>JOIN NOW</b>
                        </h4>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="First Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="Last Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input type="email" placeholder="Email" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input
                                  type="number"
                                  placeholder="Phone Number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <p>
                                By submitting, you agree to the{" "}
                                <span className="text-primary">
                                  <Link to={"/custom-components"}>
                                    Privacy Policy
                                  </Link>
                                </span>{" "}
                                and to receive communications about this and
                                other courses.
                              </p>
                            </Col>
                            <Col lg="12">
                              <Button
                                type="Butt"
                                className="btn btn-success-gradiant m-t-10 btn-arrow"
                              >
                                <span>
                                  Enroll Now <i className="ti-arrow-right"></i>
                                </span>
                              </Button>
                            </Col>
                            <Col lg="12">
                              <hr />
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-primary w-100"
                              >
                                <i class="fa fa-phone" /> Contact
                              </Button>
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-success w-100"
                              >
                                <i class="fa fa-whatsapp" /> WhatsApp
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={require("../assets/images/landingpage/slide2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <Container>
              <Row className="justify-content-center">
                <Col
                  lg="6"
                  md="6"
                  className="align-self-center text-center mb-5"
                >
                  <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
                    UPGRADE YOURSELF
                  </h1>
                  <h4 className="subtitle ms-3" style={{ color: "white" }}>
                    Learn. Practice. Earn. Have Fun!
                  </h4>
                  {/* <a
                    href="/"
                    className="btn btn-light m-r-20 btn-md m-t-30 font-14 ms-3"
                  >
                    <b>Get Started</b>
                  </a> */}
                </Col>
                <Col lg="6" md="6" className="text-center">
                  <div className="card-shadow increased-width">
                    <Card className="card-shadow move-right">
                      <CardBody className="mb-2">
                        <h4 className="font-weight-bold text-decoration">
                          <b>JOIN NOW</b>
                        </h4>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="First Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="Last Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input type="email" placeholder="Email" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input
                                  type="number"
                                  placeholder="Phone Number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <p>
                                By submitting, you agree to the{" "}
                                <span className="text-primary">
                                  <Link to={"/custom-components"}>
                                    Privacy Policy
                                  </Link>
                                </span>{" "}
                                and to receive communications about this and
                                other courses.
                              </p>
                            </Col>
                            <Col lg="12">
                              <Button
                                type="Butt"
                                className="btn btn-success-gradiant m-t-10 btn-arrow"
                              >
                                <span>
                                  Enroll Now <i className="ti-arrow-right"></i>
                                </span>
                              </Button>
                            </Col>
                            <Col lg="12">
                              <hr />
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-primary w-100"
                              >
                                <i class="fa fa-phone" /> Contact
                              </Button>
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-success w-100"
                              >
                                <i class="fa fa-whatsapp" /> WhatsApp
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={require("../assets/images/landingpage/slide3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <Container>
              <Row className="justify-content-center">
                <Col lg="6" md="6" className="text-center order-md-first">
                  {/* <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
                    
                  </h1>
                  <h4 className="subtitle ms-3" style={{ color: "white" }}>
                    MAKING HIGHER QUALITY COURSES ACCESSIBLE
                  </h4> */}
                  {/* <a
                    href="/"
                    className="btn btn-light m-r-20 btn-md m-t-30 font-14 ms-3"
                  >
                    <b>Get Started</b>
                  </a> */}
                </Col>
                <Col lg="6" md="6" className="text-center">
                  <div className="card-shadow increased-width">
                    <Card className="card-shadow move-right">
                      <CardBody className="mb-2">
                        <h4 className="font-weight-bold text-decoration">
                          <b>JOIN NOW</b>
                        </h4>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="First Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="Last Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input type="email" placeholder="Email" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input
                                  type="number"
                                  placeholder="Phone Number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <p>
                                By submitting, you agree to the{" "}
                                <span className="text-primary">
                                  <Link to={"/custom-components"}>
                                    Privacy Policy
                                  </Link>
                                </span>{" "}
                                and to receive communications about this and
                                other courses.
                              </p>
                            </Col>
                            <Col lg="12">
                              <Button
                                type="Butt"
                                className="btn btn-success-gradiant m-t-10 btn-arrow"
                              >
                                <span>
                                  Enroll Now <i className="ti-arrow-right"></i>
                                </span>
                              </Button>
                            </Col>
                            <Col lg="12">
                              <hr />
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-primary w-100"
                              >
                                <i class="fa fa-phone" /> Contact
                              </Button>
                            </Col>
                            <Col lg="6">
                              <Button
                                type="button"
                                className="btn btn-success w-100"
                              >
                                <i class="fa fa-whatsapp" /> WhatsApp
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="spacer about-us-blog-area"></div>

      {/* About us */}

      <div ref={ref} className="about-us-blog-area">
        <div className="title-holder about-us-blog-area">
          <h1 className="text-center">
            <b>About Us</b>
            <hr
              style={{
                borderTop: "5px solid green",
                width: "8%",
                margin: "auto",
              }}
            />
          </h1>
        </div>

        <Container>
          <Row className="align-items-center">
            <Col xs="12" lg="6">
              <div className="text-center text-lg-start">
                <img
                  src={about}
                  className="about img-fluid mt-5 rounded-3"
                  alt="About Us Image"
                />
              </div>
            </Col>
            <Col xs="12" lg="6" className="head pt-4">
              <div className="text-center text-lg-start">
                <h1 style={{ color: "#0dba4b" }}>
                  <b>Who is Pjop And SR'S Academy</b>
                </h1>
                <p className="tp" style={{ fontStyle: "inherit" }}>
                  <b>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum.
                    <br />
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book with best
                    price for the customer.
                    <br />
                    Additional service include data recovery, computer repair,
                    mobile service, network solutions and Technical support.
                  </b>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="spacer about-us-blog-area"></div>

      {/* Discover our courses */}

      <div ref={courseRef} className="title-holder">
        <h1 className="text-center">
          <b>Discover Our Courses</b>
          <hr
            style={{
              borderTop: "5px solid green",
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <h2 className="text-center tsp">
          <b>Easy and effective Training and Learning</b>
        </h2>
      </div>
      <div className="spacer">
        <Container>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"} onClick={scrollToTop}>
                      <img
                        className="card-img-top1"
                        src={c1}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>DCA PGDCA HDCA</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      MS OFFICE(Word,Excel,PowerPoint),
                      C,Photoshop,Coreldraw,Tally
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a href="#" className="img-ho">
                    <Link to={"/desktop"} onClick={scrollToTop}>
                      <img
                        className="card-img-top2"
                        src={c2}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>Desktop publishing</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      PhotoShop,CorelDraw,Indesign,
                      <br /> Illustrator, PageMaker projects
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a href="#" className="img-ho">
                    <Link to={"/Software_development"} onClick={scrollToTop}>
                      <img
                        className="card-img-top3"
                        src={c33}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>Software Devlopment</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      C,C++,JAVA,DOTNET,SQLSERVER,
                      <br /> PROJECTS FRONT END AND BACK END
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a href="#" className="img-ho">
                    <Link to={"/Web_designing"} onClick={scrollToTop}>
                      <img
                        className="card-img-top4"
                        src={c44}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>Web Designing</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      HTML5,CSS3,JAVASCRIPT, BOOTSTRAP,
                      <br /> ANGULAR JS, JQUERY
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a href="#" className="img-ho">
                    <Link to={"/Advanced_python"} onClick={scrollToTop}>
                      <img
                        className="card-img-top5"
                        src={c55}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>Advanced Python</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      Python,Django,Data Science, <br />
                      MachineLearning,Flask, MongoDB
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a href="#" className="img-ho">
                    <Link to={"/Hardware_networking"} onClick={scrollToTop}>
                      <img
                        className="card-img-top6"
                        src={c67}
                        alt="wrappixel kit"
                      />
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>Hardware Networking</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <b>
                      Computer,LapTop Service and <br /> Networking Practical
                      Training
                    </b>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" className="justify-content-center d-flex">
              <a
                className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
                href="/"
              >
                {" "}
                <Link to={"/courses"} onClick={scrollToTop}>
                  <span style={{ color: "white" }}>
                    View More<i className="ti-arrow-right"></i>
                  </span>
                </Link>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Special Training */}
      <div className="special-training">
        <div ref={trainingRef} className="special-training">
          <h1 className="text-center">
            <b>Our Special Training</b>
            <hr
              style={{
                borderTop: "5px solid green",
                width: "8%",
                margin: "auto",
              }}
            />
          </h1>
          <h2 className="text-center tsp">
            <b>
              We package the Courses with best Training to make you a happy
              Student
            </b>
          </h2>
        </div>
        <div className="spacer"></div>
        <Container>
          <Row>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/msoffice1.jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>MS OFFICE TRAINING</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.3000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/photoshop.jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>PHOTOSHOP</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.2000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/coreldraw.jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>CORELDRAW</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.1500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/tallyprime.png")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>TALLY PRIME</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.4000</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/maths.jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>MATHEMATICS</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/english.jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>SPOKEN ENGLISH</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/hindi (1).jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>SPOKEN HINDI</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-shadow shadow">
                <div className="text-center">
                  <a className="img-ho">
                    <Link to={"/dca"}>
                      <Image
                        src={require("../assets/images/portfolio/french (1).jpg")}
                        className="msoffice"
                        alt="ms"
                      ></Image>
                    </Link>
                  </a>
                </div>
                <CardBody>
                  <h5 className="font-medium m-b-0 text-center">
                    <b>LEARN FRENCH</b>
                  </h5>
                  <br />
                  <p className="m-b-0 font-14 text-center">
                    <h5>Rs.500</h5>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" className="justify-content-center d-flex">
              <a
                className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
                href="/"
              >
                {" "}
                <Link to={"/training"}  onClick={scrollToTop}>
                  <span style={{ color: "white" }}>
                    View More<i className="ti-arrow-right"></i>
                  </span>
                </Link>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer"></div>

      <div ref={videosRef} className="title-holder">
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

      <Container fluid>
        {" "}
        {/* Using fluid container for full-width responsiveness */}
        <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="iframe-div">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/17hpUDujJ_0?si=cxIZnbNukFGBFsyR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="iframe-div">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/5nSQS4_1ioc?si=e5277I67Cd9bS3cg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="iframe-div">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Vo4OG7ZUCMs?si=jN255aa-84j44vZv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col xs="12" className="justify-content-center d-flex">
            <a
              className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
              href="/"
            >
              {" "}
              <Link to={"/videos"}  onClick={scrollToTop}>
                <span style={{ color: "white" }}>
                  View More<i className="ti-arrow-right"></i>
                </span>
              </Link>
            </a>
          </Col>
        </Row>
      </Container>

      <div className="spacer"></div>

      {/* Testimonial */}
      <div className="title-holder">
        <h1 className="text-center">
          <b>Testimonial</b>
          <hr
            style={{
              borderTop: "5px solid green",
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>
        <h2 className="text-center tsp">
          <b>Check what our Customers are Saying</b>
        </h2>
      </div>
      {/* <div className="spacer"></div> */}

      <div>
        <div className="testimonial3 bg-light">
          <Container>
            <Row className="testi3 m-t-40 justify-content-center">
              <Col lg="4" md="6">
                <Card className="card-shadow">
                  <CardBody>
                    <h6 className="font-light m-b-30">
                      <b>
                        “You guys rock! Thank you for making it painless,
                        pleasant and most of all hassle free! I wish I would
                        have thought of it first. <br />I am really satisfied
                        with my first videos Training.”
                      </b>
                    </h6>
                    <div className="d-flex no-block align-items-center">
                      <span className="thumb-img">
                        <img src={img1} alt="wrapkit" className="circle" />
                      </span>
                      <div className="m-l-20">
                        <h6 className="m-b-0 customer">Michelle Anderson</h6>
                        <div className="font-10">
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-muted">
                            <i className="fa fa-star"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-shadow">
                  <CardBody>
                    <h6 className="font-light m-b-30">
                      <b>
                        “You guys rock! Thank you for making it painless,
                        pleasant and most of all hassle free! I wish I would
                        have thought of it first.
                        <br /> I am really satisfied with my first French
                        Class.”
                      </b>
                    </h6>
                    <div className="d-flex no-block align-items-center">
                      <span className="thumb-img">
                        <img src={img2} alt="wrapkit" className="circle" />
                      </span>
                      <div className="m-l-20">
                        <h6 className="m-b-0 customer">Mark mesty</h6>
                        <div className="font-10">
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-muted">
                            <i className="fa fa-star"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-shadow">
                  <CardBody>
                    <h6 className="font-light m-b-30">
                      <b>
                        “You guys rock! Thank you for making it painless,
                        pleasant and most of all hassle free! I wish I would
                        have thought of it first.
                        <br /> I am really satisfied with my first Photoshop..”
                      </b>
                    </h6>
                    <div className="d-flex no-block align-items-center">
                      <span className="thumb-img">
                        <img src={img3} alt="wrapkit" className="circle" />
                      </span>
                      <div className="m-l-20">
                        <h6 className="m-b-0 customer">Limpsy adam</h6>
                        <div className="font-10">
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-success">
                            <i className="fa fa-star"></i>
                          </a>
                          <a href="" className="text-muted">
                            <i className="fa fa-star"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="spacer"></div>

      {/*contact us */}
      <div ref={contactRef} className="title-holder">
        <h1 className="text-center">
          <b>Contact Us</b>
          <hr
            style={{
              borderTop: "5px solid green",
              width: "10%",
              margin: "auto",
            }}
          />
        </h1>

        <div className="bg-light"></div>
        <div className="contact1">
          <Container>
            <Row className="m-0">
              <Col lg="8">
                <div className="contact-box p-4">
                  <h4 className="title">Quick Contact</h4>
                  <Form>
                    <Row>
                      <Col xs="12" lg="6">
                        <FormGroup className="mt-3">
                          <Input type="text" placeholder="Name" />
                        </FormGroup>
                      </Col>
                      <Col xs="12" lg="6">
                        <FormGroup className="mt-3">
                          <Input type="email" placeholder="Email" />
                        </FormGroup>
                      </Col>
                      <Col xs="12" lg="12">
                        <FormGroup className="mt-3">
                          <Input type="tel" placeholder="Phone Number" />
                        </FormGroup>
                      </Col>
                      <Col xs="12" lg="12">
                        <FormGroup className="mt-3">
                          <Input type="textarea" placeholder="Message" />
                        </FormGroup>
                      </Col>
                      <Col xs="12">
                        <Button
                          type="submit"
                          className="btn btn-success-gradiant mt-3"
                        >
                          <span> SUBMIT </span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg="4">
                <div className="contact">
                  <Image
                    src={require("../assets/images/contact/contact44.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mini-spacer bg-success gradient text-white c2a7">
          <Container>
            <div className="d-flex justify-content-between">
              <div className="display-7 align-self-center text-dark">
                <b>Request a Free Quote</b>
              </div>
              <div className="ms-auto my-3 my-lg-0">
                <button className="btn btn-dark btn-md" onClick={scrollToTop}>
                  GET QUOTE
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Footer */}
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
