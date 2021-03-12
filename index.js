// Write your solution in this file!
let driver = {
    name : 'sam',
    address : '11 Broadway'
}

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value})
};

function destructivelyUpdateDriverWithKeyAndValue(driver,address,value){
    driver[address]= value
    return driver
};


function deleteFromDriverByKey(driver,name){

    let newdriver = Object.assign({},driver);
    delete newdriver.name;
    return newdriver
};

function destructivelyDeleteFromDriverByKey(driver,name,){
    delete driver.name;
    return driver
};
// declare object in index.js