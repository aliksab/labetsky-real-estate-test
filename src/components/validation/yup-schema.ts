import * as Yup from 'yup'

export const validateSchema = Yup.object().shape({
    name: Yup.string().required('Поле обязательно для заполнения'),
    address: Yup.string().required('Поле обязательно для заполнения'),
    floor: Yup.number()
        .typeError('Поле должно быть числом')
        .integer('Значение должно быть целым числом')
        .required('Поле обязательно для заполнения')
        .min(-1, 'Значение не может быть меньше -1')
        .test(
            'floor-test',
            'Значение не может быть больше количества этажей в доме',
            function (value) {
                const { totalFloors } = this.parent
                return value <= totalFloors
            }
        ),
    totalFloors: Yup.number()
        .typeError('Поле должно быть числом')
        .integer()
        .required('Поле обязательно для заполнения')
        .min(-3, 'Значение не может быть меньше -3')
        .max(200, 'Значение не может быть больше 200'),
    square: Yup.number()
        .integer()
        .required('Поле обязательно для заполнения')
        .min(0, 'Значение не может быть меньше 0')
        .max(400, 'Значение не может быть больше 400')
        .test('square-test', 'Значение не верное', function (value) {
            const { livingSquare, kitchenSquare } = this.parent
            return value >= livingSquare + kitchenSquare
        }),
    livingSquare: Yup.number()
        .typeError('Поле должно быть числом')
        .integer()
        .required('Поле обязательно для заполнения')
        .min(0, 'Значение не может быть меньше 0'),
    kitchenSquare: Yup.number()
        .typeError('Поле должно быть числом')
        .integer()
        .required('Поле обязательно для заполнения')
        .min(0, 'Значение не может быть меньше 0')
})

export type CheckoutFormValues = Yup.InferType<typeof validateSchema>
