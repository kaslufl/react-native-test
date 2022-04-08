import {Alert, Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import styles from "../../styles";
import {useState} from "react";
import ACamera from "../ACamera";

export default function Form() {
  const [cidade, setCidade] = useState("default");
  const [bairro, setBairro] = useState(null);
  const [rua, setRua] = useState(null);
  const [numero, setNumero] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function validate() {
    if (cidade !== "default" && bairro != null && rua != null && numero != null && descricao != null) {
      setIsOpen(true);
    } else {
      Alert.alert('É necessário preencher todos os campos do formulário!')
    }
  }

  function repetition() {
    setIsOpen(false);
    setCidade("default");
    setBairro(null);
    setRua(null);
    setNumero(null);
    setDescricao(null);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.formText}>Selecione a cidade</Text>
        <Picker
          style={styles.formSelect}
          selectedValue={cidade}
          onValueChange={(itemValue, itemIndex) =>
            setCidade(itemValue)
          }>
          <Picker.Item label="Selecione uma opção" value="default"/>
          <Picker.Item label="Vassouras" value="Vassouras"/>
          <Picker.Item label="Barra do Piraí" value="Barra do Piraí"/>
          <Picker.Item label="Mendes" value="Mendes"/>
          <Picker.Item label="Três Rios" value="Três Rios"/>
          <Picker.Item label="Paraíba do Sul" value="Paraíba do Sul"/>
          <Picker.Item label="Miguel Pereira" value="Miguel Pereira"/>
          <Picker.Item label="Valença" value="Valença"/>
          <Picker.Item label="Rio das Flores" value="Rio das Flores"/>
        </Picker>
        <Text style={styles.formText}>Bairro</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={newText => setBairro(newText)}
          defaultValue={bairro}
        />
        <Text style={styles.formText}>Rua</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={newText => setRua(newText)}
          defaultValue={rua}
        />
        <Text style={styles.formText}>Número</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={newText => setNumero(newText)}
          defaultValue={numero}
        />
        <Text style={styles.formText}>Descrição</Text>
        <TextInput
          style={styles.formInputBig}
          onChangeText={newText => setDescricao(newText)}
          defaultValue={descricao}
        />
      </View>
      <TouchableOpacity
        style={styles.formButton}
        onPress={validate}
      >
        <Text style={styles.formButtonText}>Notificar</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isOpen}
      >
        <ACamera
          cidade={cidade}
          bairro={bairro}
          rua={rua}
          numero={numero}
          descricao={descricao}
          repetition={repetition}
        />
      </Modal>
    </View>
  )
}