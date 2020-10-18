import React, { Component } from 'react';
import "./cropper.css";
// import InitialImage from "./image.jpg";
// import Dropzone from 'react-dropzone';

// class Cropper extends Component {
//     state = {
//         initialImage: InitialImage
//     }
//     render() {
//         const initialImage = this.state 
//         return(
//             <div >
//                 <div className="image-container">
//                     <div className="image-holder">
//                         <img src={initialImage} alt="" id="image" className="image"/>
//                     </div>

//                     <input type="file" alt="Select an image" accept="image/*" className="image-input" onChange={this.imageHandler} />
//                 </div>
//                 <div className="output-result">Result here</div>
//             </div>
//         );
//     }
// }

const Cropper = () => {
    console.log("Cropper");
    // const onDrop = Component(acceptedFiles => {
    //     // Do something with the files
    //     console.log("Hi there");
    // }, [])
    // const { getRootProps, getInputProps, isDragActive } = Dropzone({ onDrop })

    // return ( <
    //     div {...getRootProps() } >
    //     <
    //     input {...getInputProps() }
    //     /> {
    //         isDragActive ?
    //             <
    //             p > Drop the files here... < /p> : <
    //             p > Drag 'n'
    //         drop some files here, or click to select files < /p>
    //     } <
    //     /div>
    // )
}

export default Cropper;