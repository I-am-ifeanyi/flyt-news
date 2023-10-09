import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput as RxTextInput,
  KeyboardTypeOptions,
  Pressable,
  TextStyle
} from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

type props = {
  defaultValue?: string;
  placeholder?: string;
  onSubmitEditing: (data: any) => void;
  keyboardType: KeyboardTypeOptions;
  editable: boolean;
  selectTextOnFocus: boolean;
  placeholderTextColor: string;
  handleChange?: (data: any) => void;
  control: Control<any>;
  rules?: any;
  textInputField: string;
  errorMessage?: string | undefined;
  isPassword?: boolean;
  isSearchIcon?: boolean;
  value?: string;
  searchHandleOnclick?: (data: string) => void;
  style?: TextStyle
};

export const TextInput = ({
  defaultValue,
  editable,
  placeholder,
  onSubmitEditing,
  keyboardType,
  selectTextOnFocus,
  placeholderTextColor,
  handleChange,
  control,
  rules,
  textInputField,
  errorMessage,
  isPassword,
  isSearchIcon,
  value,
  searchHandleOnclick,
  style
}: props) => {
  const [borderBottomColor, setBorderBottomColor] = useState('gray');
  const [borderColor, setBorderColor] = useState('transparent');
  const [isShowPassword, setIsShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setIsShowPassword(prev => !prev);
  };
  const handleFocus = () => {
    setBorderColor('black');
  };

  const handleBlur = () => {
    setBorderColor('gray');
  };

  return (
    <View>
      <Controller
        name={textInputField}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, onBlur } }) => (
          <View>
            <View
              style={{
                ...styles(editable).input,
                borderBottomColor,
                borderColor,
                ...style
              }}>
              <RxTextInput
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChangeText={data => {
                  onChange(data);
                  handleChange?.(data);
                }}
                style={{ width: '90%', height: '100%' }}
                onSubmitEditing={onSubmitEditing}
                onFocus={handleFocus}
                onBlur={handleBlur}
                keyboardType={keyboardType}
                secureTextEntry={isPassword ? isShowPassword : false}
                editable={editable}
                blurOnSubmit={true}
                keyboardAppearance="default"
                selectTextOnFocus={selectTextOnFocus}
                placeholderTextColor={placeholderTextColor}
                underlineColorAndroid="transparent"
                value={value}
              />
              {isPassword && (
                <Pressable onPress={togglePasswordVisibility}>
                  {isShowPassword ? (
                    <Ionicons name="eye-off-outline" size={20} color="black" />
                  ) : (
                    <Ionicons name="eye-outline" size={20} color="black" />
                  )}
                </Pressable>
              )}
              {isSearchIcon && (
                <Pressable onPress={searchHandleOnclick}>
                  <Feather name="search" size={20} color="black" />
                </Pressable>
              )}
            </View>
            {errorMessage && (
              <Text style={{ color: 'red', fontSize: 12, marginVertical: 5 }}>
                {errorMessage}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = (editable: boolean) => {
  return StyleSheet.create({
    input: {
      borderRadius: 10,
      borderWidth: 2,
      color: editable ? '#000' : '#000',
      fontSize: 14,
      height: 50,
      paddingHorizontal: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};

export { styles as inputStyles };
