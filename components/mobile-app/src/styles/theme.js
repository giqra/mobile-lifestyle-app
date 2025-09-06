import { StyleSheet } from 'react-native';

const colors = {
  primary: '#20C997',
  secondary: '#6C757D',
  background: '#FFFFFF',
  text: '#212529',
  success: '#28A745',
  danger: '#DC3545',
};

const fonts = {
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontFamily: fonts.regular,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  headerText: {
    color: '#FFF',
    fontFamily: fonts.bold,
    fontSize: 24,
  },
});

export { colors, fonts, theme };