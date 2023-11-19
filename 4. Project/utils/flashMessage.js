// utils.js
import { showMessage } from 'react-native-flash-message';

const showFlashMessage = (message, description, type = 'default', floating = true, position = 'top', duration = 4000, autoHide = true) => {
  showMessage({
    message,
    description,
    type,
    duration,
    floating,
    position,
    autoHide,
    icon: type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'auto',
  });
};

const successMessage = (message, description, floating = true, position = 'top', duration = 4000, autoHide = true) => {
  showFlashMessage(message, description, 'success', floating, position, duration, autoHide);
};

const warningMessage = (message, description, floating = true, position = 'top', duration = 4000, autoHide = true) => {
  showFlashMessage(message, description, 'warning', floating, position, duration, autoHide);
};

const dangerMessage = (message, description, floating = true, position = 'top', duration = 4000, autoHide = false) => {
  showFlashMessage(message, description, 'danger', floating, position, duration, autoHide);
};

const infoMessage = (message, description, floating = true, position = 'top', duration = 4000, autoHide = true) => {
  showFlashMessage(message, description, 'info', floating, position, duration), autoHide;
};

const defaultMessage = (message, description, floating = true, position = 'top', duration = 4000, autoHide = true) => {
  showFlashMessage(message, description, 'default', floating, position, duration, autoHide);
};

export { showFlashMessage, successMessage, warningMessage, dangerMessage, infoMessage, defaultMessage };
