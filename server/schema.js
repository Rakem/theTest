//should be graphql file, had issues with importing

const schema = `
type Grade {
    id: String
    name: String
    semester: String
    grade: String
    credits: String
    status: String
    note: String
    date: String
}


input GradeInput{
    name: String
    semester: String
    grade: Float
    credits: Float
    status: String
    note: String
    date: String
}

type Query {
    getGrades:[Grade]
}

type Mutation {
    createGrade(grade: GradeInput): Grade
}
`;

export default schema;
