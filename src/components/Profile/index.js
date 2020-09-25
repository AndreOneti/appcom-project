import React from 'react';
import { View, Text, Image, Alert, ScrollView, BackHandler, TouchableOpacity, } from 'react-native';

//* Styles and Icons
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {

  const profileImag = require('../../../assets/img/profile.png');

  const exit = () => {
    Alert.alert(
      "Espera ai... 😢",
      "Vai me deixar? 😭",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "SIM",
          onPress: () => BackHandler.exitApp()
        }
      ]
    );
  }

  return (
    <ScrollView>
      <View style={style.container}>
        <Image source={profileImag} style={style.image} />
        <View style={style.textContainer}>
          <Text style={style.text}>Ande Luiz Oneti Carvalho</Text>
          <Text style={style.text}>andreluiz@gea.inatel.br</Text>
        </View>
        <View style={style.btnContainer}>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Alterar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Meus Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnLogout} onPress={exit}>
            <Text style={style.btnText}>
              <Icon name={'remove'} size={22} />  Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;
