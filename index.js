async function info(){
    try{
        let ver=await fetch('ver.json');
        ver=await ver.json();
        alert(`Симулятор дерева\nВерсия ${ver}`);
    }
    catch(e){
        console.error("Не удалось обработать файл:",e);
    }
}
function opop() {window.open("https://www.tinkoff.ru/rm/r_GQbNXFYrRi.kOIzMcXRJy/wlCSU49384", "_blank");}
function out(){window.location.href = 'index.html';}
function ed(){window.location.href="in-ed.html";}