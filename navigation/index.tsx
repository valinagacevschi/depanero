import 'react-native-gesture-handler'
import * as React from 'react'

import { Image, Button, ColorSchemeName, View } from 'react-native'
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import { Appbar, TextInput, Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#FFD100',
    accent: '#f0f0f0',
    background: '#f9f9f9',
    notification: '#ffd100',
  },
}

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#FFD100',
    notification: '#ffd100',
  },
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const theme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme
  return (
   <PaperProvider theme={theme}>
      <NavigationContainer 
        linking={LinkingConfiguration}
        theme={theme}>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ width: '100%', flex: 1, paddingTop: 32, paddingHorizontal: 16 }}>
      <TextInput
        placeholder='Password'
        // mode='outlined'
        // error={true}
        activeOutlineColor='#222'
        activeUnderlineColor='#222'
        style={{ backgroundColor: '#ffffff00' }}
        right={<TextInput.Icon name='close' />}        
      />
      <View style={{ height: 24 }} />
      <TextInput
        placeholder='Password'
        // mode='outlined'
        // error={true}
        activeOutlineColor='#222'
        activeUnderlineColor='#222'
        style={{ backgroundColor: '#ffffff00' }}
        right={<TextInput.Icon name='close' />}        
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    </View>
  );
}

function NotificationsScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const Drawer = createDrawerNavigator<RootStackParamList>()
function RootNavigator() {
  const colorScheme = useColorScheme()
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
        headerStyle: { backgroundColor: Colors[colorScheme].background },
        drawerActiveTintColor: Colors[colorScheme].tint,
        drawerStyle: {
          width: 240,
        },
      }}>
        <Drawer.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
        title: 'Awesome app1',
        drawerIcon: (props) => <FontAwesome name='user' {...props} />,
      })} />
      <Drawer.Screen name='Notifications' component={NotificationsScreen} options={{
        title: 'Awesome app2',
        drawerIcon: (props) => <FontAwesome name='history' {...props} />,
      }} />
      {/* <Drawer.Screen name='Theme' component={() => null} options={({ navigation }) => ({
        title: 'toggle theme',
        drawerIcon: (props) => <FontAwesome name='adn' {...props} />,
      })} /> */}
    </Drawer.Navigator>      
  )
}

function CustomNavigationBar(props: DrawerHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.Action icon='menu' color='black' onPress={() => props.navigation.openDrawer()} />
      <Image
        source={require('../assets/images/logo-depanero.png')}
        style={{ height: 24, width: 150 }}
        resizeMode={'contain'}
      />
    </Appbar.Header>
  );
}
