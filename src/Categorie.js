import React from "react"; 
import {withRouter} from 'react-router-dom'
class Categorie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: []
        };
    }

    componentDidMount() {
        const url = "http://127.0.0.1:5000/api/v1/categories/index";
        fetch(url)
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ categories: response }))
            .catch(() => this.props.history.push("/"));
    }

    render() {
        const { categories } = this.state;
        const allCategories = categories.map((categorie, index) => (
            <a href="#" className="list-group-item">{categorie.title}  <span className="float-right badge badge-light round">3</span>  </a>
        ));
        const noCategorie = (
            <a href="#" className="list-group-item">Nouvel categorie </a>
        );
      
        return  (
            <aside className="col-sm-4">
            <div className="card">
                <article className="card-group-item">
                    <header className="card-header"><h6 className="title">Categorie list</h6></header>
                    <div className="filter-content">
                        <div className="list-group list-group-flush">
                        {categories.length > 0 ? allCategories : noCategorie}
                        </div>  
                    </div>
                </article> 
                
            </div> 
            </aside> 
        )
        }

}

export default Categorie;