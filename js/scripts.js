const popUp = document.getElementById('popUp');
let ieraksti = [];

document.getElementById('jaunsPirkums').addEventListener('click', () => {
    popUp.style.display = 'block';
});

document.getElementById('pievienotPirkumu').addEventListener('click', () => {
    popUp.style.display = 'none';

    let pirkums = {precesNosaukums: precesNosaukums.value, daudzums: daudzums.value};

    precesNosaukums.value = "";
    daudzums.value = "";

    ieraksti.push(pirkums);

    render();
 });

 function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < ieraksti.length; i++) {
        let pirkums = `
        <div class="pirkums">
            <h3>Prece: ${ieraksti[i].precesNosaukums}</h3>
            <h4>Daudzums: ${ieraksti[i].daudzums}</h4>
        </div>`;

        saraksts.innerHTML += pirkums;
    };

};