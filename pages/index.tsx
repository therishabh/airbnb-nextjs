import Head from 'next/head';
import Header from './../components/Header';
import Banner from './../components/Banner';
import SmallCard from './../components/SmallCard';
import MediumCard from './../components/MediumCard';
import LargeCard from './../components/LargeCard';
import Footer from './../components/Footer';

export default function Home(props:any) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>

      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {props.exploreData?.map((item:any) => (
              <SmallCard key={item.location} location={item.location} img={item.img} distance={item.distance} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className='text-3xl font-semibold pb-5'>New Property</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {props.cardsData?.map((item:any) => (
              <MediumCard key={item.img} img={item.img} title={item.title}/>
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" 
        title="The Greatest Outdors" 
        description="Wishlists curated by Airbnb" 
        buttonText="Get Insppired"/>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://api.npoint.io/cff17d53504847baaeac').then(res => res.json());

  const cardsData = await fetch('https://api.npoint.io/e934c7fdfc35c555e3bb').then(res=> res.json())

  return {
    props : {
      exploreData : exploreData,
      cardsData : cardsData
    }
  }
}