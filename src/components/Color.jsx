import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Color = (props) => {
    // const breadStyle = {
    //     backgroundColor: "brown"
    // }
    return (
            <div className="box_size d-flex" style={{backgroundColor : props.text}}>
                {
                    props.text
                }
            </div>
    )
}

export default Color;