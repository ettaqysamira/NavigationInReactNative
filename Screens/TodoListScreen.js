import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

export default function TodoListScreen({ navigation }) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Chargement des tâches...");
        setTimeout(() => {
            setTodos([
                { id: 1, title: "Faire les courses" },
                { id: 2, title: "Sortir le chien" },
                { id: 3, title: "Coder une app RN" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <Text style={{ fontSize: 20 }}>Chargement...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* AppBar at the top with the requested title */}
            <AppBar title="Mes tâches" />

            <View style={styles.content}>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Détails", { id: item.id, title: item.title })}
                        >
                            <Text style={styles.todoItem}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        padding: 20,
    },
    todoItem: {
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 5,
    },
});