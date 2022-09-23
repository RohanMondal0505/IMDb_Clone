/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootNavigation from './src/navigation/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
