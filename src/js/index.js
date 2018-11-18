console.log("Hello world");


var content =   `SHOPPING BAD MODULE
<hr id="underline">
<div id="tableHeaders">
<div>5 Items</div>
<div></div>
<div>Size</div>
<div>Quantity</div>
<div>Price</div>
</div>
<div id="itemsContainer">
    <hr >
    <div id="singleItem">
          <div id="imagePart"><img src="images/shirt1.jpg" alt=""></div>
          <div>
              Solid Green Tshirt<br>
              Style#:Ms13k<br>
              Color:Gray
              <br><br><br><br><br>
             <ul>
                 <li><a href="javascript:void(0);">Edit</a></li>
                 <li><a href="javascript:void(0);">Remove</a></li>
                 <li><a href="javascript:void(0);">Save for later</a></li>
             </ul>
          </div>
          <div>5</div>
          <div><input type="number" style="width:40px"></div>
          <div>11</div>

    </div>
</div>`;

getAllItems();
