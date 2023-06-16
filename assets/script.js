let nthPerson = 0; //this counts the number of submissions, hence the participants
const people = []; // this array holds the object called person

function collectData() {
    event.preventDefault();
    const fullName = document.getElementById('nameId').value;
    const age = document.getElementById('ageId').value;
    const email = document.getElementById('emailId').value;
    const consent = document.getElementById('consentId').value;

    // console.log(fullName, age, email, consent); 

    //adding values to the object 
    const person = {
        pName: fullName,
        pAge: age,
        pEmail: email,
        pConsent: consent
    }  

    //console.log(person); 
    people.push(person); //adding the new items (objects) to the array
    console.log(people);
   
    let ageTotal = 0;
    for (let i=0; i<=nthPerson; i++){
        ageTotal += parseInt(people[i].pAge);
    }
     
    const ageAverage = ageTotal/(nthPerson+1);
    console.log(ageTotal, ageAverage);
    nthPerson += 1;

    document.getElementById('nuOfPeople').innerHTML = nthPerson;
    document.getElementById('averageOfAge').innerHTML = ageAverage;
}


