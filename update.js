var thehtml = `
<h3>Recent Updates (Online)</h3>
<br> <table cellspacing=3D"0" cellpadding=3D"0" d=
ir=3D"ltr" border=3D"1" style=3D"table-layout:fixed;font-size:10pt;font-fam=
ily:Arial;width:0px;border-collapse:collapse;border:none"><colgroup><col wi=
dth=3D"155"><col width=3D"162"><col width=3D"100"></colgroup><tbody><tr sty=
le=3D"height:21px"><td style=3D"border:1px solid rgb(0,0,0);overflow:hidden=
;padding:2px 3px;vertical-align:bottom;font-family:Montserrat;font-size:14p=
t;color:rgb(10,124,155)" rowspan=3D"2" colspan=3D"1"><div style=3D"max-heig=
ht:42px">Class</div></td><td style=3D"border-width:1px;border-style:solid;b=
order-color:rgb(204,204,204) rgb(204,204,204) rgb(0,0,0);overflow:hidden;pa=
dding:2px 3px;vertical-align:bottom"></td><td style=3D"overflow:hidden;padd=
ing:2px 3px;vertical-align:bottom;border:1px solid rgb(204,204,204)"></td><=
/tr><tr style=3D"height:21px"><td style=3D"border-width:1px;border-style:so=
lid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);ov=
erflow:hidden;padding:2px 3px;vertical-align:bottom">Time</td><td style=3D"=
overflow:hidden;padding:2px 3px;vertical-align:bottom;border:1px solid rgb(=
204,204,204)"></td></tr><tr style=3D"height:21px"><td style=3D"border-width=
:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0)=
;overflow:hidden;padding:2px 3px;vertical-align:bottom;font-family:Montserr=
at;color:rgb(40,40,40)">Period 1</td><td style=3D"border-width:1px;border-s=
tyle:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,=
204);overflow:hidden;padding:2px 3px;vertical-align:bottom;font-family:Mont=
serrat;color:rgb(40,40,40)">7:45-8:30 a.m.</td><td style=3D"overflow:hidden=
;padding:2px 3px;vertical-align:bottom;text-align:right;border:1px solid rg=
b(204,204,204)">45</td></tr><tr style=3D"height:21px"><td style=3D"border-w=
idth:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,=
0,0);overflow:hidden;padding:2px 3px;vertical-align:bottom;font-family:Mont=
serrat;color:rgb(40,40,40)">Period 2</td><td style=3D"border-width:1px;bord=
er-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,=
204,204);overflow:hidden;padding:2px 3px;vertical-align:bottom;font-family:=
Montserrat;color:rgb(40,40,40)">8:35-9:15 a.m.</td><td style=3D"overflow:hi=
dden;padding:2px 3px;vertical-align:bottom;text-align:right;border:1px soli=
d rgb(204,204,204)">40</td></tr><tr style=3D"height:21px"><td style=3D"bord=
er-width:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rg=
b(0,0,0);overflow:hidden;padding:2px 3px;vertical-align:bottom;background-c=
olor:rgb(242,242,242);font-family:Montserrat;color:rgb(40,40,40)">Homeroom =
-Oly Way Video</td><td style=3D"border-width:1px;border-style:solid;border-=
color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);overflow:hidd=
en;padding:2px 3px;vertical-align:bottom;background-color:rgb(242,242,242);=
font-family:Montserrat;color:rgb(40,40,40)">9:20-9:50</td><td style=3D"over=
flow:hidden;padding:2px 3px;vertical-align:bottom;text-align:right;border:1=
px solid rgb(204,204,204)">30</td></tr><tr style=3D"height:21px"><td style=
=3D"border-width:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0=
,0,0) rgb(0,0,0);overflow:hidden;padding:2px 3px;vertical-align:bottom;back=
ground-color:rgb(242,242,242);font-family:Montserrat;color:rgb(40,40,40)">B=
reak</td><td style=3D"border-width:1px;border-style:solid;border-color:rgb(=
204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);overflow:hidden;padding=
:2px 3px;vertical-align:bottom;background-color:rgb(242,242,242);font-famil=
y:Montserrat;color:rgb(40,40,40)">9:50-10:00</td><td style=3D"overflow:hidd=
en;padding:2px 3px;vertical-align:bottom;border:1px solid rgb(204,204,204)"=
></td></tr><tr style=3D"height:21px"><td style=3D"border-width:1px;border-s=
tyle:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hid=
den;padding:2px 3px;vertical-align:bottom;background-color:rgb(242,242,242)=
;font-family:Montserrat;color:rgb(40,40,40)">Bear Time A</td><td style=3D"b=
order-width:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0)=
 rgb(0,0,0) rgb(204,204,204);overflow:hidden;padding:2px 3px;vertical-align=
:bottom;background-color:rgb(242,242,242);font-family:Montserrat;color:rgb(=
40,40,40)" rowspan=3D"2" colspan=3D"1"><div style=3D"max-height:42px">10:00=
-10:50a.m.</div></td><td style=3D"overflow:hidden;padding:2px 3px;vertical-=
align:bottom;text-align:right;border:1px solid rgb(204,204,204)">50</td></t=
r><tr style=3D"height:21px"><td style=3D"border-width:1px;border-style:soli=
d;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;paddi=
ng:2px 3px;vertical-align:bottom;background-color:rgb(242,242,242);font-fam=
ily:Montserrat;color:rgb(40,40,40)">Bear Time B</td><td style=3D"overflow:h=
idden;padding:2px 3px;vertical-align:bottom;border:1px solid rgb(204,204,20=
4)"></td></tr><tr style=3D"height:21px"><td style=3D"border-width:1px;borde=
r-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:=
hidden;padding:2px 3px;vertical-align:bottom;font-family:Montserrat;color:r=
gb(40,40,40)">Period 3</td><td style=3D"border-width:1px;border-style:solid=
;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);overf=
low:hidden;padding:2px 3px;vertical-align:bottom;font-family:Montserrat;col=
or:rgb(40,40,40)">10:55-11:35 a.m.</td><td style=3D"overflow:hidden;padding=
:2px 3px;vertical-align:bottom;text-align:right;border:1px solid rgb(204,20=
4,204)">40</td></tr><tr style=3D"height:21px"><td style=3D"border-width:1px=
;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);ove=
rflow:hidden;padding:2px 3px;vertical-align:bottom;background-color:rgb(219=
,229,241);font-family:Montserrat;color:rgb(40,40,40)">Lunch 1</td><td style=
=3D"border-width:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0=
,0,0) rgb(0,0,0) rgb(204,204,204);overflow:hidden;padding:2px 3px;vertical-=
align:bottom;background-color:rgb(219,229,241);font-family:Montserrat;color=
:rgb(40,40,40)">11:35-12:05.</td><td style=3D"overflow:hidden;padding:2px 3=
px;vertical-align:bottom;border:1px solid rgb(204,204,204)"></td></tr><tr s=
tyle=3D"height:21px"><td style=3D"border-width:1px;border-style:solid;borde=
r-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;padding:2px =
3px;vertical-align:bottom;background-color:rgb(219,229,241);font-family:Mon=
tserrat;color:rgb(40,40,40)">Period 4B</td><td style=3D"border-width:1px;bo=
rder-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) rgb(20=
4,204,204);overflow:hidden;padding:2px 3px;vertical-align:bottom;background=
-color:rgb(219,229,241);font-family:Montserrat;color:rgb(40,40,40)">12:10 p=
.m.-12:50 p.m.</td><td style=3D"overflow:hidden;padding:2px 3px;vertical-al=
ign:bottom;text-align:right;border:1px solid rgb(204,204,204)">40</td></tr>=
<tr style=3D"height:21px"><td style=3D"border-width:1px;border-style:solid;=
border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;padding=
:2px 3px;vertical-align:bottom;background-color:rgb(229,224,236);font-famil=
y:Montserrat;color:rgb(40,40,40)">Period 4A</td><td style=3D"border-width:1=
px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0) r=
gb(204,204,204);overflow:hidden;padding:2px 3px;vertical-align:bottom;backg=
round-color:rgb(229,224,236);font-family:Montserrat;color:rgb(40,40,40)">11=
:40 a.m.-12:20 p.m.</td><td style=3D"overflow:hidden;padding:2px 3px;vertic=
al-align:bottom;text-align:right;border:1px solid rgb(204,204,204)">40</td>=
</tr><tr style=3D"height:21px"><td style=3D"border-width:1px;border-style:s=
olid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;pa=
dding:2px 3px;vertical-align:bottom;background-color:rgb(229,224,236);font-=
family:Montserrat;color:rgb(40,40,40)">Lunch 2</td><td style=3D"border-widt=
h:1px;border-style:solid;border-color:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0=
) rgb(204,204,204);overflow:hidden;padding:2px 3px;vertical-align:bottom;ba=
ckground-color:rgb(229,224,236);font-family:Montserrat;color:rgb(40,40,40)"=
>12:20-12:50 p.m.</td><td style=3D"overflow:hidden;padding:2px 3px;vertical=
-align:bottom;border:1px solid rgb(204,204,204)"></td></tr><tr style=3D"hei=
ght:21px"><td style=3D"border-width:1px;border-style:solid;border-color:rgb=
(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;padding:2px 3px;vertica=
l-align:bottom;font-family:Montserrat;color:rgb(40,40,40)">Period 5</td><td=
 style=3D"border-width:1px;border-style:solid;border-color:rgb(204,204,204)=
 rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);overflow:hidden;padding:2px 3px;ver=
tical-align:bottom;font-family:Montserrat;color:rgb(40,40,40)">12:55-1:35 p=
.m.</td><td style=3D"overflow:hidden;padding:2px 3px;vertical-align:bottom;=
text-align:right;border:1px solid rgb(204,204,204)">40</td></tr><tr style=
=3D"height:21px"><td style=3D"border-width:1px;border-style:solid;border-co=
lor:rgb(204,204,204) rgb(0,0,0) rgb(0,0,0);overflow:hidden;padding:2px 3px;=
vertical-align:bottom;font-family:Montserrat;color:rgb(40,40,40)">Period 6<=
/td><td style=3D"border-width:1px;border-style:solid;border-color:rgb(204,2=
04,204) rgb(0,0,0) rgb(0,0,0) rgb(204,204,204);overflow:hidden;padding:2px =
3px;vertical-align:bottom;font-family:Montserrat;color:rgb(40,40,40)">1:40-=
2:22 p.m.</td><td style=3D"overflow:hidden;padding:2px 3px;vertical-align:b=
ottom;text-align:right;border:1px solid rgb(204,204,204)">42<br><br><br></t=
d></tr></tbody></table> `;
document.getElementById("thesub").innerHTML = thehtml;
