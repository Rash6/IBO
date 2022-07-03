//data given
const listOfProducts=[{
    productName:"TV",
    quantity:10,
    description:"television"
},
{
productName:"AC",
quantity:5,
description:"air conditioner"
},
{

    productName:"TV",
    quantity:10,
    description:"television"
},
{

    productName:"AC",
    quantity:5,
    description:"air conditioner"

},
{

    productName:"FAN",
    quantity:10,
    description:"Ceiling Fan"

}
]

//question 1
let result;
let obj={}
function getUniqueProductCount(){
   
        listOfProducts.map((e)=>{
            if(obj[e.productName]===undefined){
                obj[e.productName]=1
            }
            else{
                obj[e.productName]+=1
            }
            return obj
        })
        console.log(obj)

} 
//question 2
function getUniquePrducts(){
    let arr=[];
    for(let i=0;i<listOfProducts.length;i++){
        let boolean=true;
        for(var j=0;j<arr.length;j++){
            if(arr[j].productName===listOfProducts[i].productName){
                arr[j].quantity+=listOfProducts[i].quantity;
                boolean=false;
                break;
            }
        }
        if(boolean===true){
            arr.push(listOfProducts[i])
        }
    }
 console.log(arr)
}