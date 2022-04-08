import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'

export default function App() {

  const carouselItems = [
    {
      title: 'Primeiro Item',
      image: 
      'https://images.unsplash.com/photo-1642983883699-c9354c3b610e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Segundo Item',
      image: 
      'https://images.unsplash.com/photo-1642983883699-c9354c3b610e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Terceiro Item',
      image: 
      'https://images.unsplash.com/photo-1642983883699-c9354c3b610e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Quarto Item',
      image: 
      'https://images.unsplash.com/photo-1642983883699-c9354c3b610e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    },
  ];


  function renderItem({item}) {
    return(
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image style={styles.carouselItemImage}source={{uri: `${item.image}`}} /* style={{width: 300, height: 300}} *//>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Carousel
        layout={'default'}
        layoutCardOffset={10}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carouselItemContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    height: 300, 
    padding: 20,
    marginTop: 10,
  },

  carouselItemImage: {
    width: '100%',
    height: 200,
    marginTop: 15,
    borderRadius: 10,
  },

  carouselItemTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#999'
  }
});
