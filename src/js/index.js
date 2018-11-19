console.log("Hello world");
window.onload = function(){
    
   document.getElementById("editItem").addEventListener("click",function(event){
       console.log("Update buttom got clicked");
   });

   
    addDyanaicEventHandler();
    
 };
 function addDyanaicEventHandler(){
    console.log("adding dyanamic event listener");

    $("#itemsHolder").on("click",".edit",function(event){

        console.log("edit got clicked");
        //console.dir(event);
        console.log(this);
        getSpecificItem(this.id).then(data=>{
            console.log(data);
           // renderModal(data);
            //document.getElementById("myModal").classList.remove("fade");
           // $("#myModal").modal("show");
           document.getElementById("shirtName").innerHTML = data.name;
           document.getElementById("price").innerHTML = data.price;
           document.getElementById("image").src = data.img;
           document.getElementById("shirtSize").value = data.size;
           document.getElementById("qnty").value = "Qty:"+data.qty;
        })
    })
}

getAllItems();

function renderModal(data){
var content = `
<div class="modal fade" id="myModal" role="dialog">
<div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
            <h4 class="modal-title">Modal Header</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    
    </div>
    <div class="modal-body">
            <div class="container">
                    <div class="row">
                      <div class="col-sm" style="text-align: center">
                            <hr >
                            PAISEL JEAN<br>
                            $21
                            <br>
                            <br><br>
                            PAISLEY <br>
                            <select name="size">
                                    <option value="Size">Size</option>
                                    <option value="M">M</option>
                                    <option value="S">S</option>
                                  
                                  </select>
                                 <input type="number" style="width:40px; height:25px;" min=1 />
                                 <br><br> <input type="button" value="EDIT">
                      </div>
                      <div class="col-sm">
                        <img src="images/shirt1.jpg" alt="">
                      </div>
                     
                    </div>
                  </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>
  
</div>
</div>
`;
document.getElementById("modalHolder").innerHTML = content;
}

