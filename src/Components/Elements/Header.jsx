import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { FaDiscord} from 'react-icons/fa'
import { AiOutlineTwitter} from 'react-icons/ai'



export default function Header() {
    const history = useHistory();
    return (
        <>
            <div>
                <div className="wrapper">
                    <section className='section1 '>
                        <Navbar className="navbar2  mx-auto  " bg="transparent" variant='transparent' expand="lg">
                            <Container>
                                <Navbar.Brand className="d-block d-lg-none" ><img className="header-logo" src={process.env.PUBLIC_URL + "assets/img/logo2.png"} alt="" onClick={() => history.push('/')} /></Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className=' '>
                                    <Nav className="col d-flex  align-items-lg-center ">
                                        <div className='d-flex col justify-content-center flex-lg-row flex-column algn-items-lg-center align-items-center gap-lg-4 gap-2 '>
                                            <div className="me-xxl-5 pe-lg-0  pe-xl-0 pe-xxl-5  ">
                                                <div className='me-lg-5 pe-xl-5'>
                                                    <Navbar.Brand className="d-none d-lg-block pe-lg-5 me-lg-5" ><img className="header-logo" src={process.env.PUBLIC_URL + "assets/img/logo2.png"} alt="" onClick={() => history.push('/')} /></Navbar.Brand>
                                                </div>
                                            </div>

                                            <li className="nav-item">
                                                <a href='#home' className="nav-link text-white" aria-current="page">Home</a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="#docs" className="nav-link text-white "  tabIndex={-1} aria-disabled="true"><span>
                                                    Docs</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#nft" className="nav-link text-white" >NFTs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#roadmap" className="nav-link text-white">Roadmap</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#faq" className="nav-link text-white" >FAQ</a>
                                            </li>
                     <div className="d-lg-flex d-block">
                     <li className="nav-item">
                                                <Link to="home#contact" className="nav-link fs-5 text-white" ><FaDiscord /></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="home#contact" className="nav-link fs-5 text-white" ><AiOutlineTwitter/></Link>
                                            </li>
                     </div>
                                            <div className=' align-items-center d-flex  gap-3 text-center'>
                                                <button className="btn btn-warning border_radius text-white  GiHamburgerMenu ">Launch App</button>


                                            </div>
                                        </div>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <div className="container py-5 " id="home">
                            <div className='row align-items-center'>
                                <div className="col-lg-1 col-0"></div>
                                <div className='col-lg-6 ps-lg-5'>
                                    <h1 className='heading_1 text-center text-lg-start pt-3' data-aos="fade-left" data-aos-duration="3000">
                                        Into The Field I Go, To Harvest The Potential Nodes
                                    </h1>
                                    <h5 className='Poppins text-center text-lg-start ' data-aos="fade-right" data-aos-duration="3000"> Acquire the land,  plant the seed and enjoy the yeild</h5>
                                    <div className='d-flex justify-content-lg-start justify-content-center gap-3 pt-3'>
                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <Link className='btn btn-warning text-white Poppins fs-7 px-3 py-2'>Whitepaper</Link>
                                        </div>
                                        <div data-aos="fade-down" data-aos-duration="3000">
                                            <Link className='btn btn_green_2 text-white Poppins fs-7 px-3 py-2'>Roadmap</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="d-flex justify-content-center">
                                        <div className="img_1" data-aos="fade-up" data-aos-duration="3000">
                                            <img className='img-fluid' src="assets/img/banner_img.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-1 col-0"></div>


                            </div>
                        </div>

                    </section>
                    <div className='leaf1_div d-none d-xl-block'>
                        <img className='img-fluid' src="assets/img/leaf-left.png" alt="" data-aos="fade-right" data-aos-duration="3000" />
                    </div>
                    <div className='leaf2_div d-none d-xl-block' data-aos="fade-left" data-aos-duration="3000">
                        <img className='img-fluid' src="assets/img/leaf-right.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
