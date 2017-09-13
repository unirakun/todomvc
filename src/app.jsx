import React from 'react'
import Header from 'components/header'
import Todos from 'components/todos'
import Footer from 'components/footer'
import Info from 'components/info'

const App = () => {
  return (
    <div>
      <section className="todoapp" >
        <Header />
        <Todos />
        <Footer />
      </section>
      <Info />
    </div>
  )
}

export default App
