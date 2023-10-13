import Card from '@/components/Card';

const Gallery = () => {
  const temp = [
    {
      id: 0,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 1,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
    {
      id: 3,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 4,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
    {
      id: 5,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 6,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
  ];

  return (
    <div className='grid grid-cols-1 row sm:grid-cols-2 lg:grid-cols-3'>
      {temp.map((card) => (
        <Card key={card.id} img={card.img} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Gallery;
