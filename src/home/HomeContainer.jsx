import React, { Component } from 'react'
import Glide from '@glidejs/glide';
import './Home.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

class Home extends Component {
    componentDidMount() {
        // PR pending for preventing sliding at the start and end
        // https://github.com/glidejs/glide/issues/219
        new Glide('.glide', {
            type: 'carousel',
            gap: 0
        }).mount();
    }

    render() {
        return (
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides" style={{margin: 0}}>
                        <li className="glide__slide">
                            <div className="HomePage-1">
                                <div className="mdc-layout-grid Callout">
                                    <div className="mdc-layout-grid__inner">
                                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                                        <p className="Date">September 20, 2017</p>
                                        <span className="CalloutHeadline">
                                            Scene It, review and share your favorite movies with friends.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="HomePage-2">
                                <div className="mdc-layout-grid Callout">
                                    <div className="mdc-layout-grid__inner">
                                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                                        <p className="Date">September 20, 2017</p>
                                        <span className="CalloutHeadline">
                                            Write your own review now!
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;