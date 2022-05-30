import 'bootstrap/dist/css/bootstrap.min.css';
//You Have to install https://react-bootstrap.github.io/getting-started/introduction
function Showall(props){

    const showeverything= props.showeverything
    return(
        <button type="button" className='showallbtn btn btn-primary ms-6 mt-5  position-absolute' onClick={(e)=>showeverything(e)}>Show All</button>
        
    )
}
export default Showall;