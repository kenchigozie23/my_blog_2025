import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      {/* Inline Styles */}
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1e1b4b, #3b0764, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow: hidden;
          position: relative;
          color: #ffffff;
        }

        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          opacity: 0.1;
          animation: float infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .error-code {
          font-size: 9rem;
          font-weight: 700;
          letter-spacing: -0.5rem;
          background: linear-gradient(to right, #22d3ee, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: scaleIn 0.8s ease-out forwards;
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          .error-code {
            font-size: 12rem;
          }
        }

        .subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-top: 1rem;
          animation: slideUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }

        .description {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-top: 0.5rem;
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
          animation: slideUp 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          .subtitle {
            font-size: 2.25rem;
          }
        }

        .button-wrapper {
          margin-top: 2rem;
          animation: scaleInBtn 0.5s ease-out 0.8s forwards;
          opacity: 0;
        }

        @keyframes scaleInBtn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(to right, #06b6d4, #7c3aed);
          color: #ffffff;
          font-weight: 600;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }

        .button:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }

        .button:active {
          transform: scale(0.95);
        }

        .orbit-1 {
          position: absolute;
          top: -5rem;
          left: -5rem;
          width: 10rem;
          height: 10rem;
          border: 2px dashed #22d3ee;
          border-radius: 50%;
          animation: rotate 20s infinite linear;
        }

        .orbit-2 {
          position: absolute;
          bottom: -6rem;
          right: -6rem;
          width: 8rem;
          height: 8rem;
          border: 2px dashed #ec4899;
          border-radius: 50%;
          animation: rotateReverse 15s infinite linear;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .footer {
          position: absolute;
          bottom: 1rem;
          color: #9ca3af;
          font-size: 0.875rem;
          animation: fadeIn 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="container">
        {/* Animated Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 20 + 10 + "px",
                height: Math.random() * 20 + 10 + "px",
                left: Math.random() * 100 + "vw",
                animationDuration: Math.random() * 10 + 5 + "s",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="content">
          {/* 404 Text */}
          <h1 className="error-code">404</h1>

          {/* Subtitle */}
          <p className="subtitle">Oops! Page Not Found</p>

          {/* Description */}
          <p className="description">
            It seems you’ve wandered into the void. Let’s get you back to reality!
          </p>

          {/* Back to Home Button */}
          <div className="button-wrapper">
            <Link href="/">
              <a className="button">Return Home</a>
            </Link>
          </div>

          {/* Animated Orbiting Elements */}
          <div className="orbit-1" />
          <div className="orbit-2" />
        </div>

        {/* Footer Credit */}
        <p className="footer">Designed with ❤️ by xAI</p>
      </div>
    </div>
  );
}
