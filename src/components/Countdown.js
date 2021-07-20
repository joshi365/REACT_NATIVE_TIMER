import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';

export const Countdown = ({minutes = .1, isPaused, onProgress}) => {
  const minToMili = min => min * 1000 * 60;

  const formatTime = time => (time < 10 ? `0${time}` : time);

  const interval = React.useRef(null);

  const timer = () => {
    setMillis(time => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minToMili(minutes));
      return timeLeft;
    });
  };

  const [millis, setMillis] = useState(minToMili(minutes));

  useEffect(() => {
    if (isPaused) { 
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(timer, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: spacing.xxl,
    color: colors.white,
    backgroundColor: colors.cyan,
  },
});
