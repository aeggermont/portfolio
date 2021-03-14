import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

/*
 <section className={`${aClass}`} id="about">
                <div className="container">
                   

                    <Fade bottom cascade duration={1000}>

                        <h3> Ideation</h3>
                        
                        <br></br>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p> We brainstormed and came up with three design solutions  for personalized user experience:</p>
                                </div>
                           

                            </div>

                            <div className="row">
                                <div className="col-sm-4 d-flex align-items-center"> 
                        
                                <p> Option 1 - Web portal has clear information about documents, but is only used for scheduling.</p>
                                </div>
                                
                                <div className="col-sm-4 d-flex align-items-center"> <p>Option 2 </p></div>
                                <div className="col-sm-4 d-flex align-items-center"> <p>Option 3 </p></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 d-flex align-items-center"> 
                                    <div className="personalization_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization1.png')} alt=""/></Reveal>
                                    </div>
                                </div>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <br></br>
                                    <div className="personalization_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization2.png')} alt=""/></Reveal>
                                    </div>

                                </div>
                                <div className="col-sm-4 d-flex align-items-center"> 
                                   
                                    <div className="personalization_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization3.png')} alt=""/></Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
*/


class Ideation extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return( 
            <section className={`${aClass}`} id="about">
                <div className="container">
                    
                    <h2 className="t_color">Ideation</h2>
                    <br></br>
                    <p>We brainstormed and came up with three design solutions  for personalized user experience:</p>

                    <div className="row">
                        <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-6 d-flex align-items-center">
                            <p className="t_color">Option 1 - Web portal has clear information about documents, but is only used for scheduling.</p>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-4 d-flex align-items-center">
                            <div className="personalization_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization1.png')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>

                    <br></br>
            
                    
                    <div className="row">
                        <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-6 d-flex align-items-center">
                            <p className="t_color">Option 2 - Bot schedules appointments, and a human in the loop completes documentation checking asynchronously and validation without further personalization.</p>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-4 d-flex align-items-center">
                            <div className="personalization_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization2.png')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>

                    <br></br>
                   
                    <div className="row">
                    <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-6 d-flex align-items-center">
                            <p className="t_color">Option 3 - Bot disambiguates the application and renewal experience based on individual needs and delivers personalized instructions.</p>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center"></div>
                        <div className="col-sm-4 d-flex align-items-center">
                            <div className="personalization_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/personalization3.png')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
           
        )
    }
}
export default Ideation;
