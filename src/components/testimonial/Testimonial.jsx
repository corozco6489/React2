import "./testimonial.scss"

export default function Testimonial() {
    return (
        <div className="testimony container">
            <h2 className="subtitle">Testimonials?</h2>

            <div className="testimony_grid">
                <article className="testimony_item">
                    <div className="testimony_person">
                        <img loading="lazy" src="assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt="" className="testimony_img" />
                        <div className="testimony_texts">
                            <h3 className="testimony_name">Lorem Upsum</h3>
                            <p className="testimony_verification">
                                Web Designer
                            </p>
                        </div>
                    </div>
                    <p className="testimony_review">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero provident corporis eum explicabo. Reprehenderit minima quam laborum illum, nisi accusantium a porro? Error culpa perspiciatis ratione est repudiandae sequi.
                  </p>
                </article>
                <article className="testimony_item">
                    <div className="testimony_person">
                        <img loading="lazy" src="assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt="" className="testimony_img" />
                        <div className="testimony_texts">
                            <h3 className="testimony_name">Lorem Upsum</h3>
                            <p className="testimony_verification">
                                Web Designer
                            </p>
                        </div>
                    </div>
                    <p className="testimony_review">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero provident corporis eum explicabo. Reprehenderit minima quam laborum illum, nisi accusantium a porro? Error culpa perspiciatis ratione est repudiandae sequi.
                  </p>
                </article>
            </div>
            
        </div>
    )
}
