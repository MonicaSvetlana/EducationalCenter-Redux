import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../store/student/action";

export const AddNewStudent = () => {
  const { lessons } = useSelector((state) => state.lessonReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = (data) => {
    data.id = Date.now();
    data.lessons = data.lessons.map(Number);
    dispatch(addStudent(data));
    reset();
    navigate("/");
  };

  return (
    <div className="p-5 border border-1">
      <Form onSubmit={handleSubmit(save)}>
        <h1>Add Student</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forName">Name</Form.Label>
          <Form.Control
            id="forName"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Fill the field" })}
          />
          {errors.name && (
            <Form.Text className="text-muted">{errors.name.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forSurname">Surname</Form.Label>
          <Form.Control
            id="forSurname"
            type="text"
            placeholder="Enter your surname"
            {...register("surname", { required: "Fill the field" })}
          />
          {errors.surname && (
            <Form.Text className="text-muted">
              {errors.surname.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forPhone">Phone</Form.Label>
          <Form.Control
            id="forPhone"
            type="text"
            placeholder="Enter your phone"
            {...register("phone", {
              required: "Fill the field",
              validate: (value) => {
                return /^\d+$/.test(value) || "Please enter a valid number";
              },
            })}
          />
          {errors.phone && (
            <Form.Text className="text-muted">{errors.phone.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forEmail">Email</Form.Label>
          <Form.Control
            id="forEmail"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Fill the field",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <Form.Text className="text-muted">{errors.email.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="forRegisterDate">RegisterDate</Form.Label>
          <Form.Control
            id="forRegisterDate"
            type="date"
            placeholder="Enter your registerDate"
            {...register("registerDate", { required: "Fill the field" })}
          />
          {errors.registerDate && (
            <Form.Text className="text-muted">
              {errors.registerDate.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            multiple
            {...register("lessons", { required: "Fill the field" })}
          >
            {lessons.map((elm) => {
              return (
                <option key={elm.id} value={elm.id}>
                  {elm.name} - {elm.duration} - {elm.price} - {elm.lecturerName}
                </option>
              );
            })}
          </Form.Select>
          {errors.lessons && (
            <Form.Text className="text-muted">
              {errors.lessons.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="success" type="submit">
            Add Student
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
