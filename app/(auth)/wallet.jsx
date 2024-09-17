import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectId = "2eaa0bb71087e6627f9cbf167ee14182";

const providerMetadata = {
  name: "Traffix",
  description: "Traffix WalletConnect Modal",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "traffix://", // Replace with your app's scheme
    universal: "https://your-project-universal-link.com/", // Replace with your universal link
  },
};

export default function WalletConnect() {
  const { open, isConnected, address, provider } = useWalletConnectModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isConnected) {
      router.push("/home");
    }
  }, [isConnected, router]);

  const handleButtonPress = async () => {
    setLoading(true);
    try {
      if (isConnected) {
        await provider?.disconnect();
        // Optionally handle state change or feedback here
      } else {
        await open();
      }
    } catch (error) {
      console.error("WalletConnect error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Connect Your Wallet</Text>
      <Text style={styles.subHeading}>
        {isConnected ? `Connected: ${address}` : "Not Connected"}
      </Text>

      {/* Loading indicator */}
      {loading && (
        <ActivityIndicator size="large" color="#FFA001" style={styles.loader} />
      )}

      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {isConnected ? "Disconnect" : "Connect"}
        </Text>
      </Pressable>

      <Text style={styles.infoText}>
        {isConnected
          ? "You are now connected. You can disconnect by pressing the button."
          : "Press the button to connect your wallet. Ensure your wallet is set up properly."}
      </Text>

      {/* Go Back Button */}
      <Pressable onPress={handleGoBack} style={[styles.button, styles.goBackButton]}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#FFA001",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
  },
  loader: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: "#D1D5DB",
    textAlign: "center",
    marginTop: 20,
  },
  goBackButton: {
    marginTop: 10,
    backgroundColor: "#333333", // Different color for the Go Back button
  },
});
