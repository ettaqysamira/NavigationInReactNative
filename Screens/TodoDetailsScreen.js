import { View, Text, StyleSheet } from "react-native";

export default function TodoDetailsScreen({ route }) {
    const { id, title } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>ID : {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        color: '#666',
    }
});
