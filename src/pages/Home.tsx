import {
  Badge,
  Container,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import AddCourse from "../components/AddCourse";
import UpdateCourse from "../components/UpdateCourse";
import { useNavigate } from "react-router-dom";
import { SiFirebase } from "react-icons/si";
import CourseHelperCalss, { Icourse, IcourseDoc } from "../CourseHelperCalss";

const Home = () => {
  const [courses, setCourses] = useState<IcourseDoc[]>([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    const course = await CourseHelperCalss.getCourses()
    setCourses(course)
  }
  useEffect(() => {
    fetchCourses()
  }, [])

  const deletecouse = async (id: String) => {
    await CourseHelperCalss.deletCourse(id)
    fetchCourses()
  }
  return (
    <>
      <Flex py="4" bg="purple.800" justify="center" align="center" gap="4">
        {/* <SiFirebase fontSize="50px" color="white" />{" "} */}
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          color="white"
        >
          Firebase CRUD Operations
        </Heading>
      </Flex>
      <Container maxW="container.lg" mt="8">
        <AddCourse fetchCourses={fetchCourses} />
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Students Enrolled</Th>
                <Th>Type</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => (
                <Tr>
                  <Td>{course.name}</Td>
                  <Td>{course.students}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        course.type === "easy"
                          ? "green"
                          : course.type === "medium"
                            ? "blue"
                            : "red"
                      }
                    >
                      {course.type}
                    </Badge>
                  </Td>
                  <Td>
                    <Flex gap="4">
                      <Icon
                        cursor="pointer"
                        onClick={() => navigate(`/course/${course.id}`)}
                        fontSize="xl"
                      >
                        <FaEye />
                      </Icon>
                      <UpdateCourse course={course} fetchCourses={fetchCourses} />
                      <Icon
                        _hover={{ color: "red.500" }}
                        color="red.300"
                        fontSize="xl"
                        onClick={()=>deletecouse(course.id)}
                      >
                        <FaTrash />
                      </Icon>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
