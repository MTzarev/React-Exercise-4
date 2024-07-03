
function ListItems() {
 let numbers= ["1", "2", "3", "4", "5"]
let doubled = numbers.map((numbers)=>numbers*2);
let toPrint = doubled.map((doubled)=><li key={doubled.toString()}>{doubled}</li>)
return (
    <>
    <ul>{toPrint}
        
    </ul>
       </>
)

}
export default ListItems;