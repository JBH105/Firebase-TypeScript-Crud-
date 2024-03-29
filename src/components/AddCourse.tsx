import { Button, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC, useState } from "react";
import CourseHelperCalss from "../CourseHelperCalss";

import Modal from "./Modal";

interface IAddCourseProps { 
  fetchCourses :()=>void
}

const AddCourse: FC<IAddCourseProps> = ({fetchCourses }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal title="Add Course" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", students: "", type: "" }}
          onSubmit={async (values) => {
            try {
              setIsLoading(true)
              await CourseHelperCalss.addCourses({
                name: values.name,
                students: parseInt(values.students),
                type: values.type
              }).then((result)=>{
                console.log(result, "result");
                
              })
            } catch (err) {
              console.log(err);
            }finally{
              setIsLoading(false)
              fetchCourses()
              onClose()
            }
          }}
        >
          <Form>
            <Stack py="4">
              <InputControl
                name="name"
                label="Course Name"
                inputProps={{ placeholder: "Enter  Course Name" }}
              />
              <NumberInputControl
                name="students"
                label="Students Enrolled"
                helperText="Enter Number of Students"
              />
              <SelectControl name="type" label="Course Type">
                <option value="">Select a course type</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
              </SelectControl>
            </Stack>
            <Flex justify="end">
              <SubmitButton isLoading={isLoading} colorScheme="purple">
                Add Course
              </SubmitButton>
            </Flex>
          </Form>
        </Formik>
      </Modal>
      <Button onClick={onOpen} mb="4">
        Add Course
      </Button>
    </>
  );
};
export default AddCourse;
