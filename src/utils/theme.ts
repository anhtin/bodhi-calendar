export const colors = {
  BROWN: '#8f6e64',
  GREEN: '#a1b182',
  GRAY_LIGHT: '#f6f6ff',
  YELLOW_LIGHT: '#fff9ed',
};

export default {
  breakpoints: ['40em', '52em', '64em'],
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: colors.BROWN,
    },
    outline: {
      color: colors.BROWN,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
  colors,
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ]
}