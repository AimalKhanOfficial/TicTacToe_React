import React from 'react';
import { shallow } from 'enzyme';
import PopUp from './PopUp';
import '../../../EnzymeSetup';
import defaultUserImage from '../../../public/imgs/user1.png';

it('PopUp Component render should not throw an error', () => {
    expect(() => shallow(<PopUp />)).not.toThrowError();
})

it('PopUp Component render should not throw an error', () => {
    let popUpWrapper = shallow(<PopUp isVisible={false}/>);
    expect(popUpWrapper.find('#popup_container').prop('style')).toHaveProperty('display', 'none');
})

it('PopUp Component with image should display a default image if expression image prop is undefined', () => {
    let popUpWrapper = shallow(<PopUp isVisible={false}/>);
    expect(popUpWrapper.find('#expression_image').prop('src')).toEqual('./imgs/' + defaultUserImage);
})

it('PopUp Component close button onClick should respond to click event', () => {
    const fnClick = jest.fn();
    let popUpWrapper = shallow(<PopUp closePopUp={fnClick}/>);
    popUpWrapper.find('button').simulate('click');
    expect(fnClick).toHaveBeenCalled();
})