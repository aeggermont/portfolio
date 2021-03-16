import React, {Component, useState }  from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';
import Collapse from 'react-bootstrap/Collapse';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Findings() {
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
          Read more on findings
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <br></br>
            <h3>Research Findings Summary</h3>
            <br></br>

               
            <div className="container">
                <div className="row">
                  <div className="col-md-10 d-flex">
                    <ul>
                      <li>Trust in authority: Overall, 4/5 of the participants said they trusted the government with their personal information, and that they would not have any issues with supplying the bot with any personal information it requested.</li>
                      <li>What’s difficult about the current experience: People were overwhelmed by documentation and wanted help keeping track of what documents were needed. The top pain point we identified was around errors in documentation. Participants said these errors were often identified over the course of several in-person visits, which made the passport renewal process frustrating, stressful, and inefficient. They also wanted humanized and empathetic personalization, since different documents may be required based on the individual’s circumstances. </li>
                      <li>Expectations of the passport renewal experience: Because of the frustration around documentation, people wanted a way to check their documents beforehand to make sure they are complete and error-free. They also wanted to be able to book an appointment online, where they could pick the time and date of their appointment. However, they also wanted human support when needed. Some participants also noted that some people, such as seniors, may not want to use the bot at all. Once people arrived at their in-person appointment, they wanted to pick up their passports quickly. They also wanted reminders for those appointments beforehand.</li>
                      <li>Expectations of the bot’s functionalities: People wanted to be able to access the bot on both web and mobile devices. Some participants specifically mentioned WhatsApp. People also wanted the bot to be able to answer questions based on their specific needs/situation, and to be able to look up their info, if possible. </li>
                      <li>Bot personality: Participants want to interact with a bot that is friendly, courteous and respectful, helpful, conversational, kind, open-minded and inclusive, and clear. Most participants suggested that they would like the bot to address them informally, but at least one participant suggested that it could ask the user how they wanted to be addressed.</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </Collapse>
      </>
    );
}




function CultureTheory() {
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
          Read Culture Theory Analysis
        </Button>


        
        <Collapse in={open}>
          <div id="example-collapse-text">
          <br></br>
          <p> Hofstede's cultural dimensions theory is a framework for cross-cultural communication, developed 
          by Geert Hofstede. It shows the effects of a society's culture on the values of its members, and 
          how these values relate to behaviour, using a structure derived from factor analysis.</p>

          <div className="culture_theory_img">
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/Culture-Theory-Findings.png')} alt=""/></Reveal>
          </div>
          <br></br>

          <ul>
            <li> First, Mexico’s high power distance and low long-term orientation scores indicate an established hierarchy and system of rules that is not often questioned. This could mean, for example, that many people trust the government with their information or personal data, and respect governmental requirements. </li>
            <li> According to Hoftede’s model, Mexico also has a low score on individualism, meaning the culture prizes relationships, especially those of family or extended family groups. Because of this, pursuing a supportive, personal, and conversational experience like the one the government had envisioned seemed like a good way to improve the relationship between the government and its citizens. Our research reflects this as well. </li>
            <li> Mexico also scores high on masculinity, meaning that it's a work-driven society that values decisiveness and assertiveness. This, combined with Mexico’s high uncertainty avoidance score, might indicate that citizens would be frustrated with a process that lacks clarity and an unsure outcome. You can find more detail on this in our findings below. </li>
            <li> There are two other important cultural theories that impact design: high  vs. low context communication and polychronic versus monochronic. Mexico is both high context and polychronic, meaning that personalization is important and that people may prefer to multitask as opposed to focus on one thing at a time. In our next post, you’ll see that our recommended design approach ultimately blends a conversational and web experience into one interaction that feels guided, informative, and friendly. </li>
          </ul>

                  </div>
        </Collapse>
      </>
    );
}


function DataAnalysis() {
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
         Read more on interview analysis
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">  

            <br></br>
            <h4> Participants</h4>

            <p> A total of five interview participants were recruited through snowball sampling considering time and resource constraints. Below is a table of our participants’ profiles (with fictitious names and avatars for privacy protection). </p>
                     
            <div className="culture_theory_img">
              <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/participants-profile-visual.png')} alt=""/></Reveal>
            </div>  

            <br></br>
            <h4>Data analysis</h4>
            <br></br>

            <h5>Data Familiarization and Open Codes</h5>

            <p>We collected qualitative interview data in two languages (Spanish and English) from our five participants. To familiarize ourselves with the data, 
                Antonio (native Spanish speaker of the team) translated the Spanish transcript into English so that the English speakers of the team could interpret 
                the interview data. Through a thorough review of the text and audio recordings, we created sticky notes of the raw data from each participant by 
                extracting a series of thoughts, suggestions, and feelings from their answers to the interview questions. An example of the transcript analysis 
                looks like: </p>

            <div className="culture_theory_img">
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/interview-extract.png')} alt=""/></Reveal>
            </div>
        
            <h5>Afinity Diagram</h5>

            <p>Next, we did an affinity diagram, where we generated open codes by grouping together the sticky notes with similar themes. Here’s a screenshot of part of the diagram (you can view the full version here). </p>

            <br></br>
            
            <h5>Behavioral Code Table</h5>

            <p>Finally, we created a total of nine axial codes by identifying the relationships between open codes based on preconceived themes informed by interview 
               questions and inductive reasoning. We then summarized the key insights under each axial code. </p>

            <div className="culture_theory_img">
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/axial-code-table.png')} alt=""/></Reveal>
            </div>

            <br></br>   
               
            <p>An example of part of the final code table is below</p>

            <div className="culture_theory_img"> 
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/code-table.png')} alt=""/></Reveal>
            </div>
         

 

          </div>


        </Collapse>
      </>
    );
}


function CodeTable() {
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
          read final code table
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
             <br></br>
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

          </div>
        </Collapse>
      </>
    );
}



/**/



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
                                  
                                    <p> Our research team investigated people’s experiences of appliying and renewing their Mexican passports. Our primary and secondary research consisted of semi-structured interviews with local Mexican citizens, applied cultural theory to understand what design affordances would be a good fit for this culture, 
                                        and code-design sessions with local Mexican citizens to chatbot personality design. </p>
                        
                                    <br></br>
                                    <hr></hr>
                                    <h3>Using Culture Theory to Drive the Initial Design</h3>
                                    <br></br>
                                      <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 d-flex align-items-center">
                                            <p> To effectively design a government product, understanding the citizens and 
                                                their experience is critical. For this purpose, we use the culture theory of 
                                                Geert Hofstede who has characterized countries and their citizens based on different metrics. 
                                               
                                                Hofstede’s cultural theory offered some valuable insights for our team regarding what design 
                                                affordances might make sense for this experience.</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="culture_theory_img">
                                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/cultural-diferences.jpg')} alt=""/></Reveal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



              
                                    <CultureTheory></CultureTheory>
                                       
                                    <br></br>
                                    <hr></hr>
                                    <h3>Semi-structured Interviews</h3>
                                    <br></br>
                                    <p>We gathered insights from citizens of Mexico living in their home country. We chose a semi-structured interview method as it allows for more open-ended responses while retaining some planning, which allowed us to gather more in-depth information on the participants’ experiences with passport renewal in Mexico.</p>
                                   
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <div className="culture_theory_img">
                                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/participantPhoto1.png')} alt=""/></Reveal>
                                                </div>
                                            </div>

                                            <div className="col-sm-4 d-flex align-items-center">
                                                <div className="culture_theory_img">
                                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/participantPhoto2.png')} alt=""/></Reveal>
                                                </div>
                                            </div>

                                            <div className="col-sm-4 d-flex align-items-center"> 
                                                <div className="culture_theory_img">
                                                    <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/participantPhoto3.png')} alt=""/></Reveal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <DataAnalysis></DataAnalysis>
                                             
                                    <br></br>
                                    <hr></hr>

                                    <h4>Research Findings</h4>
                                    <br></br>
                                    <p> Based on the data we collected and our thematic analysis, we found that citizens of 
                                        Mexico would like a more personalized experience during the initial process for the 
                                        passport application and renewal process. A chat bot would certainly help if there the 
                                        system could guide applicants to ensure they have the proper documentation and requirements 
                                        before their interview. We distilled our research data into 5 key findings:
                                    </p>
                                    
                                    <div className="culture_theory_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/Final-Code-Table.png')} alt=""/></Reveal>
                                    </div>
                                    <Findings></Findings>
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
