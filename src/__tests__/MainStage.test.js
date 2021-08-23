import React from "react";
import {render, screen} from "@testing-library/react"
import MainStage from "../components/MainStage";

describe('MainStage',  () => {

    it("Renders Header", () => {

        render(<MainStage/>);

        expect(screen.getByText("Main Stage")).toBeTruthy();

    });
});