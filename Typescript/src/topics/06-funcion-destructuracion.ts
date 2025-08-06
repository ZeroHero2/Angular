// ---- Declaracion de interfaces 
interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}
interface Product{
    description:string;
    price:number;
}
// --- Creacion de objetos Product
const phone:Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet:Product ={
    description: "!Pad",
    price: 280
}
// Uso de funcion por medio de la interfaz
function taxCalculation ( options:TaxCalculationOptions):number[]{

    let total = 0;
    options.products.forEach(product =>{
        total += product.price;
    });

    return [total, total * options.tax];
}
// ---- Declaracion de variables 
const tax=0.15;
const shoopingCart = [phone,tablet];

const result = taxCalculation({
    products: shoopingCart,
    tax: tax
});

console.log("Total", result[0])
console.log("Tax", result[1])