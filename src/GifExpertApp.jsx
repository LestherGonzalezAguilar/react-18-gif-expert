import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
import './styles.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch man'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            alert(`Category "${newCategory}" already exists`)
            return
        }

        setCategories(c => [newCategory, ...c])
    }

    return (
        <>
            <h1>GifExpertAPP</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            // setCategories={setCategories}
            />

            {/* List gifs */}
            {categories.map(c =>
            (
                <GifGrid key={c} category={c} />
            )
            )}

        </>
    )
}
