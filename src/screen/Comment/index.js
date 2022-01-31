import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Colors from '../../constants/Color';
import {getComments} from '../../Redux/actions';
import {getComment} from '../../Api/Application';
import {useDispatch, useSelector} from 'react-redux';

const Comment = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const data = useSelector(state => state.comments.comment);
  const Load = () => {
    dispatch(getComments(id));
    // getComment(id).then(res => {
    //   setData(res);
    // });
    /*fetch(`https://gorest.co.in/public/v1/posts/${id}/comments`, {
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
      });*/
  };
  useEffect(() => {
    Load();
    setIsLoading(false);
    navigation.addListener('focus', () => {
      Load();
      setIsLoading(false);
    });
  }, []);
  renderCustomItem = ({item, index}) => {
    return (
      <View style={styles.listComponent} key={item.id}>
        <View style={styles.inside}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>{item.email}</Text>
          <Text style={[styles.text, {marginLeft: 5}]}>{item.body}</Text>
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
              keyExtractor={(item, index) => item.id}
              key={1}
              ListFooterComponent={() => {
                return (
                  <View>
                    <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: '#000',
                      }}
                    />
                  </View>
                );
              }}
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
              <Text style={styles.title}>No Comments</Text>
            </View>
          )}
          <View style={{marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Add', {postid: id});
              }}>
              <Text style={[styles.text, {fontSize: 15}]}>
                Add more comments...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Comment;
