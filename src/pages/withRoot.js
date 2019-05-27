import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blue, grey} from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../layout/AppBar';
import Drawer from '../layout/Drawer';

// A theme with custom primary and secondary color.
// It's optional.
const primaryColor = '#47a0ff';
const theme = createMuiTheme({
  primaryColor: primaryColor,
  primaryText: {
    fontFamily: 'Raleway-SemiBold',
    color: primaryColor,
    fontSize: 40,
    marginBottom: 30
  },
  primaryBtn: {
    fontFamily: 'Raleway-SemiBold',
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    borderRadius: 20,
    color: '#fff',
    minWidth: 200,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
      opacity: 0.9
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: 'white',
      opacity: 0.7,
      color: primaryColor,
      border: `1px solid ${primaryColor}`
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway-Regular',
    fontSize: 18,
  },
  root: {
    background: '#f9fafc',
    display: 'flex',
    minHeight: 'calc(100vh - 15px)'
  },
  palette: {
    primary: {
      light: blue[300],
      main: "#FFFFFF", //blue[50],
      dark: blue[700]
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700]
    },
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    padding: 24
  },
  appBarSpacer: {
    minHeight: 64
  },
  underline: {
    borderBottom: 0,
    '&:after': {
      borderBottom: 0
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <div style={theme.root}>
          <CssBaseline/>
          <AppBar/>
          <Drawer/>
          <main style={theme.content}>
            <div style={theme.appBarSpacer} />
            <Component {...props} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
