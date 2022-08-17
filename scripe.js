var counter = 0;
function spancounter() {
  counter++;
  document.getElementById("counter").classList.remove("d-none");
  document.getElementById("counter").classList.add("d-inline");
  document.getElementById("counter").innerHTML = counter;
}

function searchProduct() {
  fetch("json-products.txt")
    .then((response) => {
      console.log(response);
      let products = response.json();
      return products;
    })
    .then((data) => {
      console.log(data);
      var input = document.getElementById("input").value;
      for (let i of data) {
        if (input == i.brand) {
          //  var img =document.getElementById("img");
          //  img.classList.remove("d-none");
          //  img.classList.add("d-block");
          //  img.src=i.img_url;
          // document.getElementById("search").innerHTML =
          //   "Brand :" +
          //   i.brand +
          //   "<br>" +
          //   "Price :" +
          //   i.price +
          //   "<br>" +
          //   "Processor-count :" +
          //   i.processor_count;
          //   document.getElementById("body").classList.add("d-none");
          //   document.getElementById("width").classList.remove("d-none");
          // //   document.getElementById("width").classList.add("w-50");
          document.write(`
          <div class="bg-dark" style ="width :400px">
        <div style="background-color: black; box-shadow: 10px 10px 10px red;border-radius: 20px; padding: 50px;margin :30px;width: 350px; height: 50vh;"
            id="width" class="d-none">
            <div>
                <img  id="img" src="${i.img_url}"
                    style="background-color: black;padding-top: 20px;" width="300px" height="300px"
                    alt="">

            </div>
            <div id="search"
                style="color: white;background-color: black;font-size: 2.5em; text-shadow: 3px 3px 3px red; "
                class="p-5">
           Brand : ${i.brand} <br> Price :   ${i.price} <br> Processor-count :   ${i.processor_count}
            </div>
        </div>
    </div>`);
        }
      }
    });
}

