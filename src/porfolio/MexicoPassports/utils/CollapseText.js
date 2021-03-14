import React, {Component, useState }  from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';
import Collapse from 'react-bootstrap/Collapse';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class CollapseText extends Component {
   
    render(){
        let projectData = this.props.projectData; 
        const [open, setOpen] = useState(false);
        return(
            <>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </>
        )}
}
export default CollapseText;