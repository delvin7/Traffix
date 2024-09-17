import React from "react";
import { FlatList, View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

import CustomButton from "../components/CustomButton"; // Ensure this import path is correct

const Bookmark = () => {
  const { isConnected, provider } = useWalletConnectModal();
  const router = useRouter();

  const handleDisconnect = async () => {
    if (isConnected) {
      try {
        await provider?.disconnect(); // Use provider's disconnect method
        router.push("/wallet"); // Navigate to SignIn page after disconnection
      } catch (error) {
        console.error("Error disconnecting from wallet:", error); // Log detailed error
        Alert.alert("Error", "Unable to disconnect from the wallet. Please try again."); // Alert user
      }
    }
  };

  return (
      <SafeAreaView className="px-4 my-6 bg-primary h-full">
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.headerContainer}>
              <CustomButton
                title="Disconnect Wallet"
                handlePress={handleDisconnect}
                containerStyles="w-40"
                textStyles="text-base"
              />
            </View>
          )}
          data={[]} // Placeholder empty array
          renderItem={() => <View />} // Placeholder render function
          keyExtractor={(item, index) => index.toString()} // Unique key for each item
        />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#', // Replace with your actual background color
  },
  headerContainer: {
    marginVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Bookmark;
