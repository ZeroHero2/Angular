export interface Passenger{
    name: string;
    chilndren?: string[];
}

const passenger1:Passenger={
    name: 'Juan'
}
const passenger2:Passenger={
    name: 'Julia',
    chilndren: ['Luis','Josefa']
}

const printChildren = (passenger:Passenger)=>{
    const howManyChildrens = passenger.chilndren?.length
    console.log(`El pasajero ${passenger.name} tiene ${howManyChildrens} hijos`)
}

printChildren(passenger2);