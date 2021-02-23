import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

/*
<Reveal effect="fadeInRight" duration={1500}><img src={require('../image/apporoach_man_img.png')} alt=""/></Reveal>
*/

class Research extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-12 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <br></br>
                                    <h2 className="t_color">Research</h2>
                                    <p></p>
                                    <br></br>
                                    <hr></hr>
                                    <h3>Culture Theory</h3>
                                    <p>Hofstede’s cultural theory offered some valuable insights for our team regarding what design affordances might make sense for this experience. </p>
                                    
              
                                    <div className="culture_theory_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/culturetheoryfindings.png')} alt=""/></Reveal>
                                    </div>
                                    
                                    <br></br>
                                    <p>First, Mexico’s high power distance and low long-term orientation scores indicate an established hierarchy and system of rules that is not often questioned. This could mean, for example, that many people trust the government with their information or personal data, and respect governmental requirements.</p>
                                    <p>According to Hoftede’s model, Mexico also has a low score on individualism, meaning the culture prizes relationships, especially those of family or extended family groups. Because of this, pursuing a supportive, personal, and conversational experience like the one the government had envisioned seemed like a good way to improve the relationship between the government and its citizens. Our research reflects this as well</p>
                                    <p>Mexico also scores high on masculinity, meaning that it's a work-driven society that values decisiveness and assertiveness. This, combined with Mexico’s high uncertainty avoidance score, might indicate that citizens would be frustrated with a process that lacks clarity and an unsure outcome. You can find more detail on this in our findings below. </p>
                                    <p>There are two other important cultural theories that impact design: high  vs. low context communication and polychronic versus monochronic. Mexico is both high context and polychronic, meaning that personalization is important and that people may prefer to multitask as opposed to focus on one thing at a time. In our next post, you’ll see that our recommended design approach ultimately blends a conversational and web experience into one interaction that feels guided, informative, and friendly</p> 
                                
                                    <br></br>
                                    <hr></hr>
                                    <h3>Semi-structured Interviews</h3>
                                    <p>We gathered insights from citizens of Mexico living in their home country. We chose a semi-structured interview method as it allows for more open-ended responses while retaining some planning, which allowed us to gather more in-depth information on the participants’ experiences with passport renewal in Mexico.</p>
                                    <p>The interviews were conducted remotely via Zoom, and each lasted around one hour. A moderator led each session -- assisting, probing, and debriefing the participant while a notetaker would take notes and keep track of time. The participants were first invited to share background information about themselves, and then guided through an open discussion on topics such as their last passport renewal experience, their evaluations of the process, and their thoughts on virtual assistants and chatbots.</p>

                                    <h4>Participants Profile</h4>
                                    <p>A total of five interview participants were recruited through snowball sampling considering time and resource constraints.</p>

                                    <br></br>
                                    <div className="culture_theory_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/participants-profile.png')} alt=""/></Reveal>
                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell "> </div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">P1</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">P2</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">P3</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">P4</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">P5</div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Gender</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Female</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Male</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Male</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Female</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Male</div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Ocupation</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">PhD Candidate at UNAM</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Software Engineer</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">College Student at UNAM</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Industrial Designer</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Market Research at a Government Agency </div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Language of Interview</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Spanish</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">English</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Spanish</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">English</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Spanish</div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Citizenship</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexican Citizenship</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexican Citizenship</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexican Citizenship</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexican Citizenship & Permanent Residency in Germany</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexican & Spanish Dual Citizenship</div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Place of Residence</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Oaxaca & Mexico City</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexico City</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">North of Mexico City </div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Berlin </div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Mexico City</div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-flex align-items-center participants-table-title-cell">Previous Experience with passport application</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Applied for passport for her son, as well as renewed passport for herself and her daughter last year</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Renewed his passport last November because he needed a new US tourist visa </div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Applied for his passport because he would like to travel to other countries at some point</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Renewed her passport 8 years ago as she needed it for travels</div>
                                        <div className="col-md-2 d-flex align-items-center participants-table-cell">Renewed his passport because he had a trip to the US</div>    
                                    </div>
                                    <br></br>
                                    
                                    <h4>Data Analysis</h4>
                                    <p>We collected qualitative interview data in two languages (Spanish and English) from our five participants. Through a thorough review of the text and audio recordings, we created sticky notes of the raw data from each participant by extracting a series of thoughts, suggestions, and feelings from their answers to the interview questions. An example of the transcript analysis looks like the following:</p>
                                
                                    <div className="row">
                                        <div className="col-md-6 d-flex align-items-center participants-table-title-cell ">Interview Extract</div>
                                        <div className="col-md-6 d-flex align-items-center participants-table-title-cell">Open Codes</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 d-flex align-items-center participants-table-cell">Participant: Also, I would like the virtual assistant to ask me since the beginning of the conversation how to address me such as by simply my name or by “Mr. Enrique.” I would like to feel that the virtual assistant is capable of adapting to me with courtesy. I don’t want to feel that I have to adapt to the machine. </div> 
                                        <div className="col-md-6 d-flex align-items-center participants-table-cell">
                                            User chooses how they’d like to be addressed by the bot; <br></br>
                                            Personalized service; <br></br>
                                            Courteous manner<br></br>
                                        </div> 
                                    
                                    </div>

                                    <br></br>
                                    <h4>Affinity Diagram</h4>
                                    <p>we did an affinity diagram, where we generated open codes by grouping together the sticky notes with similar themes.</p>
                                    
                                    <h4>Final Code Table</h4>
                                    <p> we created a total of nine axial codes by identifying the relationships between open codes based on preconceived themes informed by interview questions and inductive reasoning. We then summarized the key insights under each axial code</p>
                                

                                    <div className="row">
                                        <div className="col-md-6 d-flex align-items-center participants-table-title-cell">Axial Code</div>
                                        <div className="col-md-6 d-flex align-items-center participants-table-title-cell">Open Code</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 d-flex align-items-center participants-table-title-cell">Existing pain points</div>
                                        <div className="col-md-8 d-flex align-items-center participants-table-cell">
                                            <div className="row">
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Renewed his passport because he had a trip to the US</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Appointment process causes negative feelings</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Demand for an empathetic, human-centered, personalized process</div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Pre-appointment logistics challenges </div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">AEdge case</div>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 d-flex align-items-center participants-table-title-cell">Expectations for the passport renewal process </div>
                                        <div className="col-md-8 d-flex align-items-center participants-table-cell">
                                            <div className="row">
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Straightforward, quick and relaxing </div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Virtual application and appointment </div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Access to phone channel </div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Documentation error check prior to appointment</div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Pick my own date and time</div> 
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Appointment reminder</div>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 d-flex align-items-center participants-table-title-cell">Expectations for the bot’s functions</div>
                                        <div className="col-md-8 d-flex align-items-center participants-table-cell">
                                            <div className="row">
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Answer personalized questions</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Validate documents</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Easy workflow</div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Web & mobile platform availability (integration with Whatsapp) </div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">CURP look-up</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Reminders of appointment time, late policy and checklist</div> 
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Voice interaction</div>          
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 d-flex align-items-center participants-table-title-cell">Expectations for the bot’s personality and user experience</div>
                                        <div className="col-md-8 d-flex align-items-center participants-table-cell">
                                            <div className="row">
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Friendly</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Helpful</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Conversational</div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Kind</div>  
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Open-minded, inquisitive</div> 
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Courteous/respectful</div>    
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Clear</div>
                                                <div className="col-md-12 d-flex align-items-center participants-table-cell">Informal address or user gets to choose how they’d like to be addressed</div>        
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    <h4>Key Findings</h4>
                                    <br></br>
                                    <div className="culture_theory_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/key-findings.png')} alt=""/></Reveal>
                                    </div>
                                    
                                

                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Research;
