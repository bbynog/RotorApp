import * as React from 'react';
import { View } from '../styles/passenger-list.styles';
import { PersonData } from '../../../components/textinput/text-input-wab.component';
export const PassengerListModule = () => {
    return (
        <>
            <View>
                <PersonData
                    label={"Pilot's Name"}
                    placeholder={"Type pilot's name"}
                />
                <PersonData
                    label={"Passenger 1's Name"}
                    placeholder={"Type passenger 1's name"}
                />
                <PersonData
                    label={"Passenger 2's Name"}
                    placeholder={"Type passenger 2's name"}
                />
                <PersonData
                    label={"Passenger 3's Name"}
                    placeholder={"Type passenger 3's name"}
                />
            </View>
        </>
    );
};
