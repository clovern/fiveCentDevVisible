async function passwordQuery(){
    try{
        const response = await fetch('/passcode');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.passcode;
        }
    }
    catch (error){
        console.log(error); 
    }
}

async function symbolUrlQuery(){
    try{
        const response = await fetch('/urlSymbol');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.url;
        }
    }
    catch (error){
        console.log(error); 
    }
}

async function cipherUrlQuery(){
    try{
        const response = await fetch('/urlCipher');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.url;
        }
    }
    catch (error){
        console.log(error); 
    }
}

async function checkCodePassword(event){
    let element = event.target;
    let passcode = document.getElementById("passcode").value;
    let inputBox = document.getElementById("passcode");
    const correctPasscode = await passwordQuery();

    if (correctPasscode != passcode){
        document.getElementById("passcode").value = "Incorrect Passcode"
    }
    else if (correctPasscode == passcode){
        let name = element.getAttribute("name");
        let link = "";
        if (name == "symbolButton"){
            link = await symbolUrlQuery();
        }
        else if (name == "cipherButton"){
            link = await cipherUrlQuery();
        }
        window.location.href = link;
    }
}