import React from 'react';
import { View } from '../styles/passenger-list.styles';
import { TextInput } from 'react-native-paper';

export const PassengerListModule = () => {
    const [pilotsName, setPilotsName] = React.useState('');
    const [pilotsMass, setPilotsMass] = React.useState('');

    const [passenger1Name, setPassenger1Name] = React.useState('');
    const [passenger1Mass, setPassenger1Mass] = React.useState('');

    const [passenger2Name, setPassenger2Name] = React.useState('');
    const [passenger2Mass, setPassenger2Mass] = React.useState('');

    const [passenger3Name, setPassenger3Name] = React.useState('');
    const [passenger3Mass, setPassenger3Mass] = React.useState('');

    return (
        <>
            <View>
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Pilot's Name"
                    placeholder="Pilot's Name"
                    onChangeText={(pilotsName) => setPilotsName(pilotsName)}
                    value={pilotsName}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Pilot's mass"
                    placeholder="Pilots Mass"
                    onChangeText={(pilotsMass) => setPilotsMass(pilotsMass)}
                    value={pilotsMass}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 1's Name"
                    placeholder="Passenger1 Name"
                    onChangeText={(passenger1Name) =>
                        setPassenger1Name(passenger1Name)
                    }
                    value={passenger1Name}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 1's Mass"
                    placeholder="Passenger1 Mass"
                    onChangeText={(passenger1Mass) =>
                        setPassenger1Mass(passenger1Mass)
                    }
                    value={passenger1Mass}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 2's Name"
                    placeholder="Passenger 2's Name"
                    onChangeText={(passenger2Name) =>
                        setPassenger2Name(passenger2Name)
                    }
                    value={passenger2Name}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 2's Mass"
                    placeholder="Passenger 2's Mass"
                    onChangeText={(passenger2Mass) =>
                        setPassenger2Mass(passenger2Mass)
                    }
                    value={passenger2Mass}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 3's Name"
                    placeholder="Passenger 3's Name"
                    onChangeText={(passenger3Name) =>
                        setPassenger3Name(passenger3Name)
                    }
                    value={passenger3Name}
                />
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Passenger 3's Mass"
                    placeholder="Passenger 3's Mass"
                    onChangeText={(passenger3Mass) =>
                        setPassenger3Mass(passenger3Mass)
                    }
                    value={passenger3Mass}
                />
            </View>
        </>
    );
};
