/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
export const colors = {
    heading: 'text-gray-700',
    button: '#50C878'
}