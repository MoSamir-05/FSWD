import React, { useState } from 'react';

const SimpleStudentTable = () => {
  const initialStudents = [
    { id: 1, name: 'John',    age: 20, grade: 'A' },
    { id: 2, name: 'Jane',    age: 22, grade: 'B' },
    { id: 3, name: 'Bob',     age: 21, grade: 'A' },
    { id: 4, name: 'Alice',   age: 23, grade: 'C' },
    { id: 5, name: 'Charlie', age: 20, grade: 'B' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [selectedId, setSelectedId] = useState(null);

  // Show only one student or all
  const showStudent = (id) => {
    if (id === null) {
      setStudents(initialStudents);
      setSelectedId(null);
    } else {
      const single = initialStudents.find(s => s.id === id);
      setStudents(single ? [single] : []);
      setSelectedId(id);
    }
  };

  const buttonStyle = {
    margin: '6px',
    padding: '8px 16px',
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Student Table</h2>

      {/* Buttons for each student + Show All */}
      <div style={{ marginBottom: '20px' }}>
        {initialStudents.map(student => (
          <button
            key={student.id}
            onClick={() => showStudent(student.id)}
            style={{
              ...buttonStyle,
              backgroundColor: selectedId === student.id ? '#ff6600' : '#0066cc'
            }}
          >
            Std {student.id}
          </button>
        ))}

        <button
          onClick={() => showStudent(null)}
          style={{
            ...buttonStyle,
            backgroundColor: selectedId === null ? '#28a745' : '#0066cc'
          }}
        >
          Show All
        </button>
      </div>

      {/* Table */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Age</th>
            <th style={{ padding: '10px' }}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={{ padding: '10px', textAlign: 'center' }}>{student.id}</td>
              <td style={{ padding: '10px' }}>{student.name}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{student.age}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: '12px' }}>
        Showing: <b>{students.length} student{students.length !== 1 ? 's' : ''}</b>
      </p>
    </div>
  );
};

export default SimpleStudentTable;