const homepage = document.querySelector(".divallhomepage");
// const xmarkatabp =document.querySelector(".abpxmark");
const everyatb =document.querySelector(".everyshitatatb");
const allatabppage = document.querySelector(".divallatabp");
const appendtopsales = document.querySelector(".divtopsellin");
const appendtopsalestwo =document.querySelector(".divtopsellin2");
const cartinic = document.querySelector(".cartbag");
const popincarts =document.querySelector(".popingfullcartforcheckout");
const popuncheckoutpage =document.querySelector(".allartow")
const cancelcartpop = document.querySelector('.dxatpop')
const closecheckout = document.querySelector(".xatrow")
const closccheckoutbage = document.querySelector(".clocsetohome")
const openlastcomplete = document.querySelector(".btnchec")
const backtohomecomple =document.querySelector(".backtohomepage")
const donepay =document.querySelector(".paymentcompletpage")
const findanddisplypro =document.querySelector(".glassing")
const searchee =document.querySelector(".searchfunction")
const findinfullpage = document.querySelector(".forseaerchindisplay")
// const cartamtva = document.querySelector(".scartnum")
// for displaying api plus cart adder 
let topsellingarray =[];
cartinic.addEventListener("click",()=>{
    popincarts.style.display="block"
    window.scrollTo({top:0,behavior:"smooth"})
})
function topsellingfetchdata(){
    fetch('https://dummyjson.com/products')
   .then(res => res.json())
   .then(data =>{
    // console.log(data)
    topsellingarray.push(...data.products.slice(0,3))
    console.log(topsellingarray);
    topsellingarray.map ((tselling,index)=>{
        let yut =`
          <div class="productdiv" onclick="showmoretopselling1(${index})">
            <img src="${tselling.images[0]}" alt="${tselling.images[0]}" class="productimg">
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p class="realpname">${tselling.title}</p>
    <p class="productname"><span class="forb4pric">${tselling.price}</span><span class="forprice"><s>$170.00</s></span> </span></p>
    <br><button class="addtocart">Add to cart</button>
</div>
        `

         
        appendtopsales.innerHTML+=yut;
    })
 
});
}
let topsellingarray2 =[];
function topsellingfetchdata2(){
    fetch('https://dummyjson.com/products')
   .then(res => res.json())
   .then(data =>{
    // console.log(data)
    topsellingarray2.push(...data.products.slice(4,7))
    console.log(topsellingarray2);
    topsellingarray2.map ((tselling,index)=>{
        let yut =`
          <div class="productdiv" onclick="showmoretopselling2(${index})">
            <img src="${tselling.images[0]}" alt="${tselling.images[0]}" class="productimg">
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p class="realpname">${tselling.title}</p>
    <p class="productname"><span class="forb4pric">${tselling.price}</span><span class="forprice"><s>$170.00</s></span> </span></p>
    <br><button class="addtocart">Add to cart</button>
</div>
        `

         
        appendtopsalestwo.innerHTML+=yut;
    })
 
});
}
// let valueofcart=4;
topsellingfetchdata();
topsellingfetchdata2();
let idarr =[];
let idarr2 =[];
let cartarray=[];

let quan =[];
function showmoretopselling1(num){
    window.scrollTo({top:0,behavior:"smooth"})
    // let empty='b'
    homepage.style.display="none";
    everyatb.style.display="block";
    allatabppage.style.display="block";
    console.log( topsellingarray[num].title)
    let topselinfoone = `
     <p class="pabppageproductname">${topsellingarray[num].title}</p>  <i class="fa-solid fa-xmark abpxmark" onclick="functionabpxmark()"></i>
    <div class="aboutproduct">
        <div class="abpbackground">
            <img src="${topsellingarray[num].images[0]}" alt="${topsellingarray[num].images[0]}" class="abpimg">
        </div>
        </div>
        <div class="divabpallflex1">
    <div class="abpwithstarabout">
    <i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><br>
    <p class="puknuabp">SKU: MTKRY-001</p>
    <p class="loremabp1"> ${topsellingarray[num].description}</p>
    </div>
    <div class="abpcolorside">
        <div class="liabp1">
            <ul>
                <li class="">COLOR</li>
                <li>SIZE - Size Guide</li>
                <li>QUANTITY</li>
                <li class="liabpprice">$${topsellingarray[num].price} <button>-20%</button><span></span></li>
            </ul>
        </div>
        <div class="liabp2">
            <ul>
                <li class="">COLOR</li>
                <li><select name="" id="" class="selectabp">
                    <option value="">Small (S)</option>
                    <option value="">large (L)</option>
                    <option value="">Extra Large (XL)</option>
                </select></li>
                <li class="cartabpsystem"> <i class="fa-solid fa-minus"  onclick="removequantcart()"></i><input type="text" value="1" class="abpcarttext"> <i class="fa-solid fa-plus"  onclick="addingtocart()"></i></li>
                <li><button class="abpaddtocart" onclick="functionpushtocart1()">ADD TO CART</button></li>
            </ul>
        </div>

    </div>
</div>
    `
    // function functionpushtocart1(){
    //     cartarray.push({
    //        name : topsellingarray[num].title
    //      })
    // }
    // console.log(cartarray)

        //   cartarray.push;

    // console.log( topsellingarray[num].id);
    // idarr.pop();
    idarr.push(topsellingarray[num].id);
    // quan.push()
    // idarr2.push({
    //     name : topsellingarray[num].title
    // }
    // )
  
    allatabppage.innerHTML+=topselinfoone;
 
}
// console.log(idarr2);

// console.log(idarr);

function showmoretopselling2(num){
    window.scrollTo({top:0,behavior:"smooth"})
    // let empty='b'
    homepage.style.display="none";
    everyatb.style.display="block";
    allatabppage.style.display="block";
    console.log( topsellingarray2[num].title)
    let topselinfoone = `
     <p class="pabppageproductname">${topsellingarray2[num].title}</p>  <i class="fa-solid fa-xmark abpxmark" onclick="functionabpxmark()"></i>
    <div class="aboutproduct">
        <div class="abpbackground">
            <img src="${topsellingarray2[num].images[0]}" alt="${topsellingarray2[num].images[0]}" class="abpimg">
        </div>
        </div>
        <div class="divabpallflex1">
    <div class="abpwithstarabout">
    <i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><br>
    <p class="puknuabp">SKU: MTKRY-001</p>
    <p class="loremabp1"> ${topsellingarray2[num].description}</p>
    </div>
    <div class="abpcolorside">
        <div class="liabp1">
            <ul>
                <li class="">COLOR</li>
                <li>SIZE - Size Guide</li>
                <li>QUANTITY</li>
                <li class="liabpprice">$${topsellingarray2[num].price} <button>-20%</button><span></span></li>
            </ul>
        </div>
        <div class="liabp2">
            <ul>
                <li class="">COLOR</li>
                <li><select name="" id="" class="selectabp">
                    <option value="">Small (S)</option>
                    <option value="">large (L)</option>
                    <option value="">Extra Large (XL)</option>
                </select></li>
                <li class="cartabpsystem"> <i class="fa-solid fa-minus"  onclick="removequantcart()"></i><input type="text" value="1" class="abpcarttext"> <i class="fa-solid fa-plus"  onclick="addingtocart()"></i></li>
                <li><button class="abpaddtocart" onclick="functionpushtocart2()">ADD TO CART</button></li>
            </ul>
        </div>

    </div>
</div>

    `
    allatabppage.innerHTML+=topselinfoone;
    console.log( topsellingarray2[num].id);
    // idarr2.pop();
    idarr2.push(topsellingarray2[num].id);
}
function functionabpxmark(){
    allatabppage.style.display="none"
    homepage.style.display="block"
    allatabppage.innerHTML="";

}
function addingtocart(){
    inputvaluecart =document.querySelector(".abpcarttext");
    currentvalue =parseInt( inputvaluecart.value)
    inputvaluecart.value = currentvalue +1
    
   cartamtva = document.querySelector(".scartnum");
    inputvaluecartmva =parseInt(cartamtva.value)
    cartamtva.value = inputvaluecartmva+1;
    console.log(inputvaluecartmva);
}
function removequantcart(){
    inputvaluecart =document.querySelector(".abpcarttext");
    currentvalue =parseInt( inputvaluecart.value)
    inputvaluecart.value = currentvalue -1
}

// for cart push system 
function getcart(){
    // getting carts by user with id 5
// getting carts by user with id 5
fetch('https://dummyjson.com/carts/user/5')
.then(res => res.json())
.then(console.log);
}

function  functionpushtocart1(){
    fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 5,
          products: [
            {
              id: idarr[0],
              quantity: 1,
            },
            {
              id: idarr[1],
              quantity: 1,
            }, {
                id: idarr[2],
                quantity: 1,
              }, {
                id: idarr[3],
                quantity: 1,
              }, {
                id: idarr[4],
                quantity: 1,
              }, {
                id: idarr[5],
                quantity: 1,
              }, {
                id: idarr[6],
                quantity: 1,
              },
          ]
        })
      })
      .then(res => res.json())
      .then(console.log);
getcart()



    //   console.log(parseInt(topsellingarray.id));
    
}
function  functionpushtocart2(){
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: 5,
              products: [
                {
                  id: idarr2[0],
                  quantity: 1,
                },
                {
                  id: idarr2[1],
                  quantity: 1,
                },
                {
                    id: idarr2[2],
                    quantity: 1,
                  },         
                     {
                    id: idarr2[3],
                    quantity: 1,
                  },            {
                    id: idarr2[4],
                    quantity: 1,
                  },          
                    {
                    id: idarr2[5],
                    quantity: 1,
                  },           
                   {
                    id: idarr2[6],
                    quantity: 1,
                  },
              ]
            })
          })
          .then(res => res.json())
          .then(console.log);
        //   console.log(parseInt(topsellingarray.id));
        }
        let allcart =[]

// console.log(allcart);
function getcart(){
    // getting carts by user with id 5
// getting carts by user with id 5
fetch('https://dummyjson.com/carts/user/5')
.then(res => res.json())
.then(console.log);
}
let cartarrayer =[]
function justgetonecart(){
    fetch('https://dummyjson.com/carts/1')
   .then(res => res.json())
   .then(data=>{
    console.log(data)
    cartarrayer.push(data.products)
    console.log(cartarrayer)
    cartarrayer.forEach((nal)=>{
        // popincarts.innerHTML='';
//         let cuu =`
//          <i class="fa-solid fa-x dxatpop onclick="closepoping()""></i>
//     <ul class="cartpooptit">
//         <li class="cartpopproduct">Products</li>
//         <li>Price</li>
//         <li>Quantity</li>
//     </ul>
//     <ul class="itemsul">
//         <li class="liimgplsproname"><img class="poppingcartimg" src="" alt=""></li>
//         <li class="liprice">$${nal.price} </li>
//         <li class="liquan"><p class="quantipop">1</p><button class="cycleic"><i class="fa-solid fa-recycle "></i></button><button><i class="fa-solid fa-trash"></i></button></li>
//         <li></li>
//     </ul>
//     <p class="totalcheckamt">Total: $44</p>
//     <div class="pamdbuttn">
//     <button class="checkoutbtn">CHECK OUT</button>
// </div>
//         `
//         popincarts.innerHTML+=cuu;

    })
   });
}
justgetonecart();
// function inputcarttocart(){
// cartarrayer.map((mal,index)=>{
//     let cut =` <i class="fa-solid fa-x dxatpop onclick="closepoping()""></i>
//     <ul class="cartpooptit">
//         <li class="cartpopproduct">Products</li>
//         <li>Price</li>
//         <li>Quantity</li>
//     </ul>
//     <ul class="itemsul">
//         <li class="liimgplsproname"><img class="poppingcartimg" src="cat removed.png" alt="">IPHONE 11<br>APPLE</li>
//         <li class="liprice">$44 </li>
//         <li class="liquan"><p class="quantipop">1</p><button class="cycleic"><i class="fa-solid fa-recycle "></i></button><button><i class="fa-solid fa-trash"></i></button></li>
//         <li></li>
//     </ul>
//     <p class="totalcheckamt">Total: $44</p>
//     <div class="pamdbuttn">
//     <button class="checkoutbtn">CHECK OUT</button>
// </div>`
// })
// }
// inputcarttocart();



function closepoping(){
    popincarts.style.display="none"
    popincarts.innerHTML=''
}
function opencheckout(){
    popuncheckoutpage.style.display="block"
    popincarts.style.display="none"
}
cancelcartpop.addEventListener("click",()=>{
    popincarts.style.display="none"

})
closecheckout.addEventListener("click",()=>{
    popuncheckoutpage.style.display="none"
    popincarts.style.display="block"

})
openlastcomplete.addEventListener("click",()=>{
    homepage.style.display="none"
    popuncheckoutpage.style.display="none"
    donepay.style.display="block"
    window.scrollTo({top:0,behavior:"smooth"})


})
backtohomecomple.addEventListener("click",()=>{
    homepage.style.display="block";
    donepay.style.display="none"
    window.scrollTo({top:0,behavior:"smooth"})
    
})
// finding oproduct
let productss =[];
findanddisplypro.addEventListener("click", ()=>{
    everyatb.style.display="none"
    homepage.style.display="none"
    findinfullpage.style.display="flex"
    searched =searchee.value
    fetch(`https://dummyjson.com/products/search?q=${searched}`)
        .then(res => res.json())
        .then(data=>{ 
            console.log(data)
            productss.push(...data.products)
            console.log(productss)
            productss.map((prc,index)=>{
                let yut =`  <div class="productdiv" onclick="showmoretopsellingsearc(${index})">
            <img src="${prc.images[0]}" alt="${prc.images[0]}" class="productimg">
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p class="realpname">${prc.title}</p>
    <p class="productname"><span class="forb4pric">${prc.price}</span><span class="forprice"><s>$170.00</s></span> </span></p>
    <br><button class="addtocart">Add to cart</button>
</div>
                `
                console.log(prc.stock)
                // let index= ++
                findinfullpage.innerHTML += yut

            })
    
});
})
function showmoretopsellingsearc(num){
    window.scrollTo({top:0,behavior:"smooth"})
    // let empty='b'
    allatabppage.innerHTML=""
    findinfullpage.style.display="none"
    homepage.style.display="none";
    everyatb.style.display="block";
    allatabppage.style.display="block";
    console.log( productss[num].title)
    let topselinfoone = `
     <p class="pabppageproductname">${productss[num].title}</p>  <i class="fa-solid fa-xmark abpxmark" onclick="functionabpxmarkse()"></i>
    <div class="aboutproduct">
        <div class="abpbackground">
            <img src="${productss[num].images[0]}" alt="${productss[num].images[0]}" class="abpimg">
        </div>
        </div>
        <div class="divabpallflex1">
    <div class="abpwithstarabout">
    <i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><i class="fa-solid fa-star abpstar"></i><br>
    <p class="puknuabp">SKU: MTKRY-001</p>
    <p class="loremabp1"> ${productss[num].description}</p>
    </div>
    <div class="abpcolorside">
        <div class="liabp1">
            <ul>
                <li class="">COLOR</li>
                <li>SIZE - Size Guide</li>
                <li>QUANTITY</li>
                <li class="liabpprice">$${productss[num].price} <button class="minustwenty>-20%</button><span></span></li>
            </ul>
        </div>
        <div class="liabp2">
            <ul>
                <li class="">COLOR</li>
                <li><select name="" id="" class="selectabp">
                    <option value="">Small (S)</option>
                    <option value="">large (L)</option>
                    <option value="">Extra Large (XL)</option>
                </select></li>
                <li class="cartabpsystem"> <i class="fa-solid fa-minus"  onclick="removequantcart()"></i><input type="text" value="1" class="abpcarttext"> <i class="fa-solid fa-plus"  onclick="addingtocart()"></i></li>
                <li><button class="abpaddtocart" onclick="functionpushtocart1()">ADD TO CART</button></li>
            </ul>
        </div>

    </div>
</div>
    `
    // function functionpushtocart1(){
    //     cartarray.push({
    //        name : topsellingarray[num].title
    //      })
    // }
    // console.log(cartarray)

        //   cartarray.push;

    // console.log( topsellingarray[num].id);
    // idarr.pop();
    // idarr.push(topsellingarray[num].id);
    // quan.push()
    // idarr2.push({
    //     name : topsellingarray[num].title
    // }
    // )
  
    allatabppage.innerHTML+=topselinfoone;
 
}
function closefindassdpla(){
    findinfullpage.style.display="none"
    homepage.style.display="block"
    findinfullpage.innerHTML += ""

}
function functionabpxmarkse(){
    allatabppage.style.display="none"
    findinfullpage.style.display="flex"
    allatabppage.innerHTML="";
    everyatb.style.display="none";


}
