import React, { useState, useEffect } from "react"
import moment from "moment"
import Link from "next/link"
import { getCategories } from "../services"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl font-semibold border-b pb-4 mb-8'>Categories</h3>
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/category/${cat.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 text-pink-600 text-md'>
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
