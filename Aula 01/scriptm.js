function gerarRandomico() {
	for (var n = []; 6 != n.length;) {
		n = [];
		for (var t = 0; t < 6; t++) n.push(zero(getNr(1, 60)));
		n = removerDuplicata(n)
	}
	n.sort();
	for (t = 0; t < n.length; t++) document.getElementById("bola" + (t + 1)).innerHTML = n[t];
	var r;
	r = removerDuplicata(r = getDezCom(n));
	var e = "Dezena: ";
	for (t = 0; t < r.length; t++) t > 0 && String(r[t - 1]).charAt(0) != String(r[t]).charAt(0) && (e += "<span>-</span>"), e += "<span class='bola'>" + r[t] + "</span>";
	document.getElementById("id_dez").innerHTML = e, r = removerDuplicata(r = getDezSeq(n));
	for (e = "Sequência: ", t = 0; t < r.length; t++) t > 0 && Number(r[t]) - Number(r[t - 1]) > 2 && (e += "<span>-</span>"), e += "<span class='bola'>" + r[t] + "</span>";
	document.getElementById("id_seq").innerHTML = e, r = removerDuplicata(r = getDezFim(n));
	for (e = "Final: ", t = 0; t < r.length; t++) t > 0 && String(r[t - 1]).charAt(String(r[t - 1]).length - 1) != String(r[t]).charAt(String(r[t]).length - 1) && (e += "<span>-</span>"), e += "<span class='bola'>" + r[t] + "</span>";
	document.getElementById("id_fim").innerHTML = e
}

function getNr(n, t) {
	return n = Math.ceil(n), t = Math.floor(t), Math.floor(Math.random() * (t - n + 1)) + n
}

function removerDuplicata(n) {
	return n.filter(((t, r) => n.indexOf(t) === r))
}

function compareStringF() {
	for (var n = ["01", "19", "41", "46", "48", "55"], t = 0, r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) n[r].substring(n[r].length - 1, n[r].length) === n[e].substring(n[e].length - 1, n[e].length) && t++;
	alert(t)
}

function compareStringC(n) {
	for (var t = 0, r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) n[r].substring(0, 1) === n[e].substring(0, 1) && t++;
	return t
}

function getDezCom(n) {
	for (var t = [], r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) String(n[r]).substring(0, 1) == String(n[e]).substring(0, 1) && (t.push(n[r]), t.push(n[e]));
	return t
}

function getDezSeq(n) {
	for (var t = [], r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) parseInt(n[e], 10) == parseInt(n[r], 10) + 1 && (t.push(n[r]), t.push(n[e]));
	return t
}

function getDezFim(n) {
	for (var t = [], r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) String(n[r]).substring(String(n[r]).length - 1, String(n[r]).length) === String(n[e]).substring(String(n[e]).length - 1, String(n[e]).length) && (t.push(n[r]), t.push(n[e]));
	return t
}

function contaSeq(n) {
	for (var t = 0, r = 0; r < n.length; r++)
		for (var e = r + 1; e < n.length; e++) parseInt(n[e], 10) == parseInt(n[r], 10) + 1 && t++;
	return t
}

function zero(n) {
	return n < 10 ? "0" + n : n
}

function copyClipboard() {
	for (var n = "", t = 0; t < 6; t++) n += t < 5 ? document.getElementById("bola" + (t + 1)).innerText + " " : document.getElementById("bola" + (t + 1)).innerText;
	navigator.clipboard.writeText(n), alert("Copiado")
}