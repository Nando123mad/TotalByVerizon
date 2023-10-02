import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      mxs: 200,
      msm: 300,
      xs: 600,
      sm: 900,
      md: 1200,
      lg: 1536,
      xl: 1836
    }
  }
});

const theme = createTheme({
  typography: {
    body1: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.4875rem"
      },
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.6875rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.875rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "1.0875rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '700',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    },
    body1disabled: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "0.5rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: 'normal',
      fontSize: 15,
      color: "#888888"
    },
    body2: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.5rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "0.5rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '700',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    },
    subtitle1: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.4rem"
      },
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.4rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.4rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "0.4rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: 'normal',
      fontSize: 10,
      color: "#fff"
    },
    h1: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.943rem"
      },
      // V original 1920x1080 V 
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "1.343rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "1.743rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "2.143rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '900',
      fontSize: 60,
      color: "#000",
      lineHeight: 1.75,
    },
    h2: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.9687rem"
      },
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.9687rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.9687rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "0.9687rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '900',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    },
    h3: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.6375rem"
      },
      // V original 1920x1080 V
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.9375rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "1.2375rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "1.4375rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '700',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    },
    h4: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.475rem"
      },
      // V original 1920x1080 V
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.875rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "1.175rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "1.475rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '700',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    },
    h5: {
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "0.5rem"
      },
      // V original 1920x1080 V
      [defaultTheme.breakpoints.only("sm")]: {
        fontSize: "0.625rem"
      },
      [defaultTheme.breakpoints.only("md")]: {
        fontSize: "0.75rem"
      },
      [defaultTheme.breakpoints.only("lg")]: {
        fontSize: "0.875rem"
      },
      fontFamily: "NeueHaasDisplayPro",
      fontWeight: '400',
      fontSize: 22,
      color: "#000",
      lineHeight: 1.75,
    }
  },
  palette: {
    mode: "dark",
    primary: {
      main: '#8a1e41'
    },
    secondary: {
      main: '#000'
    },
    info: {
      main: '#8a1e41'
    },
    action: {
      disabled: "#6A7278"
    },
    text: {
      primary: "#000"
    }
  }
})

export default theme