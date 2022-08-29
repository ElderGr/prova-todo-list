import react, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import axios from 'axios'
import { signUpSchema } from '../schemas/SignUp'
import { useNavigation } from '@react-navigation/native'
import { api } from '../api'

function SignUp(){
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    async function handleSubmit(){
        try{
            signUpSchema.validateSync({
                name,
                email,
                password,
                passwordConfirm
            })

            await api.post('https://prova-mobile.azurewebsites.net/api/users', {
                name,
                email,
                password
            })

            navigation.navigate('SignIn')
        }catch(err){
            console.log(err)
        }
    }
    return(
        <View>
            <Text>Acessar</Text>
            <View>
                <TextInput value={name} onChangeText={(e) => setName(e)} placeholder='Nome'></TextInput>
                <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder='E-mail'></TextInput>
                <TextInput value={password} onChangeText={(e) => setPassword(e)} placeholder='Senha'></TextInput>
                <TextInput value={passwordConfirm} onChangeText={(e) => setPasswordConfirm(e)} placeholder='Repetir a senha'></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text>Já tenho uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp