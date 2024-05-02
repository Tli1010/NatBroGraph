import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EinkaufWirdVerglichenAmGn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.einkaufWirdVerglichenAmGn}>
      <View style={styles.shopsmart}>
        <Text style={styles.shopsmart1}>ShopSmart</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Pressable
          style={styles.groupChildLayout3}
          onPress={() => navigation.navigate("Liste")}
        />
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={styles.groupShadowBox} />
        <Text style={styles.liste1}>Liste 1</Text>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={styles.groupChildShadowBox1} />
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.pfel, styles.pfelTypo]}>Äpfel</Text>
        <Text style={[styles.bananen, styles.pfelTypo]}>Bananen</Text>
        <Text style={[styles.brot, styles.pfelTypo]}>Brot</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildLayout3]}
          onPress={() => navigation.navigate("Liste")}
        />
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={styles.groupShadowBox} />
        <Text style={styles.lidl1096}>LIDL: 10,96€</Text>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={styles.groupChildShadowBox1} />
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.pinkLady399kg, styles.pinkLady399kgTypo]}>
          Pink Lady, 3,99€/kg
        </Text>
        <Text style={[styles.chiquitaBananen299kg, styles.pinkLady399kgTypo]}>
          Chiquita Bananen, 2,99€/kg
        </Text>
        <Text style={[styles.harryMehrkorn398kg, styles.pinkLady399kgTypo]}>
          HARRY Mehrkorn 3,98€/kg
        </Text>
        <Text style={[styles.harryMehrkorn398kg, styles.pinkLady399kgTypo]}>
          HARRY Mehrkorn 3,98€/kg
        </Text>
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <Text style={[styles.zumAktuellenEinkauf, styles.pinkLady399kgTypo]}>
            Zum aktuellen Einkauf machen
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 542,
    top: 153,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    position: "absolute",
  },
  pfelTypo: {
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_base,
    left: 15,
    width: 80,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout3: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 542,
    width: 147,
    position: "absolute",
  },
  pinkLady399kgTypo: {
    left: "50%",
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_base,
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
    left: 70,
    width: 250,
    height: 60,
    position: "absolute",
  },
  groupItem: {
    width: 131,
    borderRadius: Border.br_8xs,
    height: 52,
    backgroundColor: Color.colorWhite,
    left: 8,
    top: 69,
  },
  groupShadowBox: {
    top: 12,
    height: 52,
    width: 131,
    borderRadius: Border.br_8xs,
    left: 8,
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
  liste1: {
    width: 80,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 18,
    top: 23,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    width: 131,
    borderRadius: Border.br_8xs,
    height: 52,
    backgroundColor: Color.colorWhite,
    left: 8,
    top: 69,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChildShadowBox1: {
    top: 126,
    height: 52,
    width: 131,
    borderRadius: Border.br_8xs,
    left: 8,
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
  groupChildShadowBox: {
    top: 183,
    height: 52,
    width: 131,
    borderRadius: Border.br_8xs,
    left: 8,
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
  pfel: {
    top: 85,
  },
  bananen: {
    top: 142,
  },
  brot: {
    top: 199,
  },
  rectangleParent: {
    left: 31,
    width: 147,
    height: 542,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 153,
  },
  rectanglePressable: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  lidl1096: {
    width: 150,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 18,
    top: 23,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild5: {
    top: 71,
    width: 131,
    borderRadius: Border.br_8xs,
    height: 52,
    backgroundColor: Color.colorWhite,
    left: 8,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  pinkLady399kg: {
    top: 77,
    marginLeft: -50,
    left: "50%",
    width: 80,
  },
  chiquitaBananen299kg: {
    top: 122,
    marginLeft: -50,
    left: "50%",
    width: 80,
  },
  harryMehrkorn398kg: {
    top: 179,
    marginLeft: -50,
    left: "50%",
    width: 80,
  },
  groupChild8: {
    width: 131,
    borderRadius: Border.br_8xs,
    height: 52,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  zumAktuellenEinkauf: {
    marginTop: -20,
    marginLeft: -70,
    top: "50%",
    width: 150,
  },
  rectangleContainer: {
    top: 478,
    width: 160,
    left: 8,
  },
  rectangleGroup: {
    left: 212,
    width: 168,
    height: 542,
    top: 153,
  },
  einkaufWirdVerglichenAmGn: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EinkaufWirdVerglichenAmGn;
