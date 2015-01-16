function GetNBRB() {
    var kurs = document.getElementsByClassName("top-informer-currency")[0];
    //console.log("len=" + kurs.length);
    //console.log(kurs);
    var k = kurs.getElementsByClassName("_u")[0];
    //console.log(k);
    console.log(k.innerText);
    var num = k.innerText.replace(/\s+/g, '').replace(/\$/g, '');
    console.log(num);
    return num;
}

function extractPrice(PriceHTML) {
    var expr = new RegExp('<strong>(.+)</strong>', 'ig');
    var arr = expr.exec(PriceHTML);
    var num = arr[1].replace(/\s+/g, '') / GetNBRB();
    return '$'+num.toFixed(2);
}

function ConvertPrices() {
//setTimeout(continueExecution, 1000);
    var costs = document.getElementsByClassName("cost-i");
    if (costs.length == 0)
        costs = document.getElementsByClassName("cost");
    //console.log("len=" + costs.length);
//alert(costs.length);

    Array.prototype.forEach.call(costs, function(cost) {
        var newTxt = extractPrice(cost.innerHTML);
        cost.innerHTML = cost.innerHTML + "<br>" + newTxt;
        //newTxt = newTxt.replace
        //console.log(newTxt);
    })
}

ConvertPrices();
//alert("done");