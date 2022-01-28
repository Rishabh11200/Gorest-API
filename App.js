import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
import Users from './src/screen/Users';
import Post from './src/screen/Post';
import Comment from './src/screen/Comment';
import Add from './src/screen/Comment/Add';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen
            name="Post"
            component={Post}
            options={({route}) => ({
              title: `${route.params.title}'s Post`,
            })}
          />
          <Stack.Screen name="Comments" component={Comment} />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{title: 'Add comment'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
