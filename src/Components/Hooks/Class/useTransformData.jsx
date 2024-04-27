const transformData = inputData => {
    return {
        info: {
            school: inputData.school,
            className: inputData.name,
            id: inputData._id,
        },
        members: {
            admins: inputData.admins.map(admin => "A" + admin.slice(-3)),
            ordinary: inputData.students.map(student => "B" + student.slice(-3)),
        },
        resources: {
            courses: inputData.courses.map((_, index) => "C30" + (index + 1)),
            invitationLink: inputData.invitationLink || "fictional_link_1"
        }
    };
}
export default transformData