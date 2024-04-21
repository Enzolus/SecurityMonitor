import React from 'react';

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fichierJson: {
        propriete1: 'Valeur1',
        propriete2: 42
      }
    };
  }

  envoyerFichierJson = () => {
    fetch('https://votre-api.com/donnees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.fichierJson)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }
      // Traiter la réponse si nécessaire
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
  }

  render() {
    return (
      <div>
        {/* Bouton pour déclencher l'envoi du fichier JSON */}
        <button onClick={this.envoyerFichierJson}>Envoyer fichier JSON</button>
      </div>
    );
  }
}

export default MonComposant;
