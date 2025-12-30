import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoListScreen({ navigation }) {
   const { todos, addTodo } = useTodoStore();

   useEffect(() => {
      if (todos.length === 0) {
         addTodo({ id: "1", title: "Faire les courses" });
         addTodo({ id: "2", title: "Sortir le chien" });
         addTodo({ id: "3", title: "Coder une app RN" });
      }
   }, []);

   return (
      <View style={styles.container}>
         <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate("Détails", { id: item.id, title: item.title })}
               >
                  <Text style={styles.title}>{item.title}</Text>
               </TouchableOpacity>
            )}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
   },
   item: {
      backgroundColor: "#fff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 8,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
   },
   title: {
      fontSize: 18,
   },
});
