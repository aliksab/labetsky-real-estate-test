import { Button, Fieldset } from '@chakra-ui/react'
import { FormInput } from './form-input'

export const FormGroup = () => {
    return (
        <Fieldset.Root size='sm' maxW='md' maxH={'100vh'} margin={'auto'}>
            <Fieldset.Content>
                <FormInput label='Название объекта' name='name' />
                <FormInput label='Адрес' name='address' />
                <FormInput label='Этаж' name='floor' />
                <FormInput label='Общее количество этажей' name='totalFloors' />
                <FormInput
                    label='Площадь'
                    name='square'
                    errorTextMessage='Общая площадь должна быть больше суммы жилой площади и площади кухни'
                />
                <FormInput label='Жилая площадь' name='livingSquare' />
                <FormInput label='Площадь кухни' name='kitchenSquare' />
                <Button type='submit' alignSelf='flex-start'>
                    Отправить
                </Button>
            </Fieldset.Content>
        </Fieldset.Root>
    )
}
