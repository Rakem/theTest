# CodingChallenge 
## Installation:
```
yarn install
react-native react-native run-android
```

currently only Android is tested
## Design
The App will load data into Asyncstorage on first startup. Then every call via Graphql returns this data from the storage. On logout, the storage is reset. 
Everything else is hopefully according to specifications.
## TODOs
- Setup Testing, for example via Jest (so we can do at least Snapshot testing)
- Test and fix on iOS
- Maybe use Redux for state handling. As I already use Graphql and the InMemoryCache of ApolloClient, this is not as urgent. We can use the same query in different components and Apollo will sort out the data.
- Improve validation of userInput in the newGrade Screen. Currently this screen is a bit messy (implementation and UI-wise). I could improve this e.g. by using reuseable Validators and less duplication in the JSX.
- Insert Icons. react-native-fontawesome can be used to access lots of icons to improve the ui
- more animations to become more responsive
- server.js is really messy, a real server would probably call API methods from resolvers.
- the schema could use more data types than String. I probably should have just changed data.json
- I did not find a JWT lib that works without core node modules. Therefore I just return a string instead of the token.


