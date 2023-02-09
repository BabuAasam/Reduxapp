import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoCart } from '../Redux/Action/Actions';

const data = [
  {
    name: 'shoes 1',
    price: 'INR 1050',
    image: require('../Image/shose1.jpeg'),
  },
  {
    name: 'shoes 2',
    price: 'INR 1120',
    image: require('../Image/shoes2.jpeg'),
  },
  {
    name: 'shoes 3',
    price: 'INR 940',
    image: require('../Image/shoes3.jpeg'),
  },
  {
    name: 'shoes 4',
    price: 'INR 1000',
    image: require('../Image/shoes4.jpeg'),
  },
  {
    name: 'shoes 5',
    price: 'INR 1320',
    image: require('../Image/shoes5.jpeg'),
  },
  {
    name: 'shoes 6',
    price: 'INR 1100',
    image: require('../Image/shoes6.jpeg'),
  },
  {
    name: 'shoes 7',
    price: 'INR 1000',
    image: require('../Image/shoes4.jpeg'),
  },
];
const Producte = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addItem = (item) => {
      dispatch(addItemtoCart(item))
  };
  const items = useSelector(state => state);
  let addedItem = [];
  addedItem = items
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#ccc'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 70,
            flexDirection: 'row',
            backgroundColor: '#ccc',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontFamily: 'LATOB',
              color: '#000',
            }}>
            Redux App
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{
              backgroundColor: 'lightgreen',
              marginRight: 20,
              height: 25,
              width: 50,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../Image/calendar.png')}
            />
            <Text style={{marginRight: 10}}>{addedItem.length}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
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
                  justifyContent:'space-between'
                }}>
                <View>
                  <Text style={{fontSize: 14, fontFamily: 'ABEEZEE'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontFamily: 'LATOA', color: '#000'}}>
                    {item.price}
                  </Text>
                  <TouchableOpacity onPress={() => {
                     addItem(item);
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
                      Add to Cart
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

export default Producte;
