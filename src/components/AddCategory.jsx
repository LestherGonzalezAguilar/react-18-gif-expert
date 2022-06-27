import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputSubmit = (e) => {
        e.preventDefault()
        const newCategory = inputValue.trim()
        if (newCategory.length === 0) return

        onNewCategory(newCategory)
        setInputValue("")

        // setCategories(cats => ([inputValue, ...cats]))
    }

    return (
        <form onSubmit={onInputSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
            />
        </form>
    )
}
