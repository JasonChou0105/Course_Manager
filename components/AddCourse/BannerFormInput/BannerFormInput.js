import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import BlueBanner from "../../../assets/banners/Blue/BlueBanner";
import BannerSelectionModal from "./BannerSelectionModal";

function BannerFormInput({ title }) {
  const [modelOpen, setModelOpen] = useState(false);
  function onOpenBannerSelection() {
    setModelOpen(true);
  }
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modelOpen}
        style={styles.modal}
      >
        <BannerSelectionModal setModalVisable={setModelOpen} />
      </Modal>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={onOpenBannerSelection}
          style={styles.bannerDisplayContainer}
        >
          <BlueBanner />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  modal: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: COLORS.highlight,
    fontSize: 12,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  bannerDisplayContainer: {
    width: "100%",
    height: 60,
    overflow: "hidden",
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default BannerFormInput;
