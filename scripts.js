const medical = {
    name: "Joshua James Gray",
    age: "44",
    vitals: {
      heartRate: "88",
      bloodPressure: "120/80"
    }
  };
  
  if(medical.vitals.heartRate > 100){
      console.log("Your heart rate is too high. You cannot donate plasma.");
  } else {
      console.log("Your heart rate is fine.");
  }