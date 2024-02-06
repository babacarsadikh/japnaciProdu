import React from 'react'

const CtaSection = (props) => {

    return(
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="cta-left">
                            <h2>Si vous souhaitez nous rejoindre en tant que bénévole. Contactez-nous dès aujourd'hui !</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="cta-wrap">
                            <div className="cta-call">
                                <span>Appelez-nous!</span>
                                <h3>+221 77 700 48 85</h3>
                            </div>
                            <div className="cta-call">
                                <span>Envoyez-nous un email!</span>
                                <h3 style={{color: '#ffc039'}}>hello@japnaci.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;