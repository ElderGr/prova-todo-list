import { useNavigation } from '@react-navigation/native'
import react, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { api } from '../api'
import { signInSchema } from '../schemas/SignIn'
import AuthContext from '../context/auth'

function SignIn(){
    const navigation = useNavigation()
    const { setUser } = useContext(AuthContext)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(){
        try{
            signInSchema.validateSync({
                email,
                password
            })
            
            const { data } = await api.post('/auth', {
                email, 
                password
            })

            
            setUser(data.token)
            navigation.navigate('Home')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} value={email} onChangeText={(e) => setEmail(e)}  placeholder='E-mail'></TextInput>
                <TextInput style={styles.input} value={password} onChangeText={(e) => setPassword(e)} placeholder='Senha'></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 40
    },
    input: {
        borderWidth: 1,
        width: '',
    },
    button: {
    }
});

export default SignIn