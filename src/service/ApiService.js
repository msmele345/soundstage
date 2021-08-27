import React from "react";
import axios from 'axios';
import {VIDEOS_URL} from "../constants/UrlConstants";


export const postVideoRequest = async (bandName)  => {

    let response;

    const requestBody = {
        queryTerm: bandName
    }

    try {
        response = axios.post(VIDEOS_URL, requestBody);
    } catch (e) {
        response = { error: e.error || e.message }
    }

    return response;
}