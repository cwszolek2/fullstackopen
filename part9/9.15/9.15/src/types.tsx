interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CoursePartDescription extends CoursePartBase {
    description: string;
  }

  interface CoursePartBasic extends CoursePartDescription {
    kind: "basic";
  }
  
  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group";
  }
  
  interface CoursePartBackground extends CoursePartDescription {
    backgroundMaterial: string;
    kind: "background";
  }
  interface CoursePartRequirements extends CoursePartDescription {
    requirements: string[];
    kind: "special";
  }

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartRequirements;
export default CoursePart;