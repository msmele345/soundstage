import React from "react";
import {render, screen} from "@testing-library/react"
import VideoGrid from "../components/VideoGrid";


describe("Video Grid", () => {

    it('Render Title', function () {

        const data = {
                url: "https://www.youtube.com/watch?v=SIukW17yz-c",
                title: "Disco Biscuits Main Stage Backwoods Fest"
        };

        render(<VideoGrid data={data}/>)

        expect(screen.getByRole('heading').textContent)
            .toEqual("Disco Biscuits Main Stage Backwoods Fest");
    });
});