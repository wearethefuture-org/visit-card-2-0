import React from 'react';
import { ReactSVG } from 'react-svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

import InfoCard from './components/InfoCard/InfoCard';
import PersonCard from './components/PersonCard/PersonCard';
import GridList from './components/GridList/GridList';
// import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

import TECHNOLOGIES from './constants/technologies';
import DEVELOPERS from './constants/developers';
import WORKS_WITH from './constants/works-with';

const AgencyBanner = ({ onClickScroller }) => (
  <div className="agency-banner">
    <h1 className="agency-banner__title">We Are the Future</h1>
    <ReactSVG src='/assets/svgs/logos/banner-logo.svg' className="agency-banner__logo" />
    <ReactSVG onClick={onClickScroller} src='/assets/svgs/scroll-down.svg' className="agency-banner__scroller" />
  </div>
);

const About = () => (
  <div className="about">
    <div className="main-page-bg-2">
      <Container fluid>
        <h1 className="about__title">Who we are?</h1>

        <div className="about__sub-title">
          <p>Ambitios Ukrainian IT company,</p>
          <p>starting the  path of digital transformation</p>
          <p>of your ideas</p>
        </div>
      </Container>
    </div>

    <Container fluid>
      <div className="we-can-better">
        <Row>
          <Col xs={12} sm={3} className="we-can-better__info">We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs.</Col>
          <Col xs={12} sm={6} className="we-can-better__img">
            <img src="/assets/imgs/we-can-better.jpg" alt="We can better"/>
            <h1 className="we-can-better__title">We can better</h1>
          </Col>
          <Col xs={12} sm={3} className="we-can-better__info">10+ of true professionals with solid technical background in different domains - SaaS applications, complex web projects, DevOps solutions.</Col>
        </Row>
      </div>
    </Container>
  </div>
);

const Technologies = () => (
  <div className="technologies">
    <Container fluid>
      <h1 className="technologies__title">Technologies</h1>
      <div className="technologies__sub-title">
        <p>We are working with different modern technologies you can</p>
        <p>be interested in:</p>
      </div>

      <Row>
        {TECHNOLOGIES.map(tech => (
          <Col xs={12} md={3} key={tech.title}>
            <InfoCard {...tech} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

const Developers = () => (
  <div className="developers">
    <Container fluid>
      <h1 className="developers__title">*** Drill-down of our technical skills can be provided in a separate discussion.</h1>

      <div className="developers__bg">Team</div>
      <Row>
        {DEVELOPERS.map(dev => (
          <Col xs={12} md={3} key={dev.name}>
            <PersonCard {...dev} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

const WorkWith = () => (
  <div className="work-with">
    <Container fluid>
      <h1 className="work-with__title">Who we work with</h1>
      <GridList items={WORKS_WITH} />
    </Container>
  </div>
);

const Contact = () => (
  <div className="contact-us">
    <div className="contact-us__inner">
      <h1 className="contact-us__title">Feel free to contact Us!</h1>
      <h1 className="contact-us__subtitle">We’ll be glad to assist you with the implementation of your dreams!</h1>

      <Row className="contact-us__social">
        <Col>
          <a href="mailto:weathefuture@gmail.com">
            <ReactSVG src='/assets/svgs/social/gmail.svg' />
          </a>
          <h1>Gmail</h1>
          <a href="mailto:weathefuture@gmail.com">
            <h2>weathefuture@gmail.com</h2>
          </a>
        </Col>

        <Col>
          <a href="https://www.linkedin.com/in/ihor-zharyi-6892aa168/">
            <ReactSVG src='/assets/svgs/social/link.svg' />
          </a>
          <h1>Linkedin</h1>
          <a href="https://www.linkedin.com/in/ihor-zharyi-6892aa168/">
            <h2>Open</h2>
          </a>
        </Col>

        <Col>
          <ReactSVG src='/assets/svgs/social/skype.svg' />
          <h1>Skype</h1>
          <h2>Login: sixteen883</h2>
        </Col>
      </Row>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="portfolio">
    <Container fluid>
      <h1 className="portfolio__title">Portfolio</h1>
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12} sm={{ span: 4 }} className="portfolio-item">
          <img
            src="/assets/imgs/portfolio/carswork.png"
            alt="carswork"
            className="portfolio-item__img"
          />
          <h1 className="portfolio-item__title">Carswork</h1>
          <a href="https://carswork.com" target="_blank">
            <button className="btn portfolio-item__btn">
              Open
            </button>
          </a>
        </Col>
        <Col xs={12} sm={{ span: 4, offset: 2 }}>
          <img
            src="https://stage.connectoro.io/assets/images/logos/fuse.svg"
            alt=""
            style={{
              width: '100%',
              height: 290
            }}
          />
          <h1 className="portfolio-item__title">Connectoro</h1>
          <a href="https://app.connectoro.io" target="_blank">
            <button className="btn portfolio-item__btn">
              Open
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

const App = () => {
  const moveToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AgencyBanner onClickScroller={moveToAbout} />
      <div className="main-page-bg-1">
        <img src="/assets/imgs/Group.png" alt="circles"/>
        <About />
        <Technologies />
      </div>
      <div className="main-page-bg-3">
        <img src="/assets/imgs/Group.png" alt=""/>
        <Developers />
        <WorkWith />
      </div>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
