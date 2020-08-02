/**
 * @format
 */

// jest.mock('react-navigation', () =>({
//   NavigationEvents: 'mockNavigationEvents',
//   withNavigation: component => component
// }));



import { View, Text } from 'react-native';
// import { NavigationEvents, withNavigation, createStackNavigator } from 'react-navigation';
import { NavigationEvents, createAppContainer, withNavigation } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
// import App from '../App';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <NavigationEvents/>
        <Text>Mycomponent</Text>
      </View>
    );
  }
}

const MyNavComponent = withNavigation(MyComponent);

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';



// function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
//   // const AppNavigator = createStackNavigator(
//   //   {
//   //     Home,
//   //     About,
//   //     Location,
//   //     ...screens,
//   //   },
//   //   { initialRouteName: 'MyComponent', ...navigatorConfig },
//   // );

//   const AppNavigator = { navigate: jest.fn() };

//   const App = createAppContainer(AppNavigator);

//   return { ...renderer.create(<App />), navigationContainer: App };
// }


// const App = ({ children }) => {
//   return children;
// }

// jest.mock('react-navigation', () =>({
//   NavigationEvents: 'mockNavigationEvents',
//   withNavigation: component => component
// }));

describe('MyComponent test', () => {
  it('renders', () => {



  // const AppNavigator = createStackNavigator(
  //   {
  //     MyComponent
  //   },
  //   { initialRouteName: 'MyComponent' },
  // );
  // const App = createAppContainer(AppNavigator);
    

    // const AppNavigator = createStackNavigator(
    //   {
    //     MyComponent
    //   },
    //   { initialRouteName: 'MyComponent' },
    // );

    // const App = createAppContainer(AppNavigator);

    // const MyNavComponent = withNavigation(MyComponent);

    // const navigation = jest.genMockFromModule('react-navigation');
    const navigation = { navigate: jest.fn() };

    // renderer.create(<App><MyNavComponent/></App>);
    // renderer.create(<MyNavComponent navigation={navigation}/>);
    // renderer.create(<App><MyNavComponent/></App>);
    renderer.create(<MyComponent navigation={navigation}/>);
    
    // renderWithNavigation();
  });
});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
