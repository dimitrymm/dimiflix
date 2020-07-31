/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`
position: relative;
textarea{
  min-height:150px;
}
input[type='color']{
  padding-left:56px;
}

`;
const Label = styled.label``;
Label.Text = styled.span`
color:#e5e5e5;
height:57px;
position: relative;
top:0;
left:16px;

display:flex;
align-items:center;

transform-origin:0% 0%;
font-size:18px;
font-style:normal;
font-weight:300;

transition:.1s ease-in-out;
`;

const Input = styled.input`
background:#535850;
color:#f5f5f5;
display:block;
width:100%;
height:57px;
font-size:18px;

outline:0;
border:0;
border-top:4px solid transparent;
border-bottom:4px solid #535850;

padding:16px 16px;
margin-bottom:45px;

resize:none;
border-radius:4px;
transition:border-color .3s;

&:focus{
  border-bottom-color:var(--primary);
}


`;
const FormField = ({
  label, type, name, value, onChange,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  return (
    <FormFieldWrapper>

      <Label
        htmlFor={fieldId}
      >
        <Label.Text>
          {label}
        :
        </Label.Text>

        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};
export default FormField;
