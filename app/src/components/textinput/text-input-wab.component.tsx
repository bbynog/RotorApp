import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './text-input-wab.styles';
import { Spacer } from '../spacer/spacer.component';

type PersonDataProps = {
    label: string;
    placeholder: string;
};

export const PersonData = ({ label, placeholder }: PersonDataProps) => {
    const [name, setName] = useState('');
    const [mass, setMass] = useState('');
    return (
        <View style={styles.PersonDataContainer}>
            <View style={styles.NameInputContainer}>
                <TextInput
                    mode="outlined"
                    dense={true}
                    label={label}
                    placeholder={placeholder}
                    onChangeText={(name) => setName(name)}
                    value={name}
                />
            </View>
            <View style={{ marginTop: 25, marginBottom: 25 }} />
            <View style={styles.MassInputContainer}>
                <TextInput
                    mode="outlined"
                    dense={true}
                    label="Mass"
                    onChangeText={(mass) => setMass(mass)}
                    value={mass}
                />
            </View>
        </View>
    );
};
