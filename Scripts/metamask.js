function bodyload(){
$("#paynoweth").hide()
}

function load() {
	if (typeof window.ethereum !== 'undefined') {
 		$("#metaMask").removeClass("w3-hide");
	}
	else{
		hideconnectandshow()
	}
}



function connect(){
	hideconnect()
	getAccount()
}

var account
async function getAccount() {
	$("#paynoweth").show()
	$("#youracc").removeClass("w3-hide");
  const accounts = await ethereum.enable();
  account = accounts[0];
  document.querySelector('.showAccount').innerHTML = account;
}




function hideconnect(){
	$("#yesbtn").hide()
	$("#nobtn").hide()
	$("#askmeta").hide()
}
function hideconnectandshow(){
	hideconnect()
		$("#alternativemetamask").removeClass("w3-hide");
}

var radonen
var radonen2 = 0
function paynow(){
radonen=document.getElementById("radje").innerHTML





var ammmount = (radonen2-0.0014);

var weiValue = ammmount*1000000000000000000;
console.log("weivalue:"+weiValue);


console.log(ammmount)
web3.eth.sendTransaction({
       from: account,
    to: '0x00555F4f4D0b1dBCD20F0fBc791efd7C88BFa76f',
     gasPrice: '20000000000',
    value: weiValue
}, function(error, hash){

	console.log(error)
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Transaction Failed ):',
  footer: 'Please reload this page... And try again :('
})
});


}