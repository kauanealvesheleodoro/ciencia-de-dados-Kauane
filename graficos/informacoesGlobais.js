const url = 'https://raw.githubusercontent.com/kauanealvesheleodoro/ciencia-de-dados-Kauane/refs/heads/main/dados-globais.json'; 

async function visualizarinformacoesGlobais(){
    const res = await fetch (url);

    const dados = await res.json();
}
    

    
