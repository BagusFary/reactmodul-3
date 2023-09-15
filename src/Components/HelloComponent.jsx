import React, {Component} from "react";
import './HelloComponent.css';
//Function statefull untuk merender HelloComponent
class HelloComponent extends Component {
    render() {
        return(
        <>
        <div>
            <p className='text-p'>ini adalah contoh memakai statefull</p>
        </div>
        </>
        )
    }
}
export default HelloComponent;