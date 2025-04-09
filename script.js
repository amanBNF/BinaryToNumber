document.getElementById("mybtn").onclick = function() {
    let binaryStr = document.getElementById("get").value.trim();

    if (!/^[01]+$/.test(binaryStr)) {
        alert("Please enter a valid binary number.");
        // document.getElementById("give").value = "Please enter a valid binary number.";
        document.getElementById("get").value = "";
        document.getElementById('give').value = "";
        return;
    }

    let decimal = parseInt(binaryStr, 2);

    document.getElementById("give").value = decimal;
};
