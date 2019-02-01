import React from "react";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@material/button/dist/mdc.button.min.css";
import "./Home.css";

const Home = () => (
	<div className="glide">
		<div className="glide__track" data-glide-el="track">
			<ul className="glide__slides" style={{ margin: 0 }}>
				<li className="glide__slide">
					<div className="Screen Screen--Image-One">
						<div className="Message center-content">
							<span className="mdc-typography--headline5">
								Share your latest movie experience with your closest friends!
							</span>
						</div>
						<div className="Action">
							<div className="mdc-layout-grid">
								<div className="mdc-layout-grid__inner">
									<div className="center-content mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
										<button id="CTAButton" className="mdc-button mdc-button--raised">
											Write a Review
											<i
												className="material-icons mdc-button__icon"
												aria-hidden="true"
												style={{ fontSize: 30, height: 30 }}
											>
												keyboard_arrow_right
											</i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>

				<li className="glide__slide">
					<div className="Screen Screen--Image-Two">
						<div className="mdc-layout-grid Callout">
							<div className="mdc-layout-grid__inner">
								<div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
									<p className="Date">September 20, 2017</p>
									<span className="Callout__Headline">Write your own review now!</span>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
);

export default Home;
