import React from 'react';
import {FlatList, View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {List, Divider} from 'react-native-paper';

function Calendario({excursiones}) {
    const renderCalendarioItem = ({item}) => {
        return (
            <View>
                <List.Item
                    title={item.nombre}
                    description={item.descripcion}
                    titleNumberOfLines={0}
                    descriptionNumberOfLines={6}
                    left={(props) => (
                        <Image source={require('../images/40Años.png')} 
                        style={[props.style, styles.image]} 
                        resizeMode='cover'/>
                    )}
                    titleStyle={styles.title}
                    descriptionStyle={styles.description}
                    contentStyle={styles.content}
                />
                <Divider />
            </View>
        );
    };
    return (
        <SafeAreaView>
            <FlatList
                data={excursiones}
                renderItem={renderCalendarioItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    contenido: {
        paddingRight: 8,
    },
    titulo: {
        fontSize: 16,
    },
    descripcion: {
        fontSize: 14,
        lineHeight: 20,
    },
});

export default Calendario;
