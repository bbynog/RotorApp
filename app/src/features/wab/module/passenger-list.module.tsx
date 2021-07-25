import * as React from 'react';
import { View } from '../styles/passenger-list.styles';
import { TextInputWab } from '../../../components/spacer/textinput/text-input-wab';
export const PassengerListModule = () => {
    return (
        <>
            <View>
                <TextInputWab
                    label={"Pilot's Name"}
                    placeholder={"Type pilot's name"}
                />
                <TextInputWab
                    label={"Pilot's Mass"}
                    placeholder={"Type pilot's mass"}
                />
            </View>
        </>
    );
};
