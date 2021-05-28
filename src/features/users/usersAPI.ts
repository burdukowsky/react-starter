import { http } from 'app/http';

export async function fetchUsers(): Promise<User[]> {
  const response = await http.get<User[]>('/users');
  return response.data;
}

export async function fetchUser(id: number): Promise<User> {
  const response = await http.get<User>(`/users/${id}`);
  return response.data;
}
