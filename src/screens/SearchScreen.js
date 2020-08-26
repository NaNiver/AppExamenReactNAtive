import * as React from 'react';
import { Searchbar, List } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export function SearchScreen() {

    var oItems = ["Android", "C++", "Java", "JavaScript", "Kotlin", "PHP", "Swift"];

    const [searchQuery, setSearchQuery] = React.useState('');

    const [items, newItems] = React.useState([...oItems]);

  

    const onChangeSearch = query => {
        setSearchQuery(query);
        if(query == "" || query == " ")
        {
            newItems([...oItems]);
        }
        else
        {
            var PATT = query;
            var tempItems = oItems.filter(function (str) { return str.includes(PATT); });
            newItems([...tempItems]);
        }

    };
    


    return (
      <>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />

        <View>
            {
                items.map((item,key)=>(
                    <List.Item
                        key = {key}
                        title = {item}  
                        left={props => <Icon name="code" size= {30} color='#826ed2' />}
                    />
                ))
            
            }
        </View>

      </>
    );
};