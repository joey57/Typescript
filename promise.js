function asycTask(){
  var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try{
      console.log("Action Complete");
      resolve("Success");//we call the resolve function ater the async had been completed.//pass value to resolve function.
    }catch(err){
      reject()//when we encouter an error we call the reject function.
    }
    },1000);
  });
  return promise;
}
asycTask().then(()=>{console.log(val)},()=>{console.log(err)},)
//then method takes on 2 anonymous functions as arguments the first one is called if the asyntask is successful the other when the task fails.
//then function alerts us whether our asyntask is complete or not.
//val and err values of resolve and reject are used by the then function argument.
//we place the values inside the resolve and reject function and log them when we call then function.