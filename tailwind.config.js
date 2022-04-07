module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          green: {
            light: '#CEEFC2',
            default: '#56C72C'
          },
          yellow: '#F6AF43',
          grey: {
            default: '#EAEEF9',
            50: '#EFF2FF',
            100: '#F7F8FC',
            150: '#E5E8F6',
            200: '#C4C8E3',
            250: '#A5AEC8',
            300: '#9C9FAD'
          },
          black: '#131319',
          success: '#56C72CD9',
          error: '#F3655CD9',
          purple: '#925FFF',
        },

        social: {
          telegram: '#40A4DD',
          vk: '#2F82FF'
        },

        gradient: {
          green: {
            light: '#56C72C',
            dark: '#5CA541'
          },
          orange: {
            light: '#F7C61A',
            dark: '#F74F1AB2'
          },
          blue: {
            light: '#4F9AF2B2',
            dark: '#5454F5'
          }
        }
      },

      borderRadius: {
        6: '6px',
        8: '8px',
        10: '10px'
      }
    },
  },
  plugins: [],
}