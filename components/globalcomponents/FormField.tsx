import React from "react";
import { Text, TextInput } from "react-native";
import { useFormikContext } from "formik";
import styles from "@/app/Styles/GlobalStyles";
interface FormFieldsProps {
  touched: any;
  errors: any;
}

const FormFields: React.FC<FormFieldsProps> = ({ touched, errors }) => {
  const { handleChange, handleBlur, values } = useFormikContext<any>();

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={handleChange("firstName")}
        onBlur={handleBlur("firstName")}
        value={values.firstName}
      />
      {touched.firstName && errors.firstName && (
        <Text style={styles.error}>{errors.firstName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleChange("lastName")}
        onBlur={handleBlur("lastName")}
        value={values.lastName}
      />
      {touched.lastName && errors.lastName && (
        <Text style={styles.error}>{errors.lastName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
        keyboardType="email-address"
      />
      {touched.email && errors.email && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        secureTextEntry
      />
      {touched.password && errors.password && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={handleChange("confirmPassword")}
        onBlur={handleBlur("confirmPassword")}
        value={values.confirmPassword}
        secureTextEntry
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}
    </>
  );
};

export default FormFields;
