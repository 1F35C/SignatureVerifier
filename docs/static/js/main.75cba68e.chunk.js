(this["webpackJsonpsignature-verifier"]=this["webpackJsonpsignature-verifier"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var s,i=t(4),r=t.n(i),a=t(9),c=t.n(a),o=(t(14),t(0)),l=t.n(o),d=t(3),h=t(1),u=(t(16),t(7)),g=t(2),j="https://github.com/1F35C/signature-verifier",b=/-----BEGIN PGP SIGNED MESSAGE-----.*-----BEGIN PGP SIGNATURE-----\s*[A-Za-z0-9+/=]+\s*-----END PGP SIGNATURE-----/,m="-----BEGIN PGP SIGNATURE-----",f="Unexpected Message Format";function p(e){return j+"/blob/main/"+e}function x(e){var n=e.replace(/[\n\r]+/g,"");if(!b.test(n))return!1;var t=n.indexOf(m)+m.length;return n.indexOf("-----END PGP SIGNATURE-----")-t===761}function v(){return(v=Object(h.a)(l.a.mark((function e(n,t){var s,i,r,a,c,o,h,g,j,b,m,p,v,A,E;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&0!==n.length){e.next=2;break}throw new Error("Message is empty");case 2:if(x(n)){e.next=4;break}throw new Error(f);case 4:return e.next=6,u.a({cleartextMessage:n});case 6:return s=e.sent,i=u.b({armoredKey:t}),e.next=10,Promise.all([s,i]);case 10:return r=e.sent,a=Object(d.a)(r,2),c=a[0],o=a[1],h=o.keyPacket.created.valueOf(),g={message:c,verificationKeys:o,expectSigned:!0},e.next=18,u.c(g);case 18:return j=e.sent,e.next=21,Promise.all([j.signatures[0].verified,j.signatures[0].signature]);case 21:return b=e.sent,m=Object(d.a)(b,2),p=m[0],v=m[1],A=0,v.packets.length>0&&(E=v.packets[0]).created&&(A=E.created.valueOf()),e.abrupt("return",{verified:p,keyCreationTime:h,messageSignedTime:A});case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e[e.Hidden=0]="Hidden",e[e.Loading=1]="Loading",e[e.Verified=2]="Verified",e[e.Failed=3]="Failed"}(s||(s={}));var A=function(){return Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("h2",{children:"What?"}),Object(g.jsx)("p",{children:"This is a webpage where you can check whether a message was written by the owner of this repository."}),Object(g.jsx)("h2",{children:"Why?"}),Object(g.jsx)("p",{children:"This page could be useful if I wanted to take credit for this GitHub user in real life without compromising anonymity on the web. For example, I could send a potential customer/employer a signed message that they can verify on this page to verify my authorship."}),Object(g.jsx)("p",{children:"Conversely, no one else will not be able to take credit for this GitHub user account either. (I would first need more work on this account to make that worth doing :P)"}),Object(g.jsx)("h2",{children:"How?"}),Object(g.jsxs)("p",{children:["This project uses ",Object(g.jsx)("a",{href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)",children:"RSA asymmetric cryptography"})," to verify the source of signed messages."]}),Object(g.jsx)("p",{children:"First a private/public key pair is generated using RSA. The private key can be used to sign a message, and the public key can be used to verify the message."}),Object(g.jsx)("p",{children:"The private key should be safeguarded, only accessible to the person signing messages. The public key can be sent out to anyone who wants to verify the message, as the public key cannot be used to sign messages. In this case, the public key is embedded to the webpage for easy signature verification."}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("a",{href:p("generateKeys.js"),children:"generateKeys.js"})," is used to generate the private/public key pair, storing the private key in a gitignored directory, and updating JS to use the new public key."]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("a",{href:p("generateProof.js"),children:"generateProof.js"})," is used to generate a message that is signed with a private key."]})]}),"For more information, here's the ",Object(g.jsx)("a",{href:j,children:"repository"}),"!",Object(g.jsx)("h2",{children:"Attributions"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("a",{href:"https://openpgpjs.org/",children:"openpgp.js"})," for RSA implementation (key generation/signing/signature verification)"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("a",{href:"https://www.svgrepo.com/collection/essential-collection/1",children:"svgrepo.com"})," for icons"]})]})]})};function E(e){var n,t,i,r;switch(e.state){case s.Hidden:return Object(g.jsx)("div",{className:"hidden"});case s.Loading:return Object(g.jsxs)("div",{className:"box-section centered loading",children:[Object(g.jsx)("img",{className:"icon",src:"stopwatch.svg",alt:""}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"status",children:"Verifying..."})]});case s.Verified:return r={messageSignedTime:null!==(n=e.messageSignedTime)&&void 0!==n?n:0,keyCreationTime:null!==(t=e.keyCreationTime)&&void 0!==t?t:0},Object(g.jsxs)("div",{className:"box-section centered loading",children:[Object(g.jsx)("img",{className:"icon",src:"success.svg",alt:""}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"status",children:"Verified"}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"detail",children:["Signed on ",new Date(r.messageSignedTime).toLocaleString(),Object(g.jsx)("br",{}),"Public key created on ",new Date(r.keyCreationTime).toLocaleString()]})]});case s.Failed:return function(e){return Object(g.jsxs)("div",{className:"box-section centered loading",children:[Object(g.jsx)("img",{className:"icon",src:"error.svg",alt:""}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"status",children:"Verification Failed"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"detail",children:e.error})]})}({error:null!==(i=e.error)&&void 0!==i?i:"unknown"});default:throw new Error("Invalid result value")}}var O=function(){var e=Object(i.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)({state:s.Hidden,keyCreationTime:0,messageSignedTime:0,error:null}),c=Object(d.a)(a,2),o=c[0],l=c[1];return Object(i.useEffect)((function(){""===t?l({state:s.Hidden,keyCreationTime:0,messageSignedTime:0,error:null}):(l({state:s.Loading,keyCreationTime:0,messageSignedTime:0,error:null}),function(e,n){return v.apply(this,arguments)}(t,"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxsFNBGG/6HABEADJgL/nYu9JS/tbC4dsBcxU7Vs2bacd0oP97HGKdUxB1A7r\nm+Fv5OsLBBY4gCNbLqoX82+fHpJE+nPw1M69sqYXAGEkaPZJ0P1LT3ieEfnY\nzVVUW4fkDWt/JsBcgM5DJu7dxzKrclQ6lixEqJrUyFzO8In5GG0072H5exYa\nLWlNRJ+a9p9f2KFNg8MnPN/atOPB6RrywWbJmSeAIFe4UoMN/W4VFTTcpqwf\nI3h2jjC4bRxR71q3fB7lWsjXC3QugMJXEJryAZwEUnjVAwbL8nVfHV1lYoBL\njfIH3Cg00XjJOmdxn4tKGlLtPPPBXgEh6f5P+UOSNPqAW4EPwIpcGvlf5pKn\nXZVNi2AXdHEQ3JdoabXuiMCcD+ck8KYtXR9eiTvtEKSqAKgFCQay19c4RHlJ\n7tAtODbfVWg6dMfLwEm/Pdahk51d4Pipbu3Sy664DCDE4dcHsLP7a8eymLbr\nm0rxVZc2G/yuOUH4p+zQvkZX6E5K0rJ0pwWKApc0buDHSoUpl7IT4WHf7MUe\nH43y3N+XmUTu36P+Gw4Fin5MI9BFPHktkocB2dmA6jgz5dcxTy3tkfLB0eLO\nk/ZxAAzwcTOn+Vx4Vips1htHzqGMoEEWgiL8hzBi6bbMI0sFkg7qow4enLa4\nq49oljF009tGRYyF30cqaiucxHkBPHcZAohhxwARAQABzS8xRjM1QyA8OTU2\nNTkyMzArMUYzNUNAdXNlcnMubm9yZXBseS5naXRodWIuY29tPsLBigQQAQgA\nHQUCYb/ocAQLCQcIAxUICgQWAAIBAhkBAhsDAh4BACEJEIrI00XF0ybzFiEE\nMIXRk1fOMC5FYBFnisjTRcXTJvN4vxAAllMVx0/hqF/NBvHozoQnfn6A4tNS\n5hcyN8czAAmJ2xQp2TG+drBwlg9sQ7kgZ+Z4mt/4Dzi8P2/1sbVGKMQP9F0o\ncbCAVFtnZly0ma4zaMjdK7sKkvdEOXMm/DfVw7+hDX2amPOlQZdyUDcyJqKi\n5cHBqFGUVwhCFJysQFSgv4cXdRFibgmQFWTqwPsFlSXmrlE4k3cBeWA0jQOX\nJH2y/+BtoG6NMlX3Y8zIv+6jUZytpZczee81Dg/3UzuGljosWYWIvl17VKMS\nhCEQFpg1/OV2K5vD2V1A7+bZhCV+maQoWxvTVBcog9lLilxor7rJ7yVzsJ6j\n02nXTr+UL2NU36aJBerNRMSm86ei4T+TRsD+FJNCBtuLD3u1LFaY8rLoJ/Hp\nUGsKpBXTzLS46anFAFymA0bV8Ifzov9m/qbKDYM6CPWCwcDiWIGMKmeUmVz0\nX2DOBVeTBKBS5d0/AeSOVP+TQsR85hvXHl14qOEuPc+CV77HFX1cjQr8Fj6W\nE+1EvRGlMvvvEP7DhftImXoWfDNxyq9xfpwvrMd9/I8MucSdmlO7Zi6mi4CL\nwD8l/NSshdYkCRNcLtLgHRgJhgiH2u3ALRxbeu/ak+xFFtAUpXTkKF2dTGfX\nQ+lGNULSRY3lSSYQuF4illCVf3/FuMhUDrF1hcBG4xPylAq5CFcx22rOwU0E\nYb/ocAEQALUgxBKAvcjr6GR/Z6OISIdmeU7rOf8mddi9EvNy3lRaHyUHQ/hb\n8u7vTqLh9twbk7aGzveI6TDQ6ArP0kzWFk/F1Ka+j/VNg7x9E0Zdo1jgmJKy\nnTIRbWMnwJ/2g2j6gRuFUq3XhnLKGRyJAIZt1++eRlPHynzrnoIop3cjFUYz\nCouPfUnplnfIgI0Sikpo8Wibo0iWuwWohrdI0VbNhIIvWUyFlnrk97SsCL/G\ns4H8j8rjiY5BIuWw036Ze9sXTQR9QuynGFt8X7nG9SA1tYtiYqLOzpS8kits\nuzczwY7hFOmEdqhLxLCsu76LmI7Ij82m4v+CyTOuKq1GZOKke+VyQUq1TFIT\nB5jkbjbu+WmQPuFEEp71l1w5BGFhE1trqK1JLbmSWlblgiUGT6ZpHRRoD0Lz\nHEJEdW27a28AVmDs93He9AH3dcswBGTS/k5EkrlQh/i6U7gpTCVznQGe1h0k\npBfQU93ZUZbfek5lEAzHmx10G2iTac+nxqtCyZbOdNtdOkfHvF9hepYORjdM\n+hlXJPVCAlK/+XealSuoTpRpaunBilAZv4kre5uSsWTW3nnzf8lksXKLHzp7\nc031HQRajRqGEhuw+vvgYxQ6j+gN7grgmhcg+cRr/8EnVrQ9b9/d7rSx1Zvy\n7scgY8Ayg78FGOb3BA8g3xrtfpqPByRpABEBAAHCwXYEGAEIAAkFAmG/6HAC\nGwwAIQkQisjTRcXTJvMWIQQwhdGTV84wLkVgEWeKyNNFxdMm87cJD/0dDKr5\nQwYDZc6k2aeBsmehPJCgLq5MmOOVDtmQTuCgEGSlNMM3W+0UjrPe4mqEumVD\nuYpzetRYrVn5v77lGu0HiF6tvTlGSD1MKyPvp0EnOCcI7/NfrNK774j6ycoM\nNkvZ3cq1dBFjQJAvxvwtwv8gRcWom4bBSU/kRIdViY9ORMLLtE4Vh878GdC+\nkHD9FxifYn/+A8i+VvcMqjPdqMpWxg5wxmxghjwbNbggS19LEO8Md6h9p3/R\nIDYQyZfJTofUVQ1vxe9Pz07MtMYz/FkmmmpNQj5M3W3SE/z0TPdNE14SV9GL\nsVZjqctX4wCiTue2nKtrHFSOTwnp6im6iakFT7URHDd/q3Gu3iwRqXgzx5YH\nwYpLuQKtyk9Ng+OOaRj6rHCeyID+fSGe4IS0g5APgUgogAZRBSX30W73/CjP\nZLZrDXxzApIStJMsvV8U+ftz5boC6viczMNsBXQtb3Vau8vFBEE+EWM4qbEN\nyb/cmrKdNYm6NiHV9gNoCIEVwSW1ZED/X+XzKCAKxNdZV3htXzFiD1nMZ+7P\ntdZBfDhFF1jsvAcq5Y2mEDD2HBlOI/W4s2G1O0cMBpyjRFxJkHa+OQiKsolS\nz48bo9TpcpvYrCG8YlvrKxVPQsA4/g7+pQpXfPhSnp06F8hUtPDI1nBo6gH6\nh3/h/j8KIkpVMB2Vhw==\n=/MVQ\n-----END PGP PUBLIC KEY BLOCK-----\n").then((function(e){var n=e.verified?s.Verified:s.Failed;l({state:n,keyCreationTime:e.keyCreationTime,messageSignedTime:e.messageSignedTime,error:null})})).catch((function(e){l({state:s.Failed,keyCreationTime:0,messageSignedTime:0,error:e.message})})))}),[t]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("div",{className:"box-section",children:Object(g.jsx)("h1",{children:"Signature Verifier"})}),Object(g.jsxs)("div",{className:"box-section",children:["Please paste your signed signature below:",Object(g.jsx)("textarea",{className:"signature-field",onChange:function(e){r(e.target.value)},autoFocus:!0,value:t}),Object(g.jsx)("button",{onClick:function(){r("-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA256\n\nThis message was signed with the private key that is currently active\n-----BEGIN PGP SIGNATURE-----\n\nwsFzBAEBCAAGBQJhv+hxACEJEIrI00XF0ybzFiEEMIXRk1fOMC5FYBFnisjT\nRcXTJvMrtxAAkDuJg3QvYOgK3Mqc6+4RPqmQz2CQe5rtgyltsOh1kqP7OuXb\njPHAHA/g4mu401CdjIi6Drq5FuzC2gzFfojJ8+7NWuAPkSuDqbSxBEoMfR4G\n/f+WCW2xFhihkG3NAQagjYEqG/Dyil/VVsYU+v34GVT2UVW/jhAtsLSv/btW\nXDZLzu5sheksZh4+FQXLokb5I/HXnk6/CaqUOKwhBeZTaWvBevv9XOFd1EXx\ntqrsrYDGsfksooTP7IuewA43uQOCQDQlpoqoDj8+fRuTgS1iyjbo/d7FHUYS\nbGC28GFCVvpKA6PJwNzXM8Brhd60fJpbau0gXkadlzyTRIRgTP5FufwLO4XE\na3Ca1mVXl/Ds6qeEhhDJZtiyGj2BgNfTmi9+e/q0GOkTf5jzL8iPEn+1Z4+R\nge3Iw69ohLt53j0cPemhnoErYbPsmGeJh0hxA464tmnJ7+GDTKYbm76L+eTT\nPtOqBvf9IVhZ0ik14d38mv2iwzKBfaP8UwMHw+2BncCV7Lt1MkMEdHdq6oMZ\nErxJL8nOmHCcPA9RwqftkXBfkkGwSRSoa/RaD9tkNbfQZ/WgHbP9X7SAwR5v\ngv+oDRffMoh1ARpWuTmCWZdsndfC7Lluj1h/F0USLt3xusW/krI5CEjR9Jy+\nThl9rc01iVL520o5uk8Sv4D5/YyjUVhT3mE=\n=PTET\n-----END PGP SIGNATURE-----")},children:"Valid Example"}),Object(g.jsx)("button",{onClick:function(){r("-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA256\n\nThis message was signed with a different private key\n-----BEGIN PGP SIGNATURE-----\n\nwsFzBAEBCAAGBQJhvjrZACEJEK8WujUv4/UnFiEEqzjuybmkbhVdQLywrxa6\nNS/j9Se6VRAAg/cogw1vDZZQGVouup0vEiz5gBDSMXXlQd/RgqP/ggZHtMkx\nLQCmvvjsWkKE5a2ufblbD9ox3WdwGXJ8ww2GGtWZFdgZ9SjNBbXi5B4p5qBR\nTy9h3DMAowI9g2sD7Gv/eR8UfQvvQ8iWst1FGXyEsQNeGRopy6ucPqST1che\n/9Am+mfonA3Oox935XcszmToQhFCjrhwaZHWlT3JP5wB06iC+WQQ0Q7B1pR4\nkQzXcWVzrxP4E/RrdTXznlI3Sv+f9s0/kHCO401TaApVpZavDnszDZZRc9h6\nWH76y73DZfkfqQGaRvTYR/TWox8mJQodHAdFmC23TTIuDZI/MT8Ab6G4aGiz\n+EAm84jntlTVbhhTduK/wxhYZ0hgNp/IoPl/lEmQVlFb+fjR6XpCEz7HUA20\nATukxvka468g+xTe1lpOlkcET23jZjlFYiRYe1laQfpaOIsiarpmK12t9Zku\niE9PufTjcTtXFdmnTHqtnRMmR9z4v6Op+aGv36YUo1Z6s6T2cCx6W1+NqjB+\nxVUSbvX7/15W0q/PILMmJFHsbo5Z7Mi3q+TgNMckPblBJLAYAbpm36hOBXfD\nZG1Y0tqIc77OmERq1QK/+PW9v3uvNL6tH4AAAtUfg1VFbq43uO5q7+J7sI3f\nrq8Hp7aBVwEd6aDibKatzwjaCpfE0aLwH0U=\n=DNkV\n-----END PGP SIGNATURE-----")},children:"Invalid Example"}),Object(g.jsx)("button",{onClick:function(){r("")},children:"Clear"})]}),E(o)]}),Object(g.jsx)(A,{})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,s=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),s(e),i(e),r(e),a(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),T()}},[[18,1,2]]]);
//# sourceMappingURL=main.75cba68e.chunk.js.map