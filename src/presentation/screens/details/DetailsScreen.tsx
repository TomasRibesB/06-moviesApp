import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    )
}
