import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';
import {fontSizes, paddingSizes, spacing} from '../utils/sizes';

export default function Focus({addSubject}) {
  const [tempItem, setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{flex: 1, marginRight: spacing.md}}
            onSubmitEditing={({nativeEvent}) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: paddingSizes.md,
    alignItems: 'center',
  },
});
