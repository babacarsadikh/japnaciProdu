const fs = require('fs');
const path = require('./datas/users.json');

const usersFilePath = path.join(__dirname, 'users.json');

// Fonction pour lire les utilisateurs depuis le fichier JSON
const readUsers = () => {
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(usersData);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier users.json', error);
    return [];
  }
};

// Fonction pour enregistrer les utilisateurs dans le fichier JSON
const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des utilisateurs dans le fichier users.json', error);
  }
};

// Crée une liste d'utilisateurs par défaut s'il n'existe pas encore
const createDefaultUsers = () => {
  const defaultUsers = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      userType: 'benevole',
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password456',
      userType: 'beneficiaire',
    },
  ];

  saveUsers(defaultUsers);
};

// Initialise le fichier users.json avec des utilisateurs par défaut
createDefaultUsers();

// Endpoint pour obtenir la liste des utilisateurs
const getUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

module.exports = getUsers;
