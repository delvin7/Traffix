
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import OpenCamera from "../components/openCamera"; // Import OpenCamera component

const Home = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <FlatList
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Traffix
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <View className="w-full pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Start Reporting
              </Text>

              <FlatList
                data={[]} // Replace with your data
                renderItem={() => <View />} // Replace with your item component
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
              />
            </View>

            {/* Add the OpenCamera component here */}
            <OpenCamera />

          </View>
        )}
        data={[]} // Replace with your data
        renderItem={() => <View />} // Replace with your item component
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
