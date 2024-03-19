let students = [
    { name: 'Anju', age: 20, department: 'Computer Science', totalMarks: 85 },
    { name: 'Bob', age: 21, department: 'Mathematics', totalMarks: 75 },
    { name: 'Charlie', age: 23, department: 'Physics', totalMarks: 90 },
    { name: 'Ravi', age: 22, department: 'Chemistry', totalMarks: 80 },
    { name: 'manya', age: 20, department: 'Computer Science', totalMarks: 95}
];

function renderTable(students) {
    const tableBody = document.querySelector('#studentTable');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortTable() {
    const sortBy = document.querySelector('#sort').value;
    students.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    renderTable(students);
}

function searchTable() {
    const searchText = document.querySelector('#search').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );
    renderTable(filteredStudents);
}

function filterTable() {
    const filterValue = parseInt(document.querySelector('#filter').value);
    const filteredStudents = students.filter(student =>
        student.totalMarks > filterValue
    );
    renderTable(filteredStudents);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable(students);
    document.querySelector('#sort').addEventListener('change', sortTable);
});