const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'var(--primary, #1d9bf0)',
      secondary: 'var(--secondary, #d1ebfc)',
      background: 'var(--background, #fff)',
      border: 'var(--border, #e6ecf0)',
      borderSecondary: 'var(--border-secondary, #b9cad3)',
      shadow: 'var(--shadow, #f7f9f9)',
      shadowSecondary: 'var(--shadow-secondary, #f2f2f2)',
      shadowTertiary: 'var(--shadow-tertiary, #d0d0d0)',
      text: 'var(--text, #000)',
      textSecondary: 'var(--text-secondary, #5b5b5b)',
      textContained: 'var(--text-contained, #fff)',
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
