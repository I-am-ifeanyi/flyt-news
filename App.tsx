import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { useForm } from 'react-hook-form';

import { SignIn } from './pages/auth';
import { TextInput } from './ui/forms';

type IdentityInputs = {
  userName: string
}

export default function App() {
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    getFieldState,
    formState: { errors },
  } = useForm<IdentityInputs>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SignIn />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <TextInput
            textInputField={"userName"}
            defaultValue={'dev_ifeanyi'}
            placeholder={'Username'}
            onChangeText={() => console.log('Hello')}
            onSubmitEditing={() => console.log('Hello')}
            keyboardType={'default'}
            secureTextEntry={false}
            selectTextOnFocus={true}
            placeholderTextColor={'#777776'}
            editable={true}
            handleChange={data => console.log(data)}
            control={control}
            errorMessage={errors?.userName?.message}
            rules={{
              required: 'Firstname is required',
              maxLength: { value: 100, message: 'Maximum of 100 characters' },
            }}
          />
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
