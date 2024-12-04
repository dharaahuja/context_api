import { TouchableOpacity, Text } from "react-native";

export const PrimaryButton = ({ text, onPress })  => (
    <TouchableOpacity style={{backgroundColor: 'blue'}} onPress={onPress}>
        <Text style={{color: 'white'}}>{text}</Text>
    </TouchableOpacity>
);

export const SecondaryButton = ({text, onPress }) => (
    <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={onPress}>
        <Text style={{color: 'black'}}>{text}</Text>
    </TouchableOpacity>
)

export const DangerButton = ({text, onPress }) => (
    <TouchableOpacity style={{backgroundColor: 'red'}} onPress={onPress}>
        <Text style={{color: 'white'}}>{text}</Text>
    </TouchableOpacity>
)

