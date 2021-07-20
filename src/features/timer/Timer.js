import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Countdown} from '../../components/Countdown';
import RoundedButton from '../../components/RoundedButton';
import {colors} from '../../utils/colors';
import {spacing} from '../../utils/sizes';
import {ProgressBar} from 'react-native-paper';

const Timer = ({focousSubject}) => {
  const [isStarted, setIsStarted] = useState(false);

  const [progress, setProgress] = useState(1);

  const [minutes, setMinutes] = useState (0.1)

  const onProgress = (progress) => {
    setProgress(progress)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress = {onProgress} />
      </View>
      <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.text}>Timer Goes Here bhadwe</Text>
        <Text style={styles.task}>{focousSubject}</Text>
      </View>
      <View style={{paddingTop:spacing.sm}}>
        <ProgressBar
          color="#FFFFFFFF"
          style={{height: 10}}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
