import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addLesson } from "../store/lesson/action";
import { useNavigate } from "react-router-dom";

export const AddNewLesson = () => {
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
    dispatch(addLesson(data));
    reset();
    navigate("/lessons");
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
          <Form.Label htmlFor="forDuration">Duration</Form.Label>
          <Form.Control
            id="forDuration"
            type="text"
            placeholder="Enter your duration"
            {...register("duration", {
              required: "Fill the field",
              validate: (value) => {
                return /^\d+$/.test(value) || "Please enter a valid number";
              },
            })}
          />
          {errors.duration && (
            <Form.Text className="text-muted">
              {errors.duration.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forPrice">Price</Form.Label>
          <Form.Control
            id="forPrice"
            type="text"
            placeholder="Enter the price"
            {...register("price", {
              required: "Fill the field",
              validate: (value) => {
                return /^\d+$/.test(value) || "Please enter a valid number";
              },
            })}
          />
          {errors.price && (
            <Form.Text className="text-muted">{errors.price.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forLecturerName">Lecturer Name</Form.Label>
          <Form.Control
            id="forLecturerName"
            type="text"
            placeholder="Enter your lecturerName"
            {...register("lecturerName", { required: "Fill the field" })}
          />
          {errors.lecturerName && (
            <Form.Text className="text-muted">
              {errors.lecturerName.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="success" type="submit">
          Add Lesson
        </Button>
      </Form>
    </div>
  );
};
