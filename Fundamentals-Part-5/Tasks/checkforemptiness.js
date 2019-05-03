//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
    let isEmpty = (schedule) =>{
        for (let key in schedule){
            return false;
        }
        return true;
    };

    let myTime = {};
    let myDesk = {
        hasMonitor: true,
        hasPhone: true,
        hasFood: false
    }
    
    console.log(isEmpty(myTime));
    console.log(isEmpty(myDesk));
