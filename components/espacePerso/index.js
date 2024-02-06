import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ReactPaginate from 'react-js-pagination';
import ApiConfig from '../../api/config/apiConfig';
import Link from 'next/link';
const EspacePersoPage = ({ serverRenderedData }) => {
  const [userData, setUserData] = useState(serverRenderedData);
  const [donationsFinancier, setDonationsFinancier] = useState([]);
  const [donationsNature, setDonationsNature] = useState([]);
  const [donationsSang, setDonationsSang] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [activeTab, setActiveTab] = useState('DON_FINANCIER');
  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      getAllDonFinancier(JSON.parse(storedUserData).email);
      getAllDonNature(JSON.parse(storedUserData).email);
      getAllDonSang(JSON.parse(storedUserData).email);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const getAllDonFinancier = async (email) => {
    try {
      const response = await axios.get(
        ApiConfig.apiurl + '/don-financier/getDonationByEmail/' + email
      );

      if (response.data.statut === true) {
        setDonationsFinancier(response.data.donations);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des dons financiers:', error);
    }
  };

  const getAllDonNature = async (email) => {
    try {
      const response = await axios.get(
        ApiConfig.apiurl + '/don-nature/getAllDonNatureByEmail/' + email
      );

      if (response.data.statut === true) {
        setDonationsNature(response.data.donsNature);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des dons en nature:', error);
    }
  };

  const getAllDonSang = async (email) => {
    try {
      const response = await axios.get(
        ApiConfig.apiurl + '/don-nature/getAllDonSangByEmail/' + email
      );

      if (response.data.statut === true) {
        setDonationsSang(response.data.donsSang);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des dons de sang:', error);
    }
  };

  const formatCreatedAtDate = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return formattedDate;
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderDonations = (donations) => {
    return donations.map((donation) => (
      <tr key={donation.id}>
        <td>{donation.note}</td>
        <td>{formatMontant(donation.montant)}</td>
        <td>{donation.telephone}</td>
        <td>{formatCreatedAtDate(donation.createdAt)}</td>
        <td>{donation.payment}</td>
      </tr>
    ));
  };
  const renderDonationsNature = (donations) => {
    return donations.map((donation) => (
      <tr key={donation.id}>
        <td>{donation.id}</td>
        <td>{donation.noteDon}</td>
        <td>{donation.telephone}</td>
        <td>{formatCreatedAtDate(donation.createdAt)}</td>
      </tr>
    ));
  };

  const formatMontant = (amount) => {
    const formattedAmount = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);

    return formattedAmount;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    activeTab === 'DON_FINANCIER'
      ? donationsFinancier.slice(indexOfFirstItem, indexOfLastItem)
      : activeTab === 'DON_NATURE'
      ? donationsNature.slice(indexOfFirstItem, indexOfLastItem)
      : donationsSang.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          {/* <p>Bienvenue, {userData.username}!</p> */}
          <div className="tabs">
            <button
              className={activeTab === 'DON_FINANCIER' ? 'active' : ''}
              onClick={() => handleTabChange('DON_FINANCIER')}
            >
              DON FINANCIER
            </button>
            <button
              className={activeTab === 'DON_NATURE' ? 'active' : ''}
              onClick={() => handleTabChange('DON_NATURE')}
            >
              DON EN NATURE
            </button>
            <button
              className={activeTab === 'DON_DE_SANG' ? 'active' : ''}
              onClick={() => handleTabChange('DON_DE_SANG')}
            >
              DON DE SANG
            </button>
          </div>

          {activeTab === 'DON_FINANCIER' && donationsFinancier.length > 0 && (
            <div className="table-container">
              <h2>Dons Financiers</h2>
              <table>
                <thead>
                  <tr>
                    <th>Dons</th>
                    <th>Montant</th>
                    <th>Téléphone</th>
                    <th>Date</th>
                    <th>Paiement</th>
                  </tr>
                </thead>
                <tbody>{renderDonations(currentItems)}</tbody>
              </table>
              <ReactPaginate
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={donationsFinancier.length}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => setCurrentPage(pageNumber)}
                containerClassName="pagination mt-5"
                activeClassName="active"
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
          {activeTab === 'DON_FINANCIER' && donationsFinancier.length === 0 && (
          <><p style={{ textAlign: 'center' }}>Aucun don financier disponible.</p><p style={{ textAlign: 'center' }}>
                Vous pouvez <Link style={{ fontWeight: 'bold'  ,color: '#127027' }} href="/donate/#contact-form">Faire un don financier ici</Link>.
              </p></>
          )}

          {activeTab === 'DON_NATURE' && donationsNature.length > 0 && (
            <div className="table-container">
              <h2>Dons en Nature</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID Dons</th>
                    <th>Dons</th>
                    <th>Téléphone</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>{renderDonationsNature(currentItems)}</tbody>
              </table>
              <ReactPaginate
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={donationsNature.length}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => setCurrentPage(pageNumber)}
                containerClassName="pagination mt-5"
                activeClassName="active"
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
 {activeTab === 'DON_NATURE' && donationsNature.length === 0 && (
          <><p style={{ textAlign: 'center' }}>Aucun don en nature disponible.</p><p style={{ textAlign: 'center' }}>
                Vous pouvez <Link style={{ fontWeight: 'bold', color: '#127027' }} href="/contact_Donnature">Faire un don en nature ici</Link>.
              </p></>
          )}
          {activeTab === 'DON_DE_SANG' && donationsSang.length > 0 && (
            <div className="table-container">
              <h2>Dons de Sang</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID Dons</th>
                    <th>Dons</th>
                    <th>Téléphone</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>{renderDonationsNature(currentItems)}</tbody>
              </table>
              <ReactPaginate
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={donationsSang.length}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => setCurrentPage(pageNumber)}
                containerClassName="pagination mt-5"
                activeClassName="active"
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
           {activeTab === 'DON_DE_SANG' && donationsSang.length === 0 && (
 <><p style={{ textAlign: 'center' }}>Aucun don de sang disponible.</p><p style={{ textAlign: 'center' }}>
 Vous pouvez <Link style={{ fontWeight: 'bold', color: '#127027' }} href="/dondesangcontact">Faire un don de sang ici</Link>.
</p></>          
          )}
        </div>
      ) : (
        <div>
          <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>
          <button onClick={handleLoginRedirect}>Se connecter</button>
        </div>
      )}
<style jsx>{`
  .table-container {
    margin: 0 auto;
    max-width: 800px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: rgb(29, 93, 29);
    color: white;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .active > .page-link,
  .page-link.active {
    background-color: rgb(29, 93, 29);
  }

  .page-item {
    margin: 0 5px;
  }

  .active {
    background-color: #fff;
    color: rgb(29, 93, 29);
    border: 1px solid rgb(29, 93, 29);
    padding: 5px 10px;
    border-radius: 3px;
  }

  .page-link {
    color: rgb(29, 93, 29);
  }

  .tabs {
    display: flex;
    justify-content: center ;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .tabs button {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 10px;
  }

  .tabs button:last-child {
    margin-right: 0;
  }

  .tabs button.active {
    background-color: rgb(29, 93, 29);
    color: white;
  }

  /* Ajouter des styles spécifiques pour la version responsive */
  @media screen and (max-width: 600px) {
    .tabs {
      flex-direction: column;
      align-items: center;
    }

    .tabs button {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`}</style>

    </div>
  );
};

export default EspacePersoPage;
