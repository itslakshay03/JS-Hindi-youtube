const myObject = {            // loop kese lagate h object me forin loop
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(myObject[key]);
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(key);
}