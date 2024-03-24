/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import playbackService from './service';
import MusicPlayer from './MusicPlayer';
import Music from './Music';
AppRegistry.registerComponent(appName, () =>MusicPlayer);

TrackPlayer.registerPlaybackService(() => playbackService);

TrackPlayer.setupPlayer().then(() => {
  console.log('Player is ready to use!');
});

