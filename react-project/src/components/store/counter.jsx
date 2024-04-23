import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import '../components.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div id="counter">
      <div>
        <button class="mt-60 ml-8 bg-black text-white text-center px-4 py-2 rounded" aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span class="inline-block bg-black text-white text-sm px-2 py-1 rounded-full">{count}</span>
        <button class="bg-black text-white text-center px-4 py-2 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}