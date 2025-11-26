export const Colors = {
  primary: '#007BFF',
  secondary: '#FF4500',
};

export const LightTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: '#FFFFFF',
    card: '#F5F5F5',
    text: '#1F2937',
    border: '#E5E7EB',
    notification: Colors.secondary,
    tabBarBackground: '#FFFFFF', 
    tabBarActive: Colors.primary,
    tabBarInactive: '#A1A1AA',
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: '#121212',
    card: '#1F2937',
    text: '#F3F4F6',
    border: '#4B5563',
    notification: Colors.secondary,
    tabBarBackground: '#222222', 
    tabBarActive: '#FFFFFF',
    tabBarInactive: '#AAAAAA',
  },
};