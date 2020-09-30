import React from 'react';
import { ReactSVG } from 'react-svg';
import './Popup.scss';

const Popup = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpenPopup = () => {
      setOpen(true);
    }
  
    const handleClosePopup = () => {
      setOpen(false);
    }
  
    return (
      <>
        <button className="btn portfolio-item__btn" onClick={handleOpenPopup}>
          Details
        </button>
        
        { open && 
          <div className="popup">
            <div className="popup__inner">
              <ReactSVG src='/assets/svgs/close-icon.svg' className="popup__close" onClick={handleClosePopup} />
              <div className="popup__title">Cars work</div>

              <div className="popup__content">
                <div className="popup__info">
                  <img src='/assets/imgs/laptop2.png' alt="Laptop" className="popup__img" />
                  <a href="https://carswork.com" target="_blank" rel="noopener noreferrer" className="popup__link">
                    Visit site
                    <ReactSVG src='/assets/svgs/external-link-icon.svg' className="popup__external-link" wrapper="span" />
                  </a>
                  <div className="popup__questions">
                    <div className="popup__subtitle">Have a question? </div>
                    <a href="mailto:weathefuture@gmail.com" className="popup__email">Write us!)</a>
                  </div>
                </div>

                <div className="popup__description">
                  <div className="popup__section">
                    <div className="popup__subtitle">Mission:</div>
                    <p className="popup__paragraph">
                      We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs.
                    </p>
                    <p className="popup__paragraph">
                      We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs.
                    </p>
                  </div>
                  
                  <div className="popup__section">
                    <div className="popup__subtitle">Technologies:</div>

                    <div className="popup__technologies">
                      <div className="popup__holder">
                        <div className="popup__caption">DBs:</div>
                        <p className="popup__text">PostgreSQL / MongoDB / MySQL / DynamoDb / Elasticsearch / Redis</p>
                      </div>
                      <div className="popup__holder">
                        <div className="popup__caption">Development general knowledge:</div>
                        <p className="popup__text">OOP & OOD / TDD & BDD / API (REST API & Postman & Swagger & API Doc)</p>
                      </div>
                      <div className="popup__holder">
                        <div className="popup__caption">Front-End:</div>
                        <p className="popup__text">Angular (Typescript) & React & Net.JS Frameworks / HTML / CSS (SCSS, LESS, bootstrap, angular material), Javascript (ES6 - ES9)</p>
                      </div>
                      <div className="popup__holder">
                        <div className="popup__caption">Back-End:</div>
                        <p className="popup__text">Node.js (Koa, express, meteor, hapi, sails, nestjs)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    );
  }

export default Popup;
