function getAllItems(){
console.log("Inside getAllItems");
    var url = "http://localhost:3004/allItems"
    var res = fetch(url)
      .then(resp => {
        console.log(resp.status);
        //console.log(resp.json());
        console.log("=====");
        if (resp.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            resp.status);
          return;
        }
       
       return resp.json();
      })
      .then(data => {
        console.log(data);
       renderHtml(data.items);
      
      renderBillingHtml(data);
       
       
        return data
      })
      .catch(error => {
        console.log("Something wrong happened:"+error)
      })
   
}

function getSpecificItem(id) {
  /*
  const result = await $.ajax({
    url: 'http://localhost:3004/allItems',
    type: 'GET',
    // data: {varName : varValue},
  });
  return result;
  */
 return new Promise(function (resolve, reject) {
  $.ajax({
      url: 'http://localhost:3004/allItems',
      success: function (data) {
         
         resolve(data.items[id-1]);
      }
  });
});
}
