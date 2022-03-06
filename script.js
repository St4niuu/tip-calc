const percentage = [5, 10, 15, 25, 50];

const buttons = document.querySelectorAll(".button");


buttons.forEach((element,index) =>
{
    element.setAttribute("data-percentage",percentage[index]);
    if(buttons[index] == buttons[buttons.length-1])
    {
        element.addEventListener("mouseout", () =>
        {
            element.setAttribute("data-percentage",document.querySelector(".custom").value);
            if(!(document.querySelector(".custom").value == "null" || document.querySelector(".custom").value == "undefined" || document.querySelector(".custom").value == ""))
            {
                document.querySelector("span").style.visibility = "hidden";
            }
            calc(index);
        });
    }
    else
    {
        buttons[index].addEventListener("click", () =>
        {
            calc(index);
        });
    }
});

document.querySelector(".reset").addEventListener("click", () =>
{
    let bill = document.querySelector(".bill").value = "";
    let numberOfPeople = document.querySelector(".numberOfPeople").value = "";
    document.querySelector(".resultTipAmount").innerHTML = "$0.00";
    document.querySelector(".resultTotal").innerHTML = "$0.00";
});

function calc(index)
{
    let bill = document.querySelector(".bill").value;
    let numberOfPeople = document.querySelector(".numberOfPeople").value;
    if(numberOfPeople <= 0 || numberOfPeople == "null")
    {
        document.querySelector(".error").innerHTML = "Can't be zero";
        document.querySelector(".numberOfPeople").style.border = "3px solid red";
    }
    else
    {
        document.querySelector(".error").innerHTML = "";
        document.querySelector(".numberOfPeople").style.border = "";
     }
    document.querySelector(".resultTipAmount").innerHTML = "$" + ((Number(bill)/Number(numberOfPeople)) * (Number(buttons[index].dataset.percentage)/100)).toFixed(2);
    document.querySelector(".resultTotal").innerHTML = "$" + ((Number(bill)/Number(numberOfPeople)) * ((Number(buttons[index].dataset.percentage)/100) + 1)).toFixed(2);
}
