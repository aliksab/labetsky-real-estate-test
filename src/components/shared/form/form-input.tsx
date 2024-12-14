import { Input } from '@chakra-ui/react'
import { Field } from '../../ui/field'

import { FormikValues, useFormikContext } from 'formik'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    errorTextMessage?: string
}

export const FormInput: React.FC<Props> = ({
    name,
    label,
    errorTextMessage
}) => {
    const formik = useFormikContext<FormikValues>()
    const errorMessage = errorTextMessage
        ? errorTextMessage
        : formik.errors[name]
    return (
        <Field
            mt={2}
            invalid={!!formik.errors[name]}
            label={label}
            errorText={errorMessage as String}
        >
            <Input
                placeholder={label}
                name={name}
                onChange={formik.handleChange}
                value={formik.values[name]}
            />
        </Field>
    )
}
