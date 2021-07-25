import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

type TextInputWabProps = {
    label: string;
    placeholder: string;
};

export const TextInputWab = ({ label, placeholder }: TextInputWabProps) => {
    const [text, setText] = useState('');
    return (
        <TextInput
            mode="outlined"
            dense={true}
            label={label}
            placeholder={placeholder}
            onChangeText={(text) => setText(text)}
            value={text}
        />
    );
};
