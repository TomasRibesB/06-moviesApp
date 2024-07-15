import { ActivityIndicator, Image, Pressable, StyleSheet, View } from "react-native"
import { Movie } from "../../../core/entities/movie.entity"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/Navigation";
import { useState } from "react";

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}
            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 4,
                paddingVertical: 20,
                paddingHorizontal: 7,
                transform: [{ scale: pressed ? 1.01 : 1 }],
                opacity: pressed ? 0.95 : 1,
            })}
        >
            <View style={isLoading ? Styles.imageSkeletonContainer : Styles.imageContainer}>
                {isLoading && <ActivityIndicator size="large" color="indigo"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                />}
                <Image
                    source={{ uri: movie.poster }}
                    style={Styles.image}
                    onLoad={() => setIsLoading(false)}
                />
            </View>
        </Pressable>
    )
}

const Styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    imageSkeletonContainer: {
        flex: 1,
        borderRadius: 18,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});