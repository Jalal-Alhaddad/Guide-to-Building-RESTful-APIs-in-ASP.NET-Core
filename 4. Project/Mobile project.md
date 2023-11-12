# Mobile project

## I. Git repo

Use instruction in [Api project](../4.%20Project/Api%20Project.md#git-repo) to create a new repo for the mobile app.

## Download and update the template

- Form moodle, download `RoiFrontend Expo app` in your directory and extract it.
- Copy the template contents to your new repo created for mobile app.
- **Delete** `package-lock.json` file
- Update `package.json` by removing `dependencies` part, and add the new `dependencies` form the following:

```javascript
  "dependencies": {
    "@expo/vector-icons": "^13.0.0",
    "@expo/webpack-config": "^19.0.0",
    "@react-native-async-storage/async-storage": "1.18.2",
    "@react-native-community/netinfo": "9.3.10",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "expo": "~49.0.15",
    "expo-linking": "~5.0.2",
    "expo-status-bar": "~1.6.0",
    "moment": "^2.29.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.72.6",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "react-native-web": "~0.19.6",
    "@react-native-picker/picker": "2.4.10"
  },
```

- Run the command `npm install` to install new packages
- You can start the app using `npm start`
- You will encounter the following errors:

```python
ERROR in ./navigation/PeopleNavigator.js:1
Module not found: Can't resolve '@react-navigation/stack'
> 1 | import { createStackNavigator } from '@react-navigation/stack';
  2 | import * as React from 'react';
  3 |
  4 | // Import navigation and screens

ERROR in ./navigation/RootNavigator.js:1
Module not found: Can't resolve '@react-navigation/stack'
> 1 | import { createStackNavigator } from '@react-navigation/stack';
  2 | import * as React from 'react';
  3 |
  4 | // Import navigation and screens

web compiled with 2 errors
```

- Update `./navigation/PeopleNavigator.js`
- Line 1 and 10

```javascript
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
```

- Update `./navigation/PeopleNavigator.js`

```javascript
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
```

- Now the template is updated to the latest version. And working fine

## Connect with the Api

- Start your Api project, and check the url
- Comment `const apiUrl = "https://localhost:7215/api/v1";` in `Api.js`
- Comment function `function RoiGetPeople()`  in `Api.js`
- Add the file `RoiApi.js` to the project
- Update url to match your server in `RoiApi.js`, use http instead of https

```javascript
const apiUrl = 'http://localhost:5219/api';
```

- In `ViewPeopleScreen` update

```javascript
import { RoiGetPeople } from '../utils/RoiApi';
```

- You should see list oe people in the view people screen

## Create Add Screen

- Create new file `AddPersonScreen.js` in screens dir
- Add the following to `BottomTabNavigator`

```javascript
import AddPersonScreen from '../screens/AddPersonScreen';
```

- Add the following between People and help `BottomTab.Screen`

```jsx
      <BottomTab.Screen
        name="AddPerson"
        component={AddPersonScreen}
        options={{
          title: 'Add Person',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
        }}
      />
```

```javascript
  const [id, setId] = React.useState(-1);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [departmentId, setDepartmentId] = React.useState(0);
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');
```

```javascript
  function refreshDepartments() {
    // Get data from the API
    RoiGetDepartments()
      // Success
      .then((data) => {
        // Store results in state variable
        setDepartments(data);
      })
      // Error
      .catch((error) => {
        PopupOk('API Error', 'Could not get departments from the server');
      });
  }
```

```javascript
function AddPerson() {
    // Update the person using the API
    RoiAddPerson(name, phone, departmentId, street, city, state, zip, country)
      .then((data) => {
        // Show confirmation that the person has been added
        PopupOk('Person added', `${name} has been added`);

        // Go back to the person list (ViewPeople)
        // props.navigation.navigate("ViewPeople");
        showViewPeople();
      })
      .catch((error) => {
        // Display error
        PopupOk('API Error', error);
      });
  }
```

## Create Edit Screen

```javascript
function refreshPerson() {
    // Get person ID passed to this screen (via props)
    const id = props.route.params.id;

    // Get data from the API
    RoiGetPerson(id)
      // Success
      .then((p) => {
        // Store results in state variable (if data returned)
        if (p) {
          setId(p.id);
          setName(p.name);
          setNameOriginal(p.name);
          setPhone(p.phone);
          setDepartmentId(p.departmentId ?? 0);
          setStreet(p.street);
          setCity(p.city);
          setState(p.state);
          setZip(p.zip);
          setCountry(p.country);
        }
      })
      // Error
      .catch((error) => {
        // Display error
        PopupOk('API Error', 'Could not get person from the server');
        // OPTIONAL: navigate back to ViewPeople screen
        props.navigation.navigate('ViewPeople');
      });
  }
```

```javascript
function editPerson() {
    // Update the person using the API
    RoiUpdatePerson(id, name, phone, departmentId, street, city, state, zip, country)
      .then((data) => {
        // Show confirmation that the person has been edit
        PopupOk('Person saved', `${nameOriginal} has been  saved`);

        // Go back to the person list (ViewPeople)
        // props.navigation.navigate("ViewPeople");
        props.navigation.replace('Root', { screen: 'People' });
      })
      .catch((error) => {
        // Display error
        PopupOk('API Error', error);
      });
  }
```

## Create View Screen

```javascript
function refreshPersonList() {
    console.log('refresh person list');

    // Get data from the API
    RoiGetPeople()
      // Success
      .then((data) => {
        // Store results in state variable
        setPeople(data);
      })
      // Error
      .catch((error) => {
        PopupOk('API Error', 'Could not get people from the server');
      });
  }
```

```javascript
function deletePerson(person) {
    // Check if person should be deleted (confirm with user)
    PopupOkCancel(
      // Title and message
      'Delete person?',
      `Are you sure you want to delete ${person.name}`,

      // 0K - delete the person
      () => {
        // Delete the person using the API
        RoiDeletePerson(person.id)
          .then((data) => {
            // Show confirmation that the person has been deleted
            PopupOk('Person deleted', `${person.name} has been  deleted`);
            // Refresh the person list
            refreshPersonList();
          })
          .catch((error) => {
            // Display error
            PopupOk('API Error', 'Could not delete person');
          });
        // console.log('Ok.. deleting person');
      },
      // Cancel do nothing
      () => {
        console.log('Cancel - no delete for you!');
      }
    );
  }
```

```javascript
function displayPeople() {
    // Loop through each item and turn into appropriate output and then return the result
    return people.map((p) => {
      // Create an output view for each item
      return (
        <View key={p.id} style={Styles.dataContainerHorizontal}>
          <View style={Styles.personListItemDetails}>
            <TextParagraph style={Styles.personListItemName}>{p.name}</TextParagraph>
            <TextParagraph style={Styles.personListItemText}>{p.department?.name ?? '---'}</TextParagraph>
            <TextParagraph style={Styles.personListItemText}>{p.phone}</TextParagraph>
          </View>
          <ButtonContainer direction="column">
            {/* <View style={Styles.personListItemButtons}> */}
            <MyButton
              text="info"
              type="major" // default*|major|minor
              size="small" // small|medium*|large
              onPress={() => {
                showViewPerson(p);
              }}
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtonText}
            />
            <MyButton
              text="Edit"
              type="default" // default*|major|minor
              size="small" // small|medium*|large
              onPress={() => {
                showEditPerson(p);
              }}
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtonText}
            />
            <MyButton
              text="Delete"
              type="minor" // default*|major|minor
              size="small" // small|medium*|large
              onPress={() => deletePerson(p)}
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtonText}
            />
            {/* </View> */}
          </ButtonContainer>
        </View>
      );
    });
  }
```

## Create View Record Screen

```javascript
const personTemplate = {
    id: 0,
    name: '',
    phone: '',
    departmentId: null,
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    department: null,
  };
```

```javascript
function refreshPerson() {
    // Get person ID passed to this screen (via props)
    const id = props.route.params.id;

    // Get data from the API
    RoiGetPerson(id)
      // Success
      .then((data) => {
        // Store results in state variable (if data returned)
        if (data) setPerson(data);
      })
      // Error
      .catch((error) => {
        // Display error
        PopupOk('API Error', 'Could not get person from the server');
        // OPTIONAL: navigate back to ViewPeople screen
        props.navigation.navigate('ViewPeople');
      });
  }

```

```javascript
/**
   * Delete a person from the database
   */
  function deletePerson() {

    // Check if person should be deleted (confirm with user)
    PopupOkCancel(

      // Title and message
      'Delete person?',
      `Are you sure you want to delete ${person.name}`,

      // 0K - delete the person
      () => {

        // Delete the person using the API
        RoiDeletePerson(person.id)
          .then((data) => {
            // Show confirmation that the person has been deleted
            PopupOk('Person deleted', `${person.name} has been  deleted`);

            // Go back to the person list (ViewPeople)
            // props.navigation.navigate("ViewPeople");
            props.navigation.replace("Root", {screen: "People"});
          })
          .catch((error) => {
            // Display error
            PopupOk('API Error', 'Could not delete person');
          });
        // console.log('Ok.. deleting person');
      },
      // Cancel do nothing
      () => {
        console.log('Cancel - no delete for you!');
      }
    );
  }
```

```javascript

```