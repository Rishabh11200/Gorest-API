import {View, ScrollView, TextInput, Button, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/Color';

const Add = ({route, navigation}) => {
  const {postid} = route.params;
  const [emailtxt, setEmail] = useState('');
  const [nametxt, setName] = useState('');
  const [bodytxt, setBody] = useState('');
  const [EmailCheck, setEmailCheck] = useState(false);

  function isEmailCheck(abc) {
    let emailVerified = true;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (abc == '') {
      emailVerified = false;
    } else if (!regEx.test(abc)) {
      emailVerified = false;
    }
    return emailVerified;
  }
  function onTypeEmail(emailText) {
    setEmail(emailText);
    if (isEmailCheck(emailText)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  }
  const dataSent = data => {
    fetch(`https://gorest.co.in/public/v1/posts/${postid}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 6bd4c3788f7222a8f3ba8a43d7a57528d4e45728bc3d1a3e7e70d4f94a283c4e',
      },
      body: JSON.stringify(data),
    })
      .then(respone => {
        respone.json();
      })
      .then(data => {
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };
  onSubmit = () => {
    if (nametxt != '' && emailtxt != '' && bodytxt != '') {
      if (isEmailCheck(emailtxt)) {
        setEmailCheck(false);
        let data = {
          post_id: postid,
          name: nametxt,
          email: emailtxt,
          body: bodytxt,
        };
        dataSent(data);
      } else {
        Alert.alert('Enter email correctly');
      }
    } else {
      Alert.alert('Enter all details');
    }
  };

  return (
    <ScrollView>
      <View style={styles.view}>
        <View style={styles.container}>
          <Ionicons style={styles.icon} name={'md-person'} size={20} />
          <TextInput
            style={styles.insideTextInput}
            placeholder={'Name'}
            fontSize={18}
            onChangeText={text => setName(text)}
            defaultValue={nametxt}
          />
        </View>
        <View style={styles.container}>
          <MaterialIcon style={styles.icon} name="email" size={20} />
          <TextInput
            style={styles.insideTextInput}
            placeholder={'Email'}
            fontSize={18}
            keyboardType="email-address"
            onChangeText={text => onTypeEmail(text)}
            defaultValue={emailtxt}
          />
        </View>
        {EmailCheck === true ? (
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Text style={styles.error}>
              {'\u2B24 Please enter email address in valid format.'}
            </Text>
            <Text style={styles.error}>{'-Format: abc@mailprovider.com.'}</Text>
          </View>
        ) : null}
        <View style={styles.container}>
          <Ionicons style={styles.icon} name={'newspaper-sharp'} size={20} />
          <TextInput
            style={styles.insideTextInput}
            placeholder={'Body'}
            fontSize={18}
            onChangeText={text => setBody(text)}
            defaultValue={bodytxt}
          />
        </View>
        <Button
          title="Add"
          color={Colors.darkCyan}
          onPress={() => onSubmit()}
        />
      </View>
    </ScrollView>
  );
};

export default Add;
