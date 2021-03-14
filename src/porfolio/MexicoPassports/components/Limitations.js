import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

class Limitations extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <h3> Limitations</h3>
                    <div className="row">
                        <div className="col-sm-12 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <p>One limitation of the Hofstede model is that it relies largely on generalizations. 
                                        It is likely that the model we refer- enced does not account for indigenous populations 
                                        in Mexico. Given more time, we would have liked to inter- view more people due to the 
                                        complex nature of passport application and renewal. Additionally, we did not have the 
                                        opportunity to interview the participants in person - valuable contextual cues might be 
                                        missing and could have limited our understanding of their experience.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Limitations;
