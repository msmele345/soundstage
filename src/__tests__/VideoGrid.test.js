import React from "react";
import {render, screen} from "@testing-library/react"
import VideoGrid from "../components/VideoGrid";


describe("Video Grid", () => {

    it('Render Title', function () {

        const data = {};

        render(<VideoGrid  data={data}/>)

        expect(screen.getByRole('heading').textContent).toEqual("Grid will go here")
    });
});