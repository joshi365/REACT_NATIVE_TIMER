import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import Focus from './src/features/Focus';
import Timer from './src/features/timer/Timer';
import {colors} from './src/utils/colors';
import {spacing} from './src/utils/sizes';

export default function App() {
  const [focousSubject, setFocousSubject] = useState('null');

  return (
    <View style={styles.container}>
      {focousSubject ? (
        <Timer focousSubject={focousSubject} />
      ) : (
        <Focus addSubject={setFocousSubject} />
      )}
      <Text style={{color: '#fff'}}>{focousSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
});
