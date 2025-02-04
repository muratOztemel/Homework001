const dataName = ["Ahmet", "Ayşe", "Mehmet", "Cüneyt", "Serkan"];
const dataAge = [25, 34, 43];

const ArrFunc = (name,age) => {
    const [firstName, secondName, thirdName, fourthName, fifthName] = dataName;
    const newDataAge =  [...dataAge, 21, 33 ];
    if(name === fourthName && age === newDataAge[3]){
        return `${name} kişisi ${age} yaşındadır`;
    }
    return `${name} kişisi ${age} yaşında değildir`;

}

console.log(ArrFunc("Cüneyt", 21));