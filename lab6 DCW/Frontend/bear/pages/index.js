import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = `http://localhost/api/student`;

export default () => {
  const [student, setstudent] = useState({});
  const [students, setstudents] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [major, setMajor] = useState("");
  const [GPA, setGPA] = useState(0);
  const getstudent = async () => {
    const result = await axios.get(URL);
    setstudent(result.data.list);
  };
  const getstudents = async (id) => {
    const result = await axios.get(`${URL}/${id}`);
    console.log("students id: ", result.data);
    setstudents(result.data);
  };
  const addstudents = async (name, surname, major, GPA) => {
    const result = await axios.post(URL, {
      name,
      surname,
      major,
      GPA,
    });
    console.log(result.data);
    getstudent();
  };
  const deletestudents = async (id) => {
    const result = await axios.delete(`${URL}/${id}`);
    console.log(result.data);
    getstudent();
  };
  const updatestudents = async (id) => {
    const result = await axios.put(`${URL}/${id}`, {
      name,
      surname,
      major,
      GPA,
    });
    console.log("student id update: ", result.data);
    getstudent();
  };
  const printstudent = () => {
    console.log("student:", student);
    if (student && student.length)
      return student.map((students, index) => (
        <li key={index}>
          {students ? students.name : "-"} : {students ? students.surname : "-"}{" "}
          : {students ? students.major : "-"} : {students ? students.GPA : 0}
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => deletestudents(students.id)}
          >
            {" "}
            Delete{" "}
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => getstudents(students.id)}
          >
            Get
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => updatestudents(students.id)}
          >
            Update
          </button>
        </li>
      ));
    else {
      return <h2>No student</h2>;
    }
  };
  useEffect(() => {
    getstudent();
  }, []);
  return (
    <div>
      <h2>student</h2>
      <ul>{printstudent()}</ul>
      selected students: {students.name} {students.surname} {students.major}{" "}
      {students.GPA}
      <div className="flex justify-center flex-col items-center">
        <h2>Add students</h2>
        Name:
        <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
        SurName:
        <input type="text" onChange={(e) => setSurName(e.target.value)} />{" "}
        <br />
        Major:
        <input type="text" onChange={(e) => setMajor(e.target.value)} /> <br />
        GPA:
        <input type="number" onChange={(e) => setGPA(e.target.value)} /> <br />
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => addstudents(name, surname, major, GPA)}
        >
          Add new students
        </button>
      </div>
    </div>
  );
};
// ///////////////////////////////
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import useSWR, { mutate } from 'swr'

// const URL = http://localhost/api/students
// const fetcher = (url) => axios.get(url).then(res => res.data)

// export default function Home() {

//     const [student, setStudent] = useState([])
//     const [name, setname] = useState('')
//     const [surname, setsurname] = useState('')
//     const [major, setmajor] = useState('')
//     const [GPA, setGPA] = useState(0)

//     const { data, error } = useSWR(URL, fetcher)
//     if (!data) {
//         return <div>Loading ...</div>
//     }
//     const getStudents = async () => {
//         let student = await axios.get(URL)
//         setStudents(student.data)
//     }

//     const getStudent = async (id) => {
//         let student = await axios.get(${URL}/${id})
//         setStudent({
//             name: student.data.name,
//             surname: student.data.surname,
//             major: student.data.major,
//             GPA: student.data.GPA
//         })
//     }

//     const updateStudent = async (id) => {
//         let student = await axios.put(${URL}/${id}, { name, surname, major, GPA })
//         mutate(URL)
//     }

//     const addStudent = async (name, surname, major, GPA) => {
//         let student = await axios.post(URL, { name, surname, major, GPA })
//         mutate(URL)
//     }

//     const deleteStudent = async (id) => {
//         let student = await axios.delete(${URL}/${id})
//         mutate(URL)
//     }

//     const printStudents = (students) => {
//         if (students && students.length)
//             return (students.map((item, index) =>
//             (

//                 <div class="border-2 border-black mt-5 w-full max-w-md mx-auto p-8 md:p-6 bg-green-500 rounded-xl font-mono" key={index}>
//                     <div>
//                         Id: {item.id} <br />
//                         Name: {item.name} <br />
//                         Surname: {item.surname} <br />
//                         Major: {item.major} <br />
//                         GPA: {item.GPA}
//                         <div className=''>
//                             <button class='mt-1 bg-transparent hover:bg-gray-300 text-black-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => getStudent(item.id)}>GET</button>
//                             <button class='mt-1 ml-4 bg-transparent hover:bg-gray-300 text-black-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => updateStudent(item.id)}>UPDATE</button>
//                             <button class='mt-1 ml-4 bg-transparent hover:bg-gray-300 text-black-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => deleteStudent(item.id)}>DELETE</button>
//                         </div>
//                     </div>

//                 </div>
//             )
//             ))
//     }
//     return (
//         <div className='flex justify-center flex-col items-center'>
//             <h1>Add Student</h1>
//             <div>
//                 <div>
//                     Name: <input type="text" onChange={(e) => setname(e.target.value)}></input>
//                     Surname: <input type="text" onChange={(e) => setsurname(e.target.value)}></input>
//                     Major: <input type="text" onChange={(e) => setmajor(e.target.value)}></input>
//                     GPA: <input type="number" onChange={(e) => setGPA(e.target.value)}></input><br />
//                 </div> <button onClick={() => addStudent(name, surname, major, GPA)}>ADD</button>
//             </div>
//             <div className=''>
//             <h1 >Student</h1>

//                 <div>
//                     {printStudents(data.list)}
//                 </div>
//             </div>

//             <h1>Show Student</h1>
//             <div>
//                 <div>
//                     Name: {student.name} <br />
//                     Surname: {student.surname} <br />
//                     Major: {student.major} <br />
//                     GPA: {student.GPA} <br />
//                 </div>
//             </div>
//         </div>

//     )
// }
