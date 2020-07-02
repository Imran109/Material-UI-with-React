import React, {useState} from 'react'
import Content from "../content/Content"
import "./Landing.css"
import Story from "../story/Story"
import stories from "../data/stories.json"


function Landing() {

    const [storiesOpen , setStoriesOpen] = useState(false);

    function openStories(){
        setStoriesOpen(true)

    }
    function closeStory(){
        setStoriesOpen(false)
    }

    return (
        <div>
            <div className = "the-one-outside">
            <Content openStories={openStories}/>
            {storiesOpen && <Story stories={stories} onClose={closeStory} />}
            </div>
        </div>
    )
}

export default Landing