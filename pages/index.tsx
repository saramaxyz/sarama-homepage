import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Button: React.FC = props => (
  <Link href='/get-started'><div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded p-4 font-bold">{props.children}</div></Link>
)

const Hero = () => (
  <div>
    <Image 
      src='/desk.png' 
      layout='fill'
      objectFit='cover'
      objectPosition='center'
      className='z-0'
    />
    <div className='h-screen flex flex-col items-center text-white z-10 relative'>
      <div className="flex justify-between w-full m-5 p-12">
        <div className='font-semibold text-3xl'>Sarama</div>
        <Button>Get Access</Button>
      </div>
      <div className='mt-32 font-bold text-5xl text-center'>Solution<br />For Your Pet</div>
      <div className='mt-6'>Sarama develops software to add to your dog products</div>
      <div className='mt-16'>
        <Button>Get Access</Button>
      </div>
    </div>
  </div>
)

const TrustedBy = () => (
  <div className='m-5'>
  </div>
)

const YourProducts = () => (
  <div className='flex flex-col items-center'>
    <div className="text-6xl font-semibold w-2/5 text-center">
      <span>You</span>&nbsp;<span className="text-red-500">love</span>&nbsp;<span>your dog.</span>
    </div>
    <div className='container mt-10 font-normal items-left'>Our goal is to help dog parents better understand their dogs&apos; behavior by creating a system that can decode their barks and body language. Our software can be integrated into products to give dog parents instant feedback about their dogs&apos; emotions.</div>
  </div>
)

const DogImage = () => (
  <div className="mx-auto mt-20 mb-20">
    <img src='/holding_dog.svg' />
  </div>
)

const WorkProcess = () => (
  <div className="flex flex-col items-center container mx-auto">
    <div className='flex text-6xl font-semibold'>
      <div>Work</div>&nbsp;<div className='text-blue-500'>Process</div>
    </div>
    <div className='pt-24 pb-24'>
      <div className="flex">
        <div className='w-1/2'>
          <div>Icon</div>
          <div className="font-bold text-2xl pb-5 border-b-2 border-blue-800">Body Language Decoding</div>
          <div className='pt-5'>
            We are using AI to detect what your dog is doing and whether they're doing something they're not supposed to. This will help you to better monitor your pet and keep them out of trouble.
          </div>
        </div>
        <div className='w-1/2 relative'>
            <Image 
              className='absolute'
              src='/dog-1/blob.svg' 
              width='490' 
              height='460' 
              objectFit='cover'
              objectPosition='center'
            />
            <Image 
              className='absolute'
              src='/dog-1/dog.svg' 
              height='330' 
              width='400'
            />
        </div>
      </div>
      <div className="flex">
        <div className='w-1/2'>Dog Image</div>
        <div className='w-1/2'>
          <div>Icon</div>
          <div className="font-bold text-2xl pb-5 border-b-2 border-blue-800">Dog Bark Decoding</div>
          <div className='pt-5'>
            We use audio from pet cameras to capture barks along with AI trained to find specific bark patterns for individual dogs. This helps dog parents determine when their dog is barking and whether it is something they need to be concerned about.
          </div>
        </div>
      </div>
      <div className="flex">
        <div className='w-1/2'>
          <div>Icon</div>
          <div className="font-bold text-2xl pb-5 border-b-2 border-blue-800">Aggression Detection</div>
          <div className='pt-5'>
            With better understanding of emotions and bark decoding we create predictive models around aggression.
          </div>
        </div>
        <div className='w-1/2'>Dog Image</div>
      </div>
    </div>
  </div>
)

interface CardProps {
  title: string;
  description: string;
  action?: JSX.Element;
}

const Card: React.FC<CardProps> = props => (
  <div className="bg-white rounded shadow-2xl flex flex-col items-center w-96 shadow-blue-100">
    <div className='h-72'>
      Dog Image
    </div>
    <div className='h-72 flex flex-col items-center'>
      <div className='font-semibold text-xl pt-10 tracking-wide'>{props.title}</div>
      <div className='grow'>
        <div className='pt-8 pl-9 pr-9 tracking-wide'>
          {props.description}
        </div>
      </div>
      <div className='pb-5'>
        {props.action}
      </div>
    </div>
  </div>
)

const LearnMore = () => (
  <div className="flex flex-col items-center pb-24" style={{ backgroundImage: 'url(/white_background.png)', maxHeight: '1032px' }}>
    <div className='text-6xl font-semibold m-24'>Looking To Learn More</div>
    <div className="flex space-x-6">
      <Card title="How our sensors work" description="Scientific papers on sensor tech for dogs." action={<Button>Read More</Button>} />
      <Card title="Can you actually talk to dogs" description="Learn how dog communication actually works." action={<Button>Read More</Button>} />
      <Card title='Come decode dogs with us' description='Chat with us on our discord server to share lessions of dog parenting.' action={<Button>Join Our Discord</Button>} />
    </div>
  </div>
)

const PoweredApp = () => (
  <div className='h-screen flex flex-col items-center text-white w-full' style={{ backgroundImage: 'url(/vr.png)', maxHeight: '976px' }}>
    <div className='text-3xl font-semibold text-center p-24'>AI Powered App <br /> Built on Powerful Sensors</div>
    <div className="flex flex-col container mx-auto">
      <div className='flex flex-col w-full text-right'>
        <div className="font-semibold">Dog Parents</div>
        <div className=''>Get peace of mind shopping online knowing<br />their purchase will continuously monitor<br />marine ecosystems</div>
      </div>
      <div className='flex flex-col w-full text-left'>
        <div className="font-semibold">Dogs</div>
        <div className=''>Sarma provides marketing material to<br />showcase your values alignment with<br />dog stress reduction</div>
      </div>
    </div>
    <div className="m-16">
      <Button>View Our App</Button>
    </div>
  </div>
)

const CallToAction = () => (
  <div className="flex m-10 p-10 justify-between bg-blue-400 rounded-md">
    <div><span className="text-white-500">Use our APIs to add more to your products made for</span></div>
    <div>
      <Button>Get Started</Button>
    </div>
  </div>
)

const Footer = () => (
  <footer className='p-10 text-gray-500'>
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="font-semibold text-5xl">Sarama</div>
        <div className='flex flex-col space-y-4 font-medium pt-7'>
          <div>+1 732 309-8870</div>
          <div>hello@sarama.xyz</div>
          <div>1235 Florida St, Unit A, San Francisco, CA</div>
        </div>
      </div>
      <div className="flex space-x-24">
        <div className="flex flex-col">
          <div className="font-semibold text-2xl">Products</div>
          <div className='flex flex-col space-y-4 font-medium pt-7'>
            <Link href='/app'>App</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-2xl">Resources</div>
          <div className='flex flex-col space-y-4 font-medium pt-7'>
            <Link href='/faq'>FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-2xl">About Us</div>
          <div className='flex flex-col space-y-4 font-medium pt-7'>
            <Link href='/team'>Team</Link>
            <Link href='#'>Blog (coming soon...)</Link>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center space-x-10 w-full mt-16 text-xs'>
      <div>Copyright 2022, Sarama Inc</div>
      <Link href='/privacy-policy'>Privacy Policy</Link>
      <Link href='/terms'>{'Terms & Conditions'}</Link>
    </div>
  </footer>
)

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100">
      <Hero />
      <TrustedBy />
      <YourProducts />
      <DogImage />
      <WorkProcess />
      <LearnMore />
      <PoweredApp />
      <CallToAction />
      <Footer />
    </div>
  )
}
