import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/indieGo-icon-branco.png')}
      style = {{ width: 150, height: 116, alignSelf: 'center' }}/>
      <Login campo="Nome" tipo="default" />
      <Login campo="Email" tipo="email-address" />
      <Login campo="Senha" tipo="password" />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function Login({ campo, tipo }) {

  return (
    <View style={styles.campoContainer}>
    


      <Text style={styles.label}>{campo}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={tipo === 'password'}
        keyboardType={tipo === 'email-address' ? 'email-address' : 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    padding: 20,
    color: 'white'
  },
  campoContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'indigo',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: 'indigo',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#87f1ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});