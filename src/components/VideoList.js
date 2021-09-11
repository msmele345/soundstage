import React from "react";
import ReactPlayer from "react-player";
import {GridList, GridListTile} from '@material-ui/core'


const VideoList = ({videos = []}) => {
    return (
        <div>
            <GridList cellHeight={400} cols={2} style={{ width: 1600, height: 600 }}>
                {videos.map((data, i) => (
                    <GridListTile key={'video-' + i}>
                        <ReactPlayer url={data.url}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
};

export default VideoList;