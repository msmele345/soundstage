import React, {useEffect, useState} from "react";
import {postVideoRequest} from "../service/ApiService";
import VideoGrid from "./VideoGrid";
import {useForm} from "react-hook-form";
import {Loader} from "semantic-ui-react";

const MainStage = () => {

    const [data, setData] = useState();
    const {register, errors, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        console.log("FORM DATA", data)
        const {queryTerm} = data;

        setIsLoading(true)
        const response = await postVideoRequest(queryTerm);

        if (!response.error) {
            setIsLoading(false)
            setData(response.data)
        }
    }

    const renderLoader = () => (
        <Loader
            data-testid="loading"
            type="Puff"
            color="#00BFFF"
            height={300}
            width={100}
            timeout={3000}
        />)

    return (
        <div>
            <h2 className={"stageName"}>Main Stage</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={"bandForm"}>
                <section>
                    <label htmlFor="band-search">Band Name:</label>
                    <input aria-label="band-name" {...register("queryTerm")} />
                </section>
                <input  aria-label="submit" type="submit" value="Get Shows"/>
            </form>
            {!isLoading ? <VideoGrid data={data}/> : renderLoader()}
        </div>
    )
}

export default MainStage;
