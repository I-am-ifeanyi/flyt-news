import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesome } from '@expo/vector-icons';

import { TextInput } from '../../ui/forms';
import { Box } from '../../ui/layout';
import { countriesData } from './countriesData';
import { useCountryStore } from './state/setCountryState';

export function CountriesScreen() {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchCountry: '',
    },
  });
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const countryNames = countriesData.map(country => country.name);
  const filterCountry = countryNames.filter(data =>
    data.toLocaleLowerCase().startsWith(searchCountry.toLocaleLowerCase()),
  );

  const getCountryCode = (id: number) => {
    countriesData.map((item, index) => {
      if (index === id) {
        setCountryCode(item.code);
      }
    });
  };
  const navigation = useNavigation();

  const { updateCountryData, updateCountryCode } = useCountryStore();

  const handleCountrySelect = (country: string, index: number) => {
    setSearchCountry(country);
    setSelectedCountry(country);
    setValue('searchCountry', country);
  };

  type onSubmitForm = {
    searchCountry: string;
  };

  const onSubmit = (data: onSubmitForm) => {
    updateCountryData(data?.searchCountry);
    updateCountryCode(countryCode);
    setTimeout(() => {
      // @ts-expect-error
      navigation.navigate('homeNavigation', { Screen: 'Home' });
    }, 2000);
  };
  console.log(countryCode);
  return (
    <Box>
      <View style={inputWrapper}>
        <TextInput
          value={selectedCountry}
          textInputField={'searchCountry'}
          placeholder={'Search for country'}
          onSubmitEditing={data => console.log(data)}
          keyboardType={'default'}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          handleChange={data => {
            setSearchCountry(data);
            setSelectedCountry(data);
            setValue('searchCountry', data);
          }}
          control={control}
          errorMessage={errors?.searchCountry?.message}
          isPassword={false}
          rules={{
            required: 'Please select country',
            maxLength: { value: 20, message: 'Maximum of 20 characters' },
          }}
        />
      </View>
      <View style={countryListsWrapper}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <KeyboardAwareFlatList
            data={filterCountry}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={countriesList}>
                  <FontAwesome
                    name="location-arrow"
                    size={24}
                    color="red"
                    style={iconStyle}
                  />
                  <TouchableOpacity
                    style={countryStyleWrapper}
                    onPress={() => {
                      handleCountrySelect(item, index);
                      getCountryCode(index);
                    }}>
                    <Text style={countryStyle}>{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </KeyboardAwareScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
          <View style={setCountryCont}>
            <TouchableOpacity
              style={setCountryBtn}
              onPress={handleSubmit(onSubmit)}>
              <Text style={setContText}>Set Country</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    height: 80,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconStyle: {
    transform: [{ rotate: '-80deg' }],
  },
  countriesList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginVertical: 8,
  },
  countryListsWrapper: {
    flex: 4,
    padding: 20,
  },
  countryStyleWrapper: {
    width: '100%',
    paddingVertical: 4,
  },
  countryStyle: {
    fontWeight: '600',
    fontSize: 16,
  },
  setCountryCont: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  setCountryBtn: {
    width: '50%',
    backgroundColor: 'red',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setContText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

const {
  inputWrapper,
  iconStyle,
  countriesList,
  countryListsWrapper,
  countryStyleWrapper,
  countryStyle,
  setCountryBtn,
  setCountryCont,
  setContText,
} = styles;
