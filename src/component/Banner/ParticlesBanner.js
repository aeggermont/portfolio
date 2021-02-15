import React, {Component} from 'react';
import Particles from './Particles';
import Reveal from 'react-reveal/Reveal/';
import Typer from './Typer';

class ParticlesBanner extends Component {
    render(){
        let aaeData = this.props.aaeData;
        return(
            <section id="home">
                <div className="banner_area_two">
                    <div className="one_img" data-parallax='{"x": 0, "y": 100, "rotateZ":0}'><img className="faa-spin animated" src={require('../../image/circle-2.png')} alt=""/></div>
                    <Particles/>
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp">
                                <h2 className="wow fadeInLeft animated">I'm {aaeData.name2}</h2>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h3>{aaeData.ptext}</h3>
                            </Reveal>
                            <Typer heading={'Specialized in'} dataText={["Front-end development", "UI design", "UX Interaction Design", "User Research", "Machine Leaning Applications"]} />
                            <ul className="list_style social_icon">
                            {
                                aaeData.socialLinks && aaeData.socialLinks.map(item =>{
                                return(
                                        <li key={item.name}>
                                            <a  href={item.url}><i className={item.className}></i></a> 
                                        </li>
                                        )
                                    }
                                )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ParticlesBanner;