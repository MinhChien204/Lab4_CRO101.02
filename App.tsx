import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [response, setResponse] = useState<any>();
  const [ketqua, setKetqua] = useState<any>();

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
      cameraType: 'back',
    }, setResponse);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Open Camera' onPress={openCamera} />
      {response && response.assets && response.assets[0] && (
        <View>
          <Image
            style={{ width: 200, height: 200, borderRadius:100}}
            source={{ uri: response.assets[0].uri }}
          />
          {/* <Text>{response.assets[0].originalPath}</Text> */}
        </View>
      )}
      <Button title='Open Gallery' onPress={async () => {
        const result = await launchImageLibrary({
          selectionLimit: 10, mediaType: 'photo'
        }, setKetqua);
      }} />
      {ketqua && ketqua.assets && ketqua.assets.map((asset: any, index: number) => (
        <View key={index}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: asset.uri }}
          />
          <Text>{asset.originalPath}</Text>
        </View>
      ))}
    </View>
  );
}
