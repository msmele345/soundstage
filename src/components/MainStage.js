import React, {useEffect, useState} from "react";
import {postVideoRequest} from "../service/ApiService";
import VideoGrid from "./VideoGrid";

const MainStage = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getVideos = async () => {
            setIsLoading(true)
            const response = await postVideoRequest("The Disco Biscuits");
            if (!response.error) {
                setIsLoading(false)
                setData(response.data)
            }
        }
        getVideos();
    }, [])

    return (
        <div>
            <h2>Main Stage</h2>
            {!isLoading
                ? <VideoGrid data={data}/>
                : <></>
            }
        </div>
    )
}

export default MainStage;