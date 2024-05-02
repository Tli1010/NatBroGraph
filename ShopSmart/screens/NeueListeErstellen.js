import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NeueListeErstellen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.neueListeErstellen}>
      <View style={styles.shopsmart}>
        <Text style={[styles.shopsmart1, styles.neueListeFlexBox]}>
          ShopSmart
        </Text>
      </View>
      <Pressable
        style={styles.neueListeErstellenChild}
        onPress={() => navigation.navigate("Liste")}
      />
      <View style={[styles.neueListeErstellenItem, styles.neueShadowBox]} />
      <Text style={[styles.neueListe, styles.neueListeFlexBox]}>
        Neue Liste
      </Text>
      <View style={[styles.neueListeErstellenInner, styles.neueShadowBox]} />
      <Text style={[styles.produktHinzufgen, styles.neueListeFlexBox]}>
        Produkt hinzufügen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  neueListeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  neueShadowBox: {
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
  neueListeErstellenChild: {
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
  neueListeErstellenItem: {
    top: 165,
  },
  neueListe: {
    top: 176,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    left: 70,
  },
  neueListeErstellenInner: {
    top: 222,
  },
  produktHinzufgen: {
    top: 238,
    left: 65,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.outfitRegular,
  },
  neueListeErstellen: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default NeueListeErstellen;
