import * as React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetDepartments, RoiGetPerson, RoiUpdatePerson, RoiAddPerson } from '../utils/RoiApi';
import { PopupOk, PopupOkCancel } from '../utils/Popup';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from '../components/StyledText';
import Styles from '../styles/MainStyle';
import { MyButton } from '../components/MyButton';
// import { ButtonContainer } from '../components/ButtonContainer';
import { successMessage, warningMessage, dangerMessage, infoMessage, defaultMessage } from '../utils/flashMessage';
import NetInfo from '@react-native-community/netinfo';

export default function AddPersonScreen(props) {
  // State - data for this component

  // Store a person in state

  const [id, setId] = React.useState(-1);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [departmentId, setDepartmentId] = React.useState(0);
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');

  // Store the original name of the person separately (for displaying in the title)
  // const [nameOriginal, setNameOriginal] = React.useState('');

  // Store list of departments (picker / drop down list)
  const [departments, setDepartments] = React.useState([]);

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render
  React.useEffect(refreshDepartments, []);
  // React.useEffect(refreshPerson, []);

  // Refresh the departments data - call the API
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

  function showViewPeople() {
    props.navigation.replace('Root', { screen: 'People' });
  }

  // Display flash message banner if offline
  function displayConnectionMessage() {
    console.log('displayConnectionMessage');
    // Get network connection status
    NetInfo.fetch().then((status) => {
      // Check if not connected to the Internet
      if (!status.isConnected) {
        // Display the flash message
        dangerMessage('No internet connection', 'You can not add a new person until \nyou ave an active internet connection.');
      }
    });
  }
  // Display the department picker list items

  function DisplayDepartmentListItems() {
    // Loop through each item and turn into a Picker
    return departments.map((d) => {
      return <Picker.Item key={d.id} label={d.name} value={d.id} />;
    });
  }

  /**
   * Add the person to the database
   */
  async function AddPerson() {
    // Display flash message when there's a connection issue
    displayConnectionMessage();

    // Cancel if no internet connection
  if (!(await NetInfo.fetch()).isConnected) return;

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

  // Main output of the screen component
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        <TextH1 style={{ marginTop: 0 }}>Add new person</TextH1>


      </ScrollView>
    </SafeAreaView>
  );
}
