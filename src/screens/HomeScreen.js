import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FILMS from "../data";

function ListFilms() {
  const [film, setFilm] = useState({ FILMS });
}

const renderItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textColor}>This is my home screen.</Text>
        <FlatList data={FILMS} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: "white",
  },
});
