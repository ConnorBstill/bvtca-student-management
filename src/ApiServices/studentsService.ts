const apiUrl = 'http://localhost:3000';

export const fetchStudents = async () => {
  const response = await fetch(`${apiUrl}/students`, {
    method: 'GET',
    // headers
  });

  return response.json();
}
