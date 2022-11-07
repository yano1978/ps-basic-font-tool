import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const TextInput = () => {
  return (
    <EditTextarea
      className="edit-text"
      name="description"
      defaultValue="Type here..."
      placeholder="Type here..."
    />
  );
};
export default TextInput;
