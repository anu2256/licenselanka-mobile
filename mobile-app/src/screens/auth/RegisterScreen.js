import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  ScrollView,
  Platform 
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log("Register Details:", { fullName, email, phone, password, confirmPassword });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.title}></Text>
            <Text style={styles.subtitle}>LicenseLanka සමඟ නොමිලේ සම්බන්ධ වන්න</Text>
          </View>

          <View style={styles.formContainer}>
            {/* Full Name */}
            <Text style={styles.label}>සම්පූර්ණ නම</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
            />

            {/* Email */}
            <Text style={styles.label}>ඊමේල් ලිපිනය</Text>
            <TextInput
              style={styles.input}
              placeholder="example@mail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Phone Number */}
            <Text style={styles.label}>දුරකථන අංකය</Text>
            <TextInput
              style={styles.input}
              placeholder="07XXXXXXXX"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            {/* Password */}
            <Text style={styles.label}>මුරපදය</Text>
            <TextInput
              style={styles.input}
              placeholder="ශක්තිමත් මුරපදයක් ඇතුළත් කරන්න"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            {/* Confirm Password */}
            <Text style={styles.label}>මුරපදය නැවත ඇතුළත් කරන්න</Text>
            <TextInput
              style={styles.input}
              placeholder="මුරපදය නැවත ඇතුළත් කරන්න"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />

            {/* Register Button */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>ලියාපදිංචි වන්න</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>දැනටමත් ගිණුමක් තිබේද? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>ලොග් වන්න</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  inner: {
    flex: 1,
  },
  scrollContainer: {
    padding: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#1A237E',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#1A237E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 15,
  },
  loginLink: {
    color: '#1A237E',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;