const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgb(var(--primary, 30 156 241) / <alpha-value>)',
      secondary: 'rgb(var(--secondary, 30 156 241) / <alpha-value>)',
      background: 'rgb(var(--background, 30 156 241) / <alpha-value>)',
      border: 'rgb(var(--border, 30 156 241) / <alpha-value>)',
      borderSecondary: 'rgb(var(--border-secondary, 30 156 241) / <alpha-value>)',
      shadow: 'rgb(var(--shadow, 30 156 241) / <alpha-value>)',
      shadowSecondary: 'rgb(var(--shadow-secondary, 30 156 241) / <alpha-value>)',
      shadowTertiary: 'rgb(var(--shadow-tertiary, 30 156 241) / <alpha-value>)',
      text: 'vrgb(var(--text, 30 156 241) / <alpha-value>)',
      textSecondary: 'rgb(var(--text-secondary, 30 156 241) / <alpha-value>)',
      textContained: 'rgb(var(--text-contained, 30 156 241) / <alpha-value>)',
    },
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      gridTemplateRows: {
        easy: 'repeat(4, 1fr)',
        medium: 'repeat(4, 1fr)',
        hard: 'repeat(4, 1fr)',
        legendary: 'repeat(6, 1fr)',
      },
      gridTemplateColumns: {
        easy: 'repeat(4, 1fr)',
        medium: 'repeat(6, 1fr)',
        hard: 'repeat(8, 1fr)',
        legendary: 'repeat(12, 1fr)',
      },
      aspectRatio: {
        easy: '4 / 4',
        medium: '6 /4',
        hard: '8 / 4',
        legendary: '12 / 6',
      },
      fontSize: {
        xxs: '0.625rem',
        cardSmall: '0.6vmax',
        card: '1vmax',
        title: '4vw',
        subtitle: '2vw',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('small', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.small.${e(`small${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('medium', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.medium.${e(`medium${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('large', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.large.${e(`large${separator}${className}`)}`;
        });
      });
    }),

    plugin(function ({ addVariant, e }) {
      addVariant('contained', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.contained.${e(`contained${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('outlined', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.outlined.${e(`outlined${separator}${className}`)}`;
        });
      });
    }),

    plugin(function ({ addVariant, e }) {
      addVariant('easy', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.easy.${e(`easy${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('medium', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.medium.${e(`medium${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('hard', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.hard.${e(`hard${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('legendary', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.legendary.${e(`legendary${separator}${className}`)}`;
        });
      });
    }),
  ],
};
