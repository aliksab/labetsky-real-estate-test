import './App.css'
import { Provider } from './components/ui/provider'
import { FormikProvider, useFormik } from 'formik'
import {
    CheckoutFormValues,
    validateSchema
} from './components/validation/yup-schema'
import { FormGroup } from './components/shared/form/form-group'

function App() {
    const formik = useFormik<CheckoutFormValues>({
        initialValues: {
            name: '',
            address: '',
            floor: 1,
            totalFloors: 1,
            square: 0,
            livingSquare: 0,
            kitchenSquare: 0
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            setTimeout(() => {
                resetForm()
            }, 1000 * 2)
        }
    })
    return (
        <Provider>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup />
                </form>
            </FormikProvider>
        </Provider>
    )
}

export default App
