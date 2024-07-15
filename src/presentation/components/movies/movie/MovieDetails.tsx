
import { Image, StyleSheet, Text, View } from "react-native"
import { FullMovie } from "../../../../core/entities/movie.entity"
import { Formatter } from "../../../../config/helpers/formatter";
import { Cast } from "../../../../core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../../cast/CastActor";

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {

console.log(cast);

    return (

        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{movie.rating}</Text>

                    <Text
                        style={{ marginLeft: 5 }}>
                        - {movie.genres.join(', ')}
                    </Text>
                </View>


                <Text style={styles.subtitle}>
                    Sinopsis
                </Text>
                <Text style={styles.text}>
                    {movie.description}
                </Text>

                <Text style={styles.subtitle}>
                    Presupuesto
                </Text>
                <Text style={styles.text}>
                    {Formatter.currency(movie.budget)}
                </Text>
            </View>

            <View style={{marginBottom: 30 }}>
                <Text style={{...styles.subtitle, marginHorizontal: 20}}>
                    Actores
                </Text>
                
                <FlatList
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CastActor actor={item} />
                    )}
                />

            </View>


        </>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10
    },
    text: {
        marginHorizontal: 20,
        marginTop: 10
    }
})