const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/planets.json'),
    readFile() {
        // Leer nuestra informacion
        const planetsPath = this.filename;
        const planetsJson = fs.readFileSync(planetsPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(planetsJson);
    },
    writeFile(newData) {
        // Pasar la data a json
        const dataJson = JSON.stringify(newData, null, 2);
        // Escribir el archivo
        fs.writeFileSync(this.filename, dataJson);
    },
    generateId() {
        const planets = this.readFile();
        const lastPlanet = planets.pop();
        return lastPlanet.id + 1;
    },
    findAll() {
        // Leer nuestra informacion
        const planets = this.readFile();
        // devolver la info
        return planets;
    },
    findByPk(id) {
        const planets = this.readFile();
        // Filtrar por el ID
        const planetFound = planets.find(planet => planet.id == id);
        // Devolvemos el planeta
        return planetFound;
    },
    create(planet) {
        planet.id = this.generateId();

        // Leer el archivo
        const planets = this.readFile();
        // Agregar nuestro planeta al array de planetas
        const planetsUpdated = [...planets, planet];
        // Volver a escribir el archivo con el nuevo array de planetas
        this.writeFile(planetsUpdated);
        return planet;
    },
    update(data, id) {
        const planets = this.readFile();

        const newPlanets = planets.map(planet => {
            if(planet.id == id){
                planet = {
                    id: planet.id,
                    ...data
                }
            }
            return planet;
        });

        this.writeFile(newPlanets);
    },
    destroy(id) {
        const planets = this.readFile();

        const newPlanets = planets.filter(planet => planet.id != id);

        this.writeFile(newPlanets);
    }
}