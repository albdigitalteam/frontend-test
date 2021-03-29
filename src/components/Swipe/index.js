import React, { useMemo, useEffect } from 'react'
import { Animated, View, StyleSheet, Dimensions, Easing } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

export default function PostItem({ children, onSwipe }) {

    const translateX = useMemo(() => new Animated.Value(0))
    const opacity = useMemo(() => new Animated.Value(1))
    const OFFSET_X_PROPORTION = 3
    const offsetX = Dimensions.get('window').width / OFFSET_X_PROPORTION

    const handleGesture = (evt) => {
        const { nativeEvent: { translationX } } = evt
        translateX.setValue(translationX < 0 ? translationX : 0)
    }

    const handleStateChange = ({ nativeEvent }) => {

        const { translationX, state } = nativeEvent
        const x = Math.abs(translationX)

        if (state === 5 && x < offsetX) {
            Animated.spring(
                translateX,
                {
                    duration: 250,
                    toValue: 0,
                    useNativeDriver: true
                }
            ).start()
        }

        if (state === 5 && x > offsetX && translationX < 0) {
            Animated.timing(
                opacity,
                {
                    duration: 200,
                    toValue: 0,
                    useNativeDriver: true,
                    easing: Easing.in(Easing.quad)
                }
            ).start()
            Animated.timing(
                translateX,
                {
                    duration: 200,
                    toValue: -(offsetX * OFFSET_X_PROPORTION),
                    useNativeDriver: true,
                    easing: Easing.in(Easing.quad)
                }
            ).start(() => {
                onSwipe()
            })
        }

    }

    useEffect(() => {
        return () => {
            opacity.setValue(1)
        }
    }, [])

    const translateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0]
    })

    return (
        <Animated.View style={{ opacity }}>
            <PanGestureHandler
                onGestureEvent={handleGesture}
                activeOffsetX={[-10, 10]}
                onHandlerStateChange={handleStateChange}
            >
                <View style={{ flex: 1 }}>
                    <Animated.View style={[styles.action, { transform: [{ translateY }] }]}>
                        <View style={styles.actionContainer}>
                            <MaterialIcons name="delete" size={20} color="white" />
                        </View>
                    </Animated.View>
                    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
                        {children}
                    </Animated.View>
                </View>
            </PanGestureHandler>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    action: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 12
    },
    actionContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        borderWidth: 2,
        borderColor: '#fff'
    }
})
