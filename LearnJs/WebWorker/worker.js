self.onmessage = (event)=>{
    try{
        console.log("Worker received:", event.data);
        //process the data 
        let data1 = event.data.data1;
        let data2 = event.data.data2;
        console.log("Data-1 : ",data1);
        console.log("Data-2 : ",data2);
        data1+=data1;
        data2+=data2;
        self.postMessage({
            success: true,
            result:{
                data1: data1,
                data2: data2
            }
        });
    }
    catch(error){
        self.postMessage({
            result: false,
            message: error.message
        });
    }
}