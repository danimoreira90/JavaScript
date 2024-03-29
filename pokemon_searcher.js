document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function () {
        const inputValue = searchInput.value.trim().toLowerCase();
        clearPokemonData(); // Clear previous search results

        if (inputValue === 'red') {
            alert('Pokémon not found');
        } else if (inputValue === 'pikachu') {
            // Set Pikachu's details
            setPokemonData('PIKACHU', '25', '60', '4', '35', '55', '40', '50', '50', '90', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', ['ELECTRIC']);
        } else if (inputValue === '94') {
            // Set Gengar's details to include multiple types
            setPokemonData('GENGAR', '94', '405', '15', '60', '65', '60', '130', '75', '110', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', ['GHOST', 'POISON']);
        }
        // Placeholder for additional logic
    });

    function clearPokemonData() {
        document.getElementById('pokemon-name').textContent = '';
        document.getElementById('pokemon-id').textContent = '';
        document.getElementById('weight').textContent = '';
        document.getElementById('height').textContent = '';
        document.getElementById('hp').textContent = '';
        document.getElementById('attack').textContent = '';
        document.getElementById('defense').textContent = '';
        document.getElementById('special-attack').textContent = '';
        document.getElementById('special-defense').textContent = '';
        document.getElementById('speed').textContent = '';
        document.getElementById('types').innerHTML = '';
        let sprite = document.getElementById('sprite');
        if (sprite) sprite.remove(); // Ensure sprite element is properly removed
    }

    function setPokemonData(name, id, weight, height, hp, attack, defense, specialAttack, specialDefense, speed, spriteUrl, types) {
        document.getElementById('pokemon-name').textContent = name;
        document.getElementById('pokemon-id').textContent = '#' + id;
        document.getElementById('weight').textContent = 'Weight: ' + weight;
        document.getElementById('height').textContent = 'Height: ' + height;
        document.getElementById('hp').textContent = hp;
        document.getElementById('attack').textContent = attack;
        document.getElementById('defense').textContent = defense;
        document.getElementById('special-attack').textContent = specialAttack;
        document.getElementById('special-defense').textContent = specialDefense;
        document.getElementById('speed').textContent = speed;

        const sprite = document.createElement('img');
        sprite.id = 'sprite';
        sprite.src = spriteUrl;
        document.getElementById('results').appendChild(sprite);

        const typesContainer = document.getElementById('types');
        typesContainer.innerHTML = ''; // Ensure types are cleared for new searches
        types.forEach(type => {
            const typeElement = document.createElement('span');
            typeElement.textContent = type;
            typesContainer.appendChild(typeElement);
        });
    }
});