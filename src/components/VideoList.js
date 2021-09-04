import React from "react";
import ReactPlayer from "react-player";

const VideoList = ({videos = []}) => {
    return (
        <div>
            {videos.map((v, i) => (
                <React.Fragment key={'video-' + i}>
                    <ul>
                        <li>
                            <h4>{v.title}</h4>
                            <ReactPlayer
                                url={v.url}
                                width='100%'
                                height='100%'/>
                        </li>
                    </ul>
                    <hr/>
                </React.Fragment>
            ))}
        </div>
    )
};

export default VideoList;