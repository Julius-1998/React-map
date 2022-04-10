let Global = {
    USER_NAME : "DEFAULT USER NAME",
    TERRITORIES:{
        "T0":{"ownerName":"testModify","soldierNum":"T0Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T1":{"ownerName":"T1Value","soldierNum":"T1Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T2":{"ownerName":"T2Value","soldierNum":"T2Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T3":{"ownerName":"T3Value","soldierNum":"T3Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T4":{"ownerName":"T4Value","soldierNum":"T4Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T5":{"ownerName":"T5Value","soldierNum":"T5Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T6":{"ownerName":"T6Value","soldierNum":"T6Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T7":{"ownerName":"T7Value","soldierNum":"T7Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
        "T8":{"ownerName":"T8Value","soldierNum":"T8Value2","neighbors":[],"troop":{"units":{"ZERO":0,"ONE":1}}},
    },
    PLAYERS:{
        "Player1":{"clientId":"ClientId",foodPoints:0,techPoints:null,techLevel:""},
        "Player2":{"clientId":"",foodPoints:"",techPoints:"",techLevel:""},
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
