// import Image from 'next/image';

//Importante establecer el width y height
export default function MainPage() {
  return (
    <Image
      src={"/hero-desktop.png"}
      alt="Hero desktop"
      width={1000}
      height={760}
    />
  );
}

//Es optimizada y server side rendering
//IMPORTANTE! Tienen un costo utilizarlo solamente en imagenes que valgan la pena ya que hay un limite
