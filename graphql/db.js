export const people = [
    {
        id : "1",
        name : "seung2",
        age : 18,
        gender : "female"
    },
    {
        id : "2",
        name : "Lee",
        age : 26,
        gender : "male"
    },
    {
        id : "3",
        name : "Koo",
        age : 22,
        gender : "female"
    },
    {
        id : "4",
        name : "Kim",
        age : 28,
        gender : "male"
    }
]


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}