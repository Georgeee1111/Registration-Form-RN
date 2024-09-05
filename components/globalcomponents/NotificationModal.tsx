import React from "react";
import { Text, View, Modal, Animated } from "react-native";
import styles from "@/app/Styles/GlobalStyles";

interface NotificationModalProps {
  visible: boolean;
  message: string;
  isSuccess: boolean;
  onClose: () => void;
  scaleValue: Animated.Value;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  message,
  isSuccess,
  onClose,
  scaleValue,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.modalContent,
            isSuccess ? styles.successModal : styles.errorModal,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <Text style={styles.modalText}>{message}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
