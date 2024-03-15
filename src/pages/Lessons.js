import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export const Lessons = () => {
  const { lessons } = useSelector((state) => state.lessonReducer);

  return (
    <>
      <Card className="d-flex">
        {lessons.map((elm) => {
          return (
            <>
              <Card.Body className="w-50">
                <Card.Title>Lesson</Card.Title>
                <Card.Text>Name: {elm.name}</Card.Text>
                <Card.Text>Duration: {elm.duration}</Card.Text>
                <Card.Text>Price: {elm.price}</Card.Text>
                <Card.Text>LecturerName: {elm.lecturerName}</Card.Text>
              </Card.Body>
            </>
          );
        })}
      </Card>
    </>
  );
};
