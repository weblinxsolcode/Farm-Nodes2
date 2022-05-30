import React from 'react'
import Section4 from './Section4';
import Roadmap from './Roadmap';
import Section6 from './Section6';
import Section7 from './Section7';
import Faq from './Faq';

export default function Section3() {
    return (
        <div>

            <div className="wrapper2 ">
                <section className='section_3 pt-lg-5'>
                    <div className="wrapper6">
                        <section className='section_7' id="nft">
                            <div className="container">

                                <div className="row">

                                    <div className="col-lg-1 col-0"></div>
                                    <div className="col-lg-10 col-12">

                                        <div className="row ">
                                        <div className='Roadmap_head_background d-flex justify-content-center mx-auto' data-aos="fade-left" data-aos-duration="3000">
                                                    <h1 className='text-white Nunito text-center'>Step 1 - Buy a portal</h1>
                                                </div >
                                            <div className="col-lg-12 col-12 pt-5 ">
                                    
                                                <p className='Poppins text-center text-white pt-5'> In order to start taking advantage of FarmNodes's returns, you need to acquire at least one magical portal to teleport to your farm. </p>
                                                <div className="row pt-5 g-0">
                                                    <div className="col-lg-3">
                                                        <div className='d-flex justify-content-center mb-3'>
                                                            <img className='w-75' src="assets/img/flamingoPortal1.png" alt="" />
                                                        </div>
                                                        <p className='text-center fw-bold text-white Poppins mb-1'>2.5 FEM</p>
                                                        <p className='text-center text-white Poppins font_small'>0.6% Daily</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className='d-flex justify-content-center mb-3'>
                                                            <img className='w-75' src="assets/img/flamingoPortal1.png" alt="" />
                                                        </div>
                                                        <p className='text-center fw-bold text-white Poppins mb-1'>2.5 FEM</p>
                                                        <p className='text-center text-white Poppins font_small'>0.6% Daily</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className='d-flex justify-content-center mb-3'>
                                                            <img className='w-75' src="assets/img/flamingoPortal1.png" alt="" />
                                                        </div>
                                                        <p className='text-center fw-bold text-white Poppins mb-1'>2.5 FEM</p>
                                                        <p className='text-center text-white Poppins font_small'>0.6% Daily</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className='d-flex justify-content-center mb-3'>
                                                            <img className='w-75' src="assets/img/flamingoPortal1.png" alt="" />
                                                        </div>
                                                        <p className='text-center fw-bold text-white Poppins mb-1'>2.5 FEM</p>
                                                        <p className='text-center text-white Poppins font_small'>0.6% Daily</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-1 col-0"></div>

                                </div>
                            </div>
                        </section>

                    </div>
                    <Section4 />
                    <Section6 />
                    <Section7 />
                    <Roadmap />
                    <Faq />


                </section>

            </div>
        </div>
    )
}
