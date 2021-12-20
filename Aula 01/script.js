function gerarRandomico() {
    const N = 6;
    var jogo = [];
    while (jogo.length != N) {
        jogo = [];
        for (var i = 0; i < N; i++) {
            jogo.push(zero(getNr(1, 60)));
        }
        jogo = removerDuplicata(jogo);
    }
    jogo.sort();
    for (var i = 0; i < jogo.length; i++) {
        document.getElementById("bola" + (i + 1)).innerHTML = jogo[i];
    }
    var x = getDezCom(jogo);
    x = removerDuplicata(x);
    var s = "Dezena: ";
    for (var i = 0; i < x.length; i++) {
        if (i > 0) {
            if ((String(x[i - 1]).charAt(0) != String(x[i]).charAt(0))) {
                s += "<span>-</span>";
            }
        }
        s += "<span class='bola'>" + x[i] + "</span>";
    }
    document.getElementById("id_dez").innerHTML = s;
    //alert(x.toString());
    var x = getDezSeq(jogo);
    x = removerDuplicata(x);
    var s = "Sequência: ";
    for (var i = 0; i < x.length; i++) {
        if (i > 0) {
            if ((Number(x[i]) - Number(x[i - 1])) > 2) {
                s += "<span>-</span>";
            }
        }
        s += "<span class='bola'>" + x[i] + "</span>";
    }
    document.getElementById("id_seq").innerHTML = s;

    //

    var x = getDezFim(jogo);
    x = removerDuplicata(x);
    var s = "Final: ";
    for (var i = 0; i < x.length; i++) {
        if (i > 0) {
            if ((String(x[i - 1]).charAt(String(x[i - 1]).length - 1) != String(x[i]).charAt(String(x[i]).length - 1))) {
                s += "<span>-</span>";
            }
        }
        s += "<span class='bola'>" + x[i] + "</span>";
    }
    document.getElementById("id_fim").innerHTML = s;
}

function getNr(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removerDuplicata(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

function compareStringF() {
    var d = ["01", "19", "41", "46", "48", "55"];
    var c = 0;
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if ((d[i].substring(d[i].length - 1, d[i].length)) === (d[j].substring(d[j].length - 1, d[j].length))) {
                c++;
            }
        }
    }
    alert(c);
}

function compareStringC(d) {
    var c = 0;
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if ((d[i].substring(0, 1)) === (d[j].substring(0, 1))) {
                c++;
            }
        }
    }
    return c;
}

function getDezCom(d) {
    var v = [];
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if (String(d[i]).substring(0, 1) == String(d[j]).substring(0, 1)) {
                v.push(d[i]);
                v.push(d[j]);
            }
        }
    }
    return v;
}

function getDezSeq(d) {
    var v = [];
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if (parseInt(d[j], 10) == parseInt(d[i], 10) + 1) {
                v.push(d[i]);
                v.push(d[j]);
            }
        }
    }
    return v;
}

function getDezFim(d) {
    var v = [];
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if ((String(d[i]).substring(String(d[i]).length - 1, String(d[i]).length)) === (String(d[j]).substring(String(d[j]).length - 1, String(d[j]).length))) {
                v.push(d[i]);
                v.push(d[j]);
            }
        }
    }
    return v;
}

function contaSeq(d) {
    var c = 0;
    for (var i = 0; i < d.length; i++) {
        for (var j = i + 1; j < d.length; j++) {
            if (parseInt(d[j], 10) == parseInt(d[i], 10) + 1) {
                c++;
            }
        }
    }
    return c;
}

function zero(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

function copyClipboard() {
    var copyText = "";
    for (var i = 0; i < 6; i++) {
        if (i < 5) {
            copyText += document.getElementById("bola" + (i + 1)).innerText + " ";
        } else {
            copyText += document.getElementById("bola" + (i + 1)).innerText;

        }
    }
    navigator.clipboard.writeText(copyText);
    alert("Copiado");
}