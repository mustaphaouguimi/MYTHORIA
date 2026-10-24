const cards = [
  {
    id: 1,
    name: "Dark Magician",
    image: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
    type: "Monster",
    monsterType: "Spellcaster",
    subTypes: ["Normal"],
    attribute: "DARK",
    level: 7,
    rarity: "Legendary",
    attack: 2500,
    defense: 2100,
    description: "The ultimate wizard in terms of attack and defense.",
    effect: null
  },
  {
    id: 2,
    name: "Blue-Eyes White Dragon",
    image: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
    type: "Monster",
    monsterType: "Dragon",
    subTypes: ["Normal"],
    attribute: "LIGHT",
    level: 8,
    rarity: "Legendary",
    attack: 3000,
    defense: 2500,
    description: "A legendary dragon with incredible destructive power.",
    effect: null
  },
  {
    id: 3,
    name: "Red-Eyes Black Dragon",
    image: "https://images.ygoprodeck.com/images/cards/74677422.jpg",
    type: "Monster",
    monsterType: "Dragon",
    subTypes: ["Normal"],
    attribute: "DARK",
    level: 7,
    rarity: "Epic",
    attack: 2400,
    defense: 2000,
    description: "A ferocious dragon with a deadly attack.",
    effect: null
  },
  {
    id: 4,
    name: "Dark Magician Girl",
    image: "https://images.ygoprodeck.com/images/cards/38033121.jpg",
    type: "Monster",
    monsterType: "Spellcaster",
    subTypes: ["Effect"],
    attribute: "DARK",
    level: 6,
    rarity: "Epic",
    attack: 2000,
    defense: 1700,
    description: "A powerful magician who grows stronger with dark magic.",
    effect: "Gains 300 ATK for each Dark Magician or Magician of Black Chaos in the Graveyards."
  },
  {
    id: 5,
    name: "Summoned Skull",
    image: "https://images.ygoprodeck.com/images/cards/70781052.jpg",
    type: "Monster",
    monsterType: "Fiend",
    subTypes: ["Normal"],
    attribute: "DARK",
    level: 6,
    rarity: "Rare",
    attack: 2500,
    defense: 1200,
    description: "A fiend with dark powers for confusing the enemy.",
    effect: null
  },
  {
    id: 6,
    name: "Exodia the Forbidden One",
    image: "https://images.ygoprodeck.com/images/cards/33396948.jpg",
    type: "Monster",
    monsterType: "Spellcaster",
    subTypes: ["Effect"],
    attribute: "DARK",
    level: 3,
    rarity: "Legendary",
    attack: 1000,
    defense: 1000,
    description: "The forbidden one, whose complete assembly can win the Duel.",
    effect: "Win the Duel if you have all five pieces of Exodia."
  },
  {
    id: 7,
    name: "Celtic Guardian",
    image: "https://images.ygoprodeck.com/images/cards/91152256.jpg",
    type: "Monster",
    monsterType: "Warrior",
    subTypes: ["Normal"],
    attribute: "EARTH",
    level: 4,
    rarity: "Common",
    attack: 1400,
    defense: 1200,
    description: "An elf who learned to wield a sword.",
    effect: null
  },
  {
    id: 8,
    name: "Kuriboh",
    image: "https://images.ygoprodeck.com/images/cards/40640057.jpg",
    type: "Monster",
    monsterType: "Fiend",
    subTypes: ["Effect"],
    attribute: "DARK",
    level: 1,
    rarity: "Rare",
    attack: 300,
    defense: 200,
    description: "A small creature with a surprisingly useful defensive ability.",
    effect: "Discard this card to reduce battle damage to 0."
  },
  {
    id: 9,
    name: "Gaia The Fierce Knight",
    image: "https://images.ygoprodeck.com/images/cards/6368038.jpg",
    type: "Monster",
    monsterType: "Warrior",
    subTypes: ["Normal"],
    attribute: "EARTH",
    level: 7,
    rarity: "Rare",
    attack: 2300,
    defense: 2100,
    description: "A knight whose horse gallops faster than the wind.",
    effect: null
  },
  {
    id: 10,
    name: "Time Wizard",
    image: "https://images.ygoprodeck.com/images/cards/71625222.jpg",
    type: "Monster",
    monsterType: "Spellcaster",
    subTypes: ["Effect"],
    attribute: "LIGHT",
    level: 2,
    rarity: "Rare",
    attack: 500,
    defense: 400,
    description: "A wizard who can manipulate time.",
    effect: "Has a chance to destroy all monsters on the field."
  },
  {
    id: 11,
    name: "Buster Blader",
    image: "https://images.ygoprodeck.com/images/cards/78193831.jpg",
    type: "Monster",
    monsterType: "Warrior",
    subTypes: ["Effect"],
    attribute: "EARTH",
    level: 7,
    rarity: "Epic",
    attack: 2600,
    defense: 2300,
    description: "A warrior known for his dragon-slaying skills.",
    effect: "Gains 500 ATK for each Dragon monster on your opponent's field and Graveyard."
  },
  {
    id: 12,
    name: "Jinzo",
    image: "https://images.ygoprodeck.com/images/cards/77585513.jpg",
    type: "Monster",
    monsterType: "Machine",
    subTypes: ["Effect"],
    attribute: "DARK",
    level: 6,
    rarity: "Epic",
    attack: 2400,
    defense: 1500,
    description: "A machine that suppresses trap cards.",
    effect: "Trap Cards and their effects cannot be activated."
  },
  {
    id: 13,
    name: "Harpie's Feather Duster",
    image: "https://images.ygoprodeck.com/images/cards/18144506.jpg",
    type: "Spell",
    spellType: "Normal",
    rarity: "Epic",
    description: "A powerful gust of wind sweeps the field.",
    effect: "Destroy all Spell and Trap Cards your opponent controls."
  },
  {
    id: 14,
    name: "Monster Reborn",
    image: "https://images.ygoprodeck.com/images/cards/83764718.jpg",
    type: "Spell",
    spellType: "Normal",
    rarity: "Rare",
    description: "A magical symbol that brings a monster back to life.",
    effect: "Target one monster in either Graveyard and Special Summon it."
  },
  {
    id: 15,
    name: "Raigeki",
    image: "https://images.ygoprodeck.com/images/cards/12580477.jpg",
    type: "Spell",
    spellType: "Normal",
    rarity: "Epic",
    description: "A devastating blast of lightning.",
    effect: "Destroy all monsters your opponent controls."
  },
  {
    id: 16,
    name: "Polymerization",
    image: "https://images.ygoprodeck.com/images/cards/24094653.jpg",
    type: "Spell",
    spellType: "Normal",
    rarity: "Rare",
    description: "Combine monsters to create a powerful Fusion Monster.",
    effect: "Fusion Summon a monster using Fusion Materials from your hand or field."
  },
  {
    id: 17,
    name: "Mirror Force",
    image: "https://images.ygoprodeck.com/images/cards/44095762.jpg",
    type: "Trap",
    trapType: "Normal",
    rarity: "Epic",
    description: "A reflective barrier turns an attack against the attacker.",
    effect: "When an opponent's monster declares an attack, destroy all their Attack Position monsters."
  },
  {
    id: 18,
    name: "Mystical Space Typhoon",
    image: "https://images.ygoprodeck.com/images/cards/5318639.jpg",
    type: "Spell",
    spellType: "Quick-Play",
    rarity: "Common",
    description: "A magical storm sweeps away a card.",
    effect: "Target one Spell or Trap Card on the field and destroy it."
  },
  {
    id: 19,
    name: "Thousand Dragon",
    image: "https://images.ygoprodeck.com/images/cards/41462083.jpg",
    type: "Monster",
    monsterType: "Dragon",
    subTypes: ["Fusion"],
    attribute: "WIND",
    level: 7,
    rarity: "Epic",
    attack: 2400,
    defense: 2000,
    description: "A dragon created through the power of time.",
    effect: null
  },
  {
    id: 20,
    name: "Slifer the Sky Dragon",
    image: "https://images.ygoprodeck.com/images/cards/10000020.jpg",
    type: "Monster",
    monsterType: "Divine-Beast",
    subTypes: ["Effect"],
    attribute: "DIVINE",
    level: 10,
    rarity: "Legendary",
    attack: null,
    defense: null,
    description: "An Egyptian God Card whose power depends on its controller's hand.",
    effect: "Its ATK and DEF are each equal to 1000 times the number of cards in your hand."
  }
];



const boosters = [
  {
    id: 1,
    name: "Beginner Pack",
    image: "bgn.jpg",
    description: "Un pack idéal pour les nouveaux joueurs.",
    price: 50,
    cardCount: 5,

    
  },

  {
    id: 2,
    name: "Summoning of the Legends",
    image: "bgn1.jpg",
    description: "Un pack premium avec plus de chances d'obtenir des cartes rares.",
    price: 80,
    cardCount: 5,
  },

  {
    id: 3,
    name: "Dark Summoning",
    image: "bgn2.jpg",
    description: "Un booster consacré aux monstres des Ténèbres et aux sorts obscurs.",
    price: 100,
    cardCount: 5,
  },

  {
    id: 4,
    name: "Lucky Pack",
    image: "bgn3.jpg",
    description: "Un pack mystère avec une chance de découvrir une carte exceptionnelle.",
    price: 200,
    cardCount: 5,    
  }
];


const container = document.getElementById("cards-container");
const booster=document.getElementById("booster-container")
const shopBooster=document.getElementById("boostershop")
const panier = document.querySelector('#panier')
let count=document.getElementById("count")
let countCart=JSON.parse(localStorage.getItem("countCart")) ||0

let quantite=0



let cart=JSON.parse(localStorage.getItem("cart")) || [];
countCart = cart.length;
count.textContent = countCart;
function addToCart(name, price,image) {
  let produit=cart.find(p=>p.name===name)
  if(produit){
    produit.quantite++
  }
  else
    {
    cart.push({
        name: name,
        price: price,
        image:image,
        quantite:1
    });  }
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));

    afficherPanier()
}


function afficherPanier(){
  panier.innerHTML=cart.map((p,index)=>`
  <div class= " flex items-center gap-20">
    <img class="w-30 h-40" src="${p.image}" alt="${p.name}">
   <div>
    <h2 class="card-subtitle">${p.name}</h2>
          <p class="card-subtitle"> ${p.price} DH</p>
          <p class="card-subtitle">quantite:${p.quantite}</p>
          <button onclick="delate(${index})" class="inline-flex items-center justify-center 
          bg-red-800 border align-middle select-none font-sans font-medium text-center transition-all 
          duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full
          focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm  border-slate-800 text-slate-50  " >supprimer</button>
          </div>

          </div>
    
    `).join("")
}


function delate(index){
  cart.splice(index,1);
  countCart=cart.length
  count.textContent=countCart
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("countCart", JSON.stringify(countCart));

  afficherPanier()
}
const firstFourCards = cards.slice(0, 4)
function renderCards() {
  container.innerHTML = firstFourCards.map(card =>  `
      <div class="card-item">
        <img class="" src="${card.image}" alt="${card.name}">
        <div class=""> 
          <h2 class="text-white">${card.name}</h2>
          <p class=""> / ${card.subTypes}</p>
          <div class="">
            ATK: ${card.attack} | DEF: ${card.defense}
          </div>
        </div>
      </div>
    `
  );
}

 function displayBooster() {
  booster.innerHTML = boosters.map(boost => `
    <div class="transition-transform duration-300 hover:-translate-y-2">
      <img class="w-15 h-15 " src="${boost.image}" alt="${boost.name}">
      <div class="">
        <h2 class="card-title gap-5">${boost.name}</h2>
        <p class="card-subtitle">
          ${boost.price} DH · ${boost.cardCount} cartes
        </p>
      </div>
    </div>
  `).join("");
}

function boosterShop() {
   
  shopBooster.innerHTML = boosters.map(boost => {
    return `
      <div class="hover:-translate-y-2">
        <img class="w-15 h-15" src="${boost.image}" alt="${boost.name}"
        >
        <div class="">
          <h2 class="card-titel">${boost.name}</h2>
          <p class="card-subtitle">
            ${boost.price} DH · ${boost.cardCount} cartes
          </p>
          <p>${boost.description}</p>
          <button type="button" id="btn" class="bg-purple-700 inline-flex items-center justify-center border align-middle
           select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none 
           disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm 
            border-slate-800 text-slate-50  hover:border-slate-700" onclick="addToCart('${boost.name}', '${boost.price}','${boost.image}')">ajouter au panier</button>
        </div>
      </div>
    `;
  }).join("");
}

function addBooster(){
  shopBooster.addEventListener('click', (e)=> {
  const btn=e.target.closest(".add-to-cart")

  countCart++
  count.textContent=countCart
  localStorage.setItem("countCart", JSON.stringify(countCart));
});
}





if (container) {
  renderCards();
}

if (booster) {
  displayBooster();
}

if (shopBooster) {
  boosterShop();
}
addBooster()
afficherPanier()