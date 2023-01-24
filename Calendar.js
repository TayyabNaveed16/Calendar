import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';


export default function App() {
  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [list, setList] = useState([]);
  const [color, setColor] = useState('#528e11');



  const addItem = () => {
    setList([...list, {value1: item, value2: date}]); 
    //Adding object to a list with value1 = item(event) and value2 = date
    setItem('');
    setDate('');
  };

  const removeItem = () => {
    setList([]);
  };

  const renderList = ({ item }) => (

    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          backgroundColor: 'lightgreen',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{ margin: 10, color: 'white', fontSize: 20 }}>
          {item.value1}, {item.value2}
        </Text>
      </View >
    </TouchableOpacity>
  );

  const changecolor = () => {
    if (color == '#528e11' ){
      setColor('#9c27b0');
    }
    else if (color == '#9c27b0' ){
      setColor('#528e11');
    }
  }

  return (
    <View>
      <ScrollView>

        <TouchableOpacity onPress={changecolor}>
        <Text style={{ justifyContent: 'center', textAlign: 'center', marginTop: 20, fontSize: 30, color: color, fontWeight: 'bold' }}>
          EVENT PLANNER APP
        </Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>M</Text>
          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>T</Text>
          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>W</Text>

          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>T</Text>

          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>F</Text>

          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>S</Text>

          </View>

          <View style={styles.Box}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>S</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row', marginLeft: 115 }}>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('1 - Wednesday')}  >
              <Text style={{ color: 'black', fontSize: 30 }} >1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('2 - Thursday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >2</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('3 - Friday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('4 - Saturday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >4</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('5 - Friday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >5</Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('6 - Monday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('7 - Tuesday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >7</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('8 - Wednesday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >8</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('9 - Thursday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('10 - Friday')} >
              <Text style={{ color: 'black', fontSize: 30 }} >10</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('11 - Saturday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >11</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('12 - Sunday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >12</Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('13 - Monday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >13</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('14 - Tuesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >14</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('15 - Wednesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >15</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('16 - Thursday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >16</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('17 - Friday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >17</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('18 - Saturday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >18</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('19 - Sunday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >19</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('20 - Monday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >20</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('21 - Tuesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >21</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('22 - Wednesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >22</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('23 - Thursday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >23</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('24 - Friday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >24</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('25 - Saturday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >25</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('26 - Sunday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >26</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('27 - Monday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >27</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('28 - Tuesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >28</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('29 - Wednesday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >29</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxWhite}>
            <TouchableOpacity onPress ={()=> setDate('30 - Thursday')}>
              <Text style={{ color: 'black', fontSize: 30 }} >30</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 25, color: 'black' }}>Event Name</Text>
        <TextInput style={{ marginLeft: 10, fontSize: 25, borderBottomWidth: 1 }} placeholder='Enter the name of the event' onChangeText={setItem}>{item}</TextInput>

        <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 25, color: 'black' }}>Date/Day:</Text>
        <TextInput style={{ marginLeft: 10, fontSize: 24, borderBottomWidth: 1 }} placeholder='Select the date/day from calendar'>{date}</TextInput>


        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity>
            <Text style={{ backgroundColor: 'green', marginTop: 20, fontSize: 25, padding: 10, color: 'white', fontWeight: 'bold', paddingHorizontal: 20 }} onPress={addItem}>Add to Event</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ backgroundColor: 'orange', marginTop: 10, fontSize: 25, padding: 6, color: 'white', fontWeight: 'bold', paddingHorizontal: 28 }} onPress ={removeItem}>Remove All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 10, marginRight: 10 }}>

          <FlatList style={{ width: "100%" }} data={list} renderItem={(renderList)}>
          </FlatList>
        {/* Here, data gets all the values of list and it is rendered using renderItem = renderList */}

        </ScrollView>

      </ScrollView>

    </View>
  );

};

const styles = StyleSheet.create({
  Box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    marginTop: 20,
    height: 40,
    backgroundColor: color,
    borderRightColor: 'white',
    borderRightWidth: 0.5,
  },
  BoxWhite: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    marginTop: 20,
    height: 40,
    borderRightColor: 'white',
    borderRightWidth: 0.5,

  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 20,
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#C53437',
  },

});
