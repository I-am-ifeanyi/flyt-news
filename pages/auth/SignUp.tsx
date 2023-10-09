import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { userStore } from '../countryDetails/state/setUserData';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useForm } from 'react-hook-form';
import { useToast } from '../../hooks/useToast';

import { SignInProps } from '../../config/routes/navigationType';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Logo } from '../../modules/header';
import { TextInput } from '../../ui/forms';
import { PASSWORD_PATTERN, EMAIL_PATTERN, PHONE_PATTERN } from './SignIn';

type IdentityInputs = {
  userName: string;
  email: string;
  phone: number;
  password: string;
};

export const SignUp = ({ navigation }: SignInProps) => {
  const auth = FIREBASE_AUTH;
  const toast = useToast();
  const { updateUserData, clearUserData, updateUserStatus, userInfo, userStatus } =
    userStore();
  const {
    control,
    watch,
    handleSubmit,
    getFieldState,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IdentityInputs>();
  const [userType, setUserType] = useState({
    mediaReporter: false,
    visitor: false,
  });
  const [userData, setUserData] = useState({});

  const { mediaReporter, visitor } = userType;
  const onSubmit = (data: IdentityInputs) => {
    if (!mediaReporter && !visitor) {
      alert('Please select a user type!');
      return null;
    }
    setUserData({
      ...data,
      user: mediaReporter ? 'Media Reporter' : 'Visitor',
    });
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then(userCredential => {
        toast.success({
          title: `Hi ${data?.userName}`,
          message: 'You have successfully created an account',
        });
      })
      .catch(error => {
        alert(error.message);
      });
    updateUserData(data);
    updateUserStatus({
      userStatus: mediaReporter ? 'Media Reporter' : 'Visitor',
    });
    setTimeout(() => {
      // @ts-expect-error
      navigation.navigate('CountriesScreen');
    }, 3000);
  };

  const onTextChange = (text: string) => {
    console.log(text);
  };

  const selectMediaReporter = () => {
    setUserType({
      mediaReporter: true,
      visitor: false,
    });
  };
  const selectVisitor = () => {
    setUserType({
      mediaReporter: false,
      visitor: true,
    });
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
    reset();
  };

  console.log(userInfo, userStatus);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={container}>
        <Logo />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={signUpPrompt}>Please create your account</Text>
          <View style={formInput}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{ width: '100%', padding: 10, gap: 20 }}>
              <TextInput
                textInputField={'userName'}
                placeholder={'Username'}
                onSubmitEditing={data => console.log(data)}
                keyboardType={'default'}
                selectTextOnFocus={true}
                placeholderTextColor={'#777776'}
                editable={true}
                handleChange={data => onTextChange(data)}
                control={control}
                isPassword={false}
                errorMessage={errors?.userName?.message}
                rules={{
                  required: 'Username is required',
                  maxLength: { value: 50, message: 'Maximum of 50 characters' },
                }}
              />
              <TextInput
                textInputField={'email'}
                placeholder={'Email'}
                onSubmitEditing={data => console.log(data)}
                keyboardType={'email-address'}
                selectTextOnFocus={true}
                placeholderTextColor={'#777776'}
                editable={true}
                handleChange={data => onTextChange(data)}
                control={control}
                errorMessage={errors?.email?.message}
                isPassword={false}
                rules={{
                  required: 'Email is required',
                  maxLength: {
                    value: 100,
                    message: 'Maximum of 100 characters',
                  },
                  pattern: {
                    value: EMAIL_PATTERN,
                    message: 'Not a valid email',
                  },
                }}
              />
              <TextInput
                textInputField={'phone'}
                placeholder={'+2348062432523'}
                onSubmitEditing={data => console.log(data)}
                keyboardType={'phone-pad'}
                selectTextOnFocus={true}
                placeholderTextColor={'#777776'}
                editable={true}
                handleChange={data => onTextChange(data)}
                control={control}
                errorMessage={errors?.phone?.message}
                isPassword={false}
                rules={{
                  required: 'Phone number is required',
                  maxLength: { value: 11, message: 'Maximum of 11 characters' },
                  pattern: {
                    value: PHONE_PATTERN,
                    message: 'Not a valid phone number',
                  },
                }}
              />
              <TextInput
                textInputField={'password'}
                placeholder={'Password'}
                onSubmitEditing={data => console.log(data)}
                keyboardType={'default'}
                selectTextOnFocus={true}
                placeholderTextColor={'#777776'}
                editable={true}
                handleChange={data => onTextChange(data)}
                control={control}
                errorMessage={errors?.password?.message}
                isPassword={true}
                rules={{
                  required: 'Password is required',
                  maxLength: { value: 20, message: 'Maximum of 20 characters' },
                  pattern: {
                    value: PASSWORD_PATTERN,
                    message:
                      'Password must be at least 8 characters long, has an uppercase letter, lowercase letter and a special character',
                  },
                }}
              />
              <Pressable onPress={navigateToSignIn}>
                <Text style={signIn}>Already have an account?</Text>
              </Pressable>

              <View style={userSelectSection}>
                <Text style={whoStyle}>I am a</Text>
                <View style={userSelectMainContainer}>
                  <View style={userSelectContainer}>
                    <TouchableOpacity
                      onPress={selectMediaReporter}
                      style={
                        mediaReporter ? userSelectStyle : userNotSelectStyle
                      }>
                      {mediaReporter && (
                        <Feather name="check" size={18} color="red" />
                      )}
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '800' }}>Media Reporter</Text>
                  </View>
                  <View style={userSelectContainer}>
                    <TouchableOpacity
                      onPress={selectVisitor}
                      style={visitor ? userSelectStyle : userNotSelectStyle}>
                      {visitor && (
                        <Feather name="check" size={18} color="red" />
                      )}
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '800' }}>Visitor</Text>
                  </View>
                </View>
              </View>
              <Pressable
                style={signInButtonContainer}
                onPress={handleSubmit(onSubmit)}>
                {isSubmitting ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={signInButton}>Sign In</Text>
                )}
              </Pressable>
            </KeyboardAvoidingView>
            <View>
              <View style={sideBarContainer}>
                <View style={sideBar}></View>
                <Text style={signInPrompt}>Or sign in with </Text>
                <View style={sideBar}></View>
              </View>
              <View style={signInIconsContainer}>
                <FontAwesome name="google" size={40} color="black" />
                <AntDesign name="facebook-square" size={40} color="black" />
                <Pressable onPress={clearUserData}>
                  <Text>Clear Form</Text>
                </Pressable>
              </View>
              <View style={termsAndConditionsContainer}>
                <Text style={registerOption}>
                  By signing up to <Text style={appName}>Flyt News</Text>, you
                  are accepting our
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    alert('Terms and Conditions not available yet')
                  }>
                  <Text style={termsAndConditions}> terms & conditions</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  formInput: {
    flex: 1,
    gap: 40,
  },
  signUpPrompt: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  signIn: {
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
    marginTop: -5,
  },
  signInButtonContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sideBar: {
    height: 2,
    backgroundColor: 'black',
    borderRadius: 20,
    width: '25%',
  },
  sideBarContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  signInPrompt: {
    fontWeight: 'bold',
  },
  signInIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginVertical: 30,
  },
  registerOption: {
    textAlign: 'center',
  },
  appName: {
    fontWeight: 'bold',
  },
  userSelectMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  userSelectSection: {
    gap: 20,
    marginVertical: 5,
  },
  whoStyle: {
    fontSize: 18,
    fontWeight: '500',
  },
  userSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  userSelectStyle: {
    borderWidth: 2,
    borderColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNotSelectStyle: {
    borderWidth: 2,
    borderColor: 'gray',
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsAndConditionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsAndConditions: {
    fontWeight: 'bold',
    marginTop: 2,
  },
});

const {
  container,
  formInput,
  signUpPrompt,
  signIn,
  signInButton,
  signInButtonContainer,
  sideBarContainer,
  sideBar,
  signInPrompt,
  signInIconsContainer,
  registerOption,
  appName,
  userSelectSection,
  whoStyle,
  userSelectMainContainer,
  userSelectContainer,
  userSelectStyle,
  userNotSelectStyle,
  termsAndConditionsContainer,
  termsAndConditions,
} = styles;
