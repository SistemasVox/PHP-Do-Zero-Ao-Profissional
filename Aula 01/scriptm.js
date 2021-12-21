function gerarRandomico() {
	for (var n = []; 6 != n.length;) {
		n = [];
		for (var t = 0; t < 6; t++) n.push(zero(getNr(1, 60)));
		n = removerDuplicata(n)
	}
	n.sort();
	for (t = 0; t < n.length; t++) document.getElementById("bola" + (t + 1)).innerHTML = n[t];
	var e;
	e = removerDuplicata(e = getDezCom(n));
	var r = "Dezena: ";
	for (t = 0; t < e.length; t++) t > 0 && String(e[t - 1]).charAt(0) != String(e[t]).charAt(0) && (r += "<span>-</span>"), r += "<span class='bola'>" + e[t] + "</span>";
	document.getElementById("id_dez").innerHTML = r, e = removerDuplicata(e = getDezSeq(n));
	for (r = "Sequência: ", t = 0; t < e.length; t++) t > 0 && Number(e[t]) - Number(e[t - 1]) > 2 && (r += "<span>-</span>"), r += "<span class='bola'>" + e[t] + "</span>";
	document.getElementById("id_seq").innerHTML = r, e = removerDuplicata(e = getDezFim(n));
	for (r = "Final: ", t = 0; t < e.length; t++) t > 0 && String(e[t - 1]).charAt(String(e[t - 1]).length - 1) != String(e[t]).charAt(String(e[t]).length - 1) && (r += "<span>-</span>"), r += "<span class='bola'>" + e[t] + "</span>";
	document.getElementById("id_fim").innerHTML = r
}

function getNr(n, t) {
	return n = Math.ceil(n), t = Math.floor(t), Math.floor(Math.random() * (t - n + 1)) + n
}

function removerDuplicata(n) {
	return n.filter(((t, e) => n.indexOf(t) === e))
}

function compareStringF() {
	for (var n = ["01", "19", "41", "46", "48", "55"], t = 0, e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) n[e].substring(n[e].length - 1, n[e].length) === n[r].substring(n[r].length - 1, n[r].length) && t++;
	alert(t)
}

function compareStringC(n) {
	for (var t = 0, e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) n[e].substring(0, 1) === n[r].substring(0, 1) && t++;
	return t
}

function getDezCom(n) {
	for (var t = [], e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) String(n[e]).substring(0, 1) == String(n[r]).substring(0, 1) && (t.push(n[e]), t.push(n[r]));
	return t
}

function getDezSeq(n) {
	for (var t = [], e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) parseInt(n[r], 10) == parseInt(n[e], 10) + 1 && (t.push(n[e]), t.push(n[r]));
	return t
}

function getDezFim(n) {
	for (var t = [], e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) String(n[e]).substring(String(n[e]).length - 1, String(n[e]).length) === String(n[r]).substring(String(n[r]).length - 1, String(n[r]).length) && (t.push(n[e]), t.push(n[r]));
	return t
}

function contaSeq(n) {
	for (var t = 0, e = 0; e < n.length; e++)
		for (var r = e + 1; r < n.length; r++) parseInt(n[r], 10) == parseInt(n[e], 10) + 1 && t++;
	return t
}

function zero(n) {
	return n < 10 ? "0" + n : n
}

function copyClipboard() {
	for (var n = "", t = 0; t < 6; t++) n += t < 5 ? document.getElementById("bola" + (t + 1)).innerText + " " : document.getElementById("bola" + (t + 1)).innerText;
	navigator.clipboard ? (navigator.clipboard.writeText(n), alert("Copiado: " + n)) : (copy(n), alert("Copiado: " + n))
}

function copy(n) {
	var t = document.createElement("input");
	t.setAttribute("value", n), document.body.appendChild(t), t.select();
	var e = document.execCommand("copy");
	return document.body.removeChild(t), e
}