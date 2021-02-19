import React, {Component} from 'react';
import { Parallax} from 'react-parallax';
import Reveal from 'react-reveal/Reveal/';
import Typer from '../../../Banner/Typer';

class TypeBanner extends Component {
    render(){
        let aaeData = this.props.aaeData;
        return(
            <section id="home">
                <Parallax bgImage={require('../../../../image/intro-bg.jpg')} strength={0} className="banner_area">

                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp"><h5 className="wow fadeInUp animated">Mexico Passports!</h5></Reveal>
                            <Reveal effect="fadeInUp" duration={1500}><h2 className="wow fadeInLeft animated">{aaeData.name2}</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={2000}> <Typer heading={'I am a'} dataText={["Web Developer", "UI/UX Designer", "Interaction Design", "User Research", "Machine Leaning Applications"]} /></Reveal>
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
                </Parallax>
            </section>
        );
    }
}

export default TypeBanner;