import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../assets/icons/menu.png")}
        style={styles.icon}
      />
      <Text style={styles.logo}>CryptoTracker</Text>
      <Image
        source={require("../../assets/icons/notification.png")}
        style={[styles.icon, { height: 20, width: 20 }]}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000",
    color: "#fff",
  },
  logo: { color: "#fff", fontWeight: "700", fontSize: 18 },
  icon: {
    height: 24,
    width: 24,
  },
});
