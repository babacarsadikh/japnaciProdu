import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



const HeaderTopbar = ({ userData, tpClass }) => {
    const router = useRouter();
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            // Code de déconnexion ici
            localStorage.removeItem('userData');
            router.push('/'); // Rediriger vers la page d'accueil après la déconnexion
            window.location.reload(); // Rafraîchir la page

        }
    };

    return (
        <div className={`topbar ${tpClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+221 77 700 48 85</li>
                                <li><i className="fi flaticon-envelope"></i> hello@japnaci.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                {userData ? (
                                    <>
                                        <li><i className="fas fa-user " style={{ marginRight: '5px', color: '#1d5d1d' }}></i>
                                            <Link style={{ color: '#1d5d1d', display: 'inline', fontWeight: "bold" }} href="/espaceperso">Mon espace: {userData.username}</Link>
                                        </li>
                                        <li>
                                        <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                                <i className="fas fa-sign-out-alt" style={{ marginRight: '5px', color: '#1d5d1d',fontWeight: "bold" }}></i>
                                            </button>
                                        </li>
                                        {/* Ajoutez d'autres informations relatives à l'utilisateur si nécessaire */}
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <i className="fas fa-sign-in-alt" style={{ marginRight: '5px', color: '#1d5d1d' }}></i>
                                            <Link style={{ color: '#1d5d1d', display: 'inline', fontWeight: "bold" }} href="/login">Se connecter</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-user-plus" style={{ marginRight: '5px', color: '#1d5d1d' }}></i>
                                            <Link style={{ color: '#1d5d1d', display: 'inline', fontWeight: "bold" }} href="/register">S'inscrire</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTopbar;
