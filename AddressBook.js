const readLine = require('readLine-sync')
const fs = require('fs');
const editJsonFile = require("edit-json-file");
let rawdata = fs.readFileSync('AddressBook.json');
let data = JSON.parse(rawdata);

class AddressBook{

    constructor(){
        this.FirstName;
        this.LastName;
        this.address;
        this.state;
        this.city;
        this.zipCode;
        this.phoneNumber;
        this.choice;
        this.flag=true;
        this.array=[];
        this.regex = /^[A-Z]{1,}[a-z]{2,}/;
    } 

    firstName(){
            while(this.flag){
                    this.FirstName = readLine.question("Enter First Name: ");
                    console.log(this.regex.test(this.FirstName))
                    if(this.regex.test(this.FirstName))
                            return this.FirstName;
                        else
                            this.flag=true;
            }
        }
    lastName(){
        while(this.flag){
            this.LastName = readLine.question("Enter Last Name: ");
            if(this.regex.test(this.LastName))
                    return this.LastName;
                else
                    this.flag=true;
        }
    }
    address(){
        while(this.flag){
            this.address = readLine.question("Enter Address: ");
            if(this.regex.test(this.address))
                return this.address;
            else
                this.flag=true;
        }
    }
    state(){
        while(this.flag){
            this.state = readLine.question("Enter state: ");
            if(this.regex.test(this.state))
                return this.state;
            else
                this.flag=true;
        }
    }
    city(){
        while(this.flag){
            this.city = readLine.question("Enter City: ");
            if(this.regex.test(this.city))
                return this.city;
            else
                this.flag=true;
        }
    }
    zipCode(){
        while(this.flag){         
            this.regex = /^[0-9]{6}/;
            this.zipCode = parseInt(readLine.question("Enter ZipCode: "));
            if(this.regex.test(this.zipCode))
                return this.zipCode;
            else
                this.flag=true;
        }
    }
    phoneNumber(){
        while(this.flag){
            this.regex = /^[0-9]{10}/;
            this.phoneNumber = parseInt(readLine.question("Enter phoneNumber: "));
            if(this.regex.test(this.phoneNumber))
                return this.phoneNumber;
            else
                this.flag=true;
        }
    }
    
    addPerson(){
        data.Person.push({ "FirstName": this.firstName(), 
        "LastName": this.lastName(), 
        "Address":this.address(), 
        "State":this.state(), 
        "City":this.city(), 
        "ZipCode":this.zipCode(), 
        "PhoneNumber":this.phoneNumber()});
        this.UpDate(data)
        //fs.writeFileSync('AddressBook.json', JSON.stringify(data));
        }
        UpDate =(value)=>{
            console.log("UPDATED.....")
            return fs.writeFileSync('AddressBook.json', JSON.stringify(value)); 
        }
module.exports = new AddressBook();