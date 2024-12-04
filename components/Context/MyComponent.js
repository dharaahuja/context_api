import React, { useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { MyContext } from '../../App';

export const MyComponent = () => {
    const { value, setValue } = useContext(MyContext)

    // const textValueChange = (val) => {
    //     setValue()
    // }

    return ( 
        <View>
            <Text>{value}</Text>
            <TextInput onChangeText={setValue} value={value}/>
            {/* <Button onClick={() => setValue('Hello React')} title='Change Value' /> */}
        </View>
    )
}