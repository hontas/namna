import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getTopNewbornNames } from '../http/scbApi';
import Colors, { withAlpha } from '../constants/Colors';

export default class HomeScreen extends React.Component {
  state = {};

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    getTopNewbornNames().then((json) => this.setState(json));
  }

  render() {
    const { title, variables = [] } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>namna</Text>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>{title}</Text>
            {variables.map(({ text, code, valueTexts }) => (
              <View key={code}>
                <Text style={styles.subHeading}>{text}</Text>
                {valueTexts.map((value, idx) => (
                  <Text key={`${idx}-${value}`}>{value}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 38,
    paddingBottom: 10
  },
  headerText: {
    color: withAlpha(Colors.white, 0.85),
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 16
  },
  getStartedText: {
    fontSize: 17,
    color: Colors.primaryDark,
    lineHeight: 24,
    textAlign: 'center'
  },
  subHeading: {
    fontWeight: 'bold',
    lineHeight: 28
  }
});
