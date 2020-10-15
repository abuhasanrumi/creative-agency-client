import React from 'react';
import slack from '../../../images/logos/slack.png'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'

const BrandArea = () => {
    return (
        <div className="row d-flex justify-content-space-between align-items-center py-5">
            <div className="col-4 col-md-2 brand-logo text-center offset-md-1">
                <img className="img-fluid w-75 py-3" src={slack} alt=""/>
            </div>          
            <div className="col-4 col-md-2 brand-logo text-center">
                <img className="img-fluid w-75 py-3" src={airbnb} alt=""/>
            </div>          
            <div className="col-4 col-md-2 brand-logo text-center">
                <img className="img-fluid w-75 py-3" src={google} alt=""/>
            </div>          
            <div className="col-4 col-md-2 brand-logo text-center">
                <img className="img-fluid w-75 py-3" src={netflix} alt=""/>
            </div>          
            <div className="col-4 col-md-2 brand-logo text-center">
                <img className="img-fluid w-75 py-3" src={uber} alt=""/>
            </div>          
        </div>
    );
};

export default BrandArea;