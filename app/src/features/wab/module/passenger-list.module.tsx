import React from 'react';
import { View, ImageBackground, Dimensions, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { souls } from '../../../infrastructure/contexts/souls';
import { InputData } from '../../../components/textinput/text-input-wab.component';
import { styles } from '../styles/passenger-list.styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ButtonInputData } from '../../../components/textinput/button-input-data.component';

export const PassengerListModule = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <ImageBackground
            source={require('../../../../assets/heli-proto-background-3.png')}
            style={{
                ...styles.backGroundStyle,
                height: Dimensions.get('window').height - tabBarHeight * 2,
            }}
        >
            <View style={styles.moduleContainer}>
                <ButtonInputData header="Pilot" massType="kgs" />
            </View>
        </ImageBackground>
    );
};

// <ImageBackground
//     source={require('../../../../assets/heli-proto-background-3.png')}
//     style={{
//         ...styles.backGroundStyle,
//         height: Dimensions.get('window').height - tabBarHeight * 2,
//     }}
// >
//     <Formik
//         initialValues={souls}
//         onSubmit={(values) => console.log(values)}
//     >
//         {({ handleChange, handleBlur, handleSubmit, values }) => (
//             <View style={styles.moduleContainer}>
//                 <View style={styles.soulContainerStyles}>
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('pilot.name')}
//                         onBlur={handleBlur('pilot.name')}
//                         value={values.pilot.name}
//                         label={`Pilot's Name`}
//                         style={styles.nameInputStyles}
//                     />
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('pilot.mass')}
//                         onBlur={handleBlur('pilot.mass')}
//                         value={values.pilot.mass}
//                         label={'Mass'}
//                         style={styles.massInputStyles}
//                     />
//                 </View>
//                 <View style={styles.soulContainerStyles}>
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p1.name')}
//                         onBlur={handleBlur('p1.name')}
//                         value={values.p1.name}
//                         label={`P1's Name`}
//                         style={styles.nameInputStyles}
//                     />
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p1.mass')}
//                         onBlur={handleBlur('p1.mass')}
//                         value={values.p1.mass}
//                         label={'Mass'}
//                         style={styles.massInputStyles}
//                     />
//                 </View>
//                 <View style={styles.soulContainerStyles}>
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p2.name')}
//                         onBlur={handleBlur('p2.name')}
//                         value={values.p2.name}
//                         label={`P2's Name`}
//                         style={styles.nameInputStyles}
//                     />
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p2.mass')}
//                         onBlur={handleBlur('p2.mass')}
//                         value={values.p2.mass}
//                         label={'Mass'}
//                         style={styles.massInputStyles}
//                     />
//                 </View>
//                 <View style={styles.soulContainerStyles}>
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p3.name')}
//                         onBlur={handleBlur('p3.name')}
//                         value={values.p3.name}
//                         label={`P3's Name`}
//                         style={styles.nameInputStyles}
//                     />
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('p3.mass')}
//                         onBlur={handleBlur('p3.mass')}
//                         value={values.p3.mass}
//                         label={'Mass'}
//                         style={styles.massInputStyles}
//                     />
//                 </View>
//                 <View style={styles.soulContainerStyles}>
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('fuel.main')}
//                         onBlur={handleBlur('fuel.main')}
//                         value={values.fuel.main}
//                         label={`Main Tank`}
//                         style={styles.fuelInputStyles}
//                     />
//                     <TextInput
//                         mode={'outlined'}
//                         onChangeText={handleChange('fuel.aux')}
//                         onBlur={handleBlur('fuel.aux')}
//                         value={values.fuel.aux}
//                         label={'Aux. Tank'}
//                         style={styles.fuelInputStyles}
//                     />
//                 </View>
//                 <Button
//                     onPress={handleSubmit}
//                     children="Submit"
//                     mode="outlined"
//                 />
//             </View>
//         )}
//     </Formik>
// </ImageBackground>
