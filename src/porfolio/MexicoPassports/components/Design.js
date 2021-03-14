import React, {Component, useState }  from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


/*
<Fade bottom cascade duration={1000}>
    <div className="about_content">
        <h2 className="t_color">The Problem </h2>
        <br></br>
        <p>{projectData.problemStatement[0]}</p>
        
        <h2 className="t_color">The Challenge</h2>
        <p>{projectData.problemStatement[1]}</p>
    </div>
</Fade>
*/

function CurrentFlow() {
    const [open, setOpen] = useState(false);   
    
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          size="sm"
          variant="link"
        >
          Read more on current user flow
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">    
            <div className="container">
                <br></br>
                <h5> Current User Flow</h5>
                <div className="row">
                  <div className="col-md-10 d-flex">
                  The current passport application process is a synchronous application 
                  process which is linear. The applicant must do their own research and 
                  in some cases do a best guess for the required documentation to apply 
                  or renew their passport. Once they feel confident they have all the 
                  documentation required, they schedule an appointment with a government 
                  office branch via phone or online. 
                  </div>
                </div>
              </div>
          </div>
        </Collapse>
      </>
    );
}

function ProposedFlow() {
    const [open, setOpen] = useState(false);   
    
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          size="sm"
          variant="link"
        >
          Read more on proposed user flow
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">    
            <div className="container">
                <br></br>
                <h5> Current User Flow</h5>
                <div className="row">
                  <div className="col-md-10 d-flex">
                  The current passport application process is a synchronous application 
                  process which is linear. The applicant must do their own research and 
                  in some cases do a best guess for the required documentation to apply 
                  or renew their passport. Once they feel confident they have all the 
                  documentation required, they schedule an appointment with a government 
                  office branch via phone or online. 
                  </div>
                </div>
              </div>
          </div>
        </Collapse>
      </>
    );
}


class Design extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container"> 
                    <br></br>
                    <br></br>
                    <Fade bottom cascade duration={1000}>
                        <h2 className="t_color"> Interaction Design and Prototyping</h2>
                        <br></br>
                        <div className="row">
                            <div className="col-sm-9 d-flex align-items-center">
                                <p>The current passport application process is bureaucratic,  linear and synchronous. 
                                    We wanted to streamline the process by making it interactive and guide applicants with a 
                                    virtual assistant and a human in the loop components during the process. </p>
                            
                            </div>
                        </div>
                        <CurrentFlow></CurrentFlow>
                        <br></br>
                    </Fade>


                    <div className="row">
                        <div className="col-sm-12 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <div className="interaction_flows_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/current-interaction-flow.png')} alt=""/></Reveal>
                                    </div>
                                </div>
                            </Fade>
                            
                        </div>
                       
                    </div>
                    <br></br>

                    <Fade bottom cascade duration={1000}> 
                        <div className="row"> <h4> Proposed user flow</h4> </div>
                        <div className="row">
                            <div className="col-sm-9 d-flex align-items-center">
                                <p>Our proposed interaction design solution is an asynchronous application process with some level 
                                of personalization when applicants interact with the bot. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-9 d-flex ">
                                <ProposedFlow></ProposedFlow>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 d-flex align-items-center">
                                <Fade bottom cascade duration={1000}>
                                    <div className="about_content">
                                        <div className="interaction_flows_img">
                                            <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/proposed-interaction-flow.png')} alt=""/></Reveal>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                    

                    <Fade bottom cascade duration={1000}> 
                        <div className="row">
                            <h4> Participatory and Co-design Research</h4>
                        </div>
                        <div className="row">
                            <div className="col-sm-9 d-flex align-items-center"> 
                                <p>To help design the chatbot with some level of personalization, we wanted to learn about how people 
                                   would envision the flow of conversation and a visual avatar for the bot. To accomplish this, we 
                                   conducted co-design participatory interviews with 15 participants residing in different states of 
                                   Mexico.  Because of the social distance limitation due to the COVID pandemic, we conducted these 
                                   interviews via zoom and providing participants with InVision Freehand Boards for co-design sessions. </p>
                            </div>
                        </div>

       

                        <br></br>
                        <div className="row">
                            <h6> Co-design Session Structure </h6>
                        </div>

                        <div className="row">
                            <div className="col-sm-9 d-flex align-items-center"> 
                                <p> During the interview we used the InVision Freehand board which had 4 activities:</p>
                            </div>
                        </div>

                      


                        <div className="row">
                            <div className="col-md-10 d-flex">
                                    <ul>
                                        <li> A demo of the bot in action.  </li>
                                        <li> Key bot personality qualities brainstorming. </li>
                                        <li> Visual  character brainstorming.</li>
                                        <li> Visual Avatar brainstorming.</li>
                                    </ul>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <h6> Sample co-design interactive freehand board</h6>
                        </div>
                        <br></br>

                        <div className="row">
                            <div className="col-sm-12 d-flex align-items-center"> 
                                <div className="code_design_img">
                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/co-design-session-board-sample.png')} alt=""/></Reveal>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <br></br>
                        <div className="row">
                            <h6> Participatory Design Thematic Analysis </h6>
                        </div>

                    <div className="row">
                            <div className="col-sm-12 d-flex align-items-center"> 
                                <div className="code_design_img">
                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/mexico-passport-afinity-diagram.png')} alt=""/></Reveal>
                                </div>
                            </div>
                    </div>

                </div>
            
            </section>
        )
    }
}
export default Design;
