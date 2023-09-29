import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput as RxTextInput,
  KeyboardTypeOptions,
} from 'react-native';
import { Controller, Control, useForm } from 'react-hook-form';

type props = {
  defaultValue: string;
  placeholder: string;
  onChangeText: () => void;
  onSubmitEditing: () => void;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  editable: boolean;
  selectTextOnFocus: boolean;
  placeholderTextColor: string;
  handleChange?: (data: any) => void;
  control: Control<any>;
  rules: any;
  textInputField: string;
  errorMessage: string | undefined;
};

export const TextInput = ({
  defaultValue,
  editable,
  placeholder,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  secureTextEntry,
  selectTextOnFocus,
  placeholderTextColor,
  handleChange,
  control,
  rules,
  textInputField,
  errorMessage,
}: props) => {
 

  const [borderBottomColor, setBorderBottomColor] = useState('gray');
  const [borderColor, setBorderColor] = useState('transparent');
  const handleFocus = () => {
    setBorderBottomColor('black');
    setBorderColor('black');
  };

  const handleBlur = () => {
    setBorderBottomColor('gray');
    setBorderColor('transparent');
  };

  return (
    <View>
      <Controller
        name={textInputField}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <RxTextInput
              placeholder={placeholder}
              onChangeText={data => {
                onChange(data);
                handleChange?.(data);
              }}
              onSubmitEditing={onSubmitEditing}
              onFocus={handleFocus}
              onBlur={handleBlur}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              editable={editable}
              blurOnSubmit={true}
              keyboardAppearance="default"
              selectTextOnFocus={selectTextOnFocus}
              selection={{ start: 0, end: 0 }}
              placeholderTextColor={placeholderTextColor}
              underlineColorAndroid="transparent"
              style={{
                ...styles(editable).input,
                borderBottomColor,
                borderColor,
              }}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
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
    },
  });
};

export { styles as inputStyles };
