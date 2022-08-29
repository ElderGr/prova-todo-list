import AuthContext from '../context/auth'
import react, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

function PrivateRoute(){
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)

    if(!user){
        navigation.navigate('SignIn')
    }
    
    return(
        <Stack.Screen name='Home' component={Home} />
    )
}

export default PrivateRoute