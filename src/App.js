
import './App.css';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery";
import { useState,Suspense, useEffect } from 'react';

//use need to install jquery and boostrap https://medium.com/how-to-react/how-to-use-jquery-in-your-react-app-b425727a32fd
//https://react-bootstrap.github.io/getting-started/introduction


function App() {
  const [loadDynamicComp, setLoadDynamicComp] = useState(0);
  const [init,setInit] = useState(false);
  let [arraylist, setArraylist]=useState([]);
  let itemList = [];

  //function handles the add to database and card
  const handleAdd = (name,cooktime,ingredients)=>{
      console.log(name,cooktime);
      console.log(ingredients);
      console.log(window.location.origin +"/test.php");
      //using jquery ajax to communicate with backend
      $.ajax({
        type: "POST",
        url:"http://localhost/react/tp2-cop4111c-team-d/backend/test.php",
        data: {
                "name":name,
                "cookingtime":cooktime,
                "ingredients":ingredients
              },
        success(data){
          
          setLoadDynamicComp(1);
          
          $(".recipe_input").val("");
          
          setArraylist(itemList);
        },
      })

  }
  //handels the delete button that also deletes from the database
  const handleDelete =(e)=>{
    console.log(e,"djjjff");
    setLoadDynamicComp(1);
    var data = e.target.getAttribute("data-id");
    $.ajax({
        type:"POST",
        url:"http://localhost/react/tp2-cop4111c-team-d/backend/delete.php",
        data:{
            id:data
        },
        success(data){
            console.log(e);
            $(e.target.parentElement.parentElement).remove();
        }

    })
    
    
  }

  //handles the edit button and also upddates the database
  const handleEdit =(e)=>{
    var id = e.target.getAttribute("data-id");
    if(e.target.textContent === "Edit"){
      $(".editbox").attr("contentEditable","true");
     
      $(".editbox").css("border-radius","3px");
      $("#name"+id).css("border","1px solid black");
      $("#cooking"+id).css("border","1px solid black");
       $("#ingredients"+id).css("border","1px solid black");
      e.target.textContent = "Submit";
    }else if(e.target.textContent === "Submit"){

      
      console.log(e);
      var name = $("#name"+id).text();
      var cooktime =$("#cooking"+id).text();
      var ingredients = $("#ingredients"+id).text();
      $.ajax({
        type: "POST",
        url:"http://localhost/react/tp2-cop4111c-team-d/backend/update.php",
        data: {
                "id":id,
                "name":name,
                "cookingtime":cooktime,
                "ingredients":ingredients
              },
      })
      $(".editbox").attr("contentEditable","false");
      
      $("#name"+id).css("border","");
      $("#cooking"+id).css("border","");
       $("#ingredients"+id).css("border","");
      e.target.textContent = "Edit";
    }
  }
  //This handles the show all button while passing in data from database as json into the front end
  function showeveryall(e){
    $.ajax({
      type: "POST",
      url:"http://localhost/react/tp2-cop4111c-team-d/backend/showall.php",
      success(data){
        
        var j = JSON.parse(data);

        
        setLoadDynamicComp(1);
        
        for(var [i,item] of Object.entries(j)){
          console.log(item,i);
          itemList[parseInt(item["recipe_id"])] = (<Card key={parseInt(item["recipe_id"])} id={parseInt(item["recipe_id"])} name={item["recipe_name"]} cookingtime={item["recipe_cooktime"]} ingredients={item["recipe_ingredients"]} handledelete={handleDelete} handleedit={handleEdit}/>);
        }
        
        
        
        setArraylist(itemList);
      },
    })

  }
  for(var i of arraylist){
    itemList.push(i);
  }


  return (
    <div className="App">
      <Header/>
      <RecipeForm handleAdd={handleAdd} showeverything={showeveryall} />
      {
        loadDynamicComp ? (
          //https://akashmittal.com/dynamically-add-component-in-reactjs/
          //I used the Suspense to allow me to dynamically append Cards
          <Suspense fallback={<div>Loding</div>}>
            <div className='container'>
              <div className='row'>
                {arraylist}
              </div>
              
            </div>
        
          </Suspense>
        ):null
      }
      
     
  
    </div>
  );
}

export default App;
