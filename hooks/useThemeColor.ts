import { useColorScheme } from 'react-native';

export function useThemeColor(props: { light?: string; dark?: string }) {
  const theme = useColorScheme() ?? 'light';
  return props[theme] || '';
}
