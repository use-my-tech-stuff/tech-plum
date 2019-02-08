const team = [{
    name: 'Luisan Suarez',
    role: 'Scrum Master',
}, {
    name: 'Luisan Suarez',
    role: 'UX Designer',
}, {
    name: 'Skyelar Carroll',
    role: 'UI Developer',
}, {
    name: 'Francis Chen',
    role: 'UI Developer',
}, {
    name: 'Taylor Blout',
    role: 'UI Developer',
}, {
    name: 'Kayanna Chandler',
    role: 'Front-end Developer',
}, {
    name: 'Nate Boyette',
    role: 'Front-end Developer',
}, {
    name: 'Tommy Huynh',
    role: 'Back-end Developer',
}]


let test = team.map(person => {
    return `${person.name}, ${person.role}`
})

console.log(test)
