function compute() {
    const principal = document.getElementById("principal").value;

    if (principal < 1 || principal === "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else {
        const rate = document.getElementById("rate").value;
        const years = document.getElementById("years").value;
        const interest = principal * years * rate / 100;
        const date = new Date();
        const thisYear = date.getFullYear();

        const futureYear = thisYear + Number(years);
        const result = document.getElementById("result");
        result.innerHTML = "<br>If you deposit <mark>" + principal + "</mark>,<br>"
            + "at an interest rate of <mark>" + rate + "</mark>%.<br>"
            + "You will receive an amount of <mark>" + interest + "</mark>,<br>"
            + "in the year <mark>" + futureYear + "</mark>";
    }

}

function update() {
    // i just dont like how fast value of range was changing so decide to make it slower ))

    setInterval(() => update_iter(), 200);

    function update_iter(){
        const slide = document.getElementById('rate'),
            sliderDiv = document.getElementById("slider_value");
        sliderDiv.innerHTML = slide.value + "%";
    }
}