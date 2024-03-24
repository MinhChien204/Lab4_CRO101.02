import { useEffect, useState } from 'react';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export function useMusicPlayer(playListData) {
  const [isSetupDone, setIsSetupDone] = useState(false);
  const playbackState = usePlaybackState();

  useEffect(() => {
    async function startPlayer() {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(playListData);
      setIsSetupDone(true);
    }

    startPlayer();

    return () => {
      TrackPlayer.reset();
    };
  }, []);

  return { isSetupDone, playbackState };
}
