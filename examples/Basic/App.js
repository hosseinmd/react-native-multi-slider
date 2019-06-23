/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { StyleSheet, View, Text, Slider } from 'react-native';

import MultiSlider from 'react-native-easy-slider';
import CustomMarker from './CustomMarker';

class App extends React.Component {
    state = {
        sliderOneChanging: false,
        sliderOneValue: [5],
        multiSliderValue: [3, 7],
        nonCollidingMultiSliderValue: [0, 100],
    };

    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    };

    sliderOneValuesChange = values => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    };

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    };

    multiSliderValuesChange = values => {
        this.setState({
            multiSliderValue: values,
        });
    };

    nonCollidingMultiSliderValuesChange = values => {
        this.setState({
            nonCollidingMultiSliderValue: values,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sliders</Text>
                <View style={styles.sliders}>
                    <View style={styles.sliderOne}>
                        <Text style={styles.text}>One Marker with callback example:</Text>
                        <Text
                            style={[
                                styles.text,
                                this.state.sliderOneChanging && { color: 'red' },
                            ]}
                        >
                            {this.state.sliderOneValue}
                        </Text>
                    </View>
                    <MultiSlider
                        values={this.state.sliderOneValue}
                        sliderLength={280}
                        onValuesChangeStart={this.sliderOneValuesChangeStart}
                        onValuesChange={this.sliderOneValuesChange}
                        onValuesChangeFinish={this.sliderOneValuesChangeFinish}
                    />
                    <View style={styles.sliderOne}>
                        <Text style={styles.text}>Two Markers:</Text>
                        <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
                        <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
                    </View>
                    <MultiSlider
                        values={[
                            this.state.multiSliderValue[0],
                            this.state.multiSliderValue[1],
                        ]}
                        sliderLength={280}
                        onValuesChange={this.multiSliderValuesChange}
                        min={0}
                        max={10}
                        step={1}
                        allowOverlap
                        snapped
                    />
                </View>
                <View style={styles.sliderOne}>
                    <Text style={styles.text}>Two Markers with minimum overlap distance:</Text>
                    <Text style={styles.text}>{this.state.nonCollidingMultiSliderValue[0]} </Text>
                    <Text style={styles.text}>{this.state.nonCollidingMultiSliderValue[1]}</Text>
                </View>
                <MultiSlider
                    values={[
                        this.state.nonCollidingMultiSliderValue[0],
                        this.state.nonCollidingMultiSliderValue[1],
                    ]}
                    sliderLength={280}
                    onValuesChange={this.nonCollidingMultiSliderValuesChange}
                    min={0}
                    max={100}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                    customMarker={CustomMarker}
                />
                <Text style={styles.text}>Native RCT Slider</Text>
                <Slider style={{ width: 280 }} />
                <Text style={styles.text}>Custom Marker</Text>
                <MultiSlider
                    selectedStyle={{
                        backgroundColor: 'gold',
                    }}
                    unselectedStyle={{
                        backgroundColor: 'silver',
                    }}
                    values={[5]}
                    containerStyle={{
                        height: 40,
                    }}
                    trackStyle={{
                        height: 10,
                        backgroundColor: 'red',
                    }}
                    touchDimensions={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        slipDisplacement: 40,
                    }}
                    customMarker={CustomMarker}
                    sliderLength={280}
                />
            </View>
        );
    }
}

export default App;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliders: {
        margin: 20,
        width: 280,
    },
    text: {
        alignSelf: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 30,
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
