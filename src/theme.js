import { createTheme } from '@mui/material';

export const theme=createTheme({
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            backgroundColor:"#000"
          }
        },
      },
      MuiAppBar:{
        styleOverrides:{
          root:{
            backgroundColor:"#cf4b45"
          }
        }
      }
    }

  });