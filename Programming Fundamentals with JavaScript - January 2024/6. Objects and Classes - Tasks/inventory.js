function inventory(array) {
  let heroes = [];

  for (let heroInfo of array) {
    let [name, level, item] = heroInfo.split(" / ");
    level = Number(level);
    let object = { hero: name, level: level, items: item };
    heroes.push(object);
  }

  let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

  for (let heroObject of sortedHeroes){
    console.log(`Hero: ${heroObject.hero}`);
    console.log(`level => ${heroObject.level}`);
    console.log(`Items => ${heroObject.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);