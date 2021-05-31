var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.ontouchstart = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onload = () => {
    this.resizeHeaderAndFooter();
    document.querySelector('.button').addEventListener('click', () => { this.scrollDown() });
}
scrollDown = () => {
    const background = document.querySelector('.background');
    window.scrollTo({ behavior: 'smooth', top: background.clientHeight - 50 })
}
window.onresize = () => {
    this.resizeHeaderAndFooter();
}
toggleMenu = () => {
    document.querySelector('.burger-menu').classList.toggle("change");
    document.querySelector('.menu').classList.toggle('hide');
}
resizeHeaderAndFooter = () => {
    if (window.innerWidth < 1024) {
        document.querySelectorAll('.mobile').forEach(el => { el.classList.remove('hide'); });
        document.querySelectorAll('.desktop').forEach(el => { el.classList.add('hide'); });
    } else {
        document.querySelectorAll('.mobile').forEach(el => { el.classList.add('hide'); });
        document.querySelectorAll('.desktop').forEach(el => { el.classList.remove('hide'); });
    }
}

openModal = (id) => {
    let modalimg = document.querySelector('#modal-img');
    switch (id) {
        case "#card1":
            foto = '<div> <p>Formalizzazione dei rapporti commerciali tra imprese ed assistenza al Cliente dalla fase di trattativa pre-negoziale sino alla redazione del documento contrattuale (condizioni generali di vendita/acquisto; locazione e affitto di ramo d’azienda; compravendita; contratti di rete; joint venture; fornitura e sub-fornitura).</p></div>'
            break;
        case "#card2":
            foto = '<div><p>Assistenza alle imprese in tutte le fasi dell’operazione immobiliare di efficientamento energetico: dalla fase programmatoria al finanziamento dell’intervento edilizio, dalla fase esecutiva sino all’ottenimento dell’agevolazione fiscale (accordi quadro con partners finanziari e assicurativi; contratti d’appalto e sub-appalto; contratti di cessione del credito d’imposta; conferimenti d’incarico progettuale).</p></div>'
            break;
        case "#card3":
            foto = ' <div><p>Consulenza in materia societaria in fase di strutturazione della società e dei rapporti interni tra soci (negoziazione e redazione dello statuto; patti parasociali; costituzione di New-Co e cessione di quote sociali), ovvero di associazioni e consorzi d’imprese, ivi compresa la regolamentazione contrattuale interna.</p> </div>'
            break;
        case "#card4":
            foto = "<div> <p>Assistenza alle imprese nell'ambito delle procedure fallimentari e concorsuali: dalla valutazione preventiva sulla fattibilità dell’accordo di ristrutturazione del debito o del piano concordatario alla redazione della relativa domanda, oltre alle consequenziali comunicazioni e istanze al Tribunale e agli Organi della procedura. </p></div>"
            break;
        case "#card5":
            foto = '<div><p>Tutela e valorizzazione degli assets immateriali (marchi, brevetti e segreti commerciali), sia in fase stragiudiziale (contratti di licenza e trasferimento di marchi e brevetti, accordi di co-branding e franchising), sia in fase giudiziale avanti le Sezioni Specializzate (procedimenti cautelari e di merito in materia di proprietà intellettuale e diritto industriale).</p></div>'
            break;
        case "#card6":
            foto = '<div><p>Adeguamento alla normativa vigente (analisi dell’organigramma societario e adempimenti per le figure di riferimento; redazione informative; progettazione di un sistema di gestione privacy efficiente e sua implementazione), nonché assistenza in fase di contezioso avanti il Garante Privacy.</p></div>'
            break;
    }
    modalimg.innerHTML = foto;
    modal.style.display = "block";
}