import React from "react";
import {shallow} from 'enzyme'
import LandingPage, {NoMatch} from "../components/LandingPage";
import {Switch} from 'react-router-dom';
import MainStage from "../components/MainStage";

describe('LandingPage ', () => {

    it('should render the routes correctly', () => {
        let wrapper;

        wrapper = shallow(<LandingPage/>);

        const div = shallow(<div>{wrapper.instance().renderRoutes()}</div>);

        expect(div.find(".container").length).toEqual(1);
        expect(div.find(Switch).length).toEqual(1);
        expect(div.find(Switch).children().length).toEqual(2);


        expect(div.find(Switch).childAt(0).props().path).toEqual("/");
        expect(div.find(Switch).childAt(0).props().component).toEqual(MainStage);

        expect(div.find(Switch).childAt(1).props().component).toEqual(NoMatch);
    });
});