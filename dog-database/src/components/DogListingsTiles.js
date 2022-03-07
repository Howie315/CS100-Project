import React from "react"

export class DogListingTiles extends React.Component {
    constructor(){
        super(props);
        //color palette
        this.palette = [];
        //icon palette
        this.icons = [];
        
        //Tile names and types
        this.tileCatalog = [
      { name: 'Grid', tile: Grid, icon: this.icons.grid },
      { name: 'Radial Gauge', tile: RadialGauge, icon: this.icons.radialGauge },
      { name: 'Linear Gauge', tile: LinearGauge, icon: this.icons.linearGauge },
      { name: 'Bar Chart', tile: BarChart, icon: this.icons.barChart }
        ];
        this.key = 0;
        

    }
}