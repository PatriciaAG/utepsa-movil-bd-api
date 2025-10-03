import { Link, LinkProps } from 'expo-router';
import { StyleProp, TextStyle } from 'react-native';

import { useThemeColor } from '../hooks/use-theme-color';

interface Props extends LinkProps {
  style?: StyleProp<TextStyle>;
}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};
export default ThemedLink;