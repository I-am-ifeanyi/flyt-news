import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCountryStore } from '../../pages/countryDetails/state/setCountryState';
import { TextInput } from '../../ui/forms';
import { categoryState } from '../../pages/homeScreens/state/categoryState';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function Header() {
  const { updateCategory, toggleTopHeadline, toggleIsCategory } =
    categoryState();
  const { countryData, updateCountryData, countryCode } = useCountryStore();
  const [searchQuery, setSearchQuery] = useState('');
  const {
    control,
    watch,
    handleSubmit,
    getFieldState,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <View style={container}>
      <View style={menuAndNameContainer}>
        <View style={{ borderWidth: 1, borderRadius: 5 }}>
          <Ionicons name="menu" size={35} color="black" />
        </View>
        <View style={countryContainer}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={{ fontWeight: '600' }}>{countryCode}</Text>

          <TextInput
            textInputField={'searchAnything'}
            // defaultValue={countryData}
            value={searchQuery}
            placeholder={'Search for anything'}
            onSubmitEditing={data => console.log(data)}
            keyboardType={'default'}
            selectTextOnFocus={true}
            placeholderTextColor={'#777776'}
            editable={true}
            handleChange={data => {
              setValue('searchAnything', data);
              setSearchQuery(data);
            }}
            style={{ borderWidth: 0 }}
            control={control}
            isPassword={false}
            isSearchIcon={true}
            searchHandleOnclick={() => {
              toggleTopHeadline(false);
              toggleIsCategory(false);
              updateCategory(searchQuery), Keyboard.dismiss();
            }}
          />
        </View>
      </View>
      <Ionicons name="notifications" size={30} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userNameStyle: {
    fontWeight: '600',
    fontSize: 18,
  },
  countryContainer: {
    width: '70%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const { container, menuAndNameContainer, userNameStyle, countryContainer } =
  styles;
