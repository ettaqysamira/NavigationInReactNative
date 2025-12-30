import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreen({ route, navigation }) {
    const { id, title } = route.params;
    const { removeTodo } = useTodoStore();

    const handleDelete = () => {
        removeTodo(id);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Supprimer cette tâche" color="#ff3b30" onPress={handleDelete} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
    },
});
