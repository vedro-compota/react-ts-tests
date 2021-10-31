import { TextField } from '@material-ui/core';

import { Field, FieldProps, Form, Formik } from 'formik';
import { useCallback } from 'react';



export function First() {
 

    const nameValue = 'First';
    const name= nameValue;
  
    console.log('Render ',  nameValue);
  const handleSubmit = useCallback(
    () => {
      console.log('Submit ',  nameValue);
    },
    [ nameValue ],
  );

  const  setFocusByRef = useCallback((input) => {
    console.log('--set input ref', nameValue, input);
    input && input.focus();
}, []);

  return ( 

    <Formik
        onSubmit={handleSubmit}
        enableReinitialize
        initialValues={{ someFieldName: name }}
    >
        <Form>
        <Field
            name="someFieldName"
            component={({ field, form }: FieldProps) => {
            const { name } = field;
            const errorMessage = form.errors[name];
            const showError = Boolean(errorMessage);

            console.log('[[[render input', nameValue);

            return (
                <TextField
                {...field}
                inputRef={setFocusByRef}
                // inputRef={(input) => {
                //     console.log('--set input ref', nameValue, input);
                //     input && input.focus();
                // }}
                autoComplete="off"
                error={showError}
                helperText={showError ? errorMessage : null}
                onBlur={(event) => {
                    console.log('BLUR---', field.value);
                    // field.onBlur(event);
                    form.submitForm();
                }}
                hiddenLabel
                inputProps={{
                    maxLength: 50,
                }}
    
                />
            );
            }}
        />
        </Form>
    </Formik>
  );
}
