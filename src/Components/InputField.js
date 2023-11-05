import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {theme} from '../constants/theme';

const InputField = ({
  placeholder,
  autoComplete,
  appendChild,
  containerStyles,
  value,
  onChangeText,
  maxLength,
  secureTextEntry,
  testID,
}) => {
  return (
    <View
      style={[
        {backgroundColor: theme.secondaryBackground},
        {...containerStyles},
      ]}
      className="rounded-lg my-3 h-12">
      <View className="flex-row w-full m-1 px-3 items-center justify-between">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.secondaryDark}
          multiline={false}
          numberOfLines={1}
          style={{
            width: '80%',
            fontSize: 13,
            color: theme.darkColor,
            fontWeight: '600',
          }}
          keyboardAppearance="light"
          keyboardType="default"
          autoComplete={autoComplete}
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {appendChild}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
