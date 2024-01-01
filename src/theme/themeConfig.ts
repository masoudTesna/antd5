import type { ThemeConfig } from 'antd';

const themeConfig = {
  borderRadius: {
    4: '4px',
    8: '8px',
    16: '16px',
    24: '24px',
    32: '32px',
    64: '64px'
  },
  colors: {
    primary: {
      0: '#405189',
      tint: {
        1: '#F7F8FE',
        2: '#D0D6E9',
        3: '#B9C2DE',
        4: '#A2ADD3',
        5: '#8B99C8',
        6: '#7385BE',
        7: '#5C70B3'
      },
      shade: {
        1: '#4B5FA2',
        2: '#40528B',
        3: '#364473',
        4: '#2B365C',
        5: '#202945',
        6: '#151B2E',
        7: '#0A0D17',
        8: '#54698D',
        9: '#8795AF'
      }
    },
    neutral: {
      white: '#FFFFFF',
      gray: {
        1: '#F9F9F9',
        2: '#EDEDED',
        3: '#E1E1E1',
        4: '#CBCBCB',
        5: '#ADADAD',
        6: '#757575',
        7: '#353535',
        8: '#E5E7EB',
        9: '#F5F7F9'
      },
      black: '#0C0C0C'
    },
    error: {
      0: '#C30000',
      light: '#ED2E2E',
      extraLight: '#FFE4E4'
    },
    success: {
      0: '#00966D',
      light: '#00BA88',
      extraLight: '#DDFFF5'
    },
    warning: {
      0: '#A9791C',
      light: '#F4B740',
      extraLight: '#FFF8E1'
    },
    green: {
      0: '#05A34A',
      light: '#DAF4F0'
    },
    yellow: {
      0: '#FFB300',
      light: '#EFF4E4'
    },
    blue: {
      0: '#299CDD',
      light: '#DFF0FA'
    },
    orange: {
      0: '#F06548',
      light: '#FDE8E4'
    },
    bgColor: '#FAFBFD'
  }
};

const antdConfig: ThemeConfig = {
  token: {
    fontSize: 16,
    fontFamily: 'vazirFont',
    colorBgLayout: '#FFFFF',
    colorPrimary: themeConfig?.colors?.primary[ 0 ],
    colorInfo: themeConfig?.colors?.primary[ 0 ]
  },
  components: {
    Form: {
      itemMarginBottom: 40,
      labelColor: themeConfig?.colors?.primary?.shade[ 8 ],
      labelColonMarginInlineEnd: 20
    },
    Input: {
      controlHeight: 41,
      controlHeightLG: 38,
      controlHeightSM: 32,
      colorBgContainer: 'transparent',
      colorBorder: themeConfig?.colors?.primary?.shade[ 9 ],
      hoverBorderColor: themeConfig?.colors?.primary[ 0 ],
      activeBorderColor: themeConfig?.colors?.primary[ 0 ],
      activeShadow: '0 0 0 2px rgba(64, 81, 137, 0.1)',
      borderRadius: 4
    },
    Select: {
      controlHeight: 42,
      controlHeightLG: 38,
      controlHeightSM: 32,
      colorBgContainer: 'transparent',
      colorBorder: themeConfig?.colors?.primary?.shade[ 9 ],
      colorPrimaryHover: themeConfig?.colors?.primary?.shade[ 3 ],
      optionSelectedBg: themeConfig?.colors?.neutral?.gray[ 8 ],
      borderRadius: 4,
      optionFontSize: 14,
      colorText: themeConfig?.colors?.neutral?.black,
      optionSelectedFontWeight: 500,
      'algorithm': true
    },
    Checkbox: {
      colorBorder: themeConfig?.colors?.primary?.shade[ 9 ],
      colorPrimary: themeConfig?.colors?.primary[ 0 ],
      colorPrimaryHover: themeConfig?.colors?.primary[ 0 ]
    },
    Button: {
      controlHeight: 42,
      primaryShadow: 'none',
      defaultBorderColor: themeConfig?.colors?.primary[ 0 ]
    },
    Upload: {
      colorBorder: themeConfig?.colors?.primary?.shade[ 9 ]
    },
    Layout: {
      headerBg: themeConfig?.colors?.neutral?.white,
      siderBg: themeConfig?.colors?.primary?.shade[ 5 ]
    },
    Menu: {
      itemBg: 'transparent',
      itemActiveBg: themeConfig?.colors?.primary?.shade[ 4 ],
      itemSelectedBg: themeConfig?.colors?.primary?.shade[ 4 ],
      itemHoverBg: themeConfig?.colors?.primary?.shade[ 3 ],
      itemColor: themeConfig?.colors?.bgColor,
      itemHoverColor: themeConfig?.colors?.bgColor,
      itemSelectedColor: themeConfig?.colors?.bgColor,
      itemBorderRadius: 4,
      itemMarginBlock: 8,
      iconMarginInlineEnd: 22
    },
    Breadcrumb: {
      colorText: themeConfig?.colors?.primary[ 0 ],
      colorTextDescription: themeConfig?.colors?.primary?.shade[ 9 ]
    },
    Table: {
      colorText: themeConfig?.colors?.primary?.shade[ 9 ],
      colorTextHeading: themeConfig?.colors?.primary?.shade[ 8 ],
      headerBg: themeConfig?.colors?.neutral?.gray[ 9 ],
      headerBorderRadius: 0
    },
    Typography: {
      marginXXS: 10
    },
    Switch: {
      trackHeight: 25,
      handleSize: 18,
      trackPadding: 3.5,
      handleShadow: 'none'
    },
    Divider: {
      orientationMargin: 0
    },
    Pagination: {
      itemSize: 40,
      itemActiveBg: themeConfig?.colors?.primary[ 0 ],
      colorBgTextActive: themeConfig?.colors?.neutral?.gray[ 8 ],
      colorBgTextHover: themeConfig?.colors?.neutral?.gray[ 8 ],
      colorText: themeConfig?.colors?.primary?.shade[ 8 ],
      colorPrimary: themeConfig?.colors?.bgColor,
      borderRadius: 4
    },
    Modal: {
      headerBg: themeConfig.colors.primary.shade[ 5 ],
      titleColor: themeConfig.colors.neutral.white,
      borderRadiusLG: 4
    },
    Empty: {
      controlHeightLG: 32,
      colorText: themeConfig.colors.neutral.gray[ 4 ]
    }
  }
};

export { antdConfig, themeConfig };