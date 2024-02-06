import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        nomComplet: '',
        email: '',
        telephone: '',
        adresse: '',
        noteDon: '',
        error: {},
        loading: false // Ajout de l'état de chargement
    };

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = '';

        this.setState({
            [e.target.name]: e.target.value,
            error
        });
    };

    submitHandler = async (e) => {
        e.preventDefault();

        const {
            nomComplet,
            email,
            telephone,
            adresse,
            noteDon,
            error
        } = this.state;

        if (nomComplet === '') {
            error.nomComplet = "Veuillez entrer votre nom complet";
        }
        if (email === '') {
            error.email = "Veuillez entrer votre adresse e-mail";
        }
        if (adresse === '') {
            error.adresse = "Veuillez entrer votre adresse";
        }
        if (telephone === '') {
            error.telephone = "Veuillez entrer votre numéro de téléphone";
        }
        if (noteDon === '') {
            error.noteDon = "Veuillez entrer votre note";
        }

        this.setState({ error });

        const hasErrors = Object.values(error).some((errorMsg) => errorMsg !== '');

        if (!hasErrors) {
            this.setState({ loading: true }); // Activer le chargement

            try {
                const response = await axios.post('https://api.japnaci.com/api/don-nature/add_don', {

              //  const response = await axios.post('https://backend.japnaci.com/api/don-nature/add_don', {
                    nomComplet,
                    email,
                    telephone,
                    adresse,
                    noteDon
                });

                console.log('Réponse de l\'API:', response.data);

                toast.success(`Merci ${nomComplet} pour votre don, l'équipe de Japanaci vous contactera 👍🏽`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 10000
                });

                this.setState({
                    nomComplet: '',
                    email: '',
                    telephone: '',
                    adresse: '',
                    noteDon: '',
                    error: {},
                    loading: false // Désactiver le chargement
                });
            } catch (error) {
                console.error('Erreur lors de l\'envoi vers l\'API :', error);
                toast.error("Une erreur s'est produite lors de l'envoi du don. Veuillez réessayer plus tard.", {
                    position: toast.POSITION.TOP_LEFT
                });

                this.setState({ loading: false }); // Désactiver le chargement en cas d'erreur
            }
        }
    };

    render() {
        const { nomComplet, email, telephone, adresse, noteDon, error, loading } = this.state;

        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input value={nomComplet} onChange={this.changeHandler} type="text" name="nomComplet" placeholder="Prenom et Nom *" />
                        <p>{error.nomComplet ? error.nomComplet : ''}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Adresse e-mail (facultatif)" />
                        <p>{error.email ? error.email : ''}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input value={telephone} onChange={this.changeHandler} type="number" name="telephone" placeholder="Numéro de téléphone *" />
                        <p>{error.telephone ? error.telephone : ''}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input onChange={this.changeHandler} value={adresse} type="text" name="adresse" placeholder="Region ,Departement ,Commune ... *" />
                        <p>{error.adresse ? error.adresse : ''}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-field">
                        <textarea
                            name="noteDon"
                            placeholder="Description de votre don ..."
                            value={noteDon}
                            onChange={this.changeHandler}
                        />
                        <p>{error.noteDon ? error.noteDon : ''}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-submit">
                        <button className="theme-btn" onClick={this.submitHandler} disabled={loading}>
                            {loading ? 'Patienter...' : 'Envoyer'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
