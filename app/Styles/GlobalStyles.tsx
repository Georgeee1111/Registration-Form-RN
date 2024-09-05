import { StyleSheet } from "react-native";

// Reset default styles
const baseStyles = StyleSheet.create({
  base: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    fontFamily: "Arial",
    color: "#000",
  },
});

const styles = StyleSheet.create({
  // Main Container
  container: {
    ...baseStyles.base,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  image: {
    ...baseStyles.base,
    width: 300,
    height: 200,
    aspectRatio: 1200 / 1200,
    marginBottom: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  heading: {
    ...baseStyles.base,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  // Form Container
  formContainer: {
    ...baseStyles.base,
    width: 375,
    height: 667,
    maxWidth: 400,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  linkContainer: {
    ...baseStyles.base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  signInText: {
    ...baseStyles.base,
    marginTop: 3,
    marginLeft: 5,
    color: "blue",
  },
  // Input Fields
  input: {
    ...baseStyles.base,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  button: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  // Errors
  error: {
    color: "red",
    marginBottom: 12,
    fontSize: 14,
    textAlign: "center",
  },
  // Modals
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  successModal: {
    backgroundColor: "#c3e6cb",
  },
  errorModal: {
    backgroundColor: "#f5c6cb",
  },
  modalText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default styles;
