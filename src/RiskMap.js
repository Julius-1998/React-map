class Territory extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ownerName : "",
            soldierNum : 0,
            neighbours: [],
        }
    }
}

class Map extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
}
class Unit extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            tproperty : "",
        }
    }
}