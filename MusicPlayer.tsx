import React from 'react';
import { View, Button, Text } from 'react-native';
import { useMusicPlayer } from './useMusicPlayer';
import TrackPlayer from 'react-native-track-player'; // Import TrackPlayer

const playListData = [
  {
    id: 'track1',
    url: require('./audio/test.mp3'),
    title: 'Nâng chén tiêu sầu',
    artist: 'Bích',
  },
  {
    id: 'track2',
    url: require('./audio/song2.mp3'),
    title: 'Chúng ta của tương lai',
    artist: 'Artist 2',
  },
];

export default function MusicPlayer() {
  const { isSetupDone, playbackState } = useMusicPlayer(playListData);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{isSetupDone ? 'Player is ready!' : 'Setting up player...'}</Text>
      
      <Text>Playback State: {JSON.stringify(playbackState)}</Text>
      <Button title="Play" onPress={() => TrackPlayer.play()} />
      <Button title="Pause" onPress={() => TrackPlayer.pause()} />
      <Button title="Skip to Next" onPress={() => TrackPlayer.skipToNext()} />
      <Button title="Skip to Previous" onPress={() => TrackPlayer.skipToPrevious()} />
    </View>
  );
}
