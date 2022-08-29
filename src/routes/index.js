import react, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import PrivateRoute from '../routes/PrivateRoute'
import AuthContext from '../context/auth'

const Stack = createNativeStackNavigator();

function Routes(){
    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='SignIn' 
                        options={{
                            title: 'Acessar'
                        }} 
                        component={SignIn} 
                    />
                    <Stack.Screen 
                        options={{
                            title: 'Cadastro'
                        }} 
                        name='SignUp' 
                        component={SignUp} 
                    />
                    <Stack.Screen
                        name='Home' 
                        component={PrivateRoute} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>

    )
}

export default Routes