import { Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseHelperCalss, { IcourseDoc } from "../CourseHelperCalss";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<IcourseDoc>();

  const fetchCourses = async () => {
    if (id) {

      const course = await CourseHelperCalss.getCourse(id)
      setCourse(course)
    }
  }
  useEffect(() => {
    fetchCourses()
  }, [])
  return (
    <Stack m="8" p="5" boxShadow="xl">
      <Heading>{course?.name}</Heading>
      <List>
        <ListItem>
          <strong>Students Enrolled:</strong> {course?.students}
        </ListItem>
        <ListItem>
          <strong>Type:</strong> {course?.type}
        </ListItem>
      </List>
    </Stack>
  );
};

export default Course;
