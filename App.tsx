import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/header";
import { Card, CardHeader, CardTitle, CardContent } from "./shared/Card";

const cards = [
  {
    tokenName: "Bitcoin",
    price: "$45,231.89",
    lastMonthProgression: +20.1,
  },
  {
    tokenName: "Ethereum",
    price: "$45,231.89",
    lastMonthProgression: -5.1,
  },
  {
    tokenName: "Ripple",
    price: "$45,231.89",
    lastMonthProgression: 12.5,
  },
];

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar backgroundColor="#000" barStyle="light-content" />
      <SafeAreaView style={styles.body}>
        <Header />
        <View style={styles.container}>
          <View style={styles.cards}>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{card.tokenName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text style={styles.tokenName}>$45,231.89</Text>
                  <Text
                    style={[
                      styles.tokenProgression,
                      {
                        color:
                          card.lastMonthProgression < 0
                            ? "rgb(239 68 68)"
                            : "rgb(34 197 94)",
                      },
                    ]}
                  >
                    {card.lastMonthProgression >= 0 && "+"}
                    {card.lastMonthProgression}% from last month
                  </Text>
                </CardContent>
              </Card>
            ))}
          </View>

          <View></View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    // height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 15,
  },
  cards: {
    gap: 15,
  },
  tokenName: {
    fontSize: 20,
    fontWeight: "700",
  },
  tokenProgression: {
    fontSize: 12,
  },
});
