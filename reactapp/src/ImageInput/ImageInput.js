import React from "react";
import "./ImageInput.css";
import Image from "./image.jpg";
// import Cropper from "cropperjs";

class ImageInput extends React.Component {
    // choosedImage = "";
    state = {
        initialImage: Image
    }
    // imageElement = React.createRef();
    imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({initialImage: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
        if(e.target.files[0] !== ""){
            this.choosedImage = e.target.files[0];
        }
    }
    // componentDidMount(){
        // const cropper = new Cropper(this.imageElement.current, {
        //     zoomable: false,
        //     scalable: false,
        //     aspectRatio: 0,
        //     crop: () => {
        //         const canvas = cropper.getCroppedCanvas();
        //         this.setState
        //     }
        // });
    // }

    render() {
        const {initialImage} = this.state
        return (
            <div className="page-container">
                <div className="image-container">
                    <div className="image-holder">
                        <img ref={this.imageElement} src={initialImage} alt="" id="image" className="image"/>
                    </div>
                    <input type="file" alt="Select an image" accept="image/*" className="image-input" onChange={this.imageHandler} />
                </div>
                <div className="output-result">Result here</div>
            </div>
        );
    }
}
export default ImageInput;