class Animal {
    public nombre:string
    public tamaño:string

    constructor(nombre:string, tamaño:string){
        this.nombre = nombre;
        this.tamaño = tamaño;
    }
}

class Perro extends Animal{
    public raza: string

    constructor(nombre:string, tamaño:string,raza:string){
        super(nombre,tamaño)
        this.raza = raza
    }
}