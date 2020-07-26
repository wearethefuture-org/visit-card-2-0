import React from 'react';
import { ReactSVG } from 'react-svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

import InfoCard from './components/InfoCard/InfoCard';
import PersonCard from './components/PersonCard/PersonCard';
import GridList from './components/GridList/GridList';

import TECHNOLOGIES from './constants/technologies';
import DEVELOPERS from './constants/developers';
import WORKS_WITH from './constants/works-with';

const AgencyBanner = () => (
  <div className="agency-banner">
    <h1 className="agency-banner__title">We Are the Future</h1>
    <ReactSVG src='/assets/svgs/logos/banner-logo.svg' className="agency-banner__logo" />
    <ReactSVG src='/assets/svgs/scroll-down.svg' className="agency-banner__scroller" />
  </div>
);

const About = () => (
  <div className="about">
    <Container fluid>
      <h1 className="about__title">Who we are?</h1>

      <div className="about__sub-title">
        <p>Ambitios Ukrainian IT company,</p>
        <p>starting the  path of digital transformation</p>
        <p>of your ideas</p>
      </div>

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

const App = () => (
<>
  <AgencyBanner />
  <About />
  <Technologies />
  <Developers />
  <WorkWith />
</>
);

export default App;
