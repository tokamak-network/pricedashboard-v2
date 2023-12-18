import { extendTheme } from '@chakra-ui/theme-utils';
import "@fontsource/poppins";
import "@fontsource/inter"

const fonts = {
  Poppins: "Poppins",
  Inter: "Inter"
}

const PAGE_LAYOUT_STYLE = {
  layoutTheme: () => ({
    width: '450px',
    borderRadius: '10px',
    height: '330px',
    background: '#eceef9',
    boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset',
    padding: '26px'
  })
}



const theme = extendTheme({
  components: {
    PAGE_LAYOUT_STYLE,
  },
  fonts,
  initialColorMode: 'light',
  // breakpoints,
  styles: {
    global: () => ({
      'html, body': {
        backgroundColor: '#F7F8FD',
        // props.colorMode === 'light' ? 'white.100' : 'black.100',
        fontFamily: fonts.Poppins,
        color: '#333',
      },
      // button: {
      //   backgroundColor: 'black.100',
      // },
    }),
  },
})

export { theme }