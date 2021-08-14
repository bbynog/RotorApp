import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './text-input-wab.styles';

type InputDataProps = {
    label: string;
    placeholder: string;
    massType: string;
    onlyMass?: boolean;
};

export const InputData = ({
    label,
    placeholder,
    massType,
    onlyMass = false,
}: InputDataProps) => {
    const [name, setName] = useState('');
    const [mass, setMass] = useState('');

    const nameInputRender = (onlyMass: boolean) => {
        if (!onlyMass) {
            return (
                <View style={styles.nameInputContainer}>
                    <TextInput
                        mode="outlined"
                        dense={true}
                        label={label}
                        placeholder={placeholder}
                        onChangeText={(name) => setName(name)}
                        value={name}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.fuelLabelContainer}>
                    <Text style={styles.fuelLabelTextStyles}>
                        {' '}
                        {label} Fuel Tank
                    </Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.personDataContainer}>
            {nameInputRender(onlyMass)}
            <View style={styles.separator} />
            <View style={styles.massInputContainer}>
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Mass"
                    placeholder={`in ${massType}`}
                    onChangeText={(mass) => setMass(mass)}
                    value={mass}
                />
            </View>
        </View>
    );
};
