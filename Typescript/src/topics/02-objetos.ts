// el signo ? lo aplicamos para decir que es opcional
interface plantillaHero {
    nombre: string,
    salud: number,
    poder: string [],
    isCasado: boolean
    edad?: number
}

const heroe:plantillaHero = {
    nombre: 'batman',
    salud: 100,
    poder: ['volar','laser'],
    isCasado: false
}
// Otra manera de imprimir los valores
console.table(heroe)