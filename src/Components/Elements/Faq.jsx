import { React, useContext, useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { CgClose  } from "react-icons/cg";
import {
  AccordionContext,
  useAccordionButton,
  Accordion,
  Card,
} from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" onClick={decoratedOnClick} className="acc-toggler">
      {isCurrentEventKey ? <CgClose /> : <BsPlusLg />}
    </button>
  );
}

const scrollTopTop = (changeState) => {
  changeState(1);
  window.scrollTo(0, 0);
};

export default function Faqs() {
  return (
    <div className="faq_container">
      <div className="container" id="faq">
        <div className="text-center">
        <h1 className='mission_head Nunito pe-4 text-center pe-lg-0'>FAQs</h1>
        </div>
      </div>
      <div className="container mt-5">
        <Accordion defaultActiveKey="0">
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="">
                {" "}

                <div className="mt-2">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="">
                {" "}
        
                <div className="mt-2 side-line">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="">
         
                <div className="mt-2 ">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="">
              
                <div className="mt-2">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="">
                <span className="=">
                  Where can I watch?
                </span>{" "}
                <div className="mt-2  ">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="">
         
                <div className="mt-2 side-line ">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-0 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0">Where can I watch?</div>
              <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="">
    
                <div className="mt-2 side-line ">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}