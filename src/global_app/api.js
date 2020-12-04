const BASEPATH = `http://localhost:8000`;

const API = {};

API["BASE_URL"] = `${BASEPATH}`;

//COURSES URL
API["COURSE_URL"] = `${BASEPATH}/api/course`;
API["FLAGGED_URL"] = `${BASEPATH}/api/course/?flag=True`;

export default API;
