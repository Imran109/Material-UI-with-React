import React from 'react'
import ContentDetails from "../content-details/ContentDetails"
import "./Content.css"


interface Props {
    openStories: Function;
  }
  export default function Content({openStories}: Props) {
    return (

    <div className="content-container">
        <ContentDetails openStories={openStories}/>
    </div>  
    )
}
