function makeTableHeaders(noOfItems){
    return  `
    <h3 style="text-align:center;margin-top:2%">YOUR SHOPPING BAG </h3> 
    <hr id="underline">
    <div id="tableHeaders">
    <div>${noOfItems} ITEMS</div>
    <div></div>
    <div>Size</div>
    <div>Quantity</div>
    <div>Price</div>
    </div>
    <hr>
    `;
}
function makeTableContent(arrOfItems){

    var itemsContainer = `<div id="itemsContainer">`;
var itemsContainerEnding = `</div>`;
var allItems = "";
for(var itemCount = 0;itemCount < arrOfItems.length; itemCount++){
var singleItem = arrOfItems[itemCount];
allItems = allItems+`
<div id="singleItem">
<div id="imagePart"><img src="${singleItem.img}" alt=""></div>
<div>
${singleItem.name}<br>
    Style#:${singleItem.style}<br>
    Color:${singleItem.color}
    <br><br><br><br><br>
   <ul>
       <li><a href="#myModal" data-toggle="modal">Edit</a></li>
       <li><a href="javascript:void(0);">Remove</a></li>
       <li><a href="javascript:void(0);">Save for later</a></li>
   </ul>
</div>
<div>${singleItem.size}</div>
<div><input type="number" style="width:40px" min=1 value="${singleItem.qty}" readonly></div>
<div>$${singleItem.price}</div>

</div>
<hr >

`;

}
var allContents = itemsContainer+allItems+itemsContainerEnding;
return allContents;     
     

}
function renderHtml(arrOfItems){
var theWholeContent = makeTableHeaders(arrOfItems.length)+makeTableContent(arrOfItems);
console.log(theWholeContent);
document.getElementById("itemsHolder").innerHTML = theWholeContent;
}