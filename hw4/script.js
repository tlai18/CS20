getInput = () => {
        var hotdogs = fries = sodas = items = subtotal = discount = tax = final = 0;
        
        hotdogs = parseInt(prompt("How many hotdogs do they want?", "0"));
        fries = parseInt(prompt("How many fries do they want?", "0"));
        sodas = parseInt(prompt("How many sodas do they want?", "0"));

        items = hotdogs + fries + sodas;
        subtotal = 4 * hotdogs + 3.5 * fries + 1.75 * sodas;

        if (subtotal >= 20) {
                discount = .1 * subtotal;
                subtotal -= discount;
        }

        tax = .0625 * subtotal;
        final = subtotal + tax;
        discount = round(discount);
        subtotal = round(subtotal);
        tax = round(tax);
        final = round(final);

        function round(num) {
                let str = "" + parseFloat((parseInt(num * 100 + .5)) / 100);
                let index = str.indexOf('.');
                if (index == -1) 
                        str += ".00"
                else if (index == str.length - 2)
                        str += "0"
                return str;
        }

        document.getElementById("hotdogs").innerHTML += hotdogs;
        document.getElementById("fries").innerHTML += fries;
        document.getElementById("sodas").innerHTML += sodas;
        document.getElementById("items").innerHTML += items;
        document.getElementById("subtotal").innerHTML += subtotal;
        document.getElementById("discount").innerHTML += discount;
        document.getElementById("tax").innerHTML += tax;
        document.getElementById("final").innerHTML += final;
};

getInput();                