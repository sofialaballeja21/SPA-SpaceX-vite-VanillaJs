// src/components/Character.js
// src/pages/Character.js
import { getData } from '../utils/getData.js';
import getHash from '../utils/getHash.js';

export const Character = async () => {
    const id = getHash(); // Obtiene el ID desde el hash de la URL
    const launches = await getData();
    const character = launches.find(launch => launch.id === id); // Encuentra el lanzamiento específico

    const view = `
        <div class="character-details">
            <img src="${character.links.patch.small}" alt="${character.name}" />
            <div class="card">
            <h2>${character.name}</h2>
            <p>Details: ${character.details || 'No details available'}</p>
            <p>Flight Number: ${character.flight_number}</p>
            <p>Launch Date: ${new Date(character.date_local).toLocaleString()}</p>
            <p>Failures: ${character.failures.length > 0 ? character.failures.map(f => `${f.reason}`).join(', ') : 'No failures'}</p>
        
            </div>
        </div>
    `;
    return view;
};

