import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";

const HomeScreenCourseTable = (props) => {
  return (
    <TableHome>
      <thead>
        <TRHome>
          <THHome>Course ID</THHome>
          <THHome>Capacity</THHome>
          <THHome>Start Date</THHome>
          <THHome>End Date</THHome>
          <THHome>Digital / In Person</THHome>
          <THHome>In Class Instructor</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data.id}>
            <TDHome>{data.courseId}</TDHome>
            <TDHome>{data.capacity}</TDHome>
            <TDHome>{data.start_date}</TDHome>
            <TDHome>{data.end_date}</TDHome>
            <TDHome>{data.is_digital}</TDHome>
            <TDHome>{data.in_class_instructor_id}</TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.navToCourse(data.id);
                }}
              >
                edit
              </Button>
            </TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.handleDeleteCourse(data.id);
                }}
              >
                delete
              </Button>
            </TDHome>
          </TRHome>
        ))}
      </tbody>
    </TableHome>
  );
};

export default HomeScreenCourseTable;
