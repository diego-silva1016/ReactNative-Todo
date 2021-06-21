import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

interface HeaderProps {
  dark: boolean;
  onPress:() => void;
}

export function Header({ dark, onPress }: HeaderProps) {
  return (
    <View style={dark ? styles.headerDark : styles.header}>
      <View style={styles.headerContainer}>
        <Text style={dark ? styles.headerTextDark : styles.headerText}>
          to.
        </Text>
        <Text style={[
          dark ? styles.headerTextDark : styles.headerText,
          { fontFamily: 'Poppins-SemiBold' }
        ]}>
          do
        </Text>
      </View>

      <Icon
        style={{ padding: 5 }}
        name="adjust" size={18}
        color={dark ? '#E1E1E6' : '#fff'}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTextDark: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
});
