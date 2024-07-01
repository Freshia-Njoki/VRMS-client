import heroimg from '../../assets/heroimg.jpeg'

function LandingPage() {
  return (
    <div className="hero min-h-screen flex items-center justify-between">
    <div className="flex-1 p-4">
      {/* Your content here */}
      <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
      <p className="mt-2">Providing reliable tech since 1992</p>
    </div>
    <div className="flex-1 p-4">
      <img src={heroimg} alt="Hero" className="max-w-full h-auto" />
    </div>
  </div>
  )
}

export default LandingPage