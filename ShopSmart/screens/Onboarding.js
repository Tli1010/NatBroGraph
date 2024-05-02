import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <View style={styles.component1}>
        <Pressable
          style={styles.mitEmailAnmelden}
          onPress={() => navigation.navigate("AuswahlLoginSignUp")}
        >
          <View style={[styles.mitEmailAnmeldenChild, styles.childPosition]} />
          <Text style={[styles.mitEmailAnmelden1, styles.shopsmartFlexBox]}>
            Mit Email anmelden
          </Text>
        </Pressable>
        <View style={[styles.component1Child, styles.childPosition]} />
        <Text style={[styles.shopsmartDeinContainer, styles.shopsmartFlexBox]}>
          <Text style={styles.shopsmartTypo}>ShopSmart</Text>
          <Text style={styles.deinSmarterEinkaufshelfer}>
            {" "}
            - Dein smarter Einkaufshelfer: Vergleiche Preise, spare Zeit und
            Geld dank intuitiver Bedienung!
          </Text>
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <View style={[styles.groupInner, styles.groupChildLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
        </View>
        <View style={styles.shopsmart1}>
          <Text style={[styles.shopsmart2, styles.shopsmartTypo]}>
            ShopSmart
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  shopsmartFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    height: "12.95%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  shopsmartTypo: {
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
  },
  mitEmailAnmeldenChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  mitEmailAnmelden1: {
    top: "31.48%",
    left: "21.6%",
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  mitEmailAnmelden: {
    height: "9.75%",
    top: "90.25%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  component1Child: {
    height: "55.96%",
    top: "12.64%",
    bottom: "31.41%",
  },
  deinSmarterEinkaufshelfer: {
    fontFamily: FontFamily.outfitRegular,
  },
  shopsmartDeinContainer: {
    height: "18.05%",
    top: "70.4%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: "0%",
    width: "100%",
  },
  groupChild: {
    bottom: "87.05%",
    top: "0%",
  },
  groupItem: {
    top: "17.41%",
    bottom: "69.64%",
  },
  groupInner: {
    top: "34.82%",
    bottom: "52.23%",
  },
  rectangleView: {
    top: "52.23%",
    bottom: "34.82%",
  },
  groupChild1: {
    top: "69.64%",
    bottom: "17.41%",
  },
  groupChild2: {
    top: "87.05%",
    bottom: "0%",
  },
  rectangleParent: {
    height: "40.43%",
    width: "77.78%",
    top: "19.13%",
    right: "11.11%",
    bottom: "40.43%",
    left: "11.11%",
    position: "absolute",
  },
  shopsmart2: {
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    top: "0%",
    left: "0%",
  },
  shopsmart1: {
    height: "10.83%",
    width: "77.16%",
    right: "12.04%",
    bottom: "89.17%",
    left: "10.8%",
    top: "0%",
    position: "absolute",
  },
  component1: {
    top: 83,
    left: 33,
    width: 324,
    height: 554,
    position: "absolute",
  },
  onboarding: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Onboarding;
