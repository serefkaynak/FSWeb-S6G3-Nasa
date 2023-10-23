import React from 'react';
import './Content.css';

function LoadingComponent() {
    return <h1>Huston, Huston!, we have a problem.! Nasa'ya Bağlanıyoruz...</h1>;
}

function ContentTitleComponent(){
    return <h1>Astronomy Photo Of The Day</h1>;
}

function ContentDescriptionComponent(props){

    const {nasaData} = props;

    return <div 
                className="content">
                <ContentTitleComponent />
                {<img src={nasaData?.url} className="nasa-image" />}
                {<h1>{nasaData?.title}</h1>}
                {<p>{nasaData?.explanation}</p>}
                {<p>Date: {nasaData?.date}</p>}
         </div>;
}

function Content(props) {

    const {nasaData} = props;

    return (
        !nasaData === true 
        ? <LoadingComponent /> 
        : <ContentDescriptionComponent nasaData={props.nasaData}/>
    );
}

export default Content;
