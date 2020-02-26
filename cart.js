var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>$</th><th>Serving Suggestion</th> </tr>";

//creating loop
for(var i=0; i<item.length; i++){
   cartHTML += "<tr> <td><img src='" + item[i] + ".png' width='100px' alt='"+ item[i] +"' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td colspan='2'>$" + itemPrice[i] + "</td><td>" + servSugg[i] + "</td>";
   //var itemCost = (itemPrice[i])*(itemQty[i]);
   //cartHTML += "<td>$" + itemCost + "</td></tr>";
   //orderTotal += itemCost;
}
//finishing table and displaying it
//cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
//cartHTML += "<tr> <td colspan='2'>Call 000-000-0000 to order your N-ice Dude Ice now!</td> </tr> </table>";
document.getElementById("cart").innerHTML = cartHTML;
console.log(cartHTML);