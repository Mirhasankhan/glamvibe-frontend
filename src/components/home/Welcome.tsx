
import image1 from '../../assets/image1.png'


const Welcome = () => {    
  

    return (
        <div className='flex gap-12 items-center justify-center pt-16'>
           <img src={image1.src} alt="" /> 
           <div>
            <h1 className='text-primary text-xl italic'>Wellness</h1>
            <h1 className='text-3xl font-medium py-4'>Welcome To Home of <br /> Relaxe & Respite.</h1>
            <p>There’s nothing more luxurious and relaxing than a trip to the spa & Salon We <br /> offer a wide variety of body spa therapies to help you heal your body naturally. <br /> Get relaxed from stressed & hectic schedule.</p>
            <p>Everybody is looking for places where to relax and get more energy. In our <br /> wellness center silence, energy, beauty and vitality meet. The treatments we <br /> offer will refresh both your body and soul. We’ll be glad to welcome you and <br /> recommend our facilities and services.</p>
           </div>
        </div>
    );
};

export default Welcome;