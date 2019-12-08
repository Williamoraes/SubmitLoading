import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

// import { Container } from './styles';

export default function Loading(props) {
    const loading = useRef();
    const error = useRef();
    const success = useRef();

    return (
        <>
            {props.activeLoading &&
                <View style={styles.container}>
                    <View style={props.style ? props.style : styles.container}>
                        {props.showLoading &&
                            <LottieView ref={loading} style={{ height: 80, width: 80 }} autoPlay loop source={require('./animations/loading.json')}></LottieView>
                        }
                        {props.showSuccess &&
                            <>
                                <LottieView ref={success} style={{ height: 50, width: 50 }} autoPlay loop source={require('./animations/success.json')}></LottieView>
                                <Text>{props.textSucces}</Text>
                            </>
                        }
                        {props.showError &&
                            <>
                                <LottieView ref={error} style={{ height: 50, width: 50 }} autoPlay loop source={require('./animations/error.json')}></LottieView>
                                <Text>{props.textError}</Text>
                            </>
                        }
                    </View>
                </View>
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
