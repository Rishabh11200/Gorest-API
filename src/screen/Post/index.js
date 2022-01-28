import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Colors from '../../constants/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Post = ({route, navigation}) => {
  const {id} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const Load = () => {
    fetch(`https://gorest.co.in/public/v1/users/${id}/posts`, {
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
        setData(responseJson.data);
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };
  useEffect(() => {
    Load();
    setIsLoading(false);
  }, []);
  renderCustomItem = ({item, index}) => {
    return (
      <View style={styles.listComponent} key={item.title}>
        <View style={styles.inside}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.text, {marginLeft: 5}]}>{item.body}</Text>
          <Icon
            name="comment"
            size={24}
            color={Colors.black}
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              navigation.navigate('Comments', {id: item.id});
            }}
          />
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
        <View>
          {data.length > 0 ? (
            <FlatList
              data={data}
              style={{width: 350, height: 800}}
              renderItem={renderCustomItem}
              keyExtractor={(item, index) => item.title}
              key={1}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      height: 1,
                      width: '100%',
                      backgroundColor: '#000',
                    }}
                  />
                );
              }}
            />
          ) : (
            <View style={styles.center}>
              <Text style={styles.title}>Empty post</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Post;
