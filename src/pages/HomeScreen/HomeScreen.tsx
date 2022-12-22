import { fetchStudents } from '../../ApiServices/studentsService';
import { useQuery } from 'react-query';
import { useState } from 'react';

interface Student {
  id: number;
  name: string;
}

const HomeScreen = () => {
  const { data, isLoading, isError } = useQuery('students', fetchStudents);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error occurred when fetching students</p>;

  const renderStudents = data.students.map((student: Student) => {
    return (
      <li>
        {student.id} {student.name}
      </li>
    );
  })

  return (
    <div>
      <h2>Home Screen!</h2>

      <ul>
        {renderStudents}
      </ul>
    </div>
  );
}

export default HomeScreen;
