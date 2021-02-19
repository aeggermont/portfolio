import React , {Component} from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import BlogItems from '../Blog/BlogItems';
import Reveal from 'react-reveal/Reveal/';
class Blog extends Component{
    render(){
        return(
            <section className="blog_area" id="blog">
                <div className="container">
                    <Sectiontitle Title="Current Projects" TitleP=""/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                        <BlogItems bTitle="Intelligent Virtual Asistants for Mexico's Government" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img2.jpg" Pdata=""/>
                        <BlogItems bTitle="Disney Parks, Products & Experiences" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img1.jpg" Pdata=""/>
                        <BlogItems bTitle="Monitoring Whale Behavior Using Power From The Sea" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img3.jpg" Pdata=""/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default Blog;