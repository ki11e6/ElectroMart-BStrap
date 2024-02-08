import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sharath S',
    email: 'sharath@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Achu S',
    email: 'achu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rahul S',
    email: 'rahul@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
