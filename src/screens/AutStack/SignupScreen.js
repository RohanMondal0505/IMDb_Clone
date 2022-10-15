import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {GlobalVariables} from '../../Context/AppContext';

const SignupScreen = () => {
    const {colors} = useTheme();
    const {} = GlobalVariables();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Enter Name"
                value={name}
                onChangeText={txt => setName(txt)}
            />
            <TextInput
                placeholder="Enter Email"
                value={email}
                onChangeText={txt => setEmail(txt)}
            />
            <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={txt => setPassword(txt)}
            />

            <TouchableOpacity
                onPress={() => {}}
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: colors.primaryColor,
                }}>
                <Text>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;
