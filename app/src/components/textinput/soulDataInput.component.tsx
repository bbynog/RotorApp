import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Modal, Portal, Provider } from 'react-native-paper';
import { styles } from './soulDataInput.styles';

type ButtonInputDataProps = {
    header: string;
    massType: string;
};
export const ButtonInputData = ({ header, massType }: ButtonInputDataProps) => {
    const [name, setName] = useState('Gabriel');
    const [mass, setMass] = useState('70');

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <Provider>
            <Portal>
                <Modal
                    visible={modalVisible}
                    onDismiss={hideModal}
                    contentContainerStyle={{
                        padding: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <Text>lol</Text>
                </Modal>
            </Portal>
            <TouchableOpacity onPress={showModal}>
                <View style={styles.viewDataContainer}>
                    <Text style={styles.headerTextStyles}>{header}</Text>
                    <Text style={styles.textNameStyles}>{name}</Text>
                    <Text style={styles.textMassStyles}>
                        {mass} {massType}
                    </Text>
                </View>
            </TouchableOpacity>
        </Provider>
    );
};
