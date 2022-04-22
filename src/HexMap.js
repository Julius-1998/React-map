import './Riskmap.css';
import React, { Component } from "react";
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import Global from './GlobalVariables';
import { Box, Typography } from '@mui/material';

class TerritoryDisplay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const properties = Global.TERRITORIES[this.props.territoryName]
        const troops = Object.entries(properties["troop"]["units"]).map(([unitLevel,unitNum])=>
            <>
            <Typography align="center">Unit Level:{unitLevel}</Typography>
            <Typography align="center">Unit Number:{unitNum}</Typography>
            </>
        );
        return (
            <Box>
                <Typography align="center">Owner:{properties["ownerName"]}</Typography>
                {troops}
                <Typography align='center'>Size:{properties["foodPointsCost"]}</Typography>
                <Typography align='center'>Food Points Per Turn:{properties["foodPointsPerTurn"]}</Typography>
                <Typography align='center'>Tech Points Per Turn:{properties["techPointsPerTurn"]}</Typography>
            </Box>
        )
    }
}
class HexMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            territoryName : "Oz"
        }
    }
    display(name){
        //log the properties
        this.setState({territoryName:name})
    }
    render() {
        console.log("rendering")
        console.log(Global.TERRITORIES)
        console.log(Global.HEXAGONS)
        return (

            <div className="RiskMap">
                <HexGrid width={800} height={600}>
                    <Layout size={{ x: 15, y: 15 }}>
                        {
                            Object.entries(Global.TERRITORIES).map(([name, properties], index) =>
                             (
                                //  console.log(Global.HEXAGONS[name])
                             <Hexagon className={properties["ownerName"]}
                                q={Global.HEXAGONS[name]["q"]}
                                r={Global.HEXAGONS[name]["r"]}
                                s={Global.HEXAGONS[name]["s"]}
                                onMouseEnter = {()=>this.display(name)}
                                >
                                <Text>{name}</Text>
                            </Hexagon>
                            ))
                        }
                    </Layout>
                </HexGrid>
                <TerritoryDisplay territoryName = {this.state.territoryName}></TerritoryDisplay>
            </div>
        )
    }
}

export default HexMap;