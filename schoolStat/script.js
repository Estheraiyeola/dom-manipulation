function addInstructor(){
    let {name, course} = getInstructor();

    let courseInstructor = document.getElementById("first-table-body");
    let rows = courseInstructor.getElementsByTagName("tr");

    for (let index = 0; index < rows.length; index++) {
        let row = rows[index];
        let cells = row.getElementsByTagName("td");

        let instructor = cells[0].innerText;

        if(name.value === instructor){
            let newNumberOfCourses = parseInt(course.value) + parseInt(cells[1].innerText);
            cells[1].innerText = newNumberOfCourses;

            name.value = "";
            course.value = "";
        }

        
    }

    if(name.value !== "" && course.value !== ""){
        let {courseInstructor, newRow, newInstructor, numberOfCourses} = createInstructorElements();
        
        newInstructor.innerText = name.value;
        numberOfCourses.innerText = course.value;

        newRow.appendChild(newInstructor);
        newRow.appendChild(numberOfCourses);

        courseInstructor.appendChild(newRow);


        name.value = "";
        course.value = "";

    }
    
    
}
function getInstructor(){
    let name = document.getElementById("name");
    let course = document.getElementById("course");
    return{
        name, course
    }

}
function createInstructorElements(){
    return{
        courseInstructor : document.getElementById("first-table-body"),
        newRow: document.createElement("tr"),
        newInstructor: document.createElement("td"),
        numberOfCourses : document.createElement("td")
    }
}

function getTracks(){
    let track = document.getElementById("tracks");
    let number = document.getElementById("student-in-tracks");
    return{
        track, number
    }

}
function addTracks(){
    let {track, number} = getTracks();
    let trackInfo = document.getElementById("second-table-body");
    let rows = trackInfo.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {
        let row = rows[index];
        let cells = row.getElementsByTagName("td");


        let trackName = cells[0].innerText;

        if(track.value === trackName){
            let updatedNumberOfStudentsInTrack = parseInt(number.value) + parseInt(cells[1].innerText);
            cells[1].innerText = updatedNumberOfStudentsInTrack;

            track.value = "";
            number.value = "";
        }
        
    }
    if(track.value !== "" && number.value !== ""){
        let {trackName, newRow, newTrack, numberOfStudentInTrack } = createTracksElements();

        newTrack.innerHTML = track.value;
        numberOfStudentInTrack.innerText = number.value;

        newRow.appendChild(newTrack);
        newRow.appendChild(numberOfStudentInTrack);

        trackName.appendChild(newRow);

        track.value = "";
        number.value = "";
        
    }
    
}
function createTracksElements(){
    return{
        trackName: document.getElementById("second-table-body"),
        newRow: document.createElement("tr"),
        newTrack: document.createElement("td"),
        numberOfStudentInTrack : document.createElement("td")
    }
    
}

function addGender(){
    let {gender , studentsInGender } = getGender();
    let genderInfo = document.getElementById("third-table-body");
    let rows = genderInfo.getElementsByTagName("tr");

    for (let index = 0; index < rows.length; index++) {
        let row = rows[index];
        let cells = row.getElementsByTagName("tr");

        let genderName = cells[0].innerText;

        if(gender.value === genderName){
            let updatedNumberOfGender = parseInt(studentsInGender.value) + parseInt(cells[1].innerText);
            cells[1].innerText = updatedNumberOfGender;

            gender.value = "";
            studentsInGender.value = "";
        }
        
    }

    if(gender.value !== "" && studentsInGender.value !== ""){
        let {genderInfo, newRow, newGender, numberOfGender} = createGenderElements();

        newGender.innerText = gender.value;
        numberOfGender.innerText = studentsInGender.value;

        newRow.appendChild(newGender);
        newRow.appendChild(numberOfGender);

        genderInfo.appendChild(newRow);

        gender.value = "";
        studentsInGender.value = "";
    }

}
function getGender(){
    let gender = document.getElementById("gender");
    let studentsInGender = document.getElementById("students-in-gender");
    return{
        gender,studentsInGender
    }
}
function createGenderElements(){
    return{
        genderInfo: document.getElementById("third-table-body"),
        newRow: document.createElement("tr"),
        newGender: document.createElement("td"),
        numberOfGender : document.createElement("td")
    }
    
}