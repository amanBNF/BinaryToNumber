document.getElementById("mybtn").onclick = function() {
    let binaryStr = document.getElementById("get").value.trim();

    // Validate if the input is a binary number (only 0s and 1s)
    if (!/^[01]+$/.test(binaryStr)) {
        alert("Please enter a valid binary number.");
        // document.getElementById("give").value = "Please enter a valid binary number.";
        document.getElementById("get").value = "";
        document.getElementById('give').value = "";
        return;
    }

    // Convert binary to decimal
    let decimal = parseInt(binaryStr, 2);

    // Display result
    document.getElementById("give").value = decimal;
};
