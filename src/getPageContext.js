import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  env: {
    drawerWidth: '210px'
  },
  overrides: {
    MuiListItemText: { // Name of the component ⚛️ / style sheet
      primary: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 17,
        paddingBottom: 17
      },
      selected: {
        backgroundColor: '#03A9F4!important',
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'white',
      }
    },
    MuiButton: {
      label: {
        color: 'white'
      }
    }
  },
  palette: {
    primary: {
      main: '#4E546C',
    },
    secondary: {
      main: '#03A9F4',
    },
    logoBar: {
      main: '#555C78',
    },
    background: {
      default: '#EEF4F9'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
