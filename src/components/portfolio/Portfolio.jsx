import "./portfolio.scss"
export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">

            <div className="container">
                <h2 className="subtitle">My Projects</h2>
                <div className="portfolio_grid">
                    <article className="portfolio_item">
                        <img loading="lazy" src="/assets/niclas-illg-PlGxLYGhIDg-unsplash.jpg" alt="" className="portfolio_img" />
                        <div className="portfolio_hover">
                            <h2 className="portfolio_title">
                                Project
                            </h2>
                            <a href="#" className="btn portfolio_btn">Learn More</a>
                        </div>
                    </article>
                    <article className="portfolio_item">
                        <img loading="lazy" src="/assets/niclas-illg-PlGxLYGhIDg-unsplash.jpg" alt="" className="portfolio_img" />
                        <div className="portfolio_hover">
                            <h2 className="portfolio_title">
                                Project
                            </h2>
                            <a href="#" className="btn portfolio_btn">Learn More</a>
                        </div>
                    </article>
                    <article className="portfolio_item">
                        <img loading="lazy" src="/assets/niclas-illg-PlGxLYGhIDg-unsplash.jpg" alt="" className="portfolio_img" />
                        <div className="portfolio_hover">
                            <h2 className="portfolio_title">
                                Project
                            </h2>
                            <a href="#" className="btn portfolio_btn">Learn More</a>
                        </div>
                    </article>
                    <article className="portfolio_item">
                        <img loading="lazy" src="/assets/niclas-illg-PlGxLYGhIDg-unsplash.jpg" alt="" className="portfolio_img" />
                        <div className="portfolio_hover">
                            <h2 className="portfolio_title">
                                Project
                            </h2>
                            <a href="#" className="btn portfolio_btn">Learn More</a>
                        </div>
                    </article>
                    <article className="portfolio_item">
                        <img loading="lazy" src="/assets/niclas-illg-PlGxLYGhIDg-unsplash.jpg" alt="" className="portfolio_img" />
                        <div className="portfolio_hover">
                            <h2 className="portfolio_title">
                                Project
                            </h2>
                            <a href="#" className="portfolio_btn">Learn More</a>
                        </div>
                    </article>
                </div>
            </div>
            
        </div>
    )
}
