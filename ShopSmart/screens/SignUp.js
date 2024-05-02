import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.onboarding}>
        <Text style={styles.shopsmart}>ShopSmart</Text>
      </View>
      <View style={[styles.signUpChild, styles.signChildLayout]} />
      <View style={[styles.signUpItem, styles.signChildLayout]} />
      <View style={[styles.signUpInner, styles.signChildLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.signChildLayout]}
        onPress={() => navigation.navigate("Listen")}
      >
        <View style={[styles.groupChild, styles.signChildLayout]} />
        <Text style={[styles.accountErstellen, styles.emailTypo]}>
          Account erstellen
        </Text>
      </Pressable>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.benutzername, styles.emailTypo]}>Benutzername</Text>
      <Text style={[styles.passwort, styles.emailTypo]}>Passwort</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signChildLayout: {
    height: 54,
    width: 324,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  shopsmart: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  onboarding: {
    top: 68,
    left: 71,
    width: 250,
    height: 60,
    position: "absolute",
  },
  signUpChild: {
    top: 163,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    width: 324,
    left: 34,
  },
  signUpItem: {
    top: 252,
    left: 33,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    width: 324,
  },
  signUpInner: {
    top: 341,
    left: 33,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    width: 324,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    width: 324,
  },
  accountErstellen: {
    top: 15,
    left: 84,
  },
  rectangleParent: {
    top: 415,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 33,
  },
  email: {
    top: 138,
    left: 33,
  },
  benutzername: {
    top: 227,
    left: 34,
  },
  passwort: {
    top: 316,
    left: 34,
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUp;
