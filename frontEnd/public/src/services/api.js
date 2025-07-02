// Example API service
export async function fetchCourses() {
  // Replace with your real API endpoint
  const response = await fetch("/api/courses");
  return response.json();
}