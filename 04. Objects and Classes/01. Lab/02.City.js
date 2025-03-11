function createCity(city) {
    console.log('name ->', city.name);
    console.log('area ->', city.area);
    console.log('population ->', city.population);
    console.log('country ->', city.country);
    console.log('postCode ->', city.postCode);
}

// function createCity(city) {
//     const data = Object.entries(city);

//     for (let [key,value] of data) {
//         console.log(`${key} -> ${value}`);
//     }
// }

console.log(createCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
));

console.log(createCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
));