var Teemo = {
  name: "Teemo",
  health: 100,
  hits: 0,
  attacks: {
    autoAttack: 5,
    poisonDart: 10,
    Shroom: 20,
  },
  items: []
}

var Player = {
  name: "Human",
  health: 100,
  hits: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  },
  items: []
}

var items = {
  rengar: {
    name: "Rengar",
    modifier: 2,
    description: "Jungler Gank! Yeet"
  },
  baron: {
    name: "Baron",
    modifier: 4,
    description: "You have slain Baron Nashor"
  },
  infinityEdge: {
    name: "Infinity Edge",
    modifier: 3,
    description: "Thats a real nice sword!"
  }

}

function getRengar() {
  Player.items.push(items.rengar)
  updateBuffs()
}
function getBaron() {
  Player.items.push(items.baron)
  updateBuffs()
}
function getIe() {
  Player.items.push(items.infinityEdge)
  updateBuffs()
}

function updateBuffs() {
  document.getElementById("buffs").innerText = addMods().toString()
}


document.getElementById("enemy").innerText = Teemo.name


function slap() {
  let buff = addMods()
  Teemo.health -= 1 + buff
  Teemo.hits++
  update()

}

function punch() {
  let buff = addMods()
  Teemo.health -= 5 + buff
  Teemo.hits++
  update()
}

function kick() {
  let buff = addMods()
  Teemo.health -= 10 + buff
  Teemo.hits++
  update()
}


function update() {
  document.getElementById("health").innerText = Teemo.health.toString()
  document.getElementById("hits").innerText = Teemo.hits.toString()
  document.getElementById("health").innerHTML = `<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="${Teemo.health}" aria-valuemin="0" aria-valuemax="100" style="width: ${Teemo.health}%"></div>
</div>`
}

function addMods() {
  let buff = 0
  for (let i = 0; i < Player.items.length; i++) {
    buff += Player.items[i].modifier
  }
  return buff
}

function reset() {
  Player.items = []
  Teemo.health = 100
  Teemo.hits = 0
  document.getElementById("buffs").innerText = ""
  update()
}



update()

