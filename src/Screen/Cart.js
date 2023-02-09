import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemfromCart} from '../Redux/Action/Actions';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemfromCart(index));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
              height: 28,
              width: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                  backgroundColor: '#fff',
                  marginBottom: 10,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{fontSize: 14, fontFamily: 'ABEEZEE'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontFamily: 'LATOA', color: '#000'}}>
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      removeItem(index);
                    }}
                    style={{
                      backgroundColor: 'green',
                      height: 30,
                      width: 90,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      marginTop: 3,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'ABEEZEE',
                        fontSize: 12,
                      }}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    style={{height: 80, width: 80, borderRadius: 10}}
                    source={item.image}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
