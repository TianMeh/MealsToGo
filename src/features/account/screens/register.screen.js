import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  Title,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAdress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="login"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
