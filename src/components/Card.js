import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


function Card(props){

    console.log(props);
    const handleDelete = props.handledelete;
    const handleEdit = props.handleedit;
   
   
    return(
        <div className='container cardhere col-7' data-id={props.id} data-name={props.name} style={{}}>
            <div className="card" style={{}}>
                <div className="card-header">
                   <h2><span id={'name'+props.id} className='editbox'>{props.name}</span></h2>
                </div>
                <div className="card-body">
                    <p className="card-title">Cooking Time: <span id={'cooking'+props.id} className='editbox'>{props.cookingtime}</span></p>
                    <p className="card-text"> Ingredients:<span id={'ingredients'+props.id} className='editbox'> {props.ingredients}</span></p>
                    <button type="button" className="btn btn-primary" onClick={(e)=>handleDelete(e)} data-id={props.id}>Delete</button>
                    <button type='button' className='editbtn btn btn-primary ms-3' data-id={props.id} onClick={(e)=>handleEdit(e)}>Edit</button>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Card;