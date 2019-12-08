import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import Loading from './loading';

const window = Dimensions.get('window');

// import { Container } from './styles';

const randomBool = () => {
  var number = Math.round(Math.random() * (2 - 1) + 1);
  if (number === 1)
    return false
  else
    return true
}

export default function SubmitLoading() {
  const [showLoading, setShowLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [activeLoading, setActiveLoading] = useState(true);

  useEffect(() => {
    var bool = randomBool();
    const timer = setTimeout(() => {
      setShowLoading(false);
      if (bool)
        setShowSuccess(true);
      else
        setShowError(true);

      setTimeout(() => {
        setActiveLoading(false);
      }, 5000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, world!</Text>
      <Loading
        activeLoading={activeLoading}
        showLoading={showLoading}
        showError={showError}
        showSuccess={showSuccess}
        style={styles.container}
        textSucces="Deu boa"
        textError="Deu ruim"></Loading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

