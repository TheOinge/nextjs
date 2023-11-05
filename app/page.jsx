"use client"
import CountButton from "./CountButton"
import ProductList from "./getApi"

export default function Page() {
    return (
    <div>
      <CountButton />
      <hr/>
      <a href="https://github.com/TheOinge/nextjs">My react page's github</a>
      <hr />
      <ProductList />
    </div>
      )
  }