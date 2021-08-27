import React from "react";
import mockAxios from "axios"
import {render} from "@testing-library/react"
import {postVideoRequest} from "../service/ApiService";


describe("Api Service", () => {

    it('call endpoint with provided post body details', function () {

        const request = { queryTerm: "Phish" };

        const serverResponse = {title: "camden show", description: "Show from last fall", url: "www.url.com"}

        mockAxios.post.mockResolvedValue(serverResponse);

        const actual = postVideoRequest("Phish");

        expect(mockAxios.post).toHaveBeenCalledWith(`http://localhost:8080/api/v1/videos`, request)
    });
});