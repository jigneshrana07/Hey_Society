import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/Colors';

const THUMB_RADIUS = 16;

const Thumb = () => {
  return (
    <View style={styles.root} />
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    backgroundColor: colors.primay_color,
    borderColor: 'white',
    borderWidth: 3
  },
});

export default memo(Thumb);
