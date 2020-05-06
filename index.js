const express = require("express");
const app = express();
const apellidos = ["Acosta", "Acuña", "Aguilar", "Aguirre", "Agustín", "Ahumada", "Alanis", "Alarcón", "Alayón", "Alcázar", "Alcocer", "Alfaro", "Almendárez", "Altamirano", "Álvarez", "Alzate", "Amador", "Anaya", "Argüelles", "Arjona", "Arriaga", "Arrollo", "Ayala", "Baca", "Báez", "Baños", "Barba", "Barrera", "Barrientos", "Barriga", "Bastida", "Batalla", "Bautista", "Bazán", "Becerra", "Becerril", "Bello", "Beltrán", "Benítez", "Bernal", "Bolaños", "Bonilla", "Borges", "Bustamante", "Busto", "Caballero", "Cabeza", "Cabrera", "Cadenas", "Caldera", "Calleja", "Calles", "Camacho", "Camareno", "Camarillo", "Campos", "Cárdenas", "Cardoso", "Carranza", "Carrillo", "Carvajal", "Carvallo", "Casas", "Castellanos", "Castañeda", "Cepeda", "Cerda", "Cervantes", "Céspedes", "Cevallos", "Cevedo", "Chávez", "Chavira", "Cisneros", "Collado", "Cordero", "Cornejo", "Correa", "Corro", "Cuéllar", "Cuervo", "Cuesta", "Cuevas", "Echeverría", "Elizondo", "Enríquez", "Escalante", "Escamilla", "Escobar", "Escobedo", "Escoto", "Escovar", "Espino", "Esquivel", "Estévez", "Estrada", "Estrella", "Fábregas", "Falcón", "Farías", "Fernández", "Ferreira", "Ferrer", "Fierro", "Figueras", "Flores", "Fonseca", "Fraga", "Frías", "Fuentes", "Funez", "Gaitán", "Galán", "Galeano", "Galeno", "Galindo", "Gallegos", "Galván", "Gamboa", "Gámez", "García", "Garrido", "Gavilán", "Gayoso", "Gaytán", "Gillén", "Godines", "Gómez", "Góngora", "Granada", "Granados", "Grijalba", "Guardado", "Guardiola", "Guerrero", "Guillén", "Gutiérrez", "Guzmán", "Heredia", "Hernández", "Herrera", "Hidalgo", "Hierro", "Huerta", "Hurtado", "Ibáñez", "Ibarra", "Icaza", "Iglesias", "Infante", "Ivañez", "Izquierdo", "Lacayo", "Lafuente", "Lagos", "Lagunal", "Lamas", "Lández", "Larios", "Lastreto", "Lázaro", "Leandro", "Lemus", "Leyva", "Linares", "Lines", "Lira", "Lizano", "Llano", "Lobo", "Lombardo", "López", "Loredo", "Lorio", "Losada", "Lozano", "Lucas", "Lugo", "Luna", "Lacayo", "Lafuente", "Lagos", "Lagunal", "Lamas", "Lández", "Larios", "Lastreto", "Lázaro", "Leandro", "Lemus", "Leyva", "Linares", "Lines", "Lira", "Lizano", "Llano", "Lobo", "Lombardo", "López", "Loredo", "Lorio", "Losada", "Lozano", "Lucas", "Lugo", "Luna", "Naranjo", "Navaro", "Navarrete", "Navarro", "Nieto", "Noble", "Noguera", "Noriega", "Novales", "Novo", "Novoa", "Núñez", "Obellón", "Obregón", "Ocampo", "Ochoa", "Ordóñez", "Olguín", "Olivar", "Olivares", "Olivera", "Olmeda", "Olmedo", "Olmo", "Ordóñez", "Orozco", "Ortega", "Ortiz", "Oseda", "Osorio", "Ospino", "Otero", "Oviedo", "Ozuno", "Pacheco", "Padilla", "Páez", "Palacio", "Paladino", "Palazuelos", "Palomar", "Palomino", "Paniagua", "Pantoja", "Parado", "Páramo", "Pardo", "Paredes", "Parra", "Pastor", "Pastrana", "Patiño", "Paz", "Pedroza", "Pena", "Peña", "Peralta", "Peraza", "Perdomo", "Pineda", "Pino", "Plácido", "Ponce", "Portillo", "Prada", "Prieto", "Puente", "Quesada", "Quevedo", "Quijada", "Quijano", "Quintana", "Quintanilla", "Quiroga", "Quiroz", "Ramírez", "Ramón", "Ramos", "Rangel", "Real", "Redondo", "Restrepo", "Reyes", "Rivas", "Rivera", "Roble", "Robles", "Rojas", "Roldán", "Román", "Romero", "Rosales", "Rosas", "Rovira", "Rubín", "Rubio", "Rueda", "Ruiz", "Sabín", "Sáenz", "Sagel", "Sala", "Salas", "Salazar", "Salcedo", "Saldaña", "Saldivar", "Salinas", "Salmón", "Salvado", "Samper", "Sánchez", "Sandino", "Sandoval", "Santiago", "Santos", "Sardinas", "Sarmiento", "Saucedo", "Savala", "Seballos", "Sedano", "Segura", "Silva", "Sol", "Solana", "Solé", "Soler", "Solís", "Somoza", "Sorio", "Sotelo", "Soto", "Sotomayor", "Soza", "Suárez", "Tablada", "Talavera", "Tames", "Taracena", "Tedesco", "Tejada", "Tobar", "Torre", "Torrente", "Tovar", "Travieso", "Trejos", "Treminio", "Triguero", "Troncoso", "Trujillo", "Valdés", "Valdiva", "Valencia", "Valentín", "Valenzuela", "Vales", "Valle", "Vallejo", "Vanegas", "Varela", "Varga", "Vargas", "Vásquez", "Vega", "Vela", "Velarde", "Velasco", "Velásquez", "Venegas", "Ventura", "Verti", "Vidal", "Villallovos", "Villar", "Villareal", "Villas", "Villaseñor", "Villeda", "Vivas", "Vivero", "Vívez", "Zabaleta", "Zacarías", "Zaldívar", "Zambrano", "Zamora", "Zamudio", "Zapata", "Zarco", "Zavala", "Zavaleta", "Zelaya", "Zetina", "Zuleta", "Zúñiga"];
const nombreHombre = ["Hugo", "Daniel", "Pablo", "Martín", "Alejandro", "Adrián", "Álvaro", "David", "Lucas", "Mateo", "Mario", "Manuel", "Antonio", "Diego", "Leo", "Javier", "Marcos", "Izan", "Alex", "Sergio", "Enzo", "Carlos", "Marc", "Jorge", "Miguel", "Gonzalo", "Juan", "Ángel", "Oliver", "Iker", "Dylan", "Bruno", "Eric", "Marco", "Iván", "Nicolás", "José", "Héctor", "Darío", "Samuel", "Víctor", "Rubén", "Gabriel", "Adam", "Aaron", "Thiago", "Jesús", "Aitor", "Alberto", "Guillermo"];
const nombreMujer = ["Lucía", "María", "Martina", "Paula", "Sofía", "Daniela", "Alba", "Julia", "Carla", "Sara", "Valeria", "Noa", "Emma", "Claudia", "Carmen", "Valentina", "Ana", "Marta", "Irene", "Adriana", "Laura", "Elena", "Alejandra", "Vega", "Alma", "Laia", "Lola", "Vera", "Olivia", "Inés", "Aitana", "Jimena", "Candela", "Ariadna", "Carlota", "Ainhoa", "Nora", "Triana", "Marina", "Chloe", "Elsa", "Alicia", "Clara", "Blanca", "Leire", "Mía", "Lara", "Rocío", "Ainara", "Nerea"];
var port = process.env.PORT || 8080;
let persona = {
  nombre: '',
  apellido1: '',
  apellido2: ''
};

app.get('/', function (req, res) {
 console.log('This is the home');
});

app.get('/mujer', function (req, res) {
  persona = {
    nombre: getRandomMujer(),
    apellido1: getRandomApellido(),
    apellido2: getRandomApellido()
  };
  res.send(persona);
});

app.get('/hombre', function (req, res) {
  persona = {
    nombre: getRandomHombre(),
    apellido1: getRandomApellido(),
    apellido2: getRandomApellido()
  };
  res.send(persona);
});
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});


function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

function getRandomMujer() {
  return nombreMujer[getRandom(nombreMujer.length)]
}
function getRandomHombre() {
  return nombreHombre[getRandom(nombreHombre.length)]
}

function getRandomApellido() {
  return apellidos[getRandom(apellidos.length)]
}

