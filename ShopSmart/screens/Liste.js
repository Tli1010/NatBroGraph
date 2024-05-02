import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Liste = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liste1}>
      <View style={styles.shopsmart}>
        <Text style={styles.shopsmart1}>ShopSmart</Text>
      </View>
      <Pressable
        style={styles.liste1Child}
        onPress={() => navigation.navigate("Liste")}
      />
      <View style={[styles.liste1Item, styles.liste1ChildShadowBox]} />
      <Pressable
        style={[styles.liste1Inner, styles.liste1ChildShadowBox]}
        onPress={() => navigation.navigate("EinkaufWirdVerglichenAmGn")}
      />
      <Text style={[styles.produktHinzufgen, styles.brotTypo]}>
        Produkt hinzufügen
      </Text>
      <Text style={[styles.listeVergleichen, styles.brotTypo]}>
        Liste vergleichen
      </Text>
      <View style={styles.liste1Child2Position} />
      <View style={[styles.liste1Child1, styles.liste1ChildShadowBox]} />
      <Text style={[styles.liste11, styles.bioTypo]}>Liste 1</Text>
      <View style={[styles.liste1Child2, styles.liste1Child2Position]} />
      <View style={[styles.liste1Child3, styles.liste1ChildShadowBox]} />
      <View style={[styles.liste1Child4, styles.liste1ChildShadowBox]} />
      <View style={[styles.liste1Child5, styles.liste1ChildShadowBox]} />
      <Text style={[styles.pfel, styles.brotTypo]}>Äpfel</Text>
      <Text style={[styles.bananen, styles.brotTypo]}>Bananen</Text>
      <Text style={[styles.brot, styles.brotTypo]}>Brot</Text>
      <Text style={[styles.brot1, styles.brotTypo]}>Brot</Text>
      <Image
        style={[styles.ellipseIcon, styles.liste1ChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child6, styles.liste1ChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child7, styles.liste1ChildPosition4]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child8, styles.liste1ChildPosition4]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child9, styles.liste1ChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child10, styles.liste1ChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child11, styles.liste1ChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child12, styles.liste1ChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child13, styles.liste1ChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.liste1Child14, styles.liste1ChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.vLabelVeganLogoCa2a01ef44Icon}
        contentFit="cover"
        source={require("../assets/vlabelveganlogoca2a01ef44seeklogo-1.png")}
      />
      <Text style={[styles.bio, styles.v1Typo]}>Bio</Text>
      <Text style={[styles.v, styles.vTypo]}>V</Text>
      <Text style={[styles.egan, styles.eganTypo]}>egan</Text>
      <Text style={[styles.egetarisch, styles.egetarischTypo]}>egetarisch</Text>
      <View style={[styles.liste1Child15, styles.liste1ChildLayout1]} />
      <View style={styles.liste1Child16} />
      <View style={styles.liste1Child17} />
      <View style={styles.liste1Child18} />
      <View style={[styles.liste1Child19, styles.liste1ChildLayout]} />
      <View style={[styles.liste1Child20, styles.liste1ChildPosition1]} />
      <View style={[styles.liste1Child21, styles.liste1ChildPosition]} />
      <View style={[styles.liste1Child22, styles.liste1ChildPosition]} />
      <View style={styles.liste1Child23} />
      <View style={[styles.liste1Child24, styles.liste1ChildLayout1]} />
      <Text style={[styles.v1, styles.v1Typo]}>V</Text>
      <Text style={[styles.bio1, styles.bioTypo]}>Bio</Text>
      <Text style={[styles.bio2, styles.bioTypo]}>Bio</Text>
      <Text style={[styles.v2, styles.v2Typo]}>V</Text>
      <Text style={[styles.v3, styles.v3Typo]}>V</Text>
      <Text style={[styles.v4, styles.v2Typo]}>V</Text>
      <Text style={[styles.v5, styles.v3Typo]}>V</Text>
      <Text style={[styles.v6, styles.v1Typo]}>V</Text>
      <Text style={[styles.egan1, styles.eganTypo]}>egan</Text>
      <Text style={[styles.egetarisch1, styles.egan2Typo]}>egetarisch</Text>
      <Text style={[styles.egetarisch2, styles.egan3Typo]}>egetarisch</Text>
      <Text style={[styles.egan2, styles.egan2Typo]}>egan</Text>
      <Text style={[styles.egan3, styles.egan3Typo]}>egan</Text>
      <Text style={[styles.v7, styles.vTypo]}>V</Text>
      <Text style={[styles.egetarisch3, styles.egetarischTypo]}>
        egetarisch
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  liste1ChildShadowBox: {
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
  brotTypo: {
    fontSize: FontSize.size_base,
    left: 65,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bioTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  liste1Child2Position: {
    top: 222,
    height: 52,
    width: 288,
    borderRadius: Border.br_8xs,
    left: 49,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  liste1ChildLayout2: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  liste1ChildPosition4: {
    left: 287,
    height: 20,
    width: 20,
    position: "absolute",
  },
  liste1ChildPosition3: {
    left: 312,
    height: 20,
    width: 20,
    position: "absolute",
  },
  liste1ChildPosition2: {
    left: 237,
    height: 20,
    width: 20,
    position: "absolute",
  },
  v1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vTypo: {
    left: 234,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  eganTypo: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  egetarischTypo: {
    left: 240,
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  liste1ChildLayout1: {
    height: 10,
    top: 293,
    borderRadius: Border.br_11xs,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1ChildLayout: {
    height: 23,
    left: 202,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1ChildPosition1: {
    top: 395,
    width: 60,
  },
  liste1ChildPosition: {
    left: 265,
    height: 23,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  v2Typo: {
    top: 357,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  v3Typo: {
    top: 416,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  egan2Typo: {
    fontSize: FontSize.size_5xs,
    top: 372,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  egan3Typo: {
    fontSize: FontSize.size_3xs,
    top: 429,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    color: Color.colorBlack,
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
  liste1Child: {
    top: 153,
    left: 31,
    borderRadius: Border.br_mini,
    width: 324,
    height: 542,
    backgroundColor: Color.colorGainsboro,
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
  liste1Item: {
    top: 450,
  },
  liste1Inner: {
    top: 507,
  },
  produktHinzufgen: {
    top: 466,
    fontFamily: FontFamily.outfitRegular,
  },
  listeVergleichen: {
    top: 523,
    fontFamily: FontFamily.outfitRegular,
  },
  liste1Child1: {
    top: 165,
  },
  liste11: {
    top: 176,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    left: 70,
  },
  liste1Child2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 222,
  },
  liste1Child3: {
    top: 279,
  },
  liste1Child4: {
    top: 336,
  },
  liste1Child5: {
    top: 393,
  },
  pfel: {
    top: 238,
    fontFamily: FontFamily.outfitRegular,
  },
  bananen: {
    top: 295,
    fontFamily: FontFamily.outfitRegular,
  },
  brot: {
    top: 352,
    fontFamily: FontFamily.outfitRegular,
  },
  brot1: {
    top: 409,
    fontFamily: FontFamily.outfitRegular,
  },
  ellipseIcon: {
    left: 262,
    top: 249,
  },
  liste1Child6: {
    top: 306,
    left: 262,
  },
  liste1Child7: {
    top: 249,
  },
  liste1Child8: {
    top: 306,
  },
  liste1Child9: {
    top: 249,
  },
  liste1Child10: {
    top: 306,
  },
  liste1Child11: {
    top: 249,
  },
  liste1Child12: {
    top: 306,
  },
  liste1Child13: {
    left: 212,
    top: 306,
  },
  liste1Child14: {
    left: 212,
    top: 249,
  },
  vLabelVeganLogoCa2a01ef44Icon: {
    top: 251,
    left: 215,
    width: 14,
    height: 18,
    position: "absolute",
  },
  bio: {
    top: 308,
    left: 263,
  },
  v: {
    top: 309,
  },
  egan: {
    top: 317,
    left: 221,
  },
  egetarisch: {
    top: 316,
  },
  liste1Child15: {
    left: 212,
  },
  liste1Child16: {
    top: 363,
    left: 292,
    width: 40,
    borderRadius: Border.br_11xs,
    height: 20,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1Child17: {
    left: 247,
    top: 362,
    width: 40,
    borderRadius: Border.br_11xs,
    height: 20,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1Child18: {
    left: 202,
    top: 362,
    width: 40,
    borderRadius: Border.br_11xs,
    height: 20,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1Child19: {
    width: 60,
    height: 23,
    top: 420,
  },
  liste1Child20: {
    height: 23,
    left: 202,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1Child21: {
    top: 395,
    width: 60,
  },
  liste1Child22: {
    width: 59,
    top: 420,
    left: 265,
  },
  liste1Child23: {
    top: 288,
    height: 15,
    borderRadius: Border.br_11xs,
    left: 237,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  liste1Child24: {
    left: 262,
  },
  v1: {
    top: 290,
    left: 213,
  },
  bio1: {
    top: 358,
    left: 293,
    fontFamily: FontFamily.outfitRegular,
  },
  bio2: {
    top: 391,
    left: 206,
    fontFamily: FontFamily.outfitRegular,
  },
  v2: {
    left: 248,
  },
  v3: {
    left: 269,
  },
  v4: {
    left: 203,
  },
  v5: {
    left: 207,
  },
  v6: {
    top: 310,
    left: 214,
  },
  egan1: {
    top: 297,
    left: 219,
  },
  egetarisch1: {
    left: 259,
  },
  egetarisch2: {
    left: 281,
  },
  egan2: {
    left: 214,
  },
  egan3: {
    left: 219,
  },
  v7: {
    top: 289,
  },
  egetarisch3: {
    top: 296,
  },
  liste1: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Liste;
