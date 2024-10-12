// src/pages/Home.js
import { getData } from '../utils/getData.js';

export const Home = async () => {
    const launches = await getData();
    const view = `
        <div class="launches-container">
            ${launches.map(launch => `
                <div class="card">
                    <img src="${launch.links.patch.small}" alt="${launch.name}">
                    <h2><a href="#/${launch.id}">${launch.name}</a></h2>
                </div>
            `).join('')}
        </div>
    `;
    return view;
};


