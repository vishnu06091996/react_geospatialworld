import React from 'react';

const AwardCategories = (props) =>{
    return(
        <>
            <div className="Award_Cate">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-transform text-center">{props.AwardHeading}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 text-center">
                        <div className="award_cate">
                            <strong> {props.AwardApplication}</strong>
                            <span> {props.AwardApplicationText}</span>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="award_cate">
                            <strong> {props.AwardTechnology}</strong>
                            <span>{props.AwardTechnologyText}</span>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="award_cate">
                            <strong>{props.AwardPolicy}</strong>
                            <span>{props.AwardPolicyText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AwardCategories;