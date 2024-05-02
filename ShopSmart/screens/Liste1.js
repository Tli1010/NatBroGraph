import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Liste1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liste2}>
      <View style={styles.shopsmart}>
        <Text style={[styles.shopsmart1, styles.pfelFlexBox]}>ShopSmart</Text>
      </View>
      <Pressable
        style={styles.liste2Child}
        onPress={() => navigation.navigate("Liste")}
      />
      <View style={[styles.liste2Item, styles.liste2ShadowBox]} />
      <Text style={[styles.liste21, styles.pfelFlexBox]}>Liste 2</Text>
      <View style={[styles.liste2Inner, styles.liste2ShadowBox]} />
      <Text style={[styles.pfel, styles.pfelFlexBox]}>Äpfel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pfelFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  liste2ShadowBox: {
    height: 52,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 49,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  shopsmart1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
  },
  shopsmart: {
    top: 83,
    width: 250,
    height: 60,
    left: 70,
    position: "absolute",
  },
  liste2Child: {
    top: 153,
    left: 31,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 324,
    height: 542,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  liste2Item: {
    top: 165,
  },
  liste21: {
    top: 176,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    left: 70,
  },
  liste2Inner: {
    top: 222,
  },
  pfel: {
    top: 238,
    left: 65,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.outfitRegular,
  },
  liste2: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Liste1;
