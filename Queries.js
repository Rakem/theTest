import gql from 'graphql-tag';

export const GRADES_QUERY = gql`
    query getGrades {
        grades: getGrades {
            id
            name
            semester
            grade
            credits
            status
            note
            date
        }
    }
`;
