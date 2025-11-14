import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

// Import images from assets
import step1Img from '../assets/hiw1.png';
import step2Img from '../assets/hiw2.png';
import step3Img from '../assets/hiw3.png';
import step4Img from '../assets/hiw4.png';

const HowItWorksPage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "1",
      title: "Tell us about your job",
      description: "At this stage we'll ask you questions about your job such as: when and where you want the job doing, what type of tradesperson you need, and a short description of the job.",
      subdescription: "The information you provide here helps us match up relevant trades in your local area. It also allows the tradespeople to give an accurate estimate when they contact you.",
      image: step1Img
    },
    {
      number: "2",
      title: "Local trades get in touch",
      description: "We'll match you to up to 3 local trades who are interested in your job. They'll get in touch with you directly, usually by phone or email.",
      subdescription: "You can view their full profiles on MyJobQuote, including their previous work, customer reviews and ratings. This helps you make an informed decision about who to hire.",
      image: step2Img
    },
    {
      number: "3",
      title: "You pick the best quote",
      description: "Once you've received quotes from interested trades, you can take your time to compare them and pick the one that's right for you.",
      subdescription: "There's no obligation to accept any quote. You're in control throughout the entire process and can message trades directly through our platform.",
      image: step3Img
    },
    {
      number: "4",
      title: "Choose your tradesperson & Leave feedback",
      description: "Once local trades have been in touch, it's up to you to arrange with them to give a quote over the phone or visit your property. After you've got your quotes you can then choose your preferred trade for the job.",
      subdescription: "We recommend checking each trade’s profile on MyJobQuote and carrying out background checks. Once the job is done, leave a review — it helps trades build their reputation and helps other homeowners.",
      image: step4Img
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#505566' }}>
            How it works
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#505566' }}>
            Get up to 3 free quotes from local tradespeople in just a few simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Badge */}
               <div className="flex justify-center mb-8">
  <div
    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full text-xl font-bold"
    style={{ backgroundColor: '#40D4E8' }} // ✅ Updated step circle color
  >
    {step.number}
  </div>
</div>


                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#505566' }}>
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.subdescription}
                    </p>
                  </div>
                  
                  {/* Illustration */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} flex justify-center`}>
                    <div className="w-full max-w-md">
                      <div className="bg-gray-50 rounded-lg p-8 h-80 flex items-center justify-center">
                        <img src={step.image} alt={`Step ${step.number}`} className="max-h-full object-contain"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <div className="w-0.5 h-16 bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 flex justify-center bg-white">
        <div className="bg-[#f6faff] rounded-xl text-center px-8 py-10 shadow-sm max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to find a <br /> tradesperson near you?
          </h2>
          <button
            onClick={() => navigate('/post-job')}
            className="text-white font-semibold px-6 py-3 rounded-md transition"
            style={{ backgroundColor: '#40D4E8' }} // ✅ Updated color
          >
            Get started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
