const readLine = require('readLine-sync')
const ad = require('./AddressBook');

class AddressBookMain{
    constructor(){
        this.choice;
        this.flag=true;
    }
    main(){
        while(this.flag==true) {
                console.log("1. Adding new Person");
                console.log("2. Editing Person");
                console.log("3. deleting Person");
                console.log("4. Display all Contact details");
                console.log("5. search");
                console.log("6. sorting");
                this.choice =  parseInt(readLine.question("Select option btween (1-5): "))
                switch(this.choice) {
                case 1: console.log("Adding New User")
                        var d = ad.addPerson();
                        console.log(d)
                        break; 
                case 2: var value = parseInt(readLine.question("Select To Editing by 1. First Name and 2. Phone Number: "));
                        switch (value){
                        case 1: var name = readLine.question("Enter First Name: ")
                                ad.setUsername(name)
                                break;
                        case 2: name = readLine.question("Enter Phone Number: ")
                                ad.setUserPhoneNo(name)
                                break;
                        default:console.log("Didn't select proper one")
                                break;
                        }
                        break;
                case 3: console.log("Deleting")
                        ad.deletePerson()
                        break; 
                case 4: console.log("Displaying contact")
                        ad.displayBook()
                        break;
                case 5: let select = parseInt(readLine.question("Search person FirstName by Option: 1.State 2.City 3.ZipCode 4.Address: "));
                        switch (select){
                        case 1: var State = readLine.question("Enter the State: ");
                                ad.searchByState(State)
                                break;
                        case 2: var City = readLine.question("Enter the City: ");
                                ad.searchByCity(City)
                                break;
                        case 3: var ZipCode = parseInt(readLine.question("Enter the City: "));
                                ad.searchByZipCode(ZipCode)
                                break;
                        case 4: var address = readLine.question("Enter the First Address: ");
                                ad.searchByAddress(address)
                                break;

                        default:console.log("Didn't select proper one")
                                break;
                        }
                        break;
                case 6: console.log("Sorting by Name")
                        let choice = parseInt(readLine.question("Option Select by: 1.FirstName 2.LastName 3.Address 4.State 5.City "));
                        switch (choice){
                        case 1: ad.sortingByFirstName()
                                break;
                        case 2: ad.sortingByLastName()
                                break;
                        case 3: ad.sortingByAddress()
                                break;
                        case 4: ad.sortingByState()
                                break;
                        case 5: ad.sortingByCity()
                                break; 
                        
                        default: console.log("'Didn't select proper one ");
                                break;
                        }
                        break;                         
                default:
                        console.log("'Didn't select proper one ");
                }
                var select = readLine.question("If you want to continue y/n: ")
                if (select == 'y')
                    this.flag=true;
                else{
                        console.log("Thanl you")
                        this.flag=false;
                }
                    
        }
    }		
    
}
var ref = new AddressBookMain();
ref.main();