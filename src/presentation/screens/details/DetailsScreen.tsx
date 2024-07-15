import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movies/movie/MovieHeader'
import { MovieDetails } from '../../components/movies/movie/MovieDetails'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const { isLoading, movie, cast } = useMovie(movieId);

    if (isLoading) {
        return (
                <Text>Cargando...</Text>
        )
    }

    return (
        <ScrollView>
            <MovieHeader movie={movie!} />
            <MovieDetails movie={movie!} cast={cast!} />
        </ScrollView>
    )
}
