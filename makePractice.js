const hero = [
    'Superman',
    'Batman',
    'Woderwoman',
    'Aquaman',
    'Flash',
    'Green lantern',
    'Cyborg',
    'Hawkgirl',
    'Martian manhunter',
    'Shazam',
    'Green arrow'
];

const name = [
    'Clark kent',
    'Bruce wayne',
    'Diana prince',
    'Arthur curry',
    'Barry allen',
    'Hal jordon',
    'Victor vic stone',
    'Kendra saunders',
    'John jones',
    'Billy batson',
    'Oliver queen'
]

const address = [
    'Metropolis City',
    'Gotham City',
    'Amazoness',
    'Atlantis',
    'Central City',
    'Coast City',
    'Saltlake City',
    'Midway City',
    'Mars',
    'Newyork City',
    'Star City'
]

const fs = require('fs');

// function profile(hero,name,address){
//     this.hero = hero;
//     this.name = name;
//     this.address = address;
// }

//  const justiceLeague = [];
// for(let i = 0; i < 11; i++){
//     justiceLeague.push(new profile(hero[i],name[i],address[i]));
//  }

// fs.writeFileSync('justiceLeague.JSON',JSON.stringify(justiceLeague,null,2),"utf-8");

// console.dir(justiceLeague);


class FileData{
    constructor(hero,name,address){
        this.hero = hero;
        this.name = name;
        this.address = address;
    }
    // get(){

    // }
    set gender(hero){
        if(hero === 'Wonderwoman' && hero === 'Hawkgirl'){
            this.gender = female;
        }else{
            this.gender = male;
        }
    }
}

let list = [];
hero.forEach((hero,name,address) => {
    list.push(new FileData(hero,name,address));
});

console.log(list);