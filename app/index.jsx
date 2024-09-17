import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "./constants";
import { CustomButton } from "./components"; // Assuming Loader is not needed

const Welcome = () => {
  const router = useRouter(); // Initialize router

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.innerContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={styles.cardsImage}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text style={styles.highlightText}>Traffix</Text>
            </Text>

            <Image
              source={images.path}
              style={styles.pathImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.descriptionText}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Traffix
          </Text>

          <CustomButton
            title="Connect Wallet"
            handlePress={() => router.push("/wallet")} // Corrected typo in path
            containerStyles="w-full mt-7"
          />

          {/* New Section */}
          <View style={styles.adminContainer}>
            <Text style={styles.adminQuestion}>Are you an admin?</Text>
            <Pressable onPress={() => router.push("/sign-in")}>
              <Text style={styles.signInButton}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161622",
    flex: 1,
  },
  scrollViewContent: {
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    height: 84,
  },
  cardsImage: {
    maxWidth: 380,
    width: "100%",
    height: 298,
  },
  textContainer: {
    position: "relative",
    marginTop: 20,
    alignItems: "center",
  },
  mainText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
  },
  highlightText: {
    color: "#FFA001",
  },
  pathImage: {
    width: 136,
    height: 15,
    position: "absolute",
    bottom: -9, // Adjusted for better alignment
    right: -30, // Adjusted for better alignment
  },
  descriptionText: {
    fontSize: 14,
    color: "#D1D5DB",
    marginTop: 16,
    textAlign: "center",
  },
  adminContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  adminQuestion: {
    fontSize: 14,
    color: "#D1D5DB",
  },
  signInButton: {
    fontSize: 16,
    color: "#FFA001",
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default Welcome;
