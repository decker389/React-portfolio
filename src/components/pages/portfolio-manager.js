import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }

    handleDeleteClick(portfolioItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true }
            ).then(response => {
               this.setState({
                   portfolioItems: this.state.portfolioItems.filter(item => {
                       return item.id !== portfolioItem.id;
                   })
               });

            return response.data;
         }).catch(error => {
            console.log("handleDeleteClick error", error);
         });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
        portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmission error", error);
    }

    getPortfolioItems() {
        axios
        .get("https://chrisdecker.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true })
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log("error in getPortfolioItmes",error);
        });
    }
    
      componentDidMount() {
        this.getPortfolioItems();
      }
      

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                    </h1>
                </div>

                <div className="right-column">
                    <PortfolioSidebarList handleDeleteClick={this.handleDeleteClick} data={this.state.portfolioItems} handleEditClick={this.handleEditClick}/>
                </div>
            </div>
        );
    }
}