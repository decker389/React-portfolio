import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class ProtfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my profolio",
            data: [
                {title:"bob"},
                {title:"jill"},
                {title:"jack"},
                {title:"Marice"}
            ] 
        };
        
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }
    
PortfolioItems() {
    return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} />;
    })
}

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}
