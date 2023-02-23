import React from "react";

// function FucntionComponent(props){
//     return(
//         <h1>{props.name} Component</h1>
//     )
// }

// განსხვავება ფუნქციურ და კლასის კომპონენტის სინტაქსს შორს
class FucntionComponent extends React.Component{
    render(){ //კონსტრუქტორის მსგავსი იდეაა თუმცა რეაქტში ვიყენებთ რენდერ სახით. გამოიძახება მხოლოდ ობიექტის შექმნისას
        return(
            <h1>{this.props.name} Component</h1>
        )
    }
}

export default FucntionComponent;