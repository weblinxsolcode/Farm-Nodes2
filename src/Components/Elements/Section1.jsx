import React from 'react'
import { Link } from 'react-router-dom'

export default function Section1() {
    return (
        <div>

            <section className='section1 pt-5'>

                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="img_1">
                            <img className='img-fluid' src="assets/img/section1.png" alt="" />
                        </div>

                    </div>
                    <h1 className='heading_1 text-center pt-3'>
                        The Next Gen of  <br /> Node Protocol on Polygon
                    </h1>
                    <h5 className='Poppins text-center '> Your favorite income</h5>
                    <div className='d-flex justify-content-center gap-3 pt-3'>
                        <div>
                            <Link className='btn btn-warning text-white Poppins fs-7 px-3 py-2'>Whitepaper</Link>
                        </div>
                        <div>
                            <Link className='btn btn_green_2 text-white Poppins fs-7 px-3 py-2'>Roadmap</Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
