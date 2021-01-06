import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class ProtfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my profolio",
            data: [
                {title:"bob"},
                {title: "jill"},
             {title: "jack"}] 
        }
    }
    
PortfolioItems() {
    return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} />;
    })
}

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}
