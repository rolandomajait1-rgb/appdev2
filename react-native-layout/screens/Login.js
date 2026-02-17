import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ onNavigate }) {
  return (

    <View style={styles.container}>

      <Image
        source={require('../assets/login.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome Back My Friend! </Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        <Ionicons name="log-in-outline" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.footer} >
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onNavigate}>
          <Text style={styles.signUpLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8ff',

  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'times-new-roman',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  glassesIcon: {
    alignSelf: 'center',
    marginBottom: 25,

  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 20
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0057b5ff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    color: '#666',
    fontSize: 20,
  },
  signUpLink: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }

});
