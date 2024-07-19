import { FormInputLabel, Group, StyledFormInput } from './FormInput.styles';


const FormInput = ({label, ...otherProps}) => <Group>
    <StyledFormInput  {...otherProps} />
    {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
 </Group>

 export default FormInput;