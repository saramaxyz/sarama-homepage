import Image from 'next/image'

const Button: React.FC = props => (
  <a className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded p-2 font-semibold">{props.children}</a>
)

const Hero = () => (
  <div className='h-screen flex flex-col items-center text-white' style={{ backgroundImage: 'url(/desk.png)', maxHeight: '894px' }}>
    <Image 
      src='/desk.png' 
      layout='fill'
    />
    <div className="flex justify-between w-full m-5 p-5">
      <div className='font-semibold text-3xl'>Sarama</div>
      <Button>Get Access</Button>
    </div>
    <div className='mt-32 font-bold text-5xl text-center'>Solution<br />For Your Pet</div>
    <div className='mt-6'>Sarama develops software to add to your dog products</div>
    <div className='mt-16'>
      <Button>Get Access</Button>
    </div>
  </div>
)

const TrustedBy = () => (
  <div className='flex flex-col items-center m-20'>
    <div className='font-semibold'>
      Trusted By
    </div>
    <div className='flex space-x-16'>
      <div>Tesla</div>
      <div>Slack</div>
      <div>Twitter</div>
      <div>Envato</div>
      <div>Windows</div>
      <div>Slack Again</div>
    </div>
  </div>
)

const YourProducts = () => (
  <div className='flex flex-col items-center'>
    <div className="flex text-6xl font-semibold"><span>You</span>&nbsp;<span className="text-blue-500">make</span>&nbsp;<span>products dog people love. Now</span>&nbsp;<span className="text-blue-500">add AI to</span>&nbsp;<span>make it smarter.</span></div>
    <div className='container mt-10'>More dog parents are increasingly concerned in what their dogs are doing all day long. We understand their frustration so we created a way to do something. We're a team of engineers, scientists, and researchers from across the world focused on understanding our dogs' behaviors. Together we built a real-time system to decode barks and body language to determine emotion. Integrate our software into your products to give every dog parent instant feedback about their dogs.</div>
  </div>
)

const DogImage = () => (
  <div className="mx-auto mt-20 mb-20">
    <img src='/holding_dog.svg' />
  </div>
)

const WorkProcess = () => (
  <div className="flex flex-col items-center">
    <div className='flex text-6xl font-semibold'>
      <div>Work</div>&nbsp;<div className='text-blue-500'>Process</div>
    </div>
    <div className="flex">
      <div>Dog Bark Decoding</div>
      <div>Dog Image</div>
    </div>
    <div className="flex">
      <div>Dog Image</div>
      <div>Body Language Decoding</div>
    </div>
    <div className="flex">
      <div>Aggression Detection</div>
      <div>Dog Image</div>
    </div>
  </div>
)

const LearnMore = () => (
  <div className="flex flex-col items-center pb-24" style={{ backgroundImage: 'url(/white_background.png)', maxHeight: '1032px' }}>
    <div className='text-6xl font-semibold m-24'>Looking To Learn More</div>
    <div className="flex space-x-6">
      <div className="bg-white rounded shadow-2xl p-5 flex flex-col items-center">
        <div>Image</div>
        <div className='font-semibold text-lg'>How our sensors work</div>
        <div>Scientific papers on sensor tech for dogs.</div>
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="bg-white rounded shadow-2xl p-5 flex flex-col items-center">
        <div>Image</div>
        <div className='font-semibold text-lg'>Can you actually talk to dogs</div>
        <div>Learn how dog communication actually works.</div>
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="bg-white rounded shadow-2xl p-5 flex flex-col items-center">
        <div>Image</div>
        <div className='font-semibold text-lg'>Come decode dogs with us</div>
        <div>Chat with us on our discord server to share lessions of dog parenting.</div>
        <div>
          <Button>Join Our Discord</Button>
        </div>
      </div>
    </div>
  </div>
)

const PoweredApp = () => (
  <div className='h-screen flex flex-col items-center text-white' style={{ backgroundImage: 'url(/vr.png)', maxHeight: '976px' }}>
    <div className='text-3xl font-semibold'>AI Powered App Built on Powerful Sensors</div>
    <div className="flex">
      <div className='flex flex-col'>
        <div className="font-semibold">Dog Parents</div>
        <div className='text-right'>Get peace of mind shopping online knowing<br />their purchase will continuously monitor<br />marine ecosystems</div>
      </div>
      <div className='flex flex-col'></div><div>
        <div className="font-semibold">Dogs</div>
        <div className='text-left'>Sarma provides marketing material to<br />showcase your values alignment with<br />dog stress reduction</div>
      </div>
    </div>
    <div className="m-16">
      <Button>View Our App</Button>
    </div>
  </div>
)

const CallToAction = () => (
  <div className="flex m-10 p-10 justify-between bg-blue-400 rounded-md">
    <div>Use our APIs to add more to your products made for</div>
    <div>
      <Button>Get Started</Button>
    </div>
  </div>
)

const Footer = () => (
  <footer className='p-10'>
    <div className="flex">
      <div className="flex flex-col">
        <div className="font-bold">Sarama</div>
        <div className='flex flex-col space-y-4'>
          <div>+1 732 309-8870</div>
          <div>hello@aionthebeach.com</div>
          <div>1235 Florida St, Unit A, San Francisco, CA</div>
        </div>
      </div>
      <div className="flex space-x-24">
        <div className="flex flex-col">
          <div className="font-bold">Services</div>
          <div className='flex flex-col space-y-4'>
            <div>Small Business</div>
            <div>Enterprise</div>
            <div>Pricing</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Products</div>
          <div className='flex flex-col space-y-4'>
            <div>App</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Resources</div>
          <div className='flex flex-col space-y-4'>
            <div>FAQ</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">About Us</div>
          <div className='flex flex-col space-y-4'>
            <div>Team</div>
            <div>Press</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center space-x-10 w-full mt-16'>
      <div>Copyright 2022, AI on the Beach LLC</div>
      <div>Privacy Policy</div>
      <div>{'Terms & Conditions'}</div>
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
