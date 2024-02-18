async function fetchGuildData() {
    const api = 'https://discord.com/api/guilds/978128579294543882/widget.json';

    try {
        const response = await fetch(api);
        const data = await response.json();

        const h1 = document.getElementById('online');
        const svg = document.createElement('svg');
        svg.innerHTML = '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="6" cy="6" r="6" fill="#22A157"></circle> </g></svg>';

        document.getElementById('online').innerHTML = `Membros Online: ${data.presence_count}`;
        h1.appendChild(svg);
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados do servidor:', error);
    }
}

fetchGuildData();
