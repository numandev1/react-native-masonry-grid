import React, { FC } from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';

interface Props {
  data: {
    name: string;
    url: string;
  };
  height?: number;
  onPress: () => void;
}

const Card: FC<Props> = ({ data, onPress, height }) => {
  const { name, url } = data;
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginEnd: 8,
      }}
    >
      <View style={[styles.container, { height: height || 136 }]}>
        <Text style={styles.title}>{name}</Text>
        <View
          style={[
            styles.imageContainer,
            { justifyContent: height ? 'center' : 'flex-end' },
          ]}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: url,
            }}
            style={styles.image}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: '#F4F4F4',
    borderRadius: 8,
  },
  title: {
    padding: 8,
    color: '#111111',
    fontWeight: '500',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 80,
  },
});
