// Import TrackPlayer và useState từ React
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

// Danh sách bài hát
const songList = [
  {
    id: '1',
    title: 'Nâng chén tiêu sầu',
    artist: 'Bích Phương',
    url: require('./audio/test.mp3')
  },
  {
    id: '2',
    title: 'Chúng ta của tương lai',
    artist: 'Sơn Tùng MTP',
    url: require('./audio/song2.mp3')
  },
  {
    id: '3', // Sửa ID để không trùng lặp
    title: 'Thiên Lý Ơi',
    artist: 'Rách',
    url: require('./audio/song3.mp3')
  },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const start = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songList);
    await TrackPlayer.skip(String(currentSongIndex)); // Skip đến bài hát hiện tại
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const stop = async () => {
    await TrackPlayer.stop();
  };

  const next = async () => {
    const nextIndex = (currentSongIndex + 1) % songList.length; // Lấy chỉ số của bài hát tiếp theo trong danh sách
    setCurrentSongIndex(nextIndex as number);
    await TrackPlayer.skip(nextIndex.toString());
  };

  const previous = async () => {
    const previousIndex = (currentSongIndex - 1 + songList.length) % songList.length; // Lấy chỉ số của bài hát trước đó trong danh sách
    setCurrentSongIndex(previousIndex as number);
    await TrackPlayer.skip(previousIndex.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title='Play' onPress={start} />
        <Button title='Pause' onPress={pause} />
        <Button title='Stop' onPress={stop} />
        <Button title='Next' onPress={next} />
        <Button title='Previous' onPress={previous} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
