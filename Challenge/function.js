function cifrar() {
    var textoEntrada = document.getElementById("textoEntrada").value;
    var textoCifrado = "";
    
    for (var i = 0; i < textoEntrada.length; i++) {
        var letra = textoEntrada.charAt(i);
        
        switch (letra) {
            case 'a':
                textoCifrado += 'ai';
                break;
            case 'e':
                textoCifrado += 'enter';
                break;
            case 'i':
                textoCifrado += 'imes';
                break;
            case 'o':
                textoCifrado += 'ober';
                break;
            case 'u':
                textoCifrado += 'ufat';
                break;
            default:
                textoCifrado += letra;
        }
    }
    
    document.getElementById("textoSalida").value = textoCifrado;
}

function descifrar() {
    var textoCifrado = document.getElementById("textoEntrada").value;
    var textoDescifrado = textoCifrado.replace(/ai/g, 'a')
                                     .replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    
    document.getElementById("textoSalida").value = textoDescifrado;
}

function pegarTexto() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("textoEntrada").value = text;
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}

function copiarTexto() {
    var textoSalida = document.getElementById("textoSalida");
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + textoSalida.value);
}