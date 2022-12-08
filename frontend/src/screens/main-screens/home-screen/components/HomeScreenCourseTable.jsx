import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";
import { courseTableHeadings } from "../../../../domain/constants/dbConstants";

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
          <TRHome key={data[courseTableHeadings.id]}>
            <TDHome>{data[courseTableHeadings.courseId]}</TDHome>
            <TDHome>{data[courseTableHeadings.capacity]}</TDHome>
            <TDHome>{data[courseTableHeadings.startDate]}</TDHome>
            <TDHome>{data[courseTableHeadings.endDate]}</TDHome>
            <TDHome>{data[courseTableHeadings.isDigital]}</TDHome>
            <TDHome>{data[courseTableHeadings.inClassInstructorId]}</TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="green"
                onClick={() => {
                  props.homeButtonHandlers.navToCourse(
                    data[courseTableHeadings.id]
                  );
                }}
              >
                edit
              </Button>
            </TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="red"
                onClick={() => {
                  props.homeButtonHandlers.handleDeleteCourse(
                    data[courseTableHeadings.id]
                  );
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
