import { FlatList, Text, View } from "react-native";
import { styles } from "./style";
import { dataAPI } from "../../Mock/DadosSimulate";



export const Home = () => {

    return (
       <View>

            <FlatList
            //por padrão a flatlist e vertical, mas da para usar
            //o horizontal={true} que a lista fica na horizontal
                horizontal={true}
                data={dataAPI}
                keyExtractor={dados => dados.id.toString()}
                renderItem={({ item }) =>
                    <View>
                        <Text style={styles.estiloTexto}>{item.name}</Text>
                        <Text style={styles.estiloTexto}>{item.age}</Text>
                    </View>}


            />

        </View>
    )
};

//além da view da para usar também a ScrollView que faz a rolagem da tela
//da para usar ele envolvendo tudo e depois passar uma view pq ele e limitado a acaitar estílos

