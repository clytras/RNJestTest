import React from 'react';
import { NativeModules as RNNativeModules } from "react-native";
RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: "BEGAN", FAILED: "FAILED", ACTIVE: "ACTIVE", END: "END" },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),

};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false
};

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// jest.mock('react-navigation', () => ({
//   NavigationEvents: 'mockNavigationEvents',
//   withNavigation: Component => props => (
//     <Component navigation={{ navigate: jest.fn() }} {...props} />
//   )
// }));

jest.mock('react-navigation', () =>({
  NavigationEvents: 'mockNavigationEvents',
  withNavigation: component => component
}));
