function calc() {
    var input = document.getElementById("input").value;
    var select = document.getElementById("select_choice").value;
    if (select == 'Binary')
        convertToBinary(input);
    else if (select == 'Hexadecimal')
        convertToHexa(input)
    else if (select == 'Octal')
        convertToOcta(input)
    else
        document.getElementById("result").value = input;

}

function convertToBinary(x) {
    document.getElementById("result").value = parseInt(x, 10).toString(2);
}


function convertToHexa(x) {
    document.getElementById("result").value = parseInt(x, 10).toString(16);
}


function convertToOcta(x) {
    document.getElementById("result").value = parseInt(x, 10).toString(8);
}

function chmod_calc() {
    var first = 0,
        second = 0,
        third = 0;
    var oread = document.getElementById("oread");
    var owrite = document.getElementById("owrite");
    var oexec = document.getElementById("oexec");
    var gread = document.getElementById("gread");
    var gwrite = document.getElementById("gwrite");
    var gexec = document.getElementById("gexec");
    var pread = document.getElementById("pread");
    var pwrite = document.getElementById("pwrite");
    var pexec = document.getElementById("pexec");
    if (oread.checked)
        first += 4;
    if (owrite.checked)
        first += 2;
    if (oexec.checked)
        first += 1;
    if (gread.checked)
        second += 4;
    if (gwrite.checked)
        second += 2;
    if (gexec.checked)
        second += 1;
    if (pread.checked)
        third += 4;
    if (pwrite.checked)
        third += 2;
    if (pexec.checked)
        third += 1;

    document.getElementById("chmod_res").value = String(first) + String(second) + String(third);

}