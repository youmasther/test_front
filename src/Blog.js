import Categorie from "./Categorie"

function Blog() {
    return (
        <div className="container mt-5">
            <div className="row">
                <Categorie />
                <aside className="col-sm-8">
                    <div className="card">
                        <article className="card-group-item">
                            <header className="card-header"><h6 className="title">Liste article</h6></header>
                            <div className="filter-content">
                                <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item">Programmation Ruby <span className="float-right badge badge-light round">142</span> </a>
                                <a href="#" className="list-group-item">Programmation Python <span className="float-right badge badge-light round">3</span>  </a>
                                <a href="#" className="list-group-item">Programmation java <span className="float-right badge badge-light round">32</span>  </a>
                                <a href="#" className="list-group-item">Programmation<span className="float-right badge badge-light round">12</span>  </a>
                                </div>  
                            </div>
                        </article> 
                    </div> 
                </aside> 
            </div>
        </div>
    )
}

export default Blog;