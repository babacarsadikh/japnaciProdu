import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from 'axios';
import ApiConfig from '../../api/config/apiConfig';

const SignUpPage = () => {
    const router = useRouter();

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            try {
                setLoading(true);

                // Utilisez setTimeout pour simuler un délai de 4 secondes
                await new Promise(resolve => setTimeout(resolve, 2000));

                const response = await axios.post(ApiConfig.apiurl+'/auth/signup', {
                    username: value.full_name,
                    password: value.password,
                    role: 'benevole', // Assuming the role is fixed for now
                    email: value.email,
                });

                // Handle successful registration
                setValue({
                    email: '',
                    full_name: '',
                    password: '',
                    confirm_password: '',
                });
                validator.hideMessages();
                toast.success('Inscription réussie avec succès!');
                router.push('/login');
            } catch (error) {
                // Handle registration failure
                console.error('Error during registration:', error);
                toast.error('Cette adresse email existe déjà!');
            } finally {
                setLoading(false);
            }
        } else {
            validator.showMessages();
            toast.error('Veuillez remplir correctement tous les champs.');
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2 style={{ color: "#1d5d1d", fontFamily: 'Buddy Champion', fontSize: "50px" }}>JAPNACI</h2>
                <p>Pour vous inscrire, saisissez votre adresse email et votre nom complet.</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Nom complet"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Mot de passe"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirmer Mot de passe"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                className="cBtn cBtnLarge cBtnTheme"
                                type="submit"
                                endIcon={
                                    loading ? (
                                        <CircularProgress size={20} color="inherit" />
                                    ) : null
                                }
                                disabled={loading}
                            >
                                {loading ? null : "S'inscrire"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default SignUpPage;
