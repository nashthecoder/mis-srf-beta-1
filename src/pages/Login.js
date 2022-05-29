import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography>
            {'Copyright © '}
            <Link color="#018934" href="https://www.srf.co.ke/">
                SRF
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <main sx={{backgroundColor: '#018934'}}>
                <Box
                sx={{
                    backgroundColor: '#ffffff',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#018934' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="secondary" />}
                        label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" color="#018934" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" color="#018934" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
                </main>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}
