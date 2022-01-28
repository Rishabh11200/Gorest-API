import {Text, View, FlatList, ActivityIndicator, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Colors from '../../constants/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Users = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  LoadRandomData = () => {
    fetch(`https://gorest.co.in/public/v1/users?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 6bd4c3788f7222a8f3ba8a43d7a57528d4e45728bc3d1a3e7e70d4f94a283c4e',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        if (page === 1) {
          setData(responseJson.data);
        } else {
          setData([...data, ...responseJson.data]);
        }
        setPage(page + 1);
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };
  LoadMoreRandomData = () => {
    LoadRandomData();
  };
  useEffect(() => {
    LoadRandomData();
    setIsLoading(false);
  }, []);
  renderCustomItem = ({item, index}) => {
    return (
      <View style={styles.listComponent} key={item.name}>
        <View style={styles.inside}>
          <Pressable
            onPress={() => {
              navigation.navigate('Post', {id: item.id, title: item.name});
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>({item.id})</Text>
              {item.status === 'active' ? (
                <Icon name="circle" size={10} color={Colors.green} />
              ) : (
                <Icon name="circle" size={10} color={Colors.red} />
              )}
            </View>
            <Text style={styles.text}>{item.gender}</Text>
            <Text style={[styles.text, {marginLeft: 5}]}>{item.email}</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.view}>
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.shadeBlue} />
          <Text>Loading data...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          style={{width: 350, height: 800}}
          renderItem={renderCustomItem}
          keyExtractor={(item, index) => item.name}
          key={1}
          onEndReachedThreshold={0.1}
          onEndReached={LoadMoreRandomData}
        />
      )}
    </View>
  );
};

export default Users;
