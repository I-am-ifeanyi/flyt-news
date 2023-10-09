import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useForm } from 'react-hook-form';
import { useToast } from '../../hooks/useToast';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Logo } from '../../modules/header';
import { TextInput } from '../../ui/forms';
import { SignUpProps } from '../../config/routes/navigationType';
import { HomeProps } from '../../config/routes/navigationType';

type IdentityInputs = {
  userName: string;
  email: string;
  password: string;
};

export const SignIn = ({ navigation }: SignUpProps) => {
  const auth = FIREBASE_AUTH;
  const toast = useToast();
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors },
  } = useForm<IdentityInputs>();
  const onSubmit = (data: IdentityInputs) => {
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then(userCredential => {
        toast.success({
          title: `Hi ${data?.userName}`,
          message: 'You have successfully logged in',
        });
        setTimeout(() => {
          // @ts-expect-error
          navigation.navigate('homeNavigation', { Screen: 'Home' });
        }, 2000);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const onTextChange = (text: string) => {
    console.log(text);
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
    reset();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={container}>
        <Logo />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={loginPrompt}>Please login to continue</Text>
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
              <View>
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
                    maxLength: {
                      value: 20,
                      message: 'Maximum of 20 characters',
                    },
                    pattern: {
                      value: PASSWORD_PATTERN,
                      message:
                        'Password must be at least 8 characters long, has an uppercase letter, lowercase letter and a special character',
                    },
                  }}
                />
                <Text style={forgotPasswordStyle}>Forgot Password</Text>
              </View>
              <Pressable
                style={signInButtonContainer}
                onPress={handleSubmit(onSubmit)}>
                <Text style={signInButton}>Sign In</Text>
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
              </View>
              <View style={registerOption}>
                <Text> Don't have an account?</Text>
                <TouchableOpacity onPress={navigateToSignUpScreen}>
                  <Text style={register}>Register</Text>
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
    gap: 50,
  },
  loginPrompt: {
    fontSize: 20,
    marginVertical: 40,
    textAlign: 'center',
  },
  forgotPasswordStyle: {
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  signInButtonContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  signInButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
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
    marginVertical: 50,
  },
  registerOption: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },
  register: {
    fontWeight: 'bold',
  },
});

const {
  container,
  formInput,
  loginPrompt,
  forgotPasswordStyle,
  signInButton,
  signInButtonContainer,
  sideBarContainer,
  sideBar,
  signInPrompt,
  signInIconsContainer,
  registerOption,
  register,
} = styles;

export const PASSWORD_PATTERN =
  /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[\w~@#$%^&*+=`|{}:;!.?"()[\]-]{8,25}$/;
export const EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_PATTERN = /^(?:[+\d].*\d|\d)$/;
