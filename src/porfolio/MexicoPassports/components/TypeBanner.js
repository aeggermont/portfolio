import React, {Component} from 'react';
import { Parallax} from 'react-parallax';
import Reveal from 'react-reveal/Reveal/';
import Typer from '../../../component/Banner/Typer'; 

class TypeBanner extends Component {
    render(){
        let aaeData = this.props.aaeData;
        return(
            <section id="home">
                <Parallax bgImage={require('../../../image/MexicoVirtualAssistants/BannerImage.png')} strength={0} className="banner_area">
            
                

                    <div className="container">
                        <div className="banner_content">
                            
                            <Reveal effect="fadeInUp" duration={1500}><h2 className="wow fadeInLeft animated">Mexico's Passport Renewal Bot</h2></Reveal>
                            <Reveal effect="fadeInUp"><h5 className="wow fadeInUp animated"> Research & Design Recommendations for Mexico’s Ministry of Foreign Affairs</h5></Reveal>



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