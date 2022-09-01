pragma solidity ^0.8.6;


contract mycontract{

constructor  () public {

   address owner = msg.sender;
}

mapping (address => uint) amtsent;
array [] uint numbers;

 recieve()public  payable {

 }
 
function mapaddresstoamtsent() public {
    amtsent[msg.sender] = msg.value;
}

 function getBalance() public returns(uint) {
    uint bal =  address(this).balance;
    return(bal);
 }

function withdrawAll() public payable {

require(msg.sender == owner, 'you are not the owner');
uint cabalance = address(this).balance;
owner.transfer(cabalance);
}

function transferTO(address payable _address, uint _amt) public payable {
require(msg.sender == owner, 'you are not the owner');
require( amtsent[msg.sender] <= _amt, 'not up to');
_address.transfer(_amt);

}







}