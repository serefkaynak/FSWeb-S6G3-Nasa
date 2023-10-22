import React from 'react';
import './Content.css';

function LoadingComponent() {
    return <h1>Nasa'ya Bağlanıyor...</h1>;
}

function ContentTitleComponent(){
    return <h1>Astronomy Photo Of The Day</h1>;
}

function ContentDescriptionComponent(props){
    return <div 
    className="content">
    <ContentTitleComponent />
    {props.nasaData && <img src={props.nasaData.url} alt={props.nasaData.title} className="nasa-image" />}
    {props.nasaData && <h1>{props.nasaData.title}</h1>}
    {props.nasaData && <p>{props.nasaData.explanation}</p>}
    {props.nasaData && <p>Date: {props.nasaData.date}</p>}
        </div>;
}

function Content(props) {
    return (
        !props.nasaData === true 
        ? <LoadingComponent /> 
        : <ContentDescriptionComponent />
    );
}

export default Content;
