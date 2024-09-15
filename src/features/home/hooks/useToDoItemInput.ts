import { useState } from "react"

type useToDoItemInputProps = {
    addItem: (title: string) => Promise<void>
}

export const useToDoItemInput = ({ addItem }: useToDoItemInputProps) => {
    const [value, setValue] = useState<string>("")

    const onSubmit = () => {
        if (value !== '') {
            addItem(value)
            setValue('')
        }
    }

    return {
        onSubmit,
        value,
        setValue
    }

}