import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Listen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listen}>
      <View style={styles.shopsmart}>
        <Text style={styles.shopsmart1}>ShopSmart</Text>
      </View>
      <Pressable
        style={[styles.listenChild, styles.listenShadowBox]}
        onPress={() => navigation.navigate("Liste")}
      />
      <Pressable
        style={[styles.listenItem, styles.listenShadowBox]}
        onPress={() => navigation.navigate("Liste1")}
      />
      <Pressable
        style={[styles.listenInner, styles.listenShadowBox]}
        onPress={() => navigation.navigate("NeueListeErstellen")}
      />
      <View style={[styles.rectangleView, styles.listenChildLayout]} />
      <View style={[styles.listenChild1, styles.listenChildLayout]} />
      <View style={[styles.listenChild2, styles.listenChildLayout]} />
      <View style={[styles.listenChild3, styles.listenChildLayout]} />
      <View style={[styles.listenChild4, styles.listenChildLayout]} />
      <Text style={[styles.pfel, styles.brotTypo]}>Äpfel</Text>
      <Text style={[styles.brot, styles.brotTypo]}>Brot</Text>
      <View style={[styles.listenChild5, styles.listenChildPosition2]} />
      <View style={[styles.listenChild6, styles.listenChildPosition2]} />
      <View style={[styles.listenChild7, styles.listenChildPosition1]} />
      <View style={[styles.listenChild8, styles.listenChildPosition1]} />
      <View style={[styles.listenChild9, styles.listenChildPosition]} />
      <View style={[styles.listenChild10, styles.listenChildPosition]} />
      <Text style={[styles.liste1, styles.listeTypo]}>Liste 1</Text>
      <Text style={[styles.liste2, styles.listeTypo]}>Liste 2</Text>
      <Text style={[styles.neueListeErstellen, styles.listeTypo]}>
        Neue Liste erstellen
      </Text>
      <Text style={[styles.bananen, styles.listenChildPosition2]}>Bananen</Text>
      <Text style={[styles.aufstrich, styles.listenChildPosition2]}>
        Aufstrich
      </Text>
      <Text style={[styles.brot1, styles.listenChildPosition1]}>Brot</Text>
      <Text style={[styles.paprika, styles.listenChildPosition1]}>Paprika</Text>
      <Text style={[styles.splmittel, styles.listenChildPosition]}>
        Spülmittel
      </Text>
      <Text style={[styles.linsen, styles.listenChildPosition]}>Linsen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listenShadowBox: {
    height: 174,
    width: 324,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    left: 33,
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
  listenChildLayout: {
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  brotTypo: {
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  listenChildPosition2: {
    opacity: 0.75,
    position: "absolute",
  },
  listenChildPosition1: {
    opacity: 0.5,
    position: "absolute",
  },
  listenChildPosition: {
    opacity: 0.25,
    position: "absolute",
  },
  listeTypo: {
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
    position: "absolute",
  },
  shopsmart1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  shopsmart: {
    top: 83,
    width: 250,
    height: 60,
    left: 70,
    position: "absolute",
  },
  listenChild: {
    top: 153,
  },
  listenItem: {
    top: 337,
  },
  listenInner: {
    top: 521,
  },
  rectangleView: {
    top: 165,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    position: "absolute",
  },
  listenChild1: {
    top: 349,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    position: "absolute",
  },
  listenChild2: {
    top: 533,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    position: "absolute",
  },
  listenChild3: {
    top: 196,
    position: "absolute",
  },
  listenChild4: {
    top: 380,
    position: "absolute",
  },
  pfel: {
    top: 200,
    position: "absolute",
  },
  brot: {
    top: 384,
    position: "absolute",
  },
  listenChild5: {
    top: 227,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  listenChild6: {
    top: 411,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  listenChild7: {
    top: 258,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  listenChild8: {
    top: 442,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  listenChild9: {
    top: 289,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  listenChild10: {
    top: 473,
    height: 26,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 51,
    backgroundColor: Color.colorWhite,
  },
  liste1: {
    top: 166,
  },
  liste2: {
    top: 350,
  },
  neueListeErstellen: {
    top: 534,
  },
  bananen: {
    top: 231,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  aufstrich: {
    top: 415,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  brot1: {
    top: 262,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  paprika: {
    top: 446,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  splmittel: {
    top: 293,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  linsen: {
    top: 477,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 70,
  },
  listen: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Listen;
