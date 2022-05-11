import React from "react";
import Banner from './../../include/Banner';
import Exhibitcomponent from './../../Exhibitcomponent'

import logo from "./../../assets/images/euro.png";
import Theme from './../../assets/images/awardsLogo1.png';

const Programs = () =>{
    return(
        <div className="programs Small_Banner">
            <Banner 
			BannerLogo={logo}
			bannerdates="9-12 JUNE 2022 • AMSTERDAM"
			BannerTheme={Theme} />
    
    
            <div className="body_container">
                <div className="exhibit_container">
                    <div className="main_wrapper">
                       sdsd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;


