
import { useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import NewsScreen from "../components/common/News";

function HomeScreen() {
  const [isVisivel, setIsVisivel] = useState(true);

  const handleVisible = () => setIsVisivel(!isVisivel)
    
  return (
    <>
    <StatusBar />
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", backgroundColor: "#000", height: 200, justifyContent: "space-around", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, paddingHorizontal: 20}}>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <Image source={require("../assets/avatar.png")} style={{ height: 60, width: 60 }} />
          <Text style={{ color: "#fff", fontFamily: "Jersey", fontSize: 32, marginLeft: 20 }}>Olá, Yuri Collodetti</Text>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image source={require("../assets/brasil.png")} style={{height: 40, width: 40}}/>
            
              <Text style={{ color: "#fff", fontFamily: "Jersey", fontSize: 42, marginLeft: 20 }}>{isVisivel ? "R$ 400,00" : "*****"}</Text>
            
          </View>
          <TouchableOpacity onPress={handleVisible}>
            <Image source={require("../assets/eye.png")} style={{height: 30, width: 30}}/>
          </TouchableOpacity>
        </View>

      </View>

      <NewsScreen />
    </View>
    </>
  );
}

export default HomeScreen;