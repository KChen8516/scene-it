import React from 'react';
import Thanos from '../assets/thanos.jpg';
import './Info.css';

const Info = () => (
    <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">

            <div className="LogoSection mdc-layout-grid__cell">
                <img className="Logo" src={Thanos} alt="Scene It logo" />
                <p className="mdc-typography--subtitle1" style={{margin:0}}>Scene It</p>
                <span className="mdc-typography--caption" style={{color:'#bcbcbc', fontWeight:200}}>version 1.0</span>
            </div>

            <div className="mdc-layout-grid__cell">
                <div className="SectionHeader">
                    <h2>Credits</h2>
                </div>
            </div>

            <div className="mdc-layout-grid__cell">
                <ul className="mdc-list mdc-list--dense mdc-list--non-interactive" style={{paddingLeft:30}}>
                    <li className="mdc-list-item">
                        <i className="material-icons mdc-list-item__graphic">important_devices</i>
                        Designer: Sandy Chang
                    </li>
                    <li className="mdc-list-item">
                        <i className="material-icons mdc-list-item__graphic">build</i>
                        Engineer: Kai Chen
                    </li>
                </ul>
            </div>

        </div>
    </div>
);

export default Info;
