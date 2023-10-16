import React from 'react'
import ItemListContainer from "../src/components/ItemList/ItemListContainer"
import { useParams } from 'react-router-dom'
import CarouselsContact from "../src/components/Carousels/CarouselsContact"

// import { addDoc, collection, getFirestore } from "firebase/firestore"

const Home = () => {

  // Carga de productos a FireBase desde archivo local.
  // const data = [
  //   {
  //     name: "Dark Souls 3",
  //     category: "Souls",
  //     desc: "Embárcate en una aventura oscura y desafiante en el mundo de Lothric.",
  //     price: 39.99,
  //     stock: 25,
  //     image: "darksouls3.jpg",
  //   },
  //   {
  //     name: "Minecraft",
  //     category: "Sandbox",
  //     desc: "Construye y explora mundos infinitos hechos de bloques.",
  //     price: 29.99,
  //     stock: 40,
  //     image: "minecraft.jpg",
  //   },
  //   {
  //     name: "The Talos Principle",
  //     category: "Puzzle",
  //     desc: "Resuelve rompecabezas desafiantes en un mundo futurista.",
  //     price: 19.99,
  //     stock: 15,
  //     image: "talosprinciple.jpg",
  //   },
  //   {
  //     name: "The Witness",
  //     category: "Puzzle",
  //     desc: "Explora una isla misteriosa llena de rompecabezas y secretos.",
  //     price: 29.99,
  //     stock: 20,
  //     image: "witness.jpg",
  //   },
  //   {
  //     name: "Danganronpa Trigger Happy Havoc",
  //     category: "Aventura",
  //     desc: "Investiga asesinatos misteriosos en una escuela secundaria retorcida.",
  //     price: 24.99,
  //     stock: 10,
  //     image: "danganronpa1.jpg",
  //   },
  //   {
  //     name: "Danganronpa 2: Goodbye Despair",
  //     category: "Aventura",
  //     desc: "Continúa la saga de asesinatos en la isla de Jabberwock.",
  //     price: 24.99,
  //     stock: 12,
  //     image: "danganronpa2.jpg",
  //   },
  //   {
  //     name: "The Witcher 3: Wild Hunt",
  //     category: "RPG",
  //     desc: "Únete al cazador de monstruos Geralt en esta aventura épica.",
  //     price: 49.99,
  //     stock: 30,
  //     image: "witcher3.jpg",
  //   },
  //   {
  //     name: "Red Dead Redemption 2",
  //     category: "Aventura",
  //     desc: "Explora el salvaje oeste en esta obra maestra de Rockstar Games.",
  //     price: 59.99,
  //     stock: 18,
  //     image: "rdr2.jpg",
  //   },
  //   {
  //     name: "The Elder Scrolls V: Skyrim",
  //     category: "RPG",
  //     desc: "Sumérgete en el mundo de fantasía de Tamriel en esta aventura épica.",
  //     price: 39.99,
  //     stock: 28,
  //     image: "skyrim.jpg",
  //   },
  //   {
  //     name: "Resident Evil Village",
  //     category: "Survival Horror",
  //     desc: "Enfréntate a horrores en un misterioso pueblo europeo.",
  //     price: 44.99,
  //     stock: 22,
  //     image: "re8.jpg",
  //   },
  //   {
  //     name: "Assassin's Creed Valhalla",
  //     category: "Aventura",
  //     desc: "Sé un vikingo y explora la era de los saqueos en Inglaterra.",
  //     price: 49.99,
  //     stock: 17,
  //     image: "acvalhalla.jpg",
  //   },
  //   {
  //     name: "Hollow Knight",
  //     category: "Souls",
  //     desc: "Embárcate en una aventura subterránea en este juego indie aclamado.",
  //     price: 19.99,
  //     stock: 14,
  //     image: "hollowknight.jpg",
  //   },
  //   {
  //     name: "Stardew Valley",
  //     category: "Simulación",
  //     desc: "Cultiva tu granja y forja relaciones en este juego relajante.",
  //     price: 14.99,
  //     stock: 35,
  //     image: "stardewvalley.jpg",
  //   },
  //   {
  //     name: "Horizon Zero Dawn",
  //     category: "Aventura",
  //     desc: "Explora un mundo postapocalíptico con máquinas gigantes.",
  //     price: 39.99,
  //     stock: 21,
  //     image: "horizon.jpg",
  //   },
  //   {
  //     name: "Grand Theft Auto V",
  //     category: "Acción",
  //     desc: "Sumérgete en el mundo criminal de Los Santos en este GTA épico.",
  //     price: 29.99,
  //     stock: 24,
  //     image: "gta5.jpg",
  //   },
  //   {
  //     name: "Super Mario Odyssey",
  //     category: "Plataformas",
  //     desc: "Ayuda a Mario a rescatar a la Princesa Peach en una aventura divertida.",
  //     price: 44.99,
  //     stock: 28,
  //     image: "marioodyssey.jpg",
  //   },
  //   {
  //     name: "The Last of Us Part II",
  //     category: "Acción",
  //     desc: "Sobrevive en un mundo postapocalíptico en este juego emocional.",
  //     price: 49.99,
  //     stock: 20,
  //     image: "tlou2.jpg",
  //   },
  //   {
  //     name: "Cyberpunk 2077",
  //     category: "RPG",
  //     desc: "Explora la ciudad de Night City en un futuro distópico.",
  //     price: 59.99,
  //     stock: 19,
  //     image: "cyberpunk2077.jpg",
  //   },
  //   {
  //     name: "Fall Guys: Ultimate Knockout",
  //     category: "Multijugador",
  //     desc: "Compite en minijuegos divertidos en este juego de batalla real.",
  //     price: 14.99,
  //     stock: 50,
  //     image: "fallguys.jpg",
  //   },
  //   {
  //     name: "Animal Crossing: New Horizons",
  //     category: "Simulación",
  //     desc: "Crea tu propia isla paradisíaca en este juego de simulación.",
  //     price: 49.99,
  //     stock: 32,
  //     image: "acnh.jpg",
  //   },
  //   {
  //     name: "Among Us",
  //     category: "Multijugador",
  //     desc: "Descubre al impostor en la nave espacial en este juego de deducción.",
  //     price: 4.99,
  //     stock: 60,
  //     image: "amongus.jpg",
  //   },
  // ];

  // const addData = () => {
  //   const db = getFirestore()
  //   const collectionRef = collection(db, "products")

  //   for(let item of data) {
  //     addDoc(collectionRef, item)
  //       .then(res => console.log("Se agregaron los productos:", res.id))
  //       .catch(error => console.log(error))
  //   }
  // }

    const params = useParams()
    console.log(params) // {}

  return (
    <div>
      <CarouselsContact />
      <ItemListContainer/>
      {/* <button onClick={()=>addData()}>Agregar productos</button> */}
    </div>
  )
}

export default Home