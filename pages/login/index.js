import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from 'next/router';
import axios from 'axios';
import ApiConfig from '../../api/config/apiConfig';

const LoginPage = () => {
    const router = useRouter();

    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Le champ :attribute est requis.',
        },
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

                const response = await axios.post(ApiConfig.apiurl+'/auth/signin', {
                    email: value.email,
                    password: value.password
                });

                if (response.data.etat === "bakhna") {
                    if (typeof localStorage !== 'undefined') {
                        localStorage.setItem('userData', JSON.stringify(response.data));
                    }
                    router.push('/');
                    toast.success('Vous vous êtes connecté avec succès sur JAPNACI !');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
                toast.error('Erreur lors de la connexion. Veuillez réessayer.');
            } finally {
                setLoading(false);
            }
        } else {
            validator.showMessages();
            toast.error('Veuillez remplir correctement les champs.');
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2 style={{ color: "#1d5d1d", fontFamily: 'Buddy Champion', fontSize: "50px" }}>JAPNACI</h2>
                <p style={{ color: "black", fontSize: "14px" }}>Pour vous connecter, veuillez saisir votre adresse email et votre mot de passe.</p>

                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Adresse mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="Adresse mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            <span style={{ color: 'red' }}>{validator.message('email', value.email, 'required')}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            <span style={{ color: 'red' }}>{validator.message('password', value.password, 'required')}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                className="cBtnTheme"
                                onClick={submitForm}
                                endIcon={loading ? <CircularProgress size={25} color="inherit" /> : null}
                                disabled={loading}
                            >
                         {loading ? null : "Se connecter"}

                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
