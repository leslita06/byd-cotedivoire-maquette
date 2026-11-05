(function(){
const page=document.body.dataset.page||"";
const I={
 wa:'<svg viewBox="0 0 32 32" fill="#fff"><path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.2 9.9 10 5.2 16 5.2s10.8 4.7 10.8 10.6S22 26.4 16 26.4zm5.9-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2.7 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>'
};
const nav=[["index.html","Gamme","gamme"],["modele.html?m=atto3","Modèles","modele"],["comparateur.html","Électrique ou thermique","cmp"],["essai.html","Essai","essai"],["achat.html","Acheter","achat"]];
const hdr=`<div class="demo"><b>Maquette proposée par Yelema, non publiée.</b> Données fictives de démonstration, aucun formulaire n'enregistre de données.</div>
<header class="top"><div class="wrap">
 <a class="brand" href="index.html" aria-label="BYD Côte d'Ivoire par CFAO Mobility"><span class="wm">BYD</span><span class="sep"></span><img src="img/logo-cfao.png" alt="CFAO Mobility"></a>
 <nav class="main">${nav.map(n=>`<a href="${n[0]}" class="${n[2]===page?'on':''}">${n[1]}</a>`).join('')}</nav>
 <div class="act"><a class="btn ghost sm hide-m" href="essai.html">Réserver un essai</a><a class="btn sm" href="achat.html">Acheter en ligne</a></div>
 <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</div></header>
<div class="mnav"><button class="x" aria-label="Fermer">×</button>${nav.map(n=>`<a href="${n[0]}">${n[1]}</a>`).join('')}<a href="#" data-wa>WhatsApp</a></div>`;
const ftr=`<footer><div class="wrap"><div class="cols">
 <div><div class="sig"><span class="wm" style="font-family:Manrope;font-weight:800;font-size:22px;color:#fff">BYD</span><img src="img/logo-cfao-blanc.png" alt="CFAO Mobility"></div><p>BYD en Côte d'Ivoire est distribué par CFAO Mobility Côte d'Ivoire, 117 boulevard de Marseille, Abidjan.</p></div>
 <div><h4>Gamme</h4>${BYD.order.map(k=>`<a href="modele.html?m=${k}">${BYD.models[k].name}</a>`).join('')}</div>
 <div><h4>Services</h4><a href="essai.html">Réserver un essai</a><a href="achat.html">Acheter en ligne</a><a href="achat.html?f=loxea">Location LOXEA</a><a href="comparateur.html">Comparateur</a></div>
 <div><h4>Showrooms</h4>${BYD.showrooms.map(s=>`<a href="essai.html?s=${s.id}">${s.name}</a>`).join('')}</div>
</div><div class="legal"><span>Données fictives de démonstration. Prix indicatifs fictifs, non contractuels. ${BYD.photoCredits}</span><span>Proposé par Yelema, maquette non publiée</span></div></div></footer>
<button class="waf" data-wa aria-label="Écrire sur WhatsApp">${I.wa}</button>
<div class="mbar"><a class="btn ghost" href="essai.html">Essai</a><a class="btn" href="achat.html">Acheter</a><button class="btn wa" data-wa aria-label="WhatsApp">${I.wa.replace('<svg','<svg width="24" height="24"')}</button></div>
<div class="modal" id="wa"><div class="wabox">
 <div class="h"><div class="av"><img src="img/logo-cfao.png" alt=""></div><div><b>BYD Côte d'Ivoire</b><span>Conseiller CFAO Mobility, répond en 5 min</span></div><button aria-label="Fermer">×</button></div>
 <div class="b" id="wab"><div class="bub">Bonjour 👋 Je suis votre conseiller BYD. Que souhaitez-vous faire ?</div><div class="qr"><button data-q="essai">Réserver un essai</button><button data-q="prix">Connaître un prix</button><button data-q="recharge">Recharge à Abidjan</button></div></div>
 <div class="f">Conversation simulée pour la démonstration : aucun message n'est envoyé.</div>
</div></div>`;
document.body.insertAdjacentHTML('afterbegin',hdr);
document.body.insertAdjacentHTML('beforeend',ftr);
const mn=document.querySelector('.mnav');
document.querySelector('.burger').onclick=()=>mn.classList.add('on');
mn.querySelector('.x').onclick=()=>mn.classList.remove('on');
const M=document.getElementById('wa'),B=document.getElementById('wab');
const ans={essai:'Avec plaisir. Choisissez votre showroom et votre créneau ici, c\'est confirmé en 1 minute : <a href="essai.html" style="color:#075E54;font-weight:600;text-decoration:underline">réserver mon essai</a>.',
 prix:'La gamme démarre à 21 900 000 FCFA (Dolphin), prix indicatif. Financement à partir de '+fcfa(mensu(BYD.models.dolphin.price*0.8,60))+' par mois : <a href="achat.html" style="color:#075E54;font-weight:600;text-decoration:underline">simuler mon achat</a>.',
 recharge:'Nous installons votre borne murale 7 kW à domicile (une nuit pour faire le plein), et nos showrooms disposent de bornes rapides.'};
document.querySelectorAll('[data-wa]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();mn.classList.remove('on');M.classList.add('on')}));
M.addEventListener('click',e=>{if(e.target===M||e.target.closest('.h button'))M.classList.remove('on')});
B.addEventListener('click',e=>{const q=e.target.dataset&&e.target.dataset.q;if(!q)return;
 B.insertAdjacentHTML('beforeend',`<div class="bub" style="justify-self:end;background:#DCF8C6;border-radius:10px 0 10px 10px">${e.target.textContent}</div><div class="bub">${ans[q]}</div>`);});
})();
