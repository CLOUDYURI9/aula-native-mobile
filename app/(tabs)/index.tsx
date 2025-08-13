import { StyleSheet, Image, TextInput, Button, ActivityIndicator } from 'react-native';
import { use, useState } from 'react';

import PersonRequests from '@/services/api/PersonRequests';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

export default function TabOneScreen() {
  const [nome, atualizaNome] = useState('');
  const [sobrenome, atualizaSobrenome] = useState('');
  const [cpf, atualizaCpf] = useState('');
  const [email, atualizaEmail] = useState('');
  const [telefone, atualizaTelefone] = useState('');
  const [carregando, atualizaCarregando] = useState(false)

  async function enviarFomulario(
    person: {
      nome: string;
      sobrenome: string;
      cpf: string;
      email: string;
      telefone: string;
    }
  ) {
    atualizaCarregando(true);
    try {
      const respostaPerson = await PersonRequests.postPerson(person);

      if (respostaPerson.ok) {
        console.log("Pessoa cadastrada com sucesso!!")
        alert("Pessoa cadastrada com sucesso!!");

      } else {
        console.log("Erro ao cadastrar pessoa!!")
        alert("Erro ao cadastrar pessoa!!");

      }

    } catch (error) {
      console.log(`Erro na requisição. ${error}`);
      alert('Erro inesperado.')
    } finally {
      atualizaCarregando(false);
    }



  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba um</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        value={nome}
        onChangeText={atualizaNome}
        inputMode='text'
        placeholder='Nome'
      />
      <TextInput
        value={sobrenome}
        onChangeText={atualizaSobrenome}
        inputMode='text'
        placeholder='Sobrenome'
      />
      <TextInput
        value={cpf}
        onChangeText={atualizaCpf}
        inputMode='numeric'
        placeholder='CPF'
      />
      <TextInput

        value={telefone}
        onChangeText={atualizaTelefone}
        inputMode='numeric'
        placeholder='(11) 9961-0192'
      />
      <TextInput

        value={email}
        onChangeText={atualizaEmail}
        inputMode='email'
        placeholder='nome@email.com'

      />
      <Button
        title='ENVIAR'
        onPress={() => enviarFomulario({ nome: nome, sobrenome: sobrenome, cpf: cpf, telefone: telefone, email: email })}
      />

      {carregando && (
        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
