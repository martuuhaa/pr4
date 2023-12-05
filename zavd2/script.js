function generate() {

let rtl = document.getElementById('rtl').value;
let rtr = document.getElementById('rtr').value;
let rbl = document.getElementById('rbl').value;
let rbr = document.getElementById('rbr').value;

const ttl = document.getElementById('ttl');
const ttr = document.getElementById('ttr');
const tbl = document.getElementById('tbl');
const tbr = document.getElementById('tbr');

const block = document.getElementById('block');
const cssCode=document.getElementById('cssCode');

ttl.value = rtl;
ttr.value = rtr;
tbl.value = rbl;                    
tbr.value = rbr;

block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
cssCode.value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;`;

const outline = document.getElementById('outline').value;
block.style.outline = `${outline}px solid #e74c3c`;

const outlineStyle = document.getElementById('outlineStyle').value;
block.style.outlineStyle = outlineStyle;

const overflow = document.getElementById('overflow').value;
block.style.overflow = overflow;

cssCode.value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;\n`;
cssCode.value += `outline: ${outline}px ${outlineStyle} #e74c3c;\n`;
cssCode.value += `overflow: ${overflow};\n`;
}
