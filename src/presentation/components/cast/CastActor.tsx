
import { Image, StyleSheet, Text, View } from "react-native"
import { Cast } from "../../../core/entities/cast.entity";

interface Props {
    actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View
            style={styles.container}>
            <Image
                source={{ uri: actor.avatar }}
                style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={styles.actorInfo}>
                <Text
                    style={{ fontWeight: 'bold', fontSize: 16 }}
                >{actor.name}</Text>
                <Text
                    style={{ fontSize: 16, opacity: 0.7 }}
                >{actor.character}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
});