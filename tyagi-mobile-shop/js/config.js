
var SHOP={whatsapp:"",phone:"919528749188",address:""}; // नंबर देश कोड के साथ, बिना + के, जैसे 919XXXXXXXXX
/* logo: ब्रांड की ऑफिशियल लोगो फ़ाइल का पाथ, जैसे "logos/oppo.svg". खाली हो तो सुनहरा नाम दिखेगा।
   models: [नाम, कीमत]. कीमत खाली "" हो तो बटन "WhatsApp पर कीमत पूछें" दिखाएगा. अपने स्टॉक के हिसाब से बदलें। */
var BRANDS=[
{name:"Apple",logo:"",models:[["iPhone 17 Pro",""],["iPhone 17",""],["iPhone 16",""],["iPhone 15",""]]},
{name:"Samsung",logo:"",models:[["Galaxy S25 Ultra",""],["Galaxy S25",""],["Galaxy A56",""],["Galaxy A36",""]]},
{name:"Oppo",logo:"",models:[["Reno 14",""],["F29 Pro",""],["A5 Pro",""]]},
{name:"Vivo",logo:"",models:[["V50",""],["T4",""],["Y39",""]]},
{name:"Realme",logo:"",models:[["14 Pro",""],["P3",""],["Narzo 80",""]]},
{name:"Nothing",logo:"",models:[["Phone (3a)",""],["CMF Phone 2 Pro",""]]},
{name:"Redmi",logo:"",models:[["Note 14 Pro",""],["Note 14",""],["14C",""]]},
{name:"Motorola",logo:"",models:[["Edge 60",""],["G85",""]]}];
/* नीचे के रिव्यू सिर्फ नमूना हैं। इन्हें अपने असली ग्राहकों की राय से बदलें। */
var REVIEWS=[
{n:"राहुल शर्मा",t:"सही दाम और ओरिजिनल फोन मिला। दुकान वाले ने सारी जानकारी अच्छे से समझाई।"},
{n:"प्रिया वर्मा",t:"WhatsApp पर तुरंत जवाब मिला और फोन उसी दिन तैयार था। बहुत भरोसेमंद दुकान।"},
{n:"अमित त्यागी",t:"कवर, चार्जर और फोन सब एक जगह मिल गया। सर्विस शानदार रही।"}];
var ACCS=[
["मोबाइल कवर",'<rect x="14" y="5" width="20" height="38" rx="4"/><circle cx="24" cy="14" r="3"/>'],
["चार्जर",'<path d="M26 4 12 26h10l-2 18 16-24H26z"/>'],
["ईयरफोन",'<path d="M16 12a6 6 0 0 1 12 0v18a5 5 0 0 1-10 0M32 14v22"/>'],
["हेडफोन",'<path d="M8 28a16 16 0 0 1 32 0"/><rect x="6" y="26" width="9" height="14" rx="3"/><rect x="33" y="26" width="9" height="14" rx="3"/>'],
["स्मार्टवॉच",'<rect x="14" y="14" width="20" height="20" rx="6"/><path d="M18 14l1-9h10l1 9M18 34l1 9h10l1-9"/>'],
["अन्य एक्सेसरीज़",'<circle cx="24" cy="24" r="16"/><path d="M24 16v16M16 24h16"/>']];
