const POP_Up = document.getElementById('popUp');
let ieraksti = [];

window.addEventListener('load', () => {
    ieraksti = JSON.parse(localStorage.getItem("ieraksti") || "[]");
    console.log(ieraksti)
    render();
});

const ieraksts = document.querySelector('#saraksts')

ieraksts.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      ieraksti.splice(li, 1);
      localStorage.setItem('ieraksti',JSON.stringify(ieraksti));
    }
});

document.getElementById('jaunsPirkums').addEventListener('click', () => {
    POP_Up.style.display = 'block';
});

document.getElementById('pievienotPirkumu').addEventListener('click', () => {
    POP_Up.style.display = 'none';

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
            <button class="delete">Dzēst</button>
        </div>`;

        saraksts.innerHTML += pirkums;
    };

    localStorage.setItem("ieraksti", JSON.stringify(ieraksti))

};