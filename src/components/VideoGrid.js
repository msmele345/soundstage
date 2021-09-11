import React from "react";
import ReactPlayer from "react-player"
import VideoList from "./VideoList";

const VideoGrid = ({data}) => {

    const fetchVideos = (newData) => {
        if (newData) {
            return newData.map(vid => {
                return (
                    <div>
                        <ul>
                            <li>
                                <h4>{vid.title}</h4>
                                <ReactPlayer
                                    url={vid.url}
                                    width='100%'
                                    height='100%'
                                />
                            </li>
                        </ul>
                    </div>
                )
            });
        }
    };

    return (
        <div>
            {data
                ? <VideoList videos={data}/>
                : <></>
            }
        </div>
    )
};

export default VideoGrid;