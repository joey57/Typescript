function asycTask(){
  var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try{
      console.log("Action Complete");
      resolve();//we call the resolve function ater the async had been completed.
    }catch(err){
      reject()//when we encouter an error we call the reject function.
    }
    },1000);
  });
  return promise;
}