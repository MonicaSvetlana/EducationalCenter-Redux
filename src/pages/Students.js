import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { delStudent } from "../store/student/action";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useMemo, useState } from "react";

export const Students = () => {
  const { students } = useSelector((state) => state.studentReducer);
  const { lessons } = useSelector((state) => state.lessonReducer);
  const dispatch = useDispatch();

  const [searchStudent, setSearchStudent] = useState("");

  const filteredStudents = useMemo(() => {
    if (!searchStudent) return students;
      return students.filter((student) => {
        return student.name.toLowerCase().includes(searchStudent.toLowerCase());
      });
  }, [searchStudent, students]);

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Search by student's name
        </InputGroup.Text>
        <Form.Control
          placeholder="Student's name"
          aria-label="Student's name"
          aria-describedby="basic-addon1"
          value={searchStudent}
          onChange={(e) => setSearchStudent(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surame</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Register Date</th>
            <th>Lessons</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td>{elm.surname}</td>
                <td>{elm.phone}</td>
                <td>{elm.email}</td>
                <td>{elm.registerDate}</td>
                <td>
                  <ul>
                    {lessons
                      .filter((el) => elm.lessons.includes(+el.id))
                      .map((elm, i) => {
                        return (
                          <li key={i}>
                            {elm.name} - {elm.duration} - {elm.price} -{" "}
                            {elm.lecturerName}
                          </li>
                        );
                      })}
                  </ul>
                </td>
                <td>
                  <Button onClick={() => dispatch(delStudent(elm.id))}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
