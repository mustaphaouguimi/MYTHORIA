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
    monsterType:"Spell",
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
    monsterType: "Spell",
    subTypes:["fusion"],
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
    monsterType: "Spell",
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
   monsterType: "Spell",
    subTypes:["fusion"],

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
    monsterType: "Spell",

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
    monsterType: "Spell",

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
const booster = document.getElementById("booster-container")
const shopBooster = document.getElementById("boostershop")
const panier = document.querySelector('#panier')
let count = document.getElementById("count")
let countCart = JSON.parse(localStorage.getItem("countCart")) || 0
const boostreVendu = document.getElementById("boostreVendu")
const opening = document.getElementById("opening")
const gremoire = document.getElementById("gremoire")
const filterInput=document.querySelector('#filter');
const deck=document.getElementById("deck");
const mycarts=document.getElementById("mycarts")


let cart = JSON.parse(localStorage.getItem("cart")) || [];

countCart = cart.length;
count.textContent = countCart;
function addToCart(name, price, image) {
  let produit = cart.find(p => p.name === name)
  if (produit) {
    produit.quantite++
  }
  else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantite: 1,

    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  afficherPanier()
}

 if (filterInput){
filterInput.addEventListener('input',e=>{ 
  currentFilter=e.target.value.toLowerCase();
  const randomCards = JSON.parse(localStorage.getItem("randomCards")) || [];
  const filtredCart=randomCards.filter(c=>c.rarity.toLowerCase().includes(currentFilter))
    if(gremoire){
   if(filtredCart.length===0){
    gremoire.innerHTML="<p>Aucune carte ne correspond à votre recherche dans votre Grimoire.</p>"
    return;   
  }
  gremoire.innerHTML=filtredCart.map(g=>
    `<div class="card-item">
    <img class="card-image" src="${g.image}" alt="${g.name}">
    <div class="card-overlay">
      <h2>${g.name}</h2>
      <p>${g.subTypes}</p>
      <p>ATK: ${g.attack} | DEF: ${g.defense}</p>
      <p>Rarty: ${g.rarity} </p>
    </div>
  </div>
    `
  )
}
 })
}

function afficherPanier() {
  panier.innerHTML = cart.map((p, index) => {
    return `
  <div class= "flex items-center gap-20">
    <img class="w-30 h-40" src="${p.image}" alt="${p.name}">
   <div>
    <h2 class="card-subtitle">${p.name}</h2>
          <p class="card-subtitle"> ${p.price} DH</p>
          <p class="card-subtitle">quantite:${p.quantite}</p>
          <button onclick="delate(${index})" class="inline-flex items-center justify-center 
          bg-red-800 border align-middle select-none font-sans font-medium text-center transition-all 
          duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full
          focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm  border-slate-800 text-slate-50  " >supprimer</button>
          <button onclick="confirm()"  class="items-center justify-center 
          bg-purple-800 border align-middle select-none font-sans font-medium text-center  
          text-sm rounded-md py-2 px-4   border-slate-800 ">confirmer</button>
          </div>
          <p id="message" class="hidden"></p>
          </div>
    
    `}).join("")
}

console.log(boostreVendu)
function afficherboostreVendu() {
  if (!boostreVendu) return;
  boostreVendu.innerHTML = cart.map((p) => `
  <div class= " flex items-center gap-20">
    <img class="w-30 h-40" src="${p.image}" alt="${p.name}">
   <div>
    <h2 class="card-subtitle">${p.name}</h2>
          <p class="card-subtitle"> ${p.price} DH</p>
          <p class="card-subtitle">quantite:${p.quantite}</p>
           <button type="button" onclick="ouvrirBooster()" class=" 
          bg-purple-800 border   text-center  
          text-sm rounded-md py-2 px-4   border-slate-800"> Ouvrir le booster</button>

          </div>
          

          </div>
    
    `).join("")

}

function ouvrirBooster() {

const randomCards = [...cards].sort(() => Math.random() - 0.5).slice(0, 5);
localStorage.setItem("randomCards", JSON.stringify(randomCards));

  opening.innerHTML = randomCards.map(c => {
    return `
  <div class="card-item">
    <img class="card-image" src="${c.image}" alt="${c.name}">
    <div class="card-overlay">
      <h2>${c.name}</h2>
      <p>${c.subTypes}</p>
      <p>ATK: ${c.attack} | DEF: ${c.defense}</p>
      <p>Rarty: ${c.rarity} </p>
    </div>
  </div>
`
  }).join("");
  
}
const decky=[]

function mydeck() {
  const randomCards = JSON.parse(localStorage.getItem("randomCards")) || [];
  if (!deck) return;
  deck.innerHTML = randomCards.map((c) => `
    <div class="relative w-60 h-[340px] overflow-hidden rounded-xl bg-slate-950 shadow-xl shadow-black/50 transition duration-300 hover:-translate-y-1 hover:scale-105">
      <img
        class="absolute inset-0 z-0 h-full w-full object-cover"
        src="${c.image}"
        alt="${c.name}"
      >
      <div class="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-3 text-center text-white">
        <h2 class="mb-2 text-base font-bold uppercase tracking-wide text-white">
          ${c.name}
        </h2>
        <p class="mb-1 text-sm text-purple-200">
          ${c.subTypes}
        </p>
        <p class="mb-1 text-xs font-semibold text-yellow-300">
          ATK: ${c.attack} | DEF: ${c.defense}
        </p>

        <p class="mb-2 text-xs text-gray-300">
          Rarity: ${c.rarity}
        </p>

        <button
          class="mt-2 w-full rounded-lg border border-purple-500 bg-purple-700/80 px-4 py-2 font-semibold text-white shadow-lg shadow-purple-900/40 transition duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-purple-600 active:scale-95"
          onclick="addToDeck('${c.name}','${c.image}','${c.attack}')"
        >
          <i class="fa-solid fa-plus mr-2"></i>
          Ajouter au deck
        </button>

      </div>
    </div>
  `).join("");
}

function addToDeck(name,image,attack){
  const randomCards = JSON.parse(localStorage.getItem("randomCards")) || [];
  let produit=decky.find(p=>name===p.name)
  if(produit) return alert("this card already exist") 
decky.push(
  {
    name:name,
    image:image,
    attack:attack
  }
)
  if(!mycarts) return
  mycarts.innerHTML=decky.map(c=>`
    <div class=" w-60 h-[340px]  rounded-xl bg-slate-950 shadow-xl shadow-black/50 transition duration-300 hover:-translate-y-1 hover:scale-105">
      <img class=" inset-0 z-0 h-full w-full object-cover" src="${c.image}" alt="${c.name}"
      >
      <div class=" bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-3 text-center text-white">
        <h2 class="mb-2 text-base font-bold uppercase tracking-wide text-white">
          ${c.name}
        </h2>
        <p class="mb-1 text-sm text-purple-200">
          ${c.subTypes}
        </p>
        <p class="mb-1 text-xs font-semibold text-yellow-300">
          ATK: ${c.attack} | DEF: ${c.defense}
        </p>

        <p class="mb-2 text-xs text-gray-300">
          Rarity: ${c.rarity}
        </p>
</div>`)
}


function myGrimoire() {
  const gremoireGrid = document.getElementById("grimoire-grid");
  const cardDetails = document.getElementById("card-details");
  
  if (!gremoireGrid) return;

  const randomCards = JSON.parse(localStorage.getItem("randomCards")) || [];
  
  if (randomCards.length === 0) {
    gremoireGrid.innerHTML = "<p class='col-span-3 text-center text-gray-700'>Aucune carte trouvée. Ouvrez un booster !</p>";
    return;
  }

  gremoireGrid.innerHTML = randomCards.map((c, index) => `
    <div onclick="showCardDetail(${index})" class="cursor-pointer bg-[#e3d0b9] p-2 rounded shadow border border-[#a88863] hover:scale-105 transition-transform">
      <img class="w-full h-24 object-cover rounded" src="${c.image}" alt="${c.name}">
      <p class="text-xs font-bold text-[#3b2716] truncate mt-1">${c.name}</p>
    </div>
  `).join("");
}   

function showCardDetail(index) {
  const randomCards = JSON.parse(localStorage.getItem("randomCards")) || [];
  if (randomCards[index]) {
    displayCardInfo(randomCards[index]);
  }
}

function displayCardInfo(c) {
  const cardDetails = document.getElementById("card-details");
  if (!cardDetails) return;

  cardDetails.innerHTML = `
    <h2 class="text-3xl font-serif font-bold text-[#2c1d11] mb-4 m-8">${c.name}</h2>
    <div class="border-4 border-[#3b2716] rounded-xl p-2 bg-[#d4c2a5] shadow-md mb-4 inline-block">
      <img class="w-64 h-80 object-cover rounded-lg" src="${c.image}" alt="${c.name}">
    </div>
    <p class="text-sm italic text-[#4a3525] text-left px-2 mb-2">"${c.description}</p>
    
    <div class="text-xs font-bold text-[#5c4033] flex gap-4 mt-2">
      ${`<span>ATK: ${c.attack}</span>`  }
      ${`<span>DEF: ${c.defense}</span>` }
      <span>Rarity: ${c.rarity}</span>
    </div>
  `;
}

function confirm() {
  const message = document.getElementById("message")
  message.textContent = "Commande confirmée !"
  message.classList.remove('hidden')
  setTimeout(() => {
    message.classList.add('hidden');
  }, 2000);
}



function delate(index) {
  if (cart[index].quantite > 1) {
    cart[index].quantite--
  } else {
    cart.splice(index, 1);
  }
  countCart = cart.reduce((total, p) => total + p.quantite, 0);
  count.textContent = countCart

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("countCart", JSON.stringify(countCart));

  afficherPanier()
}
const firstFourCards = cards.slice(0, 4)
function renderCards() {
  container.innerHTML = firstFourCards.map(card => `
      <div class="card-item">
        <img class="card-image" src="${card.image}" alt="${card.name}">
        <div class="card-overlay"> 
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

function addBooster() {
  if (!shopBooster) return;
  shopBooster.addEventListener('click', (e) => {
    const btn = e.target.closest(".add-to-cart")
    countCart++
    count.textContent = countCart
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
if (panier) {
  afficherPanier()
}


if (boostreVendu) {
  afficherboostreVendu();
}


if (gremoire) {
  myGrimoire()
}

if(deck){
  mydeck()
}