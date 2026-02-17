import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
      </View>

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

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
        <Ionicons name="checkmark-circle" size={20} color="#fff" />
      </TouchableOpacity>


      <View style={styles.footersignup}>
        <Text style={styles.signUpText}> Already have an account?</Text>
        <TouchableOpacity onPress={onNavigate}>
          <Text style={styles.signUpLink}> Login </Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
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
  input: {
    flex: 1,
    height: 60,
    fontSize: 20
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0086c0ff',
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
  link: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 20,
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
  footersignup: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
});
