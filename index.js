var resultField=$("#result");

function insertNumber(number){
  var lastNumber=resultField.val();

  resultField.val(lastNumber + number)
}
function clearResult(){
  resultField.val('')
}
function calculate(){
  var result= eval(resultField.val())
  resultField.val(result)
}
function deleteN(){
  var presentValue=resultField.val()
  if(presentValue!=''){
    resultField.val(presentValue.slice(0,-1));
  }
}