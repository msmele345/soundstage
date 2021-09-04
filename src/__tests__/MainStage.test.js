import React from "react";
import {render, screen} from "@testing-library/react"
import MainStage from "../components/MainStage";
import {postVideoRequest} from "../service/ApiService"

jest.mock("../service/ApiService.js")
describe('MainStage', () => {

    it("Renders Header", () => {

        const data = [
            {
                "_id": null,
                "title": "The Disco Biscuits - Tractorbeam Jam →  Part 1 of 2 - 7/16/21 @ Coolray Field, GA",
                "url": "https://www.youtube.com/watch?v=SIukW17yz-c",
                "thumbnailUrl": "https://i.ytimg.com/vi/SIukW17yz-c/default.jpg",
                "description": "A great Tractorbeam segment that surely had everyone in the field movin' and shakin.' This is THE UNTZ! Hit it Boys. Performed LIVE Friday 7/16/21 - CoolRay ..."
            }, {
                "_id": null,
                "title": "The Disco Biscuits - Home Again",
                "url": "https://www.youtube.com/watch?v=s-AlmDtJHuE",
                "thumbnailUrl": "https://i.ytimg.com/vi/s-AlmDtJHuE/default.jpg",
                "description": "Disco Biscuits - Home Again yeah... good song."
            }
        ]


        const requestBody = {queryTerm: "The Disco Biscuits"};

        postVideoRequest.mockResolvedValueOnce(data)

        render(<MainStage/>);

        expect(screen.getByText("Main Stage")).toBeTruthy();
        expect(screen.getAllByRole('heading')[1].textContent).toEqual("The Disco Biscuits - Tractorbeam Jam →  Part 1 of 2 - 7/16/21 @ Coolray Field, GA")

        expect(postVideoRequest).toHaveBeenCalledWith("http://localhost:8080/api/v1/videos", requestBody);
    });
});