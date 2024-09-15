import { useState } from "react"

type useToDoItemInputProps = {
    addItem: (title: string) => Promise<void>
}

export const useToDoItemInput = ({ addItem }: useToDoItemInputProps) => {
    const [value, setValue] = useState<string>("")

    const onSubmit = () => addItem(value)

    return {
        onSubmit,
        value,
        setValue
    }

}