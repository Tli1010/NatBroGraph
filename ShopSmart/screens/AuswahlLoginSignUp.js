import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AuswahlLoginSignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.auswahlLoginsignUp}>
      <View style={styles.shopsmart}>
        <Text style={styles.shopsmart1}>ShopSmart</Text>
      </View>
      <View style={[styles.auswahlLoginsignUpChild, styles.childLayout]} />
      <View
        style={[styles.auswahlLoginsignUpItem, styles.rectangleParentPosition]}
      />
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("Listen")}
      >
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.anmelden, styles.hierTypo]}>Anmelden</Text>
      </Pressable>
      <Text style={[styles.emailBenutzername, styles.hierTypo]}>
        Email / Benutzername
      </Text>
      <Text style={[styles.passwort, styles.hierTypo]}>Passwort</Text>
      <Pressable
        style={[styles.duHastNochContainer, styles.passwortPosition]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text
            style={styles.duHastNoch}
          >{`Du hast noch keinen Acoount? Dann erstell `}</Text>
          <Text style={styles.hierTypo}>hier</Text>
          <Text style={styles.duHastNoch}> einen!</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 54,
    width: 324,
  },
  rectangleParentPosition: {
    left: 32,
    position: "absolute",
  },
  hierTypo: {
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
  },
  passwortPosition: {
    left: 33,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
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
    left: 69,
    width: 250,
    height: 60,
    position: "absolute",
  },
  auswahlLoginsignUpChild: {
    top: 178,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    height: 54,
    left: 33,
    position: "absolute",
  },
  auswahlLoginsignUpItem: {
    top: 267,
    height: 54,
    width: 324,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    height: 54,
    position: "absolute",
  },
  anmelden: {
    top: 15,
    left: 115,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleParent: {
    top: 341,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 54,
    width: 324,
  },
  emailBenutzername: {
    top: 153,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: 32,
    position: "absolute",
  },
  passwort: {
    top: 242,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: 33,
    position: "absolute",
  },
  duHastNoch: {
    fontFamily: FontFamily.outfitRegular,
  },
  text: {
    height: 50,
    width: 324,
    fontSize: FontSize.size_xl,
  },
  duHastNochContainer: {
    top: 405,
  },
  auswahlLoginsignUp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AuswahlLoginSignUp;
