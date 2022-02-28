import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img01 from "../../images/img-01.jpg";
import img02 from "../../images/img-02.jpg";
import img03 from "../../images/img-03.jpg";
import img04 from "../../images/img-04.jpg";
import img05 from "../../images/img-05.jpg";
import img06 from "../../images/img-06.jpg";
import img07 from "../../images/img-07.jpg";
import img08 from "../../images/img-08.jpg";
import img09 from "../../images/img-09.jpg";
const MenuBox = () => {
    return (
        <>
            <div className="menu-box">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="heading-title text-center">
                                <h2>Special Menu</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button className="active">All</button>
                                    <button>Drinks</button>
                                    <button>Lunch</button>
                                    <button>Dinner</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="row special-list">
                        <div className="col-lg-4 col-md-6 special-grid drinks">
                            <div className="gallery-single fix">
                                <img className="img-fluid" src={img01} alt="" />
                                <div className="why-text">
                                    <h4>Special Drinks 1</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $7.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid drinks">
                            <div className="gallery-single fix">
                                <img
                                    src={img02}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Drinks 2</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid drinks">
                            <div className="gallery-single fix">
                                <img
                                    src={img03}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Drinks 3</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $10.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid lunch">
                            <div className="gallery-single fix">
                                <img
                                    src={img04}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Lunch 1</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $15.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid lunch">
                            <div className="gallery-single fix">
                                <img
                                    src={img05}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Lunch 2</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $18.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid lunch">
                            <div className="gallery-single fix">
                                <img
                                    src={img06}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Lunch 3</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $20.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid dinner">
                            <div className="gallery-single fix">
                                <img
                                    src={img07}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Dinner 1</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $25.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid dinner">
                            <div className="gallery-single fix">
                                <img
                                    src={img08}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Dinner 2</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $22.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 special-grid dinner">
                            <div className="gallery-single fix">
                                <img
                                    src={img09}
                                    className="img-fluid"
                                    alt="I-mây-ngáo"
                                />
                                <div className="why-text">
                                    <h4>Special Dinner 3</h4>
                                    <p>
                                        Sed id magna vitae eros sagittis
                                        euismod.
                                    </p>
                                    <h5> $24.79</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default MenuBox;
