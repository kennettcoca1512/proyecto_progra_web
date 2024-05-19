import Header from './components/Header/Header'
import Footer from './components/footer/footer'
import {UserProvider, useUser} from './context/User'

import './App.css'

function App() {
  
  

  const obj = useUser()

  console.log(obj)

  return (
    <>
      <Header/>
      <section>
        <h1>Pagina principal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi
           dolorum maiores, nesciunt quisquam nemo ipsam necessitatibus sit 
           laborum, iusto quasi excepturi provident, vitae deserunt voluptatum 
           dolores nobis amet. Veritatis temporibus repellendus sit mollitia.
            Esse fuga dolores iusto totam nihil quam quis architecto pariatur. 
            Corporis necessitatibus commodi consectetur quasi delectus.</p>
      </section>
      <Footer/>
    </>
  )
}

export default App
