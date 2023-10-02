import { SignUp } from './../../pages/auth/SignUp';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your root stack param list
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

// Type the navigation prop for your SignIn component
type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type SignInProps = {
  navigation: SignInScreenNavigationProp;
};

export type SignUpProps = {
  navigation: SignUpScreenNavigationProp;
};

export type HomeProps = {
  navigation: HomeNavigationProp;
};


