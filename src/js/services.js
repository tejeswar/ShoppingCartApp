function getAllItems(){
console.log("Inside getAllItems");
    var url = "http://localhost:3004/items"
    var res = fetch(url)
      .then(resp => {
        console.log(resp.status);
        if (resp.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            resp.status);
          return;
        }
       return resp.json();
      })
      .then(data => {
       renderHtml(data);

        console.log(data.length);
       // console.log(`items size from Server:${data.itemList}`)
        return data
      })
      .catch(error => {
        console.log("Something wrong happened:"+error)
      })
   
}
