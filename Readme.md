# CodingChallenge 
## Installation:
```
yarn install
react-native react-native run-android
```

currently only Android is tested
## Design
The mock server will load data into Asyncstorage on first startup. Then every call via Graphql returns this data from the storage. On logout, the storage is reset. 
Everything else is designed according to specifications.
## TODOs
- Test and fix on iOS
- Setup Testing, for example via Jest (so we can do at least Snapshot testing)
- Maybe use Redux for state handling. As I already use Graphql and the InMemoryCache of ApolloClient, this is not as urgent. We can use the same query in different components and Apollo will sort out the data.
- Improve validation of userInput in the newGrade Screen. Currently this screen is a bit messy (implementation and UI-wise). I could improve this e.g. by using reuseable Validators and less duplication in the JSX.
- Insert Icons. react-native-fontawesome can be used to access lots of icons to improve the ui
- more animations to become more responsive
- The mock server in server.js could be cleaner, a real server would probably call API methods from resolvers.
- the schema could use more data types than String. I probably should have just changed data.json
- I did not find a JWT lib that works without core node modules. Therefore I just return a string instead of the token.

## Mockup
Beim Redesign habe ich mich für ein Kachelbasiertes Layout entschieden. Dabei können in jeder Kachel zusätzliche Informationen der jeweiligen Rubrik angezeigt werden.
Die Bilder in einzelnen Kacheln sollen das Interface auflockern und visuelle Struktur schaffen, damit Funktionen schnell gefunden werden können. Es besteht eine Farbcodierung für logisch zusammenhängende Funktionen:
- Rot, wichtig für das Studium: Noten,Stundenplan,Bibliothek
- Grün, Studentenleben: Mensa und Radio
- Grau, allgemein: Todo, Mail

#### Details
Die einzelnen Kacheln zeigen folgende Zusatzinformationen an:
- Mensa: je nach verfügbarem Platz mehrere Gerichte aus einer (in der Mensaliste) favorisierten Mensa
- Noten: die zuletzt aktualisierte Prüfung
- Stundenplan: die nächste Veranstaltung
- Bibliothek: Bücher, die demnächst zurückgegeben werden müssen
- Mail: Anzahl der ungelesenen Mails
- Erstsemester: prägnantes Logo, damit neue Nutzer schnell Informationen bekommen. (Alternativ neueste Nachrichten vom Fachschaftsrat)
- Radio: Der Nutzer kann über einen klick auf den Play-Button das Radio direkt starten. Der Button wird dann zum Stop-Button. Es wird der aktuelle Titel in der Kachel angezeigt


![alt text](https://raw.githubusercontent.com/Rakem/theTest/master/Mockup.png "Mockup")
