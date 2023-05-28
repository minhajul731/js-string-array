const products = [
    "asus zenbook laptop",
    "samsung Laptop",
    "LG phone with Laptop",
    "gaming monitor from MSI",
    "tenda router with gaming PC",
    "Gamidas gaming Mouse",
    "Fantech mouse",
    "rapoo mechanical keyboard",
    "Fantech gaming RGB keyboard"
];

const searchingInput = "laptop";
const output = [];

/* for (const product of products) {
    if (product.toLowerCase().indexOf(searchingInput.toLowerCase()) != -1) {
        output.push(product);
    }
}

console.log(output); */

for (const product of products) {
    if (product.toLowerCase().includes(searchingInput.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);