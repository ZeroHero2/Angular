// ------------ Destructuracion de objetos -------------------
interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details:Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Bounce man",
    details: {
        author: 'Twenty one Pilots',
        year: 2021
    }
}
// Destructuracion para song y songDuration 
const {song:anothersong, songDuration: duration, details} = audioPlayer;
const {author} = details;
console.log("El autor es: ", author)
console.log("song:", anothersong);
console.log("duracion:", duration);
export {};

// ------------ Destructuracion de arreglos -------------------
// Arreglo normal
const dbz:string[] = ['Yamcha', 'Majin boo', 'Picolo'];
console.log("El seguundo personaje es:", dbz[1]);
// Arreglo con destructuracion
const [personaje1, personaje2, personaje3] :string[] = ["Goku", "Gohan", "Vegeta"]

console.log ("El 1r personaje es:", [personaje1]);