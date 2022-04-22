let Global = {
    USER_NAME : "DEFAULT USER NAME",
    TERRITORIES:{
        "Scadrial":{"ownerName":"testModify","soldierNum":"T0Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Roshar":{"ownerName":"T1Value","soldierNum":"T1Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Hogwarts":{"ownerName":"T2Value","soldierNum":"T2Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Mordor":{"ownerName":"T3Value","soldierNum":"T3Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Oz":{"ownerName":"T4Value","soldierNum":"T4Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Midkemia":{"ownerName":"T5Value","soldierNum":"T5Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Elastris":{"ownerName":"T6Value","soldierNum":"T6Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Narnia":{"ownerName":"T7Value","soldierNum":"T7Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "Gondor":{"ownerName":"T8Value","soldierNum":"T8Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
    },
    PLAYERS:{
        "Player1":{"clientId":"ClientId",foodPoints:0,techPoints:null,techLevel:""},
        "Player2":{"clientId":"",foodPoints:"",techPoints:"",techLevel:""},
    },
    HEXAGONS:{
        "Scadrial":{"q":0,"r":0,"s":0},
        "Roshar":{"q":0,"r":1,"s":-1},
        "Hogwarts":{"q":1,"r":0,"s":-1},
        "Mordor":{"q":1,"r":-1,"s":0},
        "Oz":{"q":0,"r":-1,"s":1},
        "Midkemia":{"q":-1,"r":0,"s":1},
        "Elastris":{"q":-1,"r":1,"s":0},
        "Narnia":{"q":-2,"r":1,"s":1},
        "Gondor":{"q":1,"r":-2,"s":1}
    }
}

// class Territory{
//     constructor(){
//         soldierNum : 0,
//         ownerName : "",
//         territoryName : "",
//         neighbors :[]
//     }
// }
// class RiskMap{
//     constructor(){
//         territories = {},
//         playerTerritoryMap = {}
//     }
//     isConnected(){
//         return true;
//     }
//     static from(json){
//         return Object.assign(new Territory(), json);
//     }
// }
// const jsonTest = {"territories":{"Narnia":{"soldierNum":10,"ownerName":"Green","territoryName":"Narnia","displayInfo":"10 units in Narnia owned by Green(next to: Elastris Midkemia )\n"},"Mordor":{"soldierNum":14,"ownerName":"Red","territoryName":"Mordor","displayInfo":"14 units in Mordor owned by Red(next to: Hogwarts Scadrial Gondor Oz )\n"},"Hogwarts":{"soldierNum":3,"ownerName":"Red","territoryName":"Hogwarts","displayInfo":"3 units in Hogwarts owned by Red(next to: Mordor Scadrial Roshar )\n"},"Elastris":{"soldierNum":6,"ownerName":"Red","territoryName":"Elastris","displayInfo":"6 units in Elastris owned by Red(next to: Narnia Scadrial Midkemia Roshar )\n"},"Scadrial":{"soldierNum":5,"ownerName":"Green","territoryName":"Scadrial","displayInfo":"5 units in Scadrial owned by Green(next to: Mordor Hogwarts Elastris Midkemia Oz Roshar )\n"},"Midkemia":{"soldierNum":12,"ownerName":"Green","territoryName":"Midkemia","displayInfo":"12 units in Midkemia owned by Green(next to: Narnia Elastris Scadrial Oz )\n"},"Gondor":{"soldierNum":13,"ownerName":"Red","territoryName":"Gondor","displayInfo":"13 units in Gondor owned by Red(next to: Mordor Oz )\n"},"Oz":{"soldierNum":8,"ownerName":"Green","territoryName":"Oz","displayInfo":"8 units in Oz owned by Green(next to: Mordor Scadrial Midkemia Gondor )\n"},"Roshar":{"soldierNum":3,"ownerName":"Red","territoryName":"Roshar","displayInfo":"3 units in Roshar owned by Red(next to: Hogwarts Elastris Scadrial )\n"}},"playerTerritoryMap":{"Red":["Mordor","Hogwarts","Elastris","Gondor","Roshar"],"Green":["Narnia","Scadrial","Midkemia","Oz"]}}
// const map = RiskMap.from(jsonTest);
export default Global
