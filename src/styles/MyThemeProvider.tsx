import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

export const MyThemeProvider = ({children}:any) => {
    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    )
}